+++
date = "2016-03-13T16:22:49-07:00"
location = "Mountain View"
tags = ["projects"]
thumbnail = "/img/3-green-striped-bean-thumbnail.png"
title = "setbot"

+++

I've been working on a set-playing robot: setbot.
It watches a game being played and then identifies three card patterns.
Recently it beat a human!  ..Though it was very close.
One day I'd like it to have appendages so it can awkwardly slap the board.

<!--more-->

I'm throwing one- and two-layer neural networks at this,
using synthetic training data.
A keras-based CNN got to about 90% accuracy on the synthetic data
and works pretty well in practice, certainly >75% accurate at identifying cards,
and handles various lighting conditions well.

See the [github repo](https://github.com/yosemitebandit/setbot)
for more on the pipeline.
