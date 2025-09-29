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
(as long as that's not spotify..can't do custom RSS feeds on spotify 🥲)
and your episode will show up there in a few minutes.

It's free to use for now, but maybe I'll try to have a pricing model around it in the future.


### Technical

I like Cloudflare, and I jumped through a lot of hoops to keep this service on Cloudflare even as it grew more complex.

{{ resize_image(path="projects/audioverde/cornelia-bindings.png", width=500, height=500, op="fit_width") }}

Fundamentally the service works by receiving a forwarded email,
extracting the "primary" content of the email,
then turning that into a script for narration,
sending that script to a text-to-speech service
and then saving and serving the resulting audio file.

Everything is in typescript and keyed into one primary Cloudflare worker.
CF has a [Workflows](https://developers.cloudflare.com/workflows/) product
which lets you chain together pipelines like these,
and you can setup some rules for retrying and timeouts for the steps.
I use Workflows as the backbone of the service.
I use Cloudflare's D1 product as the main database (sql),
and R2 for artifact storage (CF's equivalent to S3).

