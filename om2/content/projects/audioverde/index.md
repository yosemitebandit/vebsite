+++
title = "Audioverde"
date = 2025-09-04
location = "Redwood City"
tags = ["software", "typescript"]

[extra]
thumbnail = "projects/audioverde/logo.png"
+++

I subscribe to a lot of email newsletters that are very intriguing,
but I don't always read 'em all.
I made [Audioverde](https://audioverde.com) to turn these emails into podcasts.

You can try it too: just forward an email to `podcast@audioverde.com`
and you'll get a reply back with a link to a personal feed.
Add that feed into your podcast player of choice
and your episode will show up there in a few minutes
(except for spotify..can't do custom RSS feeds on spotify 🥲).

It's free to use for now, but maybe I'll try to have a pricing model around it in the future.


### Technical

I started with a Cloudflare worker and expanded into using a variety of CF services:
their queues, R2 (artifact storage), D1 (sql), KV (kv):

{{ resize_image(path="projects/audioverde/cornelia-bindings.png", width=500, height=500, op="fit_width") }}

CF is a fun platform -- very nice in terms of Typescript support,
APIs, docs, really clean deploy process, their CLI tool `wrangler` and their GUIs are nice too.
I jumped through some hoops (noted below) to keep everything in their env and I'm glad it worked out.
In other projects (like [FHAI](/projects/firsthello))
I had to migrate part of the backend away from CF
and onto a more "traditional" backend server environment (in that case Google Cloud Run).
I'm glad I didn't have to do that here!


### Workflow Steps

The service works by receiving a forwarded email,
extracting the "primary" content of the email,
then turning that into a script for narration,
sending that script to a text-to-speech service
and then saving and serving the resulting audio file through an RSS feed.

The steps in greater detail:

```

    0.  Receive Email
    1.  Init Storage
    2.  Filter                  LLM 🤖
    3.  Artwork                 WASM ⛏️
    4.  Approval Notification
    5.  Figures                 LLM 🤖
    6.  Narration Script        LLM 🤖
    7.  TTS
    8.  Audio Concatenation
    9.  MP3                     WASM ⛏️
    10. Cleanup
    11. Costs

```

The interesting steps:

### Filtering

Early on the in the workflow I send plaintext content to an LLM
(right now `gemini-2.5-pro`)
and my simple prompt asks if the content is suitable for podcast narration.

My thinking is that I should rule out spam
since anyone could trigger my workflow by firing any old message into `podcast@audioverde.com`
, and I don't want that.
The whole workflow will terminate if this filtering step decides the content is not suitable.

This could still cost me pennies for processing a high amount of spam,
but I figure if that starts to happen I can block incoming mail upstream of this,
perhaps based on sender characteristics.

This and subsequent LLM calls go into their own queue.
I like the [CF queues](https://developers.cloudflare.com/queues/)
because it makes it clear how to manage timeouts/retries for these calls.
Right now I'm not self hosting any LLMs, I'm generally using high end models through APIs.
Those API calls would fail with error 524 (esp before I started streaming responses)
because the LLM might think for a while before responding, and CF would terminate the connection.
So the queues help manage retries in those cases.


### Artwork

I thought it would be fun if everyone had slightly customized cover art for their podcast.
So this artwork gets generated as a step if the user (the email sender) is new.
I start with a base image and use SVG to add text on top: just the sender's email addr is the custom part for now.
Then I use the [resvg](https://www.npmjs.com/package/@resvg/resvg-wasm) WASM module
to convert SVG to PNG and save the result.

{{ resize_image(path="projects/audioverde/artwork.png", width=500, height=500, op="fit_width") }}

The WASM binary is added directly in src
(I think this pattern opens up some cool things that could be done on Cloudflare Worker isolates,
even in their somewhat restricted environment).
There is also an offline step that converts fonts to SVG paths before all this, but I manage that in a one-off way.


### Figures

Some incoming emails have visual elements, "figures."
I have an LLM (also `gemini-2.5-pro`) extract visual elements and assess each one:
download them and discard small images (e.g. tracking pixels, UI icons).
For the remaining images the LLM provides a short description of what is shown.
To help in the description, I give the LLM the text that surrounds the figure
and I ask it to say something novel and try not to repeat the surrounding text.

[todo: example figure and description]


### Narration Script

The crux of the operation is to create this script for narration.
Using the raw email content + descriptions of each relevant figure,
I prompt an LLM to create a script.
It's prompted to add the appropriate metadata, a coda and various custom `[PAUSE]` markers throughout.
I had some issues with handling really large emails
(OOM for the later audio handling on CF Worker isolates - 128MB max,
and sometimes processing issues.)


### todo:
sidebyside of raw email -> script -> audio

The primary Cloudflare worker receives the email and we store this raw data in R2.
Then there is some light, deterministic parsing of the content,
mostly to try to reduce the characters -- ideally extracting the plaintext version of the email
and discarding the html.

Audioverde is entirely Typescript
and keyed into one primary Cloudflare worker "cornelia."
CF has a [Workflows](https://developers.cloudflare.com/workflows/) product
which lets you chain together pipelines like these,
and you can setup some rules for retrying and timeouts the various steps of the workflow.
So the spine of this is a Workflow and the various steps touch
D1 product as the main database (sql),
and R2 for artifact storage (CF's equivalent to S3).

