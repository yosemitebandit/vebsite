+++
date = "2010-02-03T11:20:56-08:00"
location = "Durham"
tags = ["python", "js", "projects", "favorites"]
thumbnail = "/img/opengts-screenshot-thumbnail.png"
title = "DuTrack"

+++

I leveraged the [OpenGTS project](http://www.opengts.org/)
to create a low-cost bus-tracking system to Duke University when I was a senior.
For about $150 per year, you can buy an unlimited data plan on some really cheap GPS-enabled cell phones.
The OpenGTS project uses a small client app running on the phones
to transmit position data back to the OpenGTS server,
which I initially ran on a small desktop in [my dorm](http://smarthome.duke.edu).

<!--more-->

I installed ~30 trackers to cover the whole fleet.
A mechanic was nice enough to connect the trackers to each bus's electrical system so they could stay on.
I then modified the OpenGTS backend source to greatly increase the update rate so it would send coordinates about every 5s.

![dutrack screenshot](/img/dutrack-alpha.jpg)
