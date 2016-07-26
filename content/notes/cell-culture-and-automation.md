+++
date = "2016-07-01T15:14:22-07:00"
location = ""
tags = ["reading", "bio", "drafts"]
thumbnail = ""
title = "cell culture and automation"

+++


I've been reading some interesting papers on cell culture and automation,
like [this 2013 thesis on microbioreactors](/misc/goh-microbioreactor-design.pdf),
published by Shireen Goh as her PhD work at MIT.

<!--more-->

* ..


More interesting papers are linked [here](http://www.rle.mit.edu/sclaser/major-research-themes/integrated-biosystems-and-biosensing/).


Here's a whitepaper on the [TAP Sonata in the Journal of Lab Automation (2008)](http://jla.sagepub.com/content/13/3/145.full) --
it's an automated shake flask handler:

* six processing modules: liquid handling, shaking, incubation, chilled i/o carousel, centrifuge and cell counter
* six-axis RX60L robotic arm from Stäubli
* holds 40 microtiter plates, 245 250mL flasks
* built-in cell counting capability


This is a whitepaper on the [TAP Piccolo, also in JALA (2006)](http://jla.sagepub.com/content/11/5/291.full.pdf+html).

* seems like a bioprocess screen
* built-in cell lysis and affinity chromatography


Another whitepaper on a [bespoke automated shake flask system tested by DSM (2013)](http://www.genengnews.com/gen-articles/shake-flask-feedback-controlled-feeding/4810/)

* PreSens chemical optical sensors
* glucose addition to the flasks when DO fell below some value
* lower yields than in a 20L bioreactor (in terms of dry cell weight and product concentration)
by a factor of two -- roughly same strain ordering though
  * probably OTR differences, they say
* ~3-fold improvement in scaling
