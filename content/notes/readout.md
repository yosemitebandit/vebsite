+++
date = "2016-01-08T18:43:16-08:00"
description = ""
tags = ["python", "projects", "neural-networks"]
title = "readout"
location = "Mountain View"

+++

I'm playing around with techniques for reading old-school displays.

<!--more-->

(This is something I messed with long ago -- see [/mtrrdr](/mtrrdr).)

I used [`ssocr`](https://www.unix-ag.uni-kl.de/~auerswal/ssocr/)
to preprocess and read a picture of my oven:

![oven](/img/oven.jpg)

```
$ ssocr crop 174 129 197 92 oven.jpg --foreground=white --background=black --threshold=200 --number-digits=-1
$ 350
```

I'm suspecting more advanced OCR techniques will be needed..
