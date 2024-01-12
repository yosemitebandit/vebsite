+++
date = "2016-02-24T09:14:47-08:00"
location = ""
tags = ["reading"]
thumbnail = ""
title = "Nissan Leaf api"

+++

Oof -- some folks have found
[an unprotected API into the Nissan Leaf](http://www.troyhunt.com/2016/02/controlling-vehicle-features-of-nissan.html).

<!--more-->

The car has an associated app that can set charging parameters, control the AC,
show trip history and even expose a bit of owner data.
The authors found that a straightforward, unprotected HTTP API supported the app,
allowing curious people to enumerate VINs until they found someone else's car.

The authors were able to find a valid VIN in a short amount of time
by just testing variations on the last five digits of a known good id.
They also pointed out that, since VINs are often visibly displayed on the front window of a car,
you could just read them off..

Thankfully the Leaf doesn't provide remote unlock or remote start via the app.

(Reading this guy's blog led me to a note on a
[Rolls Royce model with GPS-aided transmission](https://www.press.rolls-roycemotorcars.com/rolls-royce-motor-cars-pressclub/article/detail/T0137422EN/world-debut-for-rolls-royce-wraith-at-geneva-motor-show)
..insane.)
