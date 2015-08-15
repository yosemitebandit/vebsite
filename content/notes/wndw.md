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
but I thought it'd be nice to try and round out
some of my knowledge of those areas.


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
This explains how sound can travel around corners, for instance.

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


#### Ch4 - Spectrum
* clarifies that SDMA is somewhat less interesting than I previously thought --
just using the same spectrum in a different geographic area.
* CDMA is "spread spectrum" comms that uses a special coding scheme..
which I don't yet understand
* 802.11af is about utilizing TV whitespace


#### Ch5 - Antennas and Tx Lines
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


#### Ch6 - Networking
OSI standard (Open Systems Interconnection) divides network traffic into seven layers:

* Layer 7: Application (http, ftp and smtp are application layer protocols).
Humans are kind of at the "Layer 8" level, interacting with the application.
* Layer 6: Presentation -- data representation like html, encoding and compression.
* Layer 5: Session -- manages logical comms between apps (RPC, for example)
* Layer 4: Transport -- allows systems to reach a service on a network node.
TCP and UDP are examples.
* Layer 3: Network -- where routing occurs.  IP is an example.
This layer is sometimes called "the internet level."
* Layer 2: Data Link -- when two nodes are connected via the same physical medium,
this layer is in play.  Ethernet and 802.11a/b/g are examples.
This is also known as the MAC layer.  MAC addresses are unique 48 bit numbers
assigned to every networking device when it's manufactured.
* Layer 1: Physical -- copper CAT5 cable, radio waves, fiber bundles,
the actual medium transmitting signals.

TCP/IP has a different organization in five layers:
Application, Transport, Internet, Data Link, Physical.
Layers 5-7 in OSI are rolled into the TCP/IP Application Layer
as these layers are "just data."

IPv6 will be the norm in 2020.  Addresses are 128bits written in 32bit chunks.

* for example: `2001:0db8:1234:babe:0000:0000:0000:0001`.
* but typically leading zeros are removed from the address: `2001:db8:1234:babe:0:0:0:1`.
* or consolidated further: `2001:db8:1234:babe::1`.

The loopback form in IPv6 is `::1`.
The unspecified address is `::/128` (similar to `0.0.0.0/32` in IPv4).
IPv6 prefixes are usually the most significant 64 bits,
so an address would be written: `2001:db8:1234:babe::1/64`.
These prefixes are like IPv4 subnet masks.
The latter half of the address is the IID, the interface identifier.
All nodes on a LAN or WAN will share an address prefix.

IPv4 subnet masks define the size of networks:
`/24` indicates 8bits are reserved for hosts for 256 total hosts.
But `.0` is the address of the network itself and `.255` is the broadcast address,
so really only 254 hosts are available.
Subnet masks can be applied to an IP address to find the network address.

IANA (Internet Assigned Numbers Authority) adminsters IPv4 and IPv6 allocation.
All address are divided into subnets
which are delegated to five large regional registries
the US and Canada are in ARIN).
These regional registries (RIRs) distribute to ISPs.

* IPv4 uses DHCP to assign dynamic IPs (typically)
but IPv6 uses Stateless Address Auto-Configuration (SLAAC)
where the device generates a random address on its own.
* private addresses: `10.0.0.0/8`, `172.16.0.0/12` and `192.168.0.0/16`
* neighbor-discovery: Address Resolution Protocol (ARP) in IPv4 and NDP in IPv6.
Someone asks the network (via multicast) "Who is 192.168.1.3?"
and that host will reply with its MAC.  Then the two can communicate directly.
* default gateway: when a router receives a packet
destined for a network for which it has no explicit route,
the packet is forwarded to the default gateway.
This is typically the "best route out of your network" and often towards the ISP.

Network Address Translation (NAT) devices manipulate the address of packets
instead of just forwarding them.
So the private network can use an address from the private range
but the NAT router's internet connection uses a globally-routed IPv4 address.
You're basically sharing a global address among a lot of private addresses.
The MAC layer is unused in NAT, but, interestingly, TCP packets can be modified in flight.
This is necessary when, say, two private addresses are browsing the same site.
The NATting router will modify the TCP port such that there is a unique port/IP combo.

ICMP (internet control message protocol) is part of the IP suite
(along with TCP and UDP) but is more used for debug and maintenance.
It consists of things like `echo`
and notifying when a packet couldn't be delivered

The physical layer:

* MAC addresses reveal in the first 24 bits the assigning entity of the address
* hubs just connect multiple twisted-pair ethernet devices together --
they repeat signals received on one port out to all the other ports.
They work on the first layer (phy).
A WiFi AP is a hub on the radio side of things.
* switches are like hubs that can create dedicated connection between ports.
They operate on the second level (the data link layer).
