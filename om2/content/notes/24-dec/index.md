+++
title = "December 2024"
date = 2024-12-06
+++


:supervillain: malicious github branch names
- really interesting exploit [covered on lobste.rs](https://lobste.rs/s/btagmw/maliciously_crafted_github_branch_name)
with more discussion in the issues
- ultralytics repo (mainly YOLO [image segmentation / object detection])
received a PR with a `curl .. | bash` inside the branch name,
this affected the build system (Github actions)
and embedded a crypto miner into the releases that landed on pypi


:satellite: GEODNET
- I came across this system where, if I understand correctly,
individuals operate RTK base stations (reference points to improve a GPS position)
and they get rewarded with the token $GEOD.
- cool concept! I wonder how the rewards work exactly,
and how the cost/benefit pans out given price expectations for the token
- when I was at [Wing](https://wing.com) years and years ago I briefly became interested in RTK
and how it could help our vehicles.
- Also in this vein, the Sparkfun founder seems to be hacking on lots of RTK devices,
very cool to make all this more available


:movie_camera: Paul F Tompkin's Herzog
- I love Paul F Tompkins on Offbook (The Improvised Musical Podcast),
and he did a pretty great [review of Trader Joes as Werner Herzog](https://www.youtube.com/watch?v=nmQAsyFE-Mc)
which Herzog himself found amusing, hah


:coffee: [The Bruta](https://revistaespresso.com.br/design-e-espresso-artesanal-conheca-a-bruta/)
- Edu Rodrigues makes these lever-actuated espresso machines,
I love the materials -- concrete, steel and hardwoods, striking!

{{ resize_image(path="notes/24-dec/edu-bruta.png", width=700, height=500, op="fit_height") }}


:fire: Cloudflare Durable Objects
- all of my latest projects have been built on cloudflare.
I just started using their "Durable Objects" product -- 
it basically extends Workers (edge/serverless on V8 runtime) with a bit more state
- I liked [this review article](https://www.lambrospetrou.com/articles/durable-objects-cloudflare/)
and [this one as well](https://www.lambrospetrou.com/articles/durable-objects-control-data-plane-pattern/)
- the overall platform's experience continues to be really easy and great -- deploys, logging, metrics, docs.. good stuff!


:student: HARKing
- in their paper "[AI-Powered (Finance) Scholarship](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5060022),"
Robert Novy-Marx and Mihail Velikov generate interesting stock market predictor signals using an empirical process
(one that they also developed).
They narrow 30k candidate signals down to ~100 and then they generate entire papers around those signals.
Using Sonnet-3.5 they posit entire theoretical frameworks around the validity of the useful signals.
- The challenge the researchers are highlighting is not exactly the issue of blasting out hallucinated papers
(after all, the signals are, according to the evaluation framework, real),
(er though some of the generated citations _are_ hallucinated)
but it's more about [HARKing](https://en.wikipedia.org/wiki/HARKing) -- hypothesizing after the results are known.
This post-hoc analysis is antithetical to "True Science," traps you in false positives and leads to findings that are probably not reproducible.
- "When AI systems can rapidly produce hundreds of seemingly coherent
theoretical explanations for mined empirical results, how do we maintain meaningful
quality control through our existing institutions and avoid overwhelming our traditional peer review process?"
- Their generated papers are all released on github,
all authored [by I.M. Harking](https://github.com/velikov-mihail/AI-Powered-Scholarship/blob/main/pdfs/OANCFCSTK_modified_v1.pdf), heh.
