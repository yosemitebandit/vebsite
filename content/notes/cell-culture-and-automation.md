+++
date = "2016-07-01T15:14:22-07:00"
location = ""
tags = ["reading", "bio", "drafts"]
thumbnail = "/img/presens-shaker-flask-setup-thumbnail.jpg"
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
* all in a HEPA-enclosed space with negative pressure and "laminar down flow"
* there seems to be no sensors in any of the shake flasks


This is a whitepaper on the [TAP Piccolo, also in JALA (2006)](http://jla.sagepub.com/content/11/5/291.full.pdf+html).

* seems like a bioprocess screen -- they cite the difficulty in "evaluating multiple sets of expression
conditions that will yield biologically active protein in sufficient quantity to meet the demands of discovery teams"
  * structural bio groups need 100mg scale quantities
  * typical groups will run ~20 expression experiments -- nice examples of iterations:
  "variations in inducer concentration, cell density at the point of induction, postinduction expression duration,
  media composition, DNA constructs, culture strains, and temperature regimes"
  * expression and purification are bottlenecks: pharma groups typically express on the order of 100 proteins each year
* the system perfoms induction, expression and single-stage purification using *E. Coli*
* multiple 24 well "cell vessel blocks" are used -- they did one run with 48 of these blocks (1152 wells total)
  * each well is 23mL -- 10mL working volume for microbial expression
  * they are aerated by a fixed assembly and then lidded and moved to storage
* there is a fixed OD sensor -- I think the CVBs are brought to the sensor
* there are also stirring rods and gassing ports (the aeration module)
* protocols generated and exported as XML
* has four incubators, a centrifuge, liquid handler and temp-controlled reagents
* built-in cell lysis and affinity chromatography
* they got about 1.7mg purified protein per well


Another whitepaper on a [bespoke automated shake flask system tested by DSM and Presens (2013)](http://www.genengnews.com/gen-articles/shake-flask-feedback-controlled-feeding/4810/)

* PreSens chemical optical sensors
* glucose addition to the flasks when DO fell below some value
* lower yields than in a 20L bioreactor (in terms of dry cell weight and product concentration)
by a factor of two -- roughly same strain ordering though
  * probably OTR differences, they say
* ~3-fold improvement in scaling
