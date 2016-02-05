+++
date = "2016-02-04T18:36:55-08:00"
location = "Mountain View"
tags = ["projects", "hardware"]
thumbnail = ""
title = "prius key"

+++

Working on an enclosure to fit my electronic key fob --
it's needed to start the car, but also has lock, unlock and alarm buttons.
It uses a little CR2032 battery.

<!--more-->

the gameplan..

* model the PCB of the key
* model the battery
* create an enclosure:
  * sculpt a form slightly small, then pull it out to be larger than the PCB
  * shell it, probably with an inner shell if you're going to expose button holes
  * split it in half
  * add registration holes on the rim of the shell so you can get a press fit and close the case --
  here are [some press fit tips](http://makezine.com/2015/07/22/tips-3d-printing-press-fit-parts/)
  * make some little cutouts in the case so you can separate the shell
  by twiddling a screwdriver against the edge
  * the plan is to put the PCB in the case button-side down,
  then the antenna and battery connector will be facing up --
  set the battery in place (`:/`) and press down the top enclosure
  * buttons will be accessible via little holes cut in the case --
  I'll superglue some fabric over the holes so you can press the button,
  but the buttons will stay protected
* send the enclosure for 3D printing

What to do about the battery..
I could have it just press into place with the back of the enclosure holding it in.
..But what's holding the front of the enclosure in place?
The PCB has no holes or anything to register on.
The original key had a screw-on cover..very annoying.
