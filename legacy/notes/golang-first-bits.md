+++
date = "2014-12-20T13:00:00-08:00"
thumbnail = ""
title = "golang first bits"
location = ""
tags = ["go"]

+++

spurious notes on golang..

<!--more-->

[how I start - golang](https://howistart.org/posts/go/1)

* I've done some go tutorials here and there -- this one is pretty well-paced given my present knowledge
* "In Go, we tend to implement behavior in terms of functions operating on interfaces."


[on interfaces](http://go-book.appspot.com/interfaces.html)

* interfaces are a set of methods
* types satisfy an interface if they implement all of the interface's methods
* then you can declare a function arg to be an interface,
and any type that satisfies the interface can be used in the function call
* also applies to empty interfaces - any type can be used as a function arg or returned
* for instance `fmt.Println` expects a `Stringer` interface as an arg.
this interface contains a single method: `String() string`
so if you make a struct and an associated `String() string` method,
you can `fmt.Println` that struct
* contains a nice sorting example


[table-driven testing](http://dave.cheney.net/2013/06/19/stress-test-your-go-packages)

* a very nice unit-test system
* see also the [tests for the time package](http://golang.org/src/time/time_test.go)


[on benchmarking](http://dave.cheney.net/2013/06/30/how-to-write-benchmarks-in-go)

* nice, it's part of the testing package
* cool: benchmarks are run a few times until the runner is satisfied with stability;
they run for a minimum of one second each, with increasing `b.N` until this is satisfied
(to build statistical confidence)
* invoke with go test -bench=.
* a common mistake: using `b.N` values in the benchmarked function: these just control the number of loops

* on privacy: if the first letter of a struct or variable is capitalized, it is visible outside the struct
* and some interesting gotchas with compiler optimization --
but I don't think my vanilla code fell into this trap..
* then I memoized with `var m map[int]int` which panicked
with "runtime error: assignment to entry in nil map"
* but it works with `var m = make(map[int]int)`
* explained in the [gobook](http://www.golang-book.com/6/index.htm)
you should basically just use make to init an empty map (and slices and channels)
* see the [blog](https://blog.golang.org/go-maps-in-action) or
[effective go](https://golang.org/doc/effective_go.html)


[on the web framework martini](https://stephensearles.com/three-reasons-you-should-not-use-martini)

* too much magic
* breaks type-safety via dependency injection
* interestingly, the martini author took a lot of this to heart
and later wrote a middleware system, negroni
* gorilla would be something else to consider, as well as goji
* consider trying webapps in [pure go](https://golang.org/doc/articles/wiki/)
or [here](http://www.reinbach.com/golang-webapps-1.html)
