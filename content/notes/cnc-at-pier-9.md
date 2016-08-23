+++
date = "2016-08-16T10:12:51-07:00"
location = ""
tags = ["watching", "hardware"]
thumbnail = "/img/cam-demo-part-thumbnail.png"
title = "CNC at pier 9"

+++

Going through the CNC classes at Pier 9.

<!--more-->

### class one - basics

* ..


### class two - CAM

* for the full walkthrough see [the instructable](http://www.instructables.com/id/Learn-CNC-The-Hard-Way/?ALLSTEPS)
* go to CAM and `setup` -- set WCS in back corner by just clicking
* also note that the machining happens in inches, not mm
* set stock size (Al typically comes in as true 2x4 bars) --
prolly want to leave 0.1in over after cutting on horizontal bandsaw.
We'll eventually tell the machine the actual dimensions
* set it 50 thou from top so we can face it --
excess on bottom will be wasted too but we can hold it down there

*toolpaths*

* start with a facing 2D toolpath
* generally pick shorter and bigger tools and simulate -- you'll see what detail needs to be redone
* when doing pockets, it's better to choose a contour over a face, more precise
* optimal engagement is basically the stepover -- use the Pier9 formula,
at 1" tool diam the engagement is only 5% (not the 40% default)
* we'll machine at 5% rapid so we have time to stop things -- so move passes will be slower
* then we'll do a pocket for smoothing to clean up what's left
* spot drill before drilling holes -- using a 1/2" chamfer for 6mm holes,
can just click the chamfers if your holes have them
* when using a drill from some non-pier9 lib,
you have to recalc the feeds and speeds using a chart --
also change the name (starting from 1) and set coolant by editing the tool
* make sure to watch the hole depth -- prolly want to blow through a little bit to remove burs
* if depth to diameter ratio is less than 3, you're clear to do regular drilling with rapid out,
otherwise you need deep drilling full retract (peck drilling) to allow chips to clear


### class three -- more CAM

* remember to use the chamfer mill for spot drilling -- 131 or 101
* drill first, then counterbore to take advantage of the pre-existing hole --
make sure you have a helical path when boring too, otherwise you're just plunging with an endmill
* simulation isn't actually relevant for speeds, just motion
* can change stepover by checking "multiple heights" --
useful if you're not doing adaptive and worry about breaking an endmill
* nice `edit notes` feature (right click on the setup) --
these end up in the machining notes (right click on setup and then "setup sheet")
* `right click on house -> set current view as home` -- nice
* post simulation, you can right click on the stock and "save stock,"
useful if you were going to make some other press fit and you need to know just what you machined
