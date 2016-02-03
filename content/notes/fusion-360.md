+++
date = "2016-01-28T13:33:03-08:00"
description = ""
tags = ["modeling"]
title = "fusion 360"
thumbnail = "/img/linkage-thumbnail.png"

+++

I just learned that Fusion 360 is free for "enthusiasts" --
it's an excellent modeling program.
I tried 123D Design and had issues with it on mac.
In the past I've used Sketchup, OpenSCAD and, to a limited extent, Solidworks and FreeCAD,
but Fusion 360 is my favorite of the bunch.

<!--more-->

* components are containers for bodies -- they're bound by their own degrees of freedom
and maintain their own origins and reference planes
* joints are used to govern positioning and motion of assembly components --
as-built joints can be used to setup how parts should move in relation to each other
once the thing is actually created
* the timeline is really cool -- editing old sketches is super easy
* sculpting is also a cool mode that I had not seen before --
see the bike seat video below.  You can create more organic things in a free-form way.
* the patch workspace seems to be for creating surfaces,
as opposed to the model workspace which creates solid geometries
* there's some discussion on parameteric vs direct modeling --
it seems like parametric is what I'm used to from Solidworks:
defining variables and basing designs off of other surfaces and dimensioned drawings.
When one edge moves, others react accordingly..
Direct seems to be just any nonparametric modeling (like the sculpting mode).
* "Some components have moved" -- what's up with that message (and with capturing position)?
It's there because some operations are position dependent.
[Here is a well-explained example](http://goo.gl/52EGCk).
* hide previous sketches if you want to sketch something new,
but you don't want it to be part of an old sketch
* consider leaving bodies visible when sketching new components --
you can use that old geometry.  I have a tendency to hide them or project parts of them.
I don't think it's always necessary to project..
* you can project axes into a sketch (though they may be small / hard to find).. that's a good trick
* contact sets are very neat -- allow you to easily test motion and interference
(see the corkscrew tutorial, part two)
* if you're trying to select something underneath a bunch of cruft,
just click and hold, then highlight the thing you want
* when making 3D sketches, you can modify a spline, say,
or use "include 3D geometry" to bring in other reference edges --
note the difference here between that command and "project" which would make the edges coplanar
* use `construct` `>` `plane at angle` to make planes perpendicular
to previously-drawn 2D sketch planes -- then you can draw on those newly-constructed planes,
projecting in geometry from the old sketch
* hold `command` to toggle between the geometry preview and
the old geometry / selecting the edges when you are, say, creating a fillet


#### renderings
Here's a bike seat, loosely following the tutorial below,
using [saddle images from this page](http://design-real.com/saddle/) and
the cloud rendering feature.  Mm.. bamboo.. comfy.
I kinda messed it up when I tried to put the gap in the seat, oops.

![rendered saddle](/img/rendered-saddle.png)

the board of my car key's remote -- I'm trying to build a new enclosure for the board:

![prius key](/img/prius-key.png)

a swept frame for a pair of glasses:

![glasses frame](/img/glasses-frame.png)

a flat pack stool:

![flat pack stool](/img/flat-pack-stool.png)

a small linkage -- this had issues with creating joints on chamfered edges..
the forums say this is a known thing, either chamfer later
or don't preselect before clicking the joint tool:

![linkage](/img/linkage.png)

a grip:

![grip](/img/grip.png)

and a corkscrew:

![corkscrew](/img/corkscrew.png)



#### tutorials
there's lots of good instruction within the F360 app itself --
here are some other videos that were helpful:

* [arduino enclosure](https://www.youtube.com/watch?v=E0bhdr84FNU)
* [lampshade](https://www.youtube.com/watch?v=3PnKBSOulwo)
* [windows logo](https://www.youtube.com/watch?v=DAckUNX0b4g)
* [bends -- part of a pair of glasses](https://www.youtube.com/watch?v=hicToIPxYJI)
* [flatpack furniture](https://www.youtube.com/watch?v=DHrP1MunhFw)
* [corkscrew](https://www.youtube.com/watch?v=narfcnqf-DY)
* [sculpting a bike seat](https://www.youtube.com/watch?v=SqCgsphPYO4)
* [bookshelf on a shopbot](https://www.youtube.com/watch?v=VZU_Jpyyc5M)
* tons of screencasts from autodesk staff [like this fellow](https://knowledge.autodesk.com/profile/LXMBRRH7985TU/screencasts)
* [on joints, alignment and linkages](https://www.youtube.com/watch?v=LN4bvjfxQ4c)
* [on lofting](https://www.youtube.com/watch?v=fXQ28AVaMh0)
* [advanced sketching techniques](https://www.youtube.com/watch?v=Dfxm8irfEhc)
* [making some sort of flange](https://www.youtube.com/watch?v=tu-Sg47RxMo)


#### ideas -- things to practice on
* an ice scoop
* a propeller with some twist ala [this tutorial](https://goo.gl/vlE2tt)
