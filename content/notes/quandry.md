+++
date = "2015-09-28T23:19:45-07:00"
description = "solvin puzzles with scikit-image"
tags = ["python"]
title = "quandry"
thumbnail = "/img/quandry-out-thumbnail.png"
+++

I'm messing with [scikit-image](http://scikit-image.org/docs/dev/)
and trying to solve jigsaw puzzles.

The current pipeline
(but see [the code on github](https://github.com/yosemitebandit/quandry) for a more up-to-date picture):

<!--more-->

1. find an elevation map with `filters.sobel`
1. generate thresholded markers
1. segment the image with `morphology.watershed`
1. "close" the image with `scipy.ndimage.binary_fill_holes`
1. detect the edges of the segmented image
via the "marching squares" algorithm (`measure.find_contours`)
1. estimate the piece's centroid
1. detect 90 degree angles along the shape's outline
by selecting slices of the outline,
composing two 90 deg angles above and below the slice
and running computing Hausdorff distances for the segment and the angles --
slices that actually are corners will have a low Hausdorff score
1. identify the "true corners" of each piece
by composing reasonably shaped rectangles out of four corner candidate points
and then computing the area of the resulting rectangle -- largest area wins
1. arrange the corners in clockwise rotation with the first in the upper left
1. arrange the sides in N-E-S-W fashion
1. compute the distances between the true corners along the path defined by each side
1. classify each side as 'in,' 'out' or 'flat'

![pipeline output](/img/quandry-pipeline-output.png)

* On the left is the raw image with the calculated outline superimposed in light green.
* In the right image, the blue star is an estimate of the piece's centroid.
* "Candidates corners" are shown as red crosses.
* The "true corners" are green circles.
* In this example, btw, side two in the third image and side zero of the fourth image are known to fit together.

The matching sides of two puzzle pieces should have the same length along the path.
Matching sides should also have low Hausdorff and Frechet scores.
Color-matching and other more advanced techniques could be applied later for more filtering..
I'm learning a lot just getting the side lengths.

I tried various corner-detecting routines provided by skimage:
`fast`, `foerstner`, `kitchen_rosenfeld`, `shi_tomasi` and `subpix`,
but I found `harris` worked the best while generating the fewest false positives.
I later moved away from the `harris` technique since I already had the piece's outline as an ordered sequence.
I found "template matching" to be more robust --
my templates are two 90deg angles that are composed around a test segment.
I then determine the similarity between the segment and each angle.
In the example below, the segment (in red) is not very similar to either angle
and so it's Hausdorff score would be high:

![corner template matching](/img/corner-template-matching.png)

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

I've built a few small imaging rigs to take photographs with consistent lighting and camera positioning.
I'm using a beaglebone black and an adafruit JPEG TTL camera with my own LED right ring.
I need to try taking photos on pieces of paper that have sharper contrast with the pieces --
some of the white colors in the pieces get lost in the edge detection step.
