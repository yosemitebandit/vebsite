+++
title = "July 2024"
date = 2024-07-14
+++

:paperclip: [Classic Papers](https://scholar.googleblog.com/2017/06/classic-papers-articles-that-have-stood.html)
- In 2017 Google Scholar compiled this list of "old" but influential papers:
highly cited but all published in 2006
- A fun project would be to enumerate these classic papers and find open articles or accessible pdfs,
then attempt to find those that are interesting and also accesible to the layman
- e.g. "Maximum entropy modeling of species geographic distributions"
piques my curiosity
but I don't think I'd be able to handle
"Molecular size and weight of asphaltene and asphaltene solubility fractions from coals, crude oils and bitumen"
- The papers could be scored by quantity and "intensity" of jargon

:robot: [Mark Rober's Jigsaw Bot](https://www.youtube.com/watch?v=Sqr-PdVYhY4)
- This is so cool -- Mark Rober and his team created a puzzle solving robot.
They modified a CNC with a more precise end-effector, upgraded various motors, wrote a bunch of custom software and it's awesome.
Mark Rober built this with Ryan Oksenhorn and [Ian Charnas](https://www.iancharnas.com/). 
- Their full technical writeup is [here](https://cdn.shopify.com/s/files/1/0634/1535/3575/files/Puzzle_Robot_-_Technical_Writeup-compressed.pdf).
- The system can assemble a 1000 piece puzzle in four hours.
It's about 1.5hrs to scan the pieces, 1min to solve in software,
and the rest for physical assembly including a cute wiggling routine.

{{ resize_image(path="notes/24-jul/jigsaw-bot.png", width=500, height=500, op="fit_width") }}

- Their robot prefers all white puzzles for better scanning and edge-detection.
- I attempted something similar many years back: [`quandry`](https://github.com/yosemitebandit/quandry)
and it was super tough! I didn't make much progress.

{{ resize_image(path="notes/24-jul/quandry-pipeline.png", width=500, height=500, op="fit_width") }}

- I had a little scanning conveyer belt with an adafruit camera.
The idea was to scan everything
and then the conveyer would woosh around and bring a person the exact puzzle piece they needed to drop in next.
Like Mark's system, I also tried a puzzle piece edge-matcher as the core of the solving technique.
- But Mark has some additional techniques that I never though of -- 
like parallax reduction,
using an all-white white puzzle spread out against dark background,
comparing overlapping areas to produce candidate matches,
and an overall flexible solving system with branching solving attempts until all pieces are used up.
It's so so cool to see it all in action.

{{ gallery(
  assets=[
    "notes/24-jul/area-matching.png",
    "notes/24-jul/connectivity-graph.png",
    "notes/24-jul/jigsaw-solving.png",
  ])
}}


:book: Sense and Sensibility
- I listened to Joanna Trollope's modern retelling of Jane Austen's novel,
narrated by Kate Reading.
I used [Libby](https://libbyapp.com).
- The reading was lovely.
The story: increasingly excruciating as things wore on.
I didn't read the original so I probably missed a lot of fun moments and connections.
- I think I need to improve the priortization of my reading/listening list..
this one bubbled up somewhat randomly and was instantly available on the app, and I snatched at it.


:cityscape: Walks with Men
- Ann Beattie's novella of relationships and NYC in the 80s, 10/10 from me.
I listened via on Libby, narrated by the author herself.
- I was really taken in by the realism -- I thought it was a biography for a while.


:dizzy: Bit Flipping
- [This project from smerity](https://github.com/Smerity/bitflipped)
allocates 1GB and lets you watch bits flip due to cosmic rays and more (:
- This links to another cool project: [bitsquatting](http://dinaburg.org/bitsquatting.html).
It's like typosquatting -- you register a domain that is one bit different from a popular domain.
So even if someone intends to visit `microsoft.com`,
a bitflip may lead their machine to make a request to `micro3oft.com`.
  - `s` = `0b01110011`
  - `3` = `0b00110011`
- I thought DNSSEC would help with this, but I guess it depends when/where the bitflip occurs.


:coin: Coordinating a Coin Flip .. over the phone
- there are various [commitment schemes](https://en.wikipedia.org/wiki/Commitment_scheme)
- Gemini suggested this for an over-the-phone coin flip:
  - Alice picks a random number and computes the hash, shares hash with Bob
  - Bob calls even or odd
  - Alice reveals the original number
  - Bob verifies the hash
  - Resolve based on even/odd call vs the original number
