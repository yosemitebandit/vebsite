+++
date = "2016-03-13T16:22:49-07:00"
location = "Mountain View"
tags = ["projects", "favorites", "python", "neural-networks"]
thumbnail = "/img/3-green-striped-bean-thumbnail.png"
title = "setbot"

+++

I've been working on a computer vision system that can play the card game Set.
It recently beat a human!  (Though it was a close game..)
If you just want to read more about the pipeline and see the code,
the [github repo is here](https://github.com/yosemitebandit/setbot).

<!--more-->

![setbot posing by the window](/img/setbot-by-the-window.jpg)

* an overhead webcam watches the game
* a "white isolation" technique finds all the cards
* each card is sent to a keras-based convolutional neural network
that was trained on about 200k cards -- the classifier reports the cards characteristics
* once the board is understood, we pick three card combos and check to see if they are sets
* all identified sets have an attached probability
(based on the classifier's confidence in card-identification),
so, in the typical gameplay mode, it outputs only the "most likely" set,
for example:

![gameplay window](/img/setbot-game.png)


#### image recognition with OpenCV
* I converted the webcam image to [HSV space](https://en.wikipedia.org/wiki/HSL_and_HSV)
and set thresholding ranges to find bright white contours --
I tried HSL but had no luck for..reasons I can't remember
* [this post on playing 24](http://arnab.org/blog/so-i-suck-24-automating-card-games-using-opencv-and-python)
was very helpful -- I used a lot of similar techniques


#### the classifier
* I'm still learning about designing these things so I used a CNN topology from some keras docs --
there are four convolution layers and two max pooling layers.
The full model image is [here](/img/setbot-model.png)
* there is dropout but no regularization
* I used the Adam optimizer but didn't find it to be drastically better than SGD
* this gets to about 90% accuracy in training and seems about as accurate with real life images
* I found some weird inconsistencies with keras -- increasing the size of the validation set
would make my model stop converging during training..which makes no sense.
So I think there is some weird instability there -- I'll probably look to vanilla tensorflow from now on.
Though keras was rapidly getting updates as I was using it, so it may be fine now.
* the keras-based code is [here](https://github.com/yosemitebandit/setbot/blob/master/cnn_with_generator.py)
* I trained on an 8 core digital ocean box (CPU only, unfortunately) --
though once I started using a generator to feed in the training batches,
I was only using about 4GB of memory so I could've downgraded


#### image generation
* the synthetic images were fun to make --  here is one of them,
a particuarly obscured variant of `3-red-striped-oval`:
![synthetic-image](/img/setbot-example-3-red-striped-oval.png)
* the code to generate the vanilla SVG cards is
[here](https://github.com/yosemitebandit/setbot/tree/master/svg-cards)
* and the code to mutate these cards to create a large number of variants is
[here](https://github.com/yosemitebandit/setbot/blob/master/generate_input_data.ipynb)
* I originally used 50 x 78px images but found that I was losing color info
and having a hard time discriminating between, like, green and purple empty shapes.
So I went up to 100 x 156px images at the expense of training time.


#### next up
* demo video or something..
* actuators to slap the cards?  there was talk of pneumatics, robot arms, mousetrap-like things..
* maker faire?
* better performance in verbose mode (aka trashtalk mode)
* an app
* a website?
