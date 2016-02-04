+++
date = "2015-08-04T10:07:13-08:00"
location = "Oakland"
tags = ["werk", "projects", "python"]
thumbnail = ""
title = "openbts python"

+++

While at Endaga I worked a lot on [`openbts-python`](https://github.com/endaga/openbts-python),
our python package for interfacing with [OpenBTS](http://openbts.org).
OpenBTS provides a lot of pieces of cellular infrastructure
like a subscriber registry and SIP functionality.
The python package we made tied it all together.

<!--more-->

I'm pretty happy with how it turned out --
has nice unit and functional tests,
and is reasonably consistent with its API and style.
We could've done better with how it handles different OpenBTS versions --
the Endaga fork and the Range-maintained fork became somewhat different, iirc,
but mostly due to bug fixes that we published..

See more [on github](https://github.com/endaga/openbts-python)!
