+++
date = "2013-04-01T13:00:00-08:00"
thumbnail = ""
title = "getting started with OpenCV in Python"
location = ""
tags = ["python", "ocr", "drafts"]

+++

I had a hard time training tesseract 3.02.02 for the [mtrrdr](/mtrrdr) OCR project
so I've decided to try some options with 
[OpenCV](http://opencv.org/) and [SciPy](http://www.scipy.org/).
I was interested in testing the ideas posted [here](http://stackoverflow.com/questions/9413216/simple-digit-recognition-ocr-in-opencv-python)
and [here](http://opencvpython.blogspot.com/2012/12/k-means-clustering-2-working-with-scipy.html)
so I wanted to install OpenCV, NumPy, SciPy and matplotlib.
I'm running Ubuntu 12.10, Python 2.7 and here's how I got setup:

For OpenCV, [this SO post](http://stackoverflow.com/a/9620295/232638)
was very informative.
I first downloaded OpenCV 2.4.4 from [Sourceforge](http://sourceforge.net/projects/opencvlibrary/files/opencv-unix/).
I added some needed libraries, and then I followed the build instructions
[here](http://docs.opencv.org/doc/tutorials/introduction/linux_install/linux_install.html#linux-installation).

    $ sudo apt-get install cmake libgtk2.0-dev
    $ mkdir opencv_binary_dir
    $ cd opencv_binary_dir
    $ cmake ../opencv-2.4.4
    $ make
    $ sudo make install

For `SciPy` I needed a few extra libraries, then I could install from pip:

    $ sudo apt-get install liblapack-dev libatlas-dev python-dev gfortran
    $ pip install scipy

`NumPy` is mercifully simple:

    $ pip install numpy

And `matplotlib`:

    $ sudo apt-get install libfreetype6-dev
    $ pip install matplotlib

These all took a while to compile..
At the end you should be able to do this with no complaints:

    $ python
    >>> import cv2, numpy, scipy, matplotlib

..Unless you put `SciPy`, `NumPy` and `matplotlib` in their own virtualenv like I did.
OpenCV is installed system-wide and is not known to your little virtual world
unless you set some flags during your build.
[This SO post](http://stackoverflow.com/a/12043136/232638) suggested the solution:

    $ virtualenv /conf/virtualenvs/opencv
    $ cd /conf/virtualenvs/opencv/lib/python2.7/site-packages
    $ ln -s /usr/local/lib/python2.7/dist-packages/cv.py .
    $ ln -s /usr/local/lib/python2.7/dist-packages/cv2.so .

Then you can activate the virtualenv and import at will:

    $ . /conf/virtualenvs/opencv
    (opencv)$ python
    >>> import cv2
