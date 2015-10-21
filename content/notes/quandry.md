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

1. find an elevation map with `filters.sobel`
1. generate thresholded markers
1. segment the image with `morphology.watershed`
1. "close" the image with `scipy.ndimage.binary_fill_holes`
1. detect the edges of the segmented image
via the "marching squares" algorithm (`measure.find_contours`)
1. estimate the piece's centroid
1. detect corners (features really) with `feature.corner_harris`
using the segmented image as input
1. identify the "true corners" of each piece
1. arrange the corners in clockwise rotation with the first in the upper left
1. arrange the sides in N-E-S-W fashion
1. compute the distances between the true corners along the path defined by each side
1. classify each side as 'in,' 'out' or 'flat'

![pipeline output](/img/quandry-pipeline-output.png)

* On the left is the raw image with the calculated outline superimposed in light green.
* The blue star is an estimate of the piece's centroid.
* "Candidates corners" are shown as red crosses.
* From these candidates I use some fluffy heuristics to generate "true corners" (the green circles).
* In this example, btw, the two sides on the bottom of each image are known to fit together.

The matching sides of two puzzle pieces should have the same length along the path.
Color-matching and other more advanced techniques could be applied later for more filtering..
I'm learning a lot just getting the side lengths.

I tried various corner-detecting routines provided by skimage:
`fast`, `foerstner`, `kitchen_rosenfeld`, `shi_tomasi` and `subpix`,
but I found `harris` worked the best while generating the fewest false positives.

I also found that the marching squares routine was significantly more robust
when the sobel/watershed techniques were applied first to generate a segmented image.
This region-based segmentation technique came from
[this skimage article](http://scikit-image.org/docs/dev/auto_examples/applications/plot_coins_segmentation.html)

* [Blob detection](http://scikit-image.org/docs/dev/auto_examples/plot_blob.html)
might be worth trying.
* These [pylab methods](http://stackoverflow.com/questions/13586686/extract-external-contour-or-silhouette-of-image-in-python)
might also be useful.
* Same with this [skimage lecture](http://www.scipy-lectures.org/packages/scikit-image/)
and the [mahotas project](https://github.com/luispedro/mahotas/).
* The [morphsnakes](https://github.com/pmneila/morphsnakes)
also generates good concave hulls (outlines of the pieces) but can be slow.
* This [article on watershed markers](http://scikit-image.org/docs/dev/auto_examples/plot_marked_watershed.html)
might help me generate those in a better way.
* Hausdorff distance, Procrustes distance and dynamic time warping
might be useful for comparing the sides of pieces (but I'm starting with Frechet distance).
* Consider histogram equalization as per [this article](http://blog.yhathq.com/posts/image-processing-with-scikit-image.html).

The code I'm using is on [github](https://github.com/yosemitebandit/quandry).

I've built a few small imaging rigs to take photographs with consistent lighting and camera positioning.
I'm using a beaglebone black and an adafruit JPEG TTL camera with my own LED right ring.
I need to try taking photos on pieces of paper that have sharper contrast with the pieces --
some of the white colors in the pieces get lost in the edge detection step.
