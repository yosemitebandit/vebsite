+++
date = "2016-01-08T13:04:26-08:00"
description = ""
menu = ""
tags = []
title = "machine learning"

+++

Recently, several projects I've worked on have made me want to know more about machine learning.
Here are some online resources I've found:

* [2012 Coursera Neural Net course from Geoffrey Hinton](https://class.coursera.org/neuralnets-2012-001)
* the [hacker's guide to neural nets](http://karpathy.github.io/neuralnets/) --
js and not quite complete
* a [udemy course](https://www.udemy.com/data-science-deep-learning-in-python/#/) that eventually gets to TensorFlow
* the famous [course from Andrew Ng](https://www.coursera.org/learn/machine-learning/home/week/1)
* background on [perceptrons and more](http://neuralnetworksanddeeplearning.com/chap1.html)


## Stanford course notes for the [CS231n class](http://cs231n.github.io/)

#### Image Classification: Data-driven Approach, k-Nearest Neighbor, train/val/test splits

* these are data-driven approaches to classification --
take the CIFAR-10 dataset, for example.
There are 60k images with labels.
* We might split this set into 50k images for training and 10k for testing.
* The latter can /only/ be used to evaluate the classifier's performance,
otherwise we risk overfitting.
* Within the 50k training set, we might create five "folds" --
in cross validation we pick four folds for training and one fold for tuning hyperparameters
(this is called the validation fold).
This is then repeated with other fold combinations.
* If cross validation is too expensive, we might only make one validation split,
typically with 50-90% of the data going towards training.
* the nearest neighbor approach compares test images to every image in the training set
* one hyperparameter might be the distance metric to use in this comparison,
another would be how many of the neighbors to use in the voting of the classification --
this applies some smoothing to the grouping (and is the "k" in k-Nearest neighbor)
* NN with pixel-by-pixel comparison can achieve about 40% accuracy in the CIFAR-10 dataset.
CNNs are 95% accurate (on par with humans).


#### Linear classification: Support Vector Machine, Softmax

* the linear classifier is effectively a function that
maps an input image, `xi`, and a weighting matrix, `W`
to an array of scores, the highest score being the output "guess" -- `f(xi, W) = Wxi`.
The notes have a thorough walkthrough of this, including the use of biases and simplifying tricks.
* preprocessing: center the data by subtracting the mean from every feature
and scale things such that they range on `[-1, 1]` or are otherwise zero-centered
* to set these weights and train the model, we need something to optimize --
we'll try to minimize a "loss" function and one common example of such a function
is the Support Vector Machine.



#### NNs part one

* several neuron activation functions are possible (sigmoid, tanh)
but ReLUs, rectified linear units, are the most prevalent now --
`y = 0 | x < 0` and `y = x` otherwise.
It's computationally easier to handle than the others and,
seemingly for other reasons,  .
