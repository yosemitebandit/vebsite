+++
date = "2016-06-25T16:34:52-07:00"
location = ""
tags = ["hardware", "reading", "watching"]
thumbnail = "/img/lincoln-pcb-thumbnail.jpg"
title = "learning KiCad"

+++

I've made a handful of boards in EAGLE CAD but I'm interested in learning KiCad --
it's totally open source and, from what I've read online, it works pretty well now.
It'll be sad to leave EAGLE --
the highlight of my work was [getting in the adafruit blog](https://blog.adafruit.com/2010/02/17/four-score-and-seven-boards-ago/)
with a bitmap / ULP trick..it made 36k errors in the ERC (!?!).

<!--more-->

![abe schematic](/img/abe-schematic.png)

but turned into this -- pretty good for homemade etching!

![lincoln pcb](/img/lincoln-pcb.jpg)

and then I put a surface mount component right on top :(
anyway, on to KiCad..


### basics
* I'm using 4.02 (stable)
* they have a [nice workflow diagram](http://docs.kicad-pcb.org/en/getting_started_in_kicad.html#kicad-work-flow-overview)
  * create a schematic and add components, creating components when necessary
  * annotate components (giving them numbers like `R1`, `C3`),
  * ERC..
  * associate components -- select footprints for each component
  (a change from EAGLE that I like), making footprints where necessary
  * make a netlist
  * make a PCB, reading the netlist
  * debug rule check..
  * export gerbers and check them out with [gerbv](http://gerbv.geda-project.org/)
  (a separate program that can be `brew install`ed, not KiCad's gerbview)
* works pretty well with git..everything's plaintext


### [Windsor Schmidt's 20min walkthrough video](https://www.youtube.com/watch?v=zK3rDhJqMu0)

### [Matthew Venn's five part series](https://www.youtube.com/watch?v=v-qCI8wv72w&list=PLmcDgdDpcaPjIBy60y22XzG036ckQI7bC)

*part one - schematic*

* hit `g` while hovering over a part and then `r` to rotate it in place in the schematic
* `w` to run wires
* can add "power flags" to indicate to KiCad that power will come in from elsewhere
* when doing PCB layout, `view -> switch to OpenGL`, then `right click -> routing options`
there are cool walk-around and shove routers --
hard to rip wires in this mode though

*part two - pcb layout*

* `cmd + shift` to move things with finer control
* draw board border in `edge cuts` layer

*part three - changing the schematic*


### [Contextual Electronics has about 90min of video on KiCad](https://contextualelectronics.com/learning/getting-to-blinky-4-0/)

### [Udemy's KiCad course](https://www.udemy.com/kicad-pro/)
