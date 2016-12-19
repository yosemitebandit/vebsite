+++
date = "2014-12-22T13:00:00-08:00"
thumbnail = ""
title = "optimizing in go"
location = ""
tags = ["watching", "go"]

+++

notes on optimization..

<!--more-->

[on benchmarking / optimization](https://www.youtube.com/watch?v=JkgQJrodSpI#t=94)

* part of their anti-DDOS system
* they examine User Agents and 'Referer' (hah, a misspelled part of the HTTP header that persists)
* they use kafka extensitvely, incidentally
* benchmarking results showed a ton of calls to 'external code'
* note the cpu profiler: `go test -bench=. -cpuprofile=cpu.out`
..but this was just some virtualbox artifact
* switched to vmware
* string manipulation produced a lot of garbage


[on testing](https://www.youtube.com/watch?v=ndmB0bj7eyw)

* covers basic testing
* the nice little `outyet` demo app
* and info on testing http clients and servers: `httptest.NewServer`
