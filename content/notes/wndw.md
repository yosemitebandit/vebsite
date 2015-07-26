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


#### Ch2 - Telecom Basics

* waveform graph: the plot of a signal's amplitude over time
vs a spectrum graph: the plot of the amplitudes of the composite frequencies
* Nyquist: we can reconstruct an analog signal if the sampling rate is
at least double that of the highest frequency content of the input signal
* jitter: the variability in the delay of the received signal
* Marconi quickly conceived of multiple carrier frequencies
to make better use of long-distance radio.
* frequency-, amplitude- and phase-modulation can also help signals share a carrier channel
* the techniques may optimize for some combo of
robustness against noise, link capacity or spectral efficiency (bits / Hz)
* bit-error-rates, the fraction of erroneously decoded bits,
are typically 10^-3 to 10^-9
* FDMA: different carriers for different users vs
TDMA: different time slots for different users vs
CDMA: users identified by a specific code vs
SDMA: space-division where a received signal is compared between
multiple antennas to determine "who" it came from (used in MIMO)
-- would be interesting to read more about this last one especially..
* for uplink and downlink support, channels are shared via
FDD (frequency division duplexing) or TDD (time)


#### Ch3 - Licensing and Regs
* Unlicensed radio spectrum was set around the 2.4GHz band (globally) by ITU.
5GHz was added in 2003 and 900MHz is unregulated in the US
(though it's used for GSM phones in Western Europe and developing countries).
* output power, /antenna/ output power, tower height
and of course spectrum..it's all regulated
* homologation: formal certification of comms equipment via an independent lab


### Ch4 - Spectrum
* clarifies that SDMA is somewhat less interesting than I previously thought --
just using the same spectrum in a different geographic area.
* CDMA is "spread spectrum" comms that uses a special coding scheme..
which I don't yet understand
* 802.11af is about utilizing TV whitespace


### Ch5 - Antennas and Tx Lines
* the skin effect: high frequency electric signals only travel along
the outer layer of a conductor -- the inside material does not contribute.
So with bigger signalling cables, we are really just seeking bigger circumference.
* keep cabling as short as possible and don't connectorize it yourself..
* Voltage Standing Wave Ratio is a measurement of power loss due to
signal reflection from the transmitter to the antenna.
A theoretical perfect VSWR is 1, but <2 is the goal.
* Most omnis have vertical polarization, so horizontally-polarized antennas
are sometimes made to avoid man-made interference.
* Uplink and downlink antennas must have matching polarization..
yet there is also "circular polarization" -- how do you match that?
* Antenna icing can lead to impedance mismatches
and changes in the radiation pattern.
