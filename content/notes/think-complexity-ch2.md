+++
date = "2014-12-20T13:00:00-08:00"
thumbnail = ""
title = "think complexity chapter two"
location = ""
tags = ["python", "go", "drafts"]

+++

[greenteapress](http://www.greenteapress.com/complexity/thinkcomplexity.pdf)

* cool decay example, suppose you have lambda, decay rate per second between two nuclides
* (half life is just ln2 / lambda)
* probability that an atom decays in an interval is lambda * dt
* with multiple decays, probability of a decay path is found by just multiplying all
probabilities along the chain
* decay chain of highest probability? give each edge a 'length' of -1*log(lambda)
and then find shortest path via astar or dijkstra
* because adding log probabilities is the same as multiplying probabilities
* since log is negated, shortest path is most likely decay route

ex 2.1

* simple graphs are undirected with no loops
* regular graphs are those in which vertices have the same number of neighbors
(vertices are of the same degree or valency)
* complete graphs: each pair of vertices has an edge connecting them
* paths are sequences of vertices that connect vertices
* cycles are sequences of vertices starting and ending at the same vertex
* forests are graphs with no cycles
* trees are connected graphs with no cycles
* connected graphs are those that contain a path from every node to every other node

ex 2.2, 2.3 and 2.4

* in [python](https://gist.github.com/yosemitebandit/625ae47565ae828cc417)
* in [go](https://gist.github.com/yosemitebandit/818bac265aa12866e874)
