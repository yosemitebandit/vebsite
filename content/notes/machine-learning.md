+++
date = "2016-01-08T13:04:26-08:00"
description = ""
tags = ["cs", "python", "neural-networks"]
title = "machine learning"
thumbnail = "/img/multinomial-logistic-classification-diagram-thumbnail.png"

+++

Recently, several projects I've worked on have made me want to know more about machine learning.

<!--more-->

Here are some online resources I've found:

* [2012 Coursera Neural Net course from Geoffrey Hinton](https://class.coursera.org/neuralnets-2012-001)
* the [hacker's guide to neural nets](http://karpathy.github.io/neuralnets/) --
js and not quite complete
* a [udemy course](https://www.udemy.com/data-science-deep-learning-in-python/#/) that eventually gets to TensorFlow
* the famous [course from Andrew Ng](https://www.coursera.org/learn/machine-learning/home/week/1)
* background on [perceptrons and more](http://neuralnetworksanddeeplearning.com/chap1.html)
* [NNs from scratch in python](http://www.wildml.com/2015/09/implementing-a-neural-network-from-scratch/)
* [2014 slides on NNs](https://goo.gl/IDCXnI)
* [notes on `sklearn`](http://machinelearningmastery.com/get-your-hands-dirty-with-scikit-learn-now/)
* [concise numpy examples](http://scipy.github.io/old-wiki/pages/Numpy_Example_List#append.28.29)
* [unsupervised feature learning](http://ufldl.stanford.edu/wiki/index.php/UFLDL_Tutorial)


## Stanford course notes for the [CS231n class](http://cs231n.github.io/)

### Image Classification: Data-driven Approach, k-Nearest Neighbor, train/val/test splits

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


### Linear classification: Support Vector Machine, Softmax

* the linear classifier is effectively a function that
maps an input image, `xi`, and a weighting matrix, `W`
to an array of scores, the highest score being the output "guess" -- `f(xi, W) = Wxi`.
The notes have a thorough walkthrough of this, including the use of biases and simplifying tricks.
* the learned weights end up looking like template images --
the article has some really cool examples of this
* preprocessing: center the data by subtracting the mean from every feature
and scale things such that they range on `[-1, 1]` or are otherwise zero-centered
* to set these weights and train the model, we need something to optimize --
we'll try to minimize a "loss" function and one common example of such a function
is the Support Vector Machine.  SVM wants the correct class for each image
to have a higher score than the incorrect classes by some margin `delta`.
(Note that our algorithm's "scores" are still thought to be better if they are larger.)
"The loss function quantifies our unhappiness with predictions on the training set."
* `hinge loss` or `marg-margin loss` is the use of a zero threshold in SVM --
sometimes "squared hinge loss" is used: L2-SVM.
* A `regularization penalty` is often applied to discourage weights with large values --
this has nothing to do with the data, it just removes some ambiguities in finding the weights.
This penalization also means that no input dimension can have a very large influence on the scores.
The final classifier is thus encouraged to take into account all input dimensions to some degree,
rather than strongly considering a small of dimensions.
* The softmax classifier generates scores in the same fashion (`f(xi, W) = Wxi`),
but they are interpreted as unnormalized log probabilities for each class.
The classifier also uses a cross-entropy loss.
Note that the ordering of the scores is interpretable,
but the absolute numbers (or their differences) are not.
* SVM and Softmax are comparable in performance in outcomes --
softmax is never really "satisifed" with the scores it achieves
and its loss function will always seek greater deltas between correct and incorrect scores.
Whereas the SVM will not penalize certain scores depending on the margin settings.


### Numpy sidenote

* the number of dimensions is the rank of an array
* multidimensional slices: `b = a[:2, 1:3]`
grabs the 0th and 1st rows (going up to but not including the 2nd row)
and the 1st and 2nd col (up to but not including the third).
* slices are views into the same data -- modifying the slice modifies the original data
* to preserve the rank of an array, use this slicing syntax: `a[:, 1:2]` versus `a[:, 1]`
* you can also look for certain elements based on an expression: `a[a > 2]`
* numeric operations operate in element-wise fashion
* `np.dot` performs matrix multiplication (`dot` is also an instance method on array-type objects)
* via `broadcasting`, numpy will be somewhat flexible when doing math between arrays --
that is, there are some situations when different sized arrays can be multiplied or added together


### Optimization and Stochastic Gradient Descent

* With optimization we'll have the full suite -- scoring, measuring the accuracy of the score,
and finding the weights that compute the score.
After covering this, the material returns to the first component
and develops more complex mappings such as NNs and CNNs.
The general ideas of the loss fn and the need to optimize will remain.
* At this stage, the SVM cost function is a convex shape.
However, when this work is generalized to NNs, we will no longer see a convex form,
so the typical convex optimization strategies will not be employed.


### NNs part one

* several neuron activation functions are possible (sigmoid, tanh)
but ReLUs, rectified linear units, are the most prevalent now --
`y = 0 | x < 0` and `y = x` otherwise.
Compared to the others, it's computationally easier to handle.


## Notes on the Udemy course [Data Science and Logistic Regression in Python](https://www.udemy.com/data-science-logistic-regression-in-python)

* minimizing cross entropy is mathematically the same as maximizing the log likelihood --
recall that LL is the probability of seeing a certain result given some data
(see lecture ten)
* gradient descent: finding the optimal set of weights that gives the minimum error --
you can take the partial derivative of the cross entropy score with respect to the weights
and find that `dJ/dw = - sum(tn - yn) * xni` (lecture 11).
So, by gradient descent, the new value of weights, at each iteration
is `old value - learning rate * sum of (true value - guess) * input`
* note that when outputs have more than two classes,
it's better to use softmax rather than the sigmoid
* my ipython notebook that looks at weights, the sigmoid, cross entropy and gradient descent
is [here](https://gist.github.com/yosemitebandit/75c3ca7a988ac7aee38c)


## Notes on the [Udacity Deep Learning course](https://www.udacity.com/course/deep-learning--ud730)

* "one-hot encoding" is just using vector labels with a lot of zeros
and a one in the slot for the correct class
* cross entropy, `D` is given by `D(S, L) = -sum(Li * log(Si))`
where `S` is the scores and `L` is the labels --
and remember the `S` scores have had the softmax fn applied (or something equivalent)
so they will be on (0, 1).
* L1 on cross entropy has a nice "pipeline" diagram on this multinomial logistic classification,
`D(S(Wx+b), L)`:

![multinomial logistic classification](/img/multinomial-logistic-classification-diagram.png)

* validation set size rule of thumb --
if a model adjustment improves 30 samples in the validation set,
that is usually statistically significant.
So people typically hold 30k samples in their validation set (or more),
allowing the validation set measurement to be accurate to 0.1%.

### SGD
* stochastic gradient descent is GD but with sampling --
instead of computing the loss over all data, you compute the loss over a small,
randomly chosen subset and take smaller GD "steps."
This means far more steps, but far easier computations,
as computing the loss function over the whole dataset is very expensive.
* For SGD to work well, inputs should have a mean of zero and equal and small variance --
weights should also be inited randomly, with a mean of zero and have small, equal variance
* we can also use momentum -- keeping a running average of previous gradients,
and we can use learning rate decay
* lowering the learning rate is the recommendation for what to do when things don't work
* ADAGRAD is an SGD variant with builtin momentum and learning rate decay,
removing some of these hyperparameters

### Hidden Layers
* I saw a modest improvement in test accuracy (85% to 88%)
when I added a single hidden layer of 1024 ReLUs to my SGD model (lesson two).
* It's apparently more efficient to add more layers
as opposed to increasing the size of the model --
possibly due to the hierarchical structure of natural phenomena,
and the use of fewer parameters in deep networks (compared to "wide" networks).

### Other improvements
* train just until the validation set stops improving to prevent overfitting
* L2 Regularization: added to the model -- it's a hyperparameter *
the sum of the squares of the individual elements --
the derivatives are just the weight vectors themselves
* dropout -- the data flowing between layers is known as "activations."
With dropout, we randomly select half of those activations and make them zero,
squashing that data flow..which seems odd.
But this forces the network to learn several redundant "pathways"
for achieving the same result from some input.
This also allows networks to act as they are taking the consensus over an ensemble of networks.
When evaluating a model that was trained with dropout,
you obviously no longer want this random behavior to be present --
instead you take the consensus over the random models.
This works by averaging activations -- if you scale non-dropped activations
by two during training, you can just remove the dropout and scaling operations during evaluation
to get the average activations.
* In assignment three, we try these techniques..
    * in the logistic models, I went from 82.2% validation accuracy to 83.3% with L2 regularization
    and a beta value of 5e-4 -- not sure how to set this up as a hyperparameter
    * in the model with one hidden layer of ReLUs, I went from 85.0% validation accuracy to
    91.5% when I applied L2 regularization to both sets of weights
    * dropout had little effect -- some people say it helps more when the networks are larger,
    see [here](https://discussions.udacity.com/t/problem-3-3-dropout-does-not-improve-test-accuarcy/46286/17) for more
    * I got to 93.7% accuracy by using L2 Regularization and training for 12k steps
    * struggling to get better than 90.3% validation accuracy (95.1% test accuracy) with a 3-layer NN --
    I'm using L2 Regularization, dropout and some weight-initialization tricks proposed on the forums.
    Things that help: increasing the number of steps and fiddling with `keep_prob` settings on the dropout.
    My setup at the end of this assignment:

{{% gist yosemitebandit 8aec5677e69017bed04c %}}


### Convolutional Neural Networks
* 'weight sharing' concept helps create statistical invariance --
used in CNNs for images and embeddings in RNNs for text
* conv nets slide a kernel through an image while keeping the 'weights' the same --
this is weight sharing -- and it generates a new "image" with a new color depth
* you generally want to form a pyramid of conv layers that squeezes spatial info
into the final classifier
* recall when designing your convnet kernel, a 3x3 kernel will start sweeping with the middle (fifth) pixel,
so if your padding mode is "valid" (not adding zeros to fix the image size),
you may lose some data around the edges -- see "feature map sizes" lesson
* networks are often designed with max pooling layers alternated with convolutional layers --
the pooling layers have a kernel that takes the max value in the neighborhood
* adding in 1x1 "convolutions" can also help -- they are cheap
and introduce nonlinearities into the typical convolutional patch analysis
(which is just a linear classifier)
* the inception concept is to do all things at each layer --
pool, 1x1 convolutions and larger convolutions, all concatenated together


### some examples from [tflearn](https://github.com/tflearn/tflearn)
* ..


## Andrew Ng's Coursera videos

* "batch" gradient descent means you're using all of the training data during the gradient calculation.
Compare this to minibatch which might only look at a subsample.
* normalize your features to speed up gradient descent -- see my `ng-coursera` repo for a good example.
You generally want to be in the neighborhood of `[-1, 1]`.
With a toy example, I found that replacing `x` with `( x - mean(x) ) / stdev(x)`
sped up training by at least one order of magnitude.
* most quick fixes to non-convergence just involve making your learning rate smaller
* suggests considering synthetic features in the multivariate linear regression lecture..
so if you have a model predicting house prices you might try
`price = b + W1 * sqft + W2 * (sqft) ** 2` to create a polynomial model of higher degree
* and there is an analytical solution to the minimization problem for multivariate linear regression:
`inv(XT * X) * XT * y` -- this inverse can be tough to compute if there are a lot of features
* remember that logistic regression is for classification work
and the output has a probabilistic interpretation --
the previous work in this course gives more continuous outputs
* higher order polynomials create more complex decision boundaries
(the shapes / lines dividing up your classes)
