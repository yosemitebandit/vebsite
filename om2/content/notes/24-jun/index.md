+++
title = "June 2024"
date = 2024-06-08
+++

:robot: [Fooocus](https://github.com/lllyasviel/Fooocus)
- this is a really impressive text-to-image package
- out of the box I think it's just
llama3 expanding / adding nuance to your original prompts
and then using stable diffusion,
specifically the default model as of now is `juggernautXL_v8Rundiffusion`
- I've played with Midjourney for a while and Fooocus gives really good results out of the box,
I'd say very very close to the outputs you can get from Midjourney
- I tested in colab only, would be fun to try it locally
- the prompt for the image below was just "beach",
generated in a few min on colab:

{{ resize_image(path="notes/media/beach.png", width=500, height=500, op="fit_width") }}


:fire: [Pano AI](https://pano.ai)
- Pano looks like a cool company!
They make cameras + software to try to detect wildfires quickly.
- I wonder how it compares to a traditional (human) firewatch
and also satellite imagery, would that be a quasi-competitor to a product like this?
- How much acreage do these cameras typically cover?
In IRL deployments how have the cameras impacted response times?
Are they visible light only -- are the cameras inoperative at night?
- And I wonder if they do any IRL testing/in-situ calibration with like a large smoke machine, hah..
Related -- here is [imagery from a controlled burn in Aspen CO](https://www.youtube.com/watch?v=zqqPFw8Dftw)
- Would be a fun challenge to manage these device in very rugged deployments,
reminds me of my work at [Endaga](@/projects/eno/index.md) where ssh into the boxes was tough!
At [Culture](@/projects/culture/index.md) I would joke that our deployment is so easy
-- no batteries, wired internet, engineers 50ft away.. easy!
- afaik they ship all their imagery to the cloud for processing,
but I could imagine a product variant for super remote areas which tries to do some analysis onsite and
sends just analysis results (vs all the imagery) over low bandwidth links like sat, or custom long-range networks.


:basketball: Farewell to the NBA
- I'm announcing my retirement from (following) the NBA
- I've watched games and kept up with NBA news for years.. not sure how it began,
I was never any good at basketball when I was a kid, and I don't play now.
My family was more into college bball, and I never talk about basketball with friends.
- The soap opera of it, fueled for me by `\r\nba` in particular, was pretty addicting.
- There's really good parity, and I also love how open it seems to be as a system of businesses --
all the contract details laid bare with player moves and front office dealings..fascinating.
- In the midst of the finals I'm going to try to say farewell here to make room for other things
- Maybe it's all sour grapes because the Warriors are on the decline
and I wanted a more competitive series with Celtics/Mavericks.. I wrote this and the Mavs were down 0-2 (now 0-3).
- But it's been pretty seamless to disconnect from it so far..just in time to dive into the 2024 Euros, hah


:books: Various Reading
- _Raising Human Beings_ -- the idea of a deeper partnership in the family really resonates with me
- _Two Serpents Rise_ -- read this before and loved it, I'll try to work through the other books in the series
- _Hornblower_ -- listening to more of these books..
the finale and peak of his career as Lorn Hornblower was pretty lame..
but we're back on the high seas with Lad Hornblower (Midshipman), giving that a go


:jigsaw: Some Crosswords
- I was thrilled to recently crack two NYT crosswords:
one from Thursday (Michael Lieberman) and the subsequent Saturday (Daniel Sheremata)
- They took me 1hr and 3hr of noodling.
My subconscious kept unlocking clues, one by one, for example
"Coins in a biblical parable" are "talents"
no idea where I pulled that one from!
- Edit: I barely missed a recent Sunday crossword (Zachary Schiff) --
had to turn on autocheck to finish it.
I didn't know the Yale founder "Elihu",
and I misspelled an "updo hairstyle" : "pouf".
I also had the clue "hardly" as "nare"
(I guess I was thinking of "ne'er" ??)
but should have been "nary".
And the crossing on that one was the name of a hockey player --
the rare sport I don't follow!

{{ gallery(
  assets=[
    "notes/24-jun/thr-xword.png",
    "notes/24-jun/sat-xword.png",
    "notes/24-jun/sun-xword.png",
  ])
}}


:bee: Micropython and Xbee
- For the whenpress project, I've been using Xbees for the first time in years
- This is also my first time with micropython
- Micropython is at times confusing..
the implementation seems to vary quite a bit on diff platforms,
and I keep bumping into little surprises like when fstrings don't work
- Dev Speed there is none. It's about a 1min cycle time (re-upload code to device and reset)


:dizzy: Skimming Math
- In 2016 James Maynard showed that, for any decimal digit,
there are infinitely many primes that do not have that digit in their base10 expansion :exploding_head:!
- the [Mertens conjecture](https://en.wikipedia.org/wiki/Mertens_conjecture)
was proposed in 1885 -- that the Mobius function is bounded by sqrt(n).
(Numberphile has a great video on this.)
It's now known there's a counterexample somewhere below 10^10^40 :exploding_head: :exploding_head: !
- reminiscent of the Collatz conjecture
