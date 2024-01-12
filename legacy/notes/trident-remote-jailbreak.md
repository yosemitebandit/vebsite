+++
date = "2016-08-26T10:42:17-07:00"
location = ""
tags = ["reading", "drafts"]
thumbnail = ""
title = "trident remote jailbreak"

+++

Reading Citizen Lab's report on the [attempted remote jailbreaking](http://citizenlab.org/2016/08/million-dollar-dissident-iphone-zero-day-nso-group-uae/)
of the UAE dissident, Ahmed Mansoor.

<!--more-->

* three zero days were attempted on Mansoor's stock iPhone 6 --
they seem to be the first remote jailbreak attempt seen in the wild
as part of a targeted attack
* note that Zerodium paid $1M for a similar exploit chain in Nov 2015
* Mansoor is on the HRW advisory committee and has been previously jailed and harrassed
for supporting a democracy petition.  He's been targeted with FinFisher spyware in 2011
and Hacking Team spyware in 2012 and was suspicious of the texts he received in Aug 2016.
* the "Trident" attack is an exploit for WebKit which allows the initial shellcode to be executed,
a Kernel Address Space Layout Randomization bypass to find the kernel's base address
and jailbreak itself, allowing execution of code in the kernel and install additional software.
The additional software appears to be the spyware package from NSO group
for monitoring the microphone, camera, GPS, messages, calls and other apps.
