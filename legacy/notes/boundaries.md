+++
date = "2017-01-17T10:09:32-08:00"
location = ""
tags = ["watching", "talks"]
thumbnail = ""
title = "boundaries"

+++

some notes from Gary Bernhardt's 2012 talk *Boundaries*.

<!--more-->

* here's [the talk itself](https://www.destroyallsoftware.com/talks/boundaries)
* make simple values the boundaries between components and subsystems
* his walrus example at 11min is informative:
if you have to write `walrus.stomach << Cheese.new` then you have to just know that the walrus has a stomach
and it can have some things put inside it -- this is too much.
There's also mutation which is not ideal..
* consider instead creating a functional core and imperative shell --
the core is dependency-isolated with many paths
whereas the shell has many deps but few paths.
Unit tests will now be easier to write against the core,
integration tests are written against the shell.
* "core has the intelligence but the shell has the state" --
the core will do some work and return a value..it won't mutate anything
* consider every value a message between subsystems --
makes it easier to build systems for concurrency
