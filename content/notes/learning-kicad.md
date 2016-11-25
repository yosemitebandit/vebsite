+++
date = "2016-06-25T16:34:52-07:00"
location = ""
tags = ["hardware", "reading", "watching"]
thumbnail = "/img/stm32-kicad-test-board-thumbnail.png"
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

the workflow was..

* make a project and a new schematic
* from the schematic, make a lib via `tools -> library editor`
and create a new component (but not yet a footprint),
save this into a new lib
* start a new schematic and draw your circuit, probably using lots of labels
* annotate everything when you're done connecting up things
* make a netlist and save it
* run CvPcb to associate schematic symbols with footprints (turn on the preview, probably)
* save and quit your schematic editor and go to Pcbnew
* import the netlist..I got errors so I went back to the schematic editor,
exported the netlist again, and then I could import into the pcb editor :/
* position everything..
* hide values (`visibles -> render -> values`)
* draw board outline on edge cuts layer
* check `view -> 3d viewer` (nice!)
* select the front copper or bottom copper layer and "add filled zones" --
can copy one to the other layer, then right click and fill them all
(the ratsnest will update), then you can hide the fill in the left pane
* start routing -- right click and end tracks when you've connected a net
* change width by adding custom net classes and assigning nets into the class --
then right click a track to edit and "set all tracks to their netclass values"
* to fill your copper zones, run the DRC
* make gerbers with `file -> plot` -- you probably want these layers on:
edge cuts, the copper layers, masks and silkscreen layers
* use that dialog to create a drill file as well
* consider using `gerbv` to check these files.. here's my rather ugly board!

![gerbv render](/img/kicad-schmidt-walkthrough-render.png)


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

*part one - intro*

* ..

*part two - creating schematic symbols*

* `?` brings up hotkeys
* make a new lib..open the lib editor, create a new component and name it something.
click the empty book to save the component to a new lib.
then `preferences -> component libs` and add the new lib
then click the book with writing on the pages to set the working lib and finally you can save.
Note the topbar which has info about which lib is active
* use `~` in front of the pin name to get the bar over the name (active low)

*part three - more schematic*

* run ERC to find unconnected things -- note that the part's pin type might cause issues
* then generate the netlist

*part four - library setup and part association*

* the start of footprints..from the schematic find CvPcb to start associating symbols and footprints
* use the lib wizard from the schematic editor to get the github libs for the first time..
I had to do something similar in the footprint editor to download footprints (the `.pretty` files)


### [Udemy's KiCad course](https://www.udemy.com/kicad-pro/)


### [PCB design techniques in KiCad](https://www.youtube.com/watch?v=mI3iMBc-8yA)

* he starts using it around 22min
* the push and shove router is so cool..switch to OpenGL mode
and then right click -> checkout the routing options


### other

* a lib I've used: [bytelabs](https://github.com/open-project/kicadlibrary)
* a [nice `.gitignore` template](https://gist.github.com/masahirosuzuka/6a333a0305e6903686c9)
* [this series](http://kicad.txplore.com/?p=116) on custom part creation has been great


### misc

* measure distance in the footprint editor by hitting 'space' to reset the `dx` / `dy` numbers in the bottom menu


### importing libs

* I like to `git clone` a lib somewhere in home
and then move the bits I need (`.bak`, `.dcm`, `.pretty`, `.lib` and `.kicad_mod`)
* they go into something like `/Library/Application\ Support/kicad/template/pololu-drv8825`
* then there's a lot of `prefs > lib wizard` wrangling and you may have to restart kicad
* same with footprints -- have to add the lib with some sort of wizard
