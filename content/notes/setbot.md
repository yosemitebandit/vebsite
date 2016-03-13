+++
date = "2016-03-13T16:22:49-07:00"
location = "Mountain View"
tags = ["projects"]
thumbnail = "/img/3-green-striped-bean-thumbnail.png"
title = "setbot"

+++

I've been working on the backend for a set-playing robot: setbot.
The vision: a machine watches a game of set
and awkwardly tries to slap the cards as it finds sets.

<!--more-->

I'm throwing one- and two-layer neural networks at this,
using synthetic training data.
See the [github repo's readme](https://github.com/yosemitebandit/setbot)
for more on the pipeline.
Currently I can detect the number of shapes in an image with 100% accuracy,
and I can guess the color 90% of the time.
