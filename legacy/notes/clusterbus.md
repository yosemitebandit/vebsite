+++
date = "2012-10-21T23:39:06-08:00"
tags = ["projects", "python", "js"]
thumbnail = "/img/clusterbus-thumbnail.png"
title = "clusterbus"
location = "SF"

+++

During the [ReRoute/SF hackathon](http://hattery.com/reroutesf/),
I helped build a way to examine [bus-bunching](http://en.wikipedia.org/wiki/Bus_bunching)
with Boaz, Wai Yip, Trucy and Kevin.
We were thinking about the really busy bus lines
and how they sometimes get 'clumped' with two buses on the same line only separated by a few seconds.

<!--more-->

This happens when one bus gets behind and the second driver adheres to his schedule.
Some transit agencies will tell the second driver to pass or slow down.
But SFMTA operates based on on-time performance,
so the second driver is incentivized to stay on his schedule,
regardless of the first bus's trouble.
Other agencies handle this a little better by optimizing 'headway,' or the spacing between the buses.
Spacing is what riders really care about – on a crowded line, they just want to minimize their wait.
Being precisely on schedule is less important when buses come every five minutes.

So we built a way to look at the headway of historical data on certain lines.
We pre-processed lots of old GPS data to calculate the headway of buses,
and we then generated some metrics based on certain periods of time.
SFMTA operators said they might be interested in using these tools in a live operation
so the dispatchers can better control the spacing of their drivers.

I worked on the frontend, bits of the API and some of the pre-processing.
The main site is in a state of flux.. but the code is [on github](https://github.com/yosemitebandit/clusterbus).
