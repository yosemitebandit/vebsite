+++
date = "2010-02-03T11:20:56-08:00"
location = "Durham"
tags = ["python", "js", "projects", "favorites"]
thumbnail = "/img/dutrack-thumbnail.jpg"
title = "dutrack"

+++

I leveraged the [OpenGTS project](http://www.opengts.org/)
to bring create a low-cost bus-tracking system for my school when I was a senior.
For about $150 per year, you can have an unlimited data plan on some really cheap GPS-enabled cell phones.
The OpenGTS project has a small client app that runs on the phones
and transmits position data back to the OpenGTS server,
which we initially ran on a small desktop in the [Smarthome](http://smarthome.duke.edu).

<!--more-->

We installed ~30 trackers to cover the whole fleet --
a mechanic was nice enough to connect the trackers to each bus's electrical system so they could stay on.
We then modified the OpenGTS source to greatly increase the update rate so it would send coordinates about every 5s.

![dutrack screenshot](/img/dutrack-alpha.jpg)

