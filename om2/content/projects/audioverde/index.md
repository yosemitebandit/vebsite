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

Here's an example episode, narrating [a post from Tomasz Tunguz](https://tomtunguz.com/snow-earnings-2025-08-28/):

<audio controls preload="metadata">
  <source src="/projects/audioverde/episode.mp3" type="audio/mpeg">
  Sorry, your browser does not support the audio element.
</audio>

You can try it too:

1. forward an email to [`podcast@audioverde.com`](mailto:podcast@audioverde.com)
2. you'll get a reply with a link to a personal feed
3. add that feed into your podcast player of choice
(except for spotify..no custom RSS for spotify 🥲).
4. in a few minutes your episode will show up

It's free to use for now, but maybe I'll have a pricing model around it in the future.

### Pipeline

Here's how Audioverde converts a raw email into a podcast feed:

{{ audioverde_animated_pipeline() }}

### Technical

I started with a Cloudflare worker and expanded into using a variety of Cloudflare services:
their queues, R2 (artifact storage), D1 (sql), KV (kv):

{{ resize_image(path="projects/audioverde/cornelia-bindings.png", width=500, height=500, op="fit_width") }}

Cloudflare is a fun platform -- very nice in terms of Typescript support,
APIs, docs, really clean deploy process (under 10s for the whole thing),
their CLI tool `wrangler` and their GUIs are nice too.
I jumped through some hoops (noted below) to keep everything in their env and I'm glad it worked out.
In other projects (like [FHAI](/projects/firsthello))
I had to migrate part of the backend away from Cloudflare
and onto a more "traditional" backend server environment (in that case Google Cloud Run).
I'm glad I didn't have to do that here!

Some details on the more interesting steps in the pipeline:

### Filtering

Early on the in the workflow I send distilled content to an LLM
(right now `gemini-2.5-pro`)
and my simple prompt asks if the content is suitable for podcast narration.

My thinking is that I should rule out spam
since anyone could trigger my workflow by firing a message to [`podcast@audioverde.com`](mailto:podcast@audioverde.com)
, and I don't want that.
The whole workflow will terminate if this filtering step decides that the email is not suitable.

This could still cost me pennies for processing a high amount of spam,
but I figure if that starts to happen I can block the incoming mail upstream of this,
perhaps based on sender characteristics.

This and subsequent LLM calls go into their own queue.
I like the [Cloudflare queues](https://developers.cloudflare.com/queues/)
because it makes it clear how to manage timeouts/retries for these calls.
Right now I'm not self hosting any LLMs, I'm generally using high end models through APIs.
Those API calls would fail with [error 524](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-524/)
(esp before I started streaming responses back)
because the LLM might think for a while and the API might return nothing for several minutes, and Cloudflare would terminate the connection.
So the queues help manage retries in those cases.
Cloudflare will also spin up more consumer workers if the queue is getting backed up.


### Artwork

I thought it would be fun if everyone's unique podcast had customized cover art.
So this artwork gets generated for new users on their first use of the workflow.

I start with a green background image
(credit to [Rebecca Orlov | Epic Playdate](https://unsplash.com/@epicplaydate)
on [Unsplash](https://unsplash.com/photos/green-abstract-art-HGVtA1zSHo4))
and use SVG to add text on top.
For now the custom part is just the sender's email address.
Then I use the [resvg](https://www.npmjs.com/package/@resvg/resvg-wasm) web assembly module
to convert SVG to PNG and save the result.

{{ resize_image(path="projects/audioverde/artwork.png", width=500, height=600, op="fit_width") }}

The WASM binary is added directly in src.
I think this pattern of using WASM opens up some cool things that could be done on Cloudflare Worker isolates,
even in their somewhat restricted environment.
There is also an offline step that converts fonts to SVG paths, but I manage that in a one-off way.


### Figures

Some incoming emails have visual elements, "figures."
I download these and then an LLM (again `gemini-2.5-pro`) describes them.
If it's a tracking pixel or some UI icon I just discard that.
To help in the description, I give the LLM the text that surrounds the figure
and I ask it to say something novel and try not to repeat the surrounding text.

For example, with this figure from
[an ACX newsletter](https://www.astralcodexten.com/p/your-review-of-mice-mechanisms-and):

{{ resize_image(path="projects/audioverde/figure-example.jpg", width=500, height=600, op="fit_width") }}

We get this generated description:

> *This image displays two micrographs of amyloid plaques.
The left panel (d) is a light micrograph of a multicentric plaque with dense cores,
while the right panel (e) shows a single plaque glowing yellow under fluorescence microscopy.*


### Narration Script

The crux of the whole operation is to create a script for the TTS engine to narrate.
I prompt an LLM to create this script using the raw email content + figure descriptions.
It's prompted to add the appropriate metadata like title, author and published date,
as well as a coda and various custom `[PAUSE]` markers throughout.

I had some issues with handling really large emails
(specifically later in the workflow when we're dealing with large WAV files
and bumping up against Cloudflare worker isolate memory limit of 128MB),
and so at this stage we may split the episode into N roughly equal parts based on a character length threshold.
These parts are processed as their own unique episodes with a bit of metadata to link it all together.


### TTS

And finally we can generate some audio.
I'm switching between `gpt-4o-mini-tts` and `gemini-2.5-pro/flash-preview-tts`.
The gemini models are still in preview and have tighter rate limits.
I found 11Labs too expensive.

The script is broken up into chunks of text and then sent out for TTS, 
and again this is mediated by a Cloudflare queue.
The snippets of audio that come back are cached, then eventually glued back together in order.
I inject some silence where the script has `[PAUSE]` markers.
I add music to the beginning and end.

The full epsisode WAV file is converted to MP3 via lamejs --
I think I tried some WASM stuff here too but ended up going the pure js route.


### Observability

For now I just use the Cloudflare GUI to look at logs and trace any issues:

{{ resize_image(path="projects/audioverde/cloudflare-observability.png", width=500, height=800, op="fit_width") }}

I also manually track costs --
I store some metadata about each LLM call in D1 and calculate total costs at the end of the workflow
using the vendor-provided pricing rates.
Most of the costs come from TTS --
for example `gpt-4o-mini-tts` costs about $0.90 per hour of generated output audio.
Most newsletters are small and processing them costs about $0.10 each.


### Overall

- This was great fun to build and improve over a few weeks!
- It all draws inspiration from [Type III Audio](https://preview.type3.audio/)
and
[the fellow who reads the SSC / ACX posts](https://sscpodcast.libsyn.com/).
- I used Cursor (with Sonnet 3.5/3.7) and now mostly Claude Code to work on this project,
it's been great with typescript.
The major challenge has been architecture and managing the eccentricities of the Cloudflare environment --
the codegen tools don't really understand how to navigate that (or perhaps this is just a skill issue wrt prompting?)
- Many additional features are possible:
handling attachments,
narrating a long chain of email conversation like a message board,
a separate bookmarklet (are those still a thing??) to send web page content into the pipeline

I'd love for you to give it a try and please tell me what you think:

Fwd your newsletter to [`podcast@audioverde.com`](mailto:podcast@audioverde.com)
and you'll receive a reply with a link to your custom RSS feed.

Send feedback and ideas to [`matt@audioverde.com`](mailto:matt@audioverde.com).
