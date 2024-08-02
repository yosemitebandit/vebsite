+++
title = "Whenpress"
date = 2024-08-02
location = "Redwood City"

[extra]
thumbnail = "projects/whenpress/handheld.jpg"
+++

I made a button that logs when it was pressed.
It communicates to a custom backend: [whenpress.net](https://whenpress.net).
Sometimes you just want to know when something happened,
and maybe you don't want to jot down the time or pull out an app..
you just want to slap a button and look at the info later!

All the code for the device and the site
is on [Github](https://github.com/yosemitebandit/whenpress).

The device itself, so far, is an amalgamation of [Sparkfun](https://sparkfun.com) modules:
[XBee dev board](https://www.sparkfun.com/products/24441),
[Qwiic button](https://www.sparkfun.com/products/15932)
and a [Qwiic RTC](https://www.sparkfun.com/products/16281).
I'll connect to an external battery pack via USB.

{{ resize_image(path="projects/whenpress/handheld.jpg", width=500, height=500, op="fit_width") }}

Qwiic is Sparkfun's I2C ecosystem and made all the interconnect easy, sans breadboard.
I went with this button module because while the XBee dev kit does have an onboard button,
it doesn't have interrupts :facepalm: ..
I was worried that a button press would arrive
but be lost if we're in the middle of a server call.

I envisioned a product that could be unboxed and "just work,"
and this led me to a cell module instead of wifi.
Wifi would work of course, and be cheaper longer term,
but I liked the idea of zero setup for users,
and something that could work (almost) anywhere.
The dev kit came with a [hologram.io](https://hologram.io) sim
which runs me $1/mo and $0.10/MB.
I estimate I'm using 10s of MB per mo,
mostly because the device sends frequent "I'm alive" pings,
and of course that bandwidth could be optimized.
If this were a real product I imagine there could be cell and wifi versions too.

Data is sent to a [custom backend](https://github.com/yosemitebandit/whenpress/blob/ffb962eb8384d79057fc56dfc78f5e094b094621/src/index.ts#L211)
which I built with Cloudflare workers.
I authenticate incoming messages and then store timestamps in Cloudflare KV.
KV has everything else too: device registry, auth info and even the site's favicon.
I used Typescript: Hono made it easy to handle the data and render the site,
plus it was easy to write custom middleware.

{{ resize_image(path="projects/whenpress/site.png", width=500, height=500, op="fit_width") }}

I took some steps to really make sure we don't lose button presses
and that their timestamps are accurate.
There's more to do for sure though,
like better checks on-boot and even using durable storage on the device.
There are just so many edge cases / possible states to get into with this kind of hardware.

Right now I'm seeing about 30s between pressing the physical button
and rendering it as having been pressed on the website.
The latency is a combination of Xbee-side network code slowness
and Cloudflare KV eventual consistency.
It's not snappy by any means!
But for the use case, I'm satisfied.

Overall it's been pretty fun to work on --
I hadn't done XBee stuff in a while,
and it was my first time with Micropython, serverless-style sites, Typescript and Cloudflare.
I have some gripes with Micropython
(slow to iterate with Xbee in particular,
and tricky to nail down what MP features are supported.. required poking around in the Xbee's repl),
but I'm liking the Cloudflare platform.

I also used Gemini Advanced to help with coding all parts of the system
(this was far from streamlined.. I just had it open in a tab).
Looking back I have ~100 separate threads for just this project (!)
and I would estimate 4/5 of the threads were "successful" for me.
It's probably unnecessary, but I'd often start a new thread if I thought Gemini was getting off-track.
I preferred Gemini slightly over GPT4.
Claude is worth another look, their 3.5 model is awesome.
