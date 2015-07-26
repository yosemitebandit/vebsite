+++
date = "2015-07-25T20:37:51-07:00"
description = "reading up on some networking basics"
menu = ""
tags = ["reading"]
title = "WNDW book"

+++


I'm skimming [Wireless Networks in the Developing World](http://wndw.net/book.html),
a book covering the basics of setting up wireless networks.
Since I started working at Endaga six months ago
I've learned a lot more about networking and hardware,
but I thought it'd be nice to try and round out some of that knowledge.


#### Ch1 - Physics
* wavelengths: 802.11b at 2.4GHz has a wavelength of 12.5cm (and is considered a microwave),
and our 900 MHz 2G networks are at 33.3cm
* polarization can be used to limit interference:
combine a horizontally-polarized link with a vertically-polarized signal
and you could double the data rate while still using the same frequency
* an example: 802.11b uses 22MHz-wide channels spaced 5MHz apart

Huygens' Principle: each point of an advancing wave front
is just the center of a fresh disturbance and the source of new waves.
The totality of the advancing wave is the sum of the waves created
at points in the medium already traversed.
This explains how sound can travel around corners, for instance,
as well as this diagram:

![diffraction](/img/diffraction.png)

That effect is more pronounced in longer wavelengths,
but these secondary waveforms will be less energetic, as you might expect.

* beamforming arrays take advantage of constructive inteference

Fresnel Zones: first note that beams will "spread" as they travel
(think of a laser pointer painting a big circle on a distant mountain).
But because of diffraction (and Huygens')
these "spread" signals can still reach a receiver..
however they've traveled further and are thus out-of-phase
compared to waves that traveled along the LOS.
This can lead to constructive and destructive interference.
The book is describing the first, third, fifth, etc zones
as constructive and the rest destructive.
So in the design phase, you want to keep this first zone free of obstructions.
The Fresnel radius is the midpoint along the link:

![the Fresnel radius](/img/fresnel-radius.png)

Signal power is proportional to the square of the electric field.

* dB = 10 * Log(P1 / P0)
* +/- 3dB is double/half the power; +/- 10dB is an order of magnitude more or less power
* dBm uses a base value of power (P-sub-zero) of 1mW
whereas dBi is a measurement relative to an ideal isotropic antenna
