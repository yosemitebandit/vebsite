+++
date = "2015-01-24T05:10:05Z"
description = "simulated annealing with scipy.optimize"
tags = ["python", "werk"]
title = "uniform sampling in a polygon"
thumbnail = "/img/uniform-sampling-thumbnail.png"

+++

I was working on uniform sampling in an arbitrary polygon.

<!--more-->

An interesting [stackexchange thread](http://math.stackexchange.com/questions/15624).
A [pdf](http://geostat-course.org/system/files/ov_Heuvelink_GEOSTAT11_workshop_sampling%20design_optimization1.pdf) on the topic --
these kinds of problems arise in geosciences.
For instance when you need to analyze a large area of soil..
We need a [low discrepancy](http://en.wikipedia.org/wiki/Low-discrepancy_sequence) sequence.

A [thread](http://www.gamedev.net/topic/585566-generating-points-interior-to-a-concave-polygon/) on such matters --
recommends ray casting and a triangulation method, among other things.  Triangulation seems straightforward..
The original SE thread suggested hexagonal meshes and spatial simulated annealing.
A brief explanation of [SA](http://apmonitor.com/me575/index.php/Main/SimulatedAnnealing), very cool..
What is the fitness function?  Maybe something like [spatial variance](http://connor-johnson.com/2014/03/20/simple-kriging-in-python/)?
So the SA run could be:

 * drop N (x, y) points in the polygon randomly
 * start iteration
 * for each point:
   * find distance to other points
   * find M nearest neighbors
   * calculate average distance to each neighbor
 * find variance of the averages -- this is the output of the fitness function (lower is better)
 * this variance is better than the best yet-seen variance value?
   * yes: reduce temp, save new set of points and fitness
   * no: random value < temp?, then keep the set of points and fitness (and don’t touch the temp)
 * perturb points and repeat, hm, how to perturb points that remain valid (in the polygon)?
scipy might not be able to do this..I guess points outside of the polygon could return a high energy..
[simanneal](https://github.com/perrygeo/simanneal/) could do this, but I can’t use that :(
* you could wrap that variance function around a larger fitness function --
it usually returns variance unless points are outside the polygon, then it returns the variance * some multiplier

Twiddling the SA dials, you can start to appreciate (laugh at?) the recursiveness of the work..
I’m watching a graph output get closer and closer to what I expect, myself optimizing the optimizer (and probably overfitting :|)

The end result:

{{% gist yosemitebandit 2324a917f2a327a749fa %}}
