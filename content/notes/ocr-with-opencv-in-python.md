+++
date = "2013-04-02T13:00:00-08:00"
thumbnail = ""
title = "OCR with OpenCV and Python"
location = ""
tags = ["python"]

+++

After *finally* getting my machine
[setup with OpenCV, NumPy, SciPy and matplotlib](/getting-started-with-opencv-in-python)
I was excited to try this code from [Abid Rahman](http://stackoverflow.com/a/9620295/232638).
He built a K-nearest neighbor classifier for images of digits in python.
Below I've reposted his scripts with my annotations,
and I've written how the system works in my own words.

The first script of two scripts, `train.py`, will take an input image of digits,
perform some image adjustments and then look for contours in the image.
The image's contours are the "islands" of black in the sea of white,
so if the image is clean, each discovered contour is probably a digit.
Here's an example training image from Rahman's post:

![training image](http://s3.amazonaws.com/yb-img/train.png "training image")

When you run the first script, the full training image will be shown,
and the program will sequentially draw a bounding box around each contour it has found.
After drawing a box, the script waits for the user to type in a number
that corresponds to the digit that was just boxed.
The system captures and stores this training data.

<script src="https://gist.github.com/yosemitebandit/5295069.js?file=train.py"></script>

After training a lot of numbers in that first image,
we can use a [KNN model](http://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
to classify another image.
Again from Rahman's post on SO, I used this for classification:

![mystery image](http://s3.amazonaws.com/yb-img/pi.png "mystery image")

The `classify.py` script will preprocess the image
using the same methods performed on the training image.
It will load up the training data, train a KNN model from OpenCV
and then perform a classification for each discovered contour.
The found numbers are written to an output image
for a side-by-side comparison with the input.

<script src="https://gist.github.com/yosemitebandit/5295069.js?file=classify.py"></script>

With such clean training and classification images,
this process has been 100% accurate for me.
Definitely check out [Abid Rahman's OpenCV blog](http://opencvpython.blogspot.com/)
for more interesting scripts.
