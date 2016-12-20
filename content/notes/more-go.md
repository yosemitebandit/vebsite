+++
date = "2016-12-19T00:06:50-08:00"
location = ""
tags = ["go"]
thumbnail = ""
title = "more go"

+++

more go tidbits as I work through [aoc 2016](http://adventofcode.com/2016) --
the code I wrote for this is [here](https://github.com/yosemitebandit/chocolate-calendar).

<!--more-->

* `reflect.DeepEqual` will see a difference between `[2]int{1,2}` and `[]int{1,2}`, hm..
ah, that's slices vs arrays!
* I struggled mightily with a problem that had me build a fixed size array,
add items to the array and then return once the array had a value in each slot --
it was tough to check for nil in the array.
I ended up checking for a `char{}`
