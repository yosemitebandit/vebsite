+++
date = "2015-11-11T13:11:55-08:00"
description = ""
tags = []
title = "beaglebone black wifi"

+++

To get my little USB-WiFi adapter working on the beaglebone black,
I followed a few tutorials:
[this one from Make](http://makezine.com/projects/easily-configure-wi-fi-for-the-beaglebone-black/),
[this article from Adafruit](https://learn.adafruit.com/setting-up-wifi-with-beaglebone-black?view=all)
and [these notes on the BBB wiki](http://elinux.org/Beagleboard:BeagleBoneBlack_Debian#Kernel_Upgrade).
I'm using [this wifi dongle](http://www.adafruit.com/products/814)
and a 2A supply for the board.

The gist of it is:

* ssh in over ethernet
* check the kernel version with `uname -a`
* do an upgrade (this brought me to 3.8.13-bone79):

```
cd /opt/scripts/tools
git pull
sudo ./update_kernel.sh
```

* disable HDMI as per the adafruit tutorial
* install the adafruit wifi-reset script -- I found this helped make things work more consistently
* reboot
* use `lsusb` and `ifconfig -a` to verify the wifi dongle is attached
* edit `/etc/network/interfaces` to enable wifi (see the example section that the debian image provides)
* run `ifconfig wlan0 up` and `ifup wlan0`
* reboot
* check your router's client table for the BBB's wireless connection
