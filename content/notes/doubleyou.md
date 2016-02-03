+++
date = "2012-12-11T23:52:49-08:00"
tags = ["projects", "python"]
thumbnail = "/img/doubleyou-thumbnail.png"
title = "doubleyou"

+++

After building [MEDuele](https://github.com/yosemitebandit/meduele) in 2011,
I returned to the [Cal Health Hackathon](http://blogs.ischool.berkeley.edu/hackinghealth/)
to work with [Stephanie](http://stephjang.com/), [Patrick](http://stanford.edu/~ppye/),
[Cyrus](http://www.cyrusstoller.com/), [Jas](http://www.iamjasdeep.com/) and Kristen on another idea.

<!--more-->

One of the hackathon's challenges was to build something
that encourages the use of a bodymedia fitness tracker armband.
These are wearable sensors that log heartrate and accelerometer readouts (footsteps) throughout a normal day.
We also had a sample dataset from the armband
but we wanted to do more than just create a typical dashboard of charts..

So we began thinking about how this might be presented to a child.
We came up with a [Tamagotchi-like](http://en.wikipedia.org/wiki/Tamagotchi) system --
an online avatar would represent the data coming from the armband and other sources.
This 'DoubleYou' would be an easy way for a child to understand his progress towards fitness or dietary goals.

The site we demoed is at [mydoubleyou.org](http://mydoubleyou.org).
Stephanie built some great avatars that react to parameters like fitness and mood.
I helped build the backend, crunch the sample data and setup an API for the avatars to consume.
The code is [on github](https://github.com/yosemitebandit/doubleyou).
And we ended up taking second place, woo!
