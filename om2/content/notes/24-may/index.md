+++
title = "May 2024"
date = 2024-05-06
+++

:mountain: _Man's Search for Meaning_ - Viktor Fankl
- I'm listening to the audiobook via Libby
- It's a very moving book, just incredibly direct about his experience in Auschwitz
and his practice of LogoTherapy.
On entering the camp, he was not permitted to keep his life's work, a manuscript which I think was on some of these concepts already.
But he often drew strength from recreating, rewriting the manuscript in scraps, even or especially when he was ill with Typhus.

>> "In psychiatry, there is a certain condition known as delusion of reprieve:
the condemned man, immediately before his execution,
gets the illusion that he might be reprieved at the very last minute.
We too clung to shreds of hope, and believed to the last moment that it would not be so bad."

>> (_after conversing in his mind with his wife, with whom he had been separated upon arriving at the camp_)
"A thought transfixed me, for the first time in my life I saw the truth as it is set into song by so many poets,
proclaimed the final wisdom by so many thinkers.
The truth: that love is the ultimate and highest goal to which Man can aspire.
Then I grasped the meaning of the greatest secret that human poetry and human thought and belief have to impart:
the salvation of Man is through love and in love.
I understood how a man who has nothing left in this world still may know bliss, be it only for a brief moment,
in the contemplation of his beloved.
In a position of utter desolation, when a man cannot express himself in positive action,
when his only achievement may consist of enduring his sufferings in the right way, an honorable way,
in such a position, Man can, through loving contemplation of the image he carries of his beloved, achieve fulfillment."

>> "Thus it can be seen that mental health is based on a certain degree of tension:
the tension between what one has already achieved and what one still ought to accomplish,
or the gap between what one is and what one should become.
Such a tension is inherent in the human being, and therefore is indespensible to mental well-being.
We should not then be hesitant with challenging Man with a potential meaning for him to fulfill.
It is only thus that we evoke his will to meaning from its state of latency.
I consider it a dangerous misconception of mental hygiene to assume that what man needs in the first place is equilibrium,
or as it called in biology, homeostasis.
That is: a tensionless state.
What Man actually needs is not a tensionless state but rather the striving and struggling for a worthwhile goal,
a freely chosen task.
What he needs is not the discharge of tension at any cost,
but the call of a potential menaing waiting to be fulfilled by him."

>> "If architects want to strengthen a decrepit arch,
they increase the load that is laid upon it,
for thereby the parts are joined more firmly together."

>> "Live as if you were living already for the second time,
and as if you had acted for the first time as wrongly as you are about to act now." (!)


:cherry_blossom: May Day at WSP
- many songs and dances
- a tight braid on the maypole
- poems, some staff twirling as well, very fun!


:construction_worker: Cloudflare Workers
- [great tutorial video](https://www.youtube.com/watch?v=H7Qe96fqg1M) from CF themselves
- I'm trying a typescript example for my WhenPress project idea


:computer: [Nagle's Algorithm](https://en.wikipedia.org/wiki/Nagle%27s_algorithm)
- I honestly didn't know RFCs were older than me..
- this fellow lives a stone's throw away, I'll consider him my neighbor, how cool.
He now seems to run projects around graphics and metaverse clients


:key: Serverless KV
- I'm building an app with Cloudflare workers and using [Cloudflare KV](with their KV product)
- there is also [Vercel KV](https://vercel.com/docs/storage/vercel-kv),
which is just [Upstash](https://upstash.com)
This might be better than CF, hm, since it's just redis. CFKV is more stripped down.
- [SST](https://sst.dev/) could also be interesting, like an abstraction atop AWS
- [Supabase](https://supabase.com/docs/guides/functions) has edge fns too
- Azion has a product as well: [Edge KV](https://www.azion.com/en/products/edge-kv/)


:fountain_pen: [proselint](https://github.com/amperser/proselint)
- I've gotta try this out..love the idea
- this (or my idea of this) is what I wanted grammarly to be
- see also: [write-good](https://github.com/btford/write-good)


:moon: [moondream](https://github.com/vikhyat/moondream/tree/main)
- a small (1.6B) vison language model,
it uses Phi architecture and a custom encoder
- ok maybe not that unique though?
There seem to be several systems using Phi architecture, including llava-phi.
- here's a [demo assistant app](https://github.com/nkasmanoff/pi-card) (all offline) with moondream on an RPi5
- nice [huggingface article](https://huggingface.co/blog/vlms) with some leaderboard links
- and actually today [Paligemma](https://github.com/google-research/big_vision/blob/main/big_vision/configs/proj/paligemma/README.md)came out, a 3B model


:chile: Cochamó
- there is a series of articles [in NYT](https://www.nytimes.com/2024/04/30/climate/chile-cochamo-valley-puelo-patagonia.html) and elsewhere
on preserving part of (or an area around?) La Junta / Cochamó valley in northern Patagonia
- I did some hiking in this area around 2015 and it is just spectacular

{{ gallery(
  assets=[
    "notes/24-may/trolley.jpg",
    "notes/24-may/horses.jpg",
    "notes/24-may/stream.jpg",
  ])
}}

- I didn't quite follow the stories though, they're still raising funds to complete the purchase of this particular tract of land for preservation..?
- I was there right when the North Face founder tragically died in a kayak accident,
my understanding is he had done quite a lot to preserve massive portions of the land there


:gem: Resilient Modeling Strategy
- in a [post about CADmium](https://mattferraro.dev/posts/cadmium),
I saw reference to [_RMS_](https://www.youtube.com/watch?v=YU_lTS1vIx4&t=255s)
- this looks like a great convention for preserving structure for parametric designs,
especially in shared projects.
- do CAD tools have linters/style guides / copilots yet? We always wanted this at Culture. I guess MEs get by!


:movie_camera: KnockKnock
- I tried for a few days to process the live video from our nest doorbell,
but I sadly never got it to work
- we have a [Nest doorbell "wired" version](https://developers.google.com/nest/device-access/api/doorbell-wired
)
and I wanted to process the imagery
to detect when the baby got home
so I could be notified
- I wanted to subscribe to a `CameraMotion` event,
use that to get an `eventSessionId`
and from there get actual video from `CameraClipPreview`
which is all that my hw supports
- I got some of their demos working
like accessing device attributes and refreshing tokens,
but overall I had two pretty fundamental problems:
  - I could never get pubsub working with my camera hardware,
  though it did kinda work for our thermostat..albeit messages were delayed
  - and I couldn't actually generate a WebRTC stream,
  probably my SDP offer was mal-formed, I'm not sure
- I also used google cloud's serverless platform for the first time,
cloud functions, pretty easy. I thought I needed some kind of pubsub event callback handler
- if I pick this back up,
the [`knockknock` project](https://github.com/yosemitebandit/knockknock),
I think I could run the webapp demo and try to look at their SDP flow
- [Tamir Mayer published a similar project](https://medium.com/@tamirmayer/google-nest-camera-internal-api-fdf9dc3ce167
) and ended up using some big workarounds instead of the documented API,
so I could try that too!


:books: A flurry of books as we traveled to Chile
- _The World According to Garp_: audiobook, a long and twisting ride, my second John Irving novel
- _Beard Science_: Southern romance :see_no_evil:
- _IQ_: a fun thriller/detective story that I've read before
