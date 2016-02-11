+++
date = "2016-02-08T23:10:17-08:00"
location = ""
tags = ["python", "cs", "watching"]
thumbnail = ""
title = "udacity deep learning lesson two"

+++

notes from lesson two of Udacity's Deep Learning course

<!--more-->

#### linear models
* limited in their number of parameters --
`(N + 1) * k` where `N` is the number of inputs and `k` is the number of classes
* The calculation of the number of params is instructive --
recall for a 28px x 28px input image, the weight matrix is 28 x 28 x 10.
This is because you need to multiply each pixel in the image by some weighting parameter,
or specifically one param per class.
(And remember that we turn the image into a giant 1 x 784 row vector
and the weights into a big 784 x 1 column vector --
there are ten sets of these so the biases are just one value for each set.
So don't get too caught up in the dimensionality of results.)
This makes for 28 x 28 x 10 + 10 = 7850 total parameters..
which is actually small for our purposes, says the instructor.
* linear models are efficient (via GPUs),
stable (in that small changes to the input result in small changes to the outputs),
and their derivatives are constants
* but we also want to model nonlinear events..enter the ReLU --
ReLUs evaluate to zero on `x < 0` and `y = x` on `x >= 0`
* we can now inject ReLUs into the network instead of using a single matrix multiply --
this creates a nonlinear function
and gives us `H`, the number of ReLUs in use.. we can make this quite large

![network of relus](/img/network-of-relus.png)

another view of the operation stack:

![NN operation stack](/img/nn-operation-stack.png)

* and differentiating this stack is not that difficult because of the chain rule --
we just multiply the derivatives of each element
* back propagation is this breakdown to determine the gradient of the weights --
differentiating the model at some point in time


#### TensorFlow

Getting the first taste of TF in Assignemnt Two --
with TF, you first setup a computation graph within `with graph.as_default()`.
This includes..

  * bringing in the data
  * initing the weights and biases
  * setting up the logits (train data * weights + biases)
  * calculating loss (via the average of the cross entropy of the softmax)
  * setting up an optimizer with some learning rate
  * and setting up some predictions (for later reporting)

Then, within another block `with tf.Session(graph=graph) as session` you..

  * run an init to actually do the setup described above
  * run the optimizer, compute the loss and get the trained predictions (all in one line)
  * occasionally print the validation accuracy
  * and finally print the test accuracy

I'm not understanding how the ReLUs are applied by TF here..
ah, we have to add them via the assignment!

We can also use SGD via a slightly computation graph employing placeholder nodes --
an offset is picked randomly to form a randomly selected minibatch.
The placeholder nodes are fed this minibatch within the session.

ReLU setup, two-layer network:

* if you have 1024 ReLUs, you'll have a weight matrix with dimensions `input-data-size x 1024`
and a `1024 x 1` bias vector
* your first set of logits will be a ReLU-wrapped `Wx + b` computation
* then you'll have the "output layer" with its own set of weights that is `1024 x number-of-labels` in size
plus a bias vector that is `number-of-labels x 1` in size
* the output logits will be `Wx + b` where `x` is the hidden layer output
* then this output will be fed into the softmax function (or something equivalent)..

Another set of [TF tutorials](https://github.com/pkmital/tensorflow_tutorials).
[Keras](http://keras.io/#getting-started-30-seconds-to-keras) also looks awesome.
