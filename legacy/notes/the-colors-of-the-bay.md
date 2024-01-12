+++
date = "2013-01-30T13:00:00-08:00"
thumbnail = ""
title = "the colors of the bay"
location = "Menlo Park"
tags = ["projects"]

+++

Me and [Trevor](http://trevorshp.com) spent a few hours making this [page](http://trevorshp.com/gmaps.htm) while our boat dried.
The idea  is to map a location to a color (or two) --
it came about when we were thinking on Katie's [app](https://play.google.com/store/apps/details?id=com.color.colornamer)
and its geolocation possibilities.
Her work provides a cool interface to the xckd color survey,
so we wanted to know if you could devise a scheme for mapping a named color.

..Basically we wanted to make poop jokes about people's houses.
And we succeeded!

[This version](http://trevorshp.com/gmaps.htm) of the map converts lat/lon data to and from HSV.
Well, the "V" is fixed, actually.
So not all colors are possible
but this made it easier to control the map compared to the original [hex-conversion-based scheme](http://trevorshp.com/gmaps_backup.htm).

In HSV mode we take a value of latitude or longitude,
and split it into hue and saturation by just dividing by one thousand.
There are some conversions done such that the hue is within [0, 360) and the saturation stays on [0, 1].
More conversions keep limited to the bay area so we can have a good amount of granularity and don't end up in the Pacific.

So select a few colors and see where you end up.
Or click on the map and that'll drop a marker with your colors.
The original [hex-system](http://trevorshp.com/gmaps_backup.htm) was more interesting but more random.
Any change in the red would change the most significant digit in the lat or lon
due to the ordering, RGB in the hex representation.
So it jumps quite a bit and there aren't really regions of similar colors.
But the [alternative HSV scheme](http://trevorshp.com/gmaps.htm) is kinda predictable, so..it's fun to play with both.
