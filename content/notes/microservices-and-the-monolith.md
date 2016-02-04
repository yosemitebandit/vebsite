+++
date = "2014-12-20T13:00:00-08:00"
thumbnail = ""
title = "microservices and the monolith"
location = ""
tags = ["reading", "linux", "drafts"]

+++

[part I](https://developers.soundcloud.com/blog/building-products-at-soundcloud-part-1-dealing-with-the-monolith)

 * lots of nice links to fowler
 * started adding new features as microservices
 * left the monolith in place
 * microservices talked to their public API like any other app
 * ..but eventually had to add an internal api

[part II](https://developers.soundcloud.com/blog/building-products-at-soundcloud-part-2-breaking-the-monolith)

 * broke the monolith by identifying 'bounded contexts' --
"well-contained feature sets, highly cohesive, and not too coupled with the rest of the domain"

and [part III](https://developers.soundcloud.com/blog/building-products-at-soundcloud-part-3-microservices-in-scala-and-finagle)

* broke their team down to focus on specific areas of the platform (reminiscent of conway)
* initially had tons of languages and tools, but decided to consolidate
* then chose a stack for rpc, resiliency and concurrency
* settled on the finagle framework, an rpc system for the jvm by twitter
* for later reading: [your server as a function](http://monkey.org/~marius/funsrv.pdf)

