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
