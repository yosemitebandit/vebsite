+++
date = "2015-09-28T23:19:45-07:00"
description = ""
menu = ""
tags = ["python"]
title = "puzzler"

+++

I'm messing with `[scikit-image](http://scikit-image.org/docs/dev/)`
and trying to solve jigsaw puzzles.

The current pipeline is edge detection via the Canny routine,
followed by Harris corner detection.
I'd like to find the length of each of the four "sides" of the puzzle pieces.
The matching sides of two puzzle pieces should have the same length.
False positives can be filtered out by more advanced techniques like color-matching..
that is tbd though.
I'm learning a lot just trying to get side lengths.

I tried various corner-detecting routines provided by skimage:
`fast`, `foerstner`, `kitchen_rosenfeld`, `shi_tomasi` and `subpix`,
but I found `harris` worked the best while generating the fewest false positives.

I also tried contour detection but found that to not be very helpful.
[Blob detection](http://scikit-image.org/docs/dev/auto_examples/plot_blob.html)
might be worth trying.

Next I need to eliminate the false corners.
The four corners should roughly form a rectangle,
so I think I can look at each candidate corner and use
[orientations](http://scikit-image.org/docs/dev/api/skimage.feature.html#corner-orientations)
to find other points separated by 90, -90 and 180 degrees of rotation.
Those four points will form the candidate corner set.
Then I can look at area, side relationships and other properties of the candidate sets..

Here are some sample images of the current pipeline:

![piece a](/img/corner-detection-piece-a.png)
![piece b](/img/corner-detection-piece-b.png)

and the code I'm using atm:

<script src="https://gist.github.com/yosemitebandit/ef5b1342c264937698b1.js"></script>
