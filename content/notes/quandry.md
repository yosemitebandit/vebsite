+++
date = "2015-09-28T23:19:45-07:00"
description = "solvin puzzles with scikit-image"
menu = ""
tags = ["python"]
title = "quandry"

+++

I'm messing with [scikit-image](http://scikit-image.org/docs/dev/)
and trying to solve jigsaw puzzles.

The current pipeline:

1. blur with `denoise_tv_chambolle`
1. edge detection via the "marching squares" algorithm (`skimage.measure.find_contours`)
1. estimate the piece's centroid
1. detect corners (features really) with `skimage.feature.corner_harris`
1. identify the "true corners" of each piece
1. compute the path length between corners along the piece's outline

The matching sides of two puzzle pieces should have the same length.
Color-matching and other more advanced techniques could be applied later for more filtering..
I'm learning a lot just trying to get side lengths.

I tried various corner-detecting routines provided by skimage:
`fast`, `foerstner`, `kitchen_rosenfeld`, `shi_tomasi` and `subpix`,
but I found `harris` worked the best while generating the fewest false positives.

[Blob detection](http://scikit-image.org/docs/dev/auto_examples/plot_blob.html)
might be worth trying.
These [pylab methods](http://stackoverflow.com/questions/13586686/extract-external-contour-or-silhouette-of-image-in-python)
might also be useful.
The [morphsnakes](https://github.com/pmneila/morphsnakes)
also generates good concave hulls (outlines of the pieces) but can be slow.

Here are some sample images of the current pipeline.
The blue star is an estimate of the piece's centroid.
"Candidates corners" are shown as red crosses.
From these candidates I use some fluffy heuristics
to generate "true corners" (the green circles):

![pipeline output](/img/quandry-pipeline-output.png)

The code I'm using is on [github](https://github.com/yosemitebandit/quandry).
