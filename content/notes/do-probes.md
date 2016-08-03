+++
date = "2016-08-03T08:45:55-07:00"
location = ""
tags = ["reading", "bio"]
thumbnail = ""
title = "DO probes"

+++

learning next about sensors for dissolved oxygen..

<!--more-->


### [YSI on DO basics](https://www.ysi.com/ysi-blog/water-blogged-blog/2013/01/dissolved-oxygen-measurements-piece-of-cake-right)

* developed first portable DO probe in 1963 -- a membrane-covered Clark Polarographic sensor
* optical sensors are also available (may also be called luminescent DO or rugged DO sensors) --
still uses Clark's membrane-covered system


### [OTTHydromet video on Clark cell calibration](https://www.youtube.com/watch?v=qFiTePlx-a8)

* probes have two electrodes surrounded by an electrolyte solution
and covered by an oxygen-permeable membrane
* O2 crossing the membrane is consumed in a chemical reaction
and causes a change in current flow between the electrodes
* since O2 is consumed, the water around the sensor must be replaced by natural flow or a circulator


### [YSI series on DO measurements](https://www.ysi.com/ysi-blog/water-blogged-blog/2013/05/what-is-affecting-your-dissolved-oxygen-measurements-part-1-of-4)

* temp affects O2 membrane diffusion in electrochemical probes and optical sensors
* temp also affects O2 solubility in water --
mg/L (ppm) values will change even if the saturation value is 100%
  * colder water can absorb more O2
  * so it seems probes typically measure O2 saturation and convert to mg/L values (analytically)
  * temp compensation for saturation is empirical
* salinity also affects the conversion of saturation to mg/L --
that is, increasing salinity decreases water's ability to dissolve oxygen
  * need builtin conductivity sensing or manually-entered data
* barometric pressure also matters -- typically just calibrate at the test pressure
or you set the known pressure of oxygen and follow a linear relationship for changes
* response times improve with increased solution flow --
even for optical sensors which don't consume any O2


### [YSI on membrane comparisons](https://www.ysi.com/ysi-blog/water-blogged-blog/2013/09/dissolved-oxygen-meters-which-membrane-type-should-i-use<Paste>)

* polarographic and galvanic systems both use gas-permeable membranes --
typically they stretch over the probe and are secured by an O-ring
or come pre-attached to a ring from the factory
* nice table comparing material type and thickness to response time and flow dependence
* some sensors require specific membranes and you have to tell the sensor which membrane is in place, of course


### [YSI's DO handbook](https://www.fondriest.com/pdf/ysi_do_handbook.pdf)

* optical probes work because O2 quenches the lifetime and intensity of the luminescence of certain dyes --
this is described by the Stern-Volmer equation which is linear at low concentrations
  * intensity-based probes require more frequent calibration
  * YSI dyes are immobilized polystyrene
  * there's an oxygen-permeable diffusion layer --
  these membranes are teflon or polyethylene -- the latter is newer and has faster response
  * red light emitted as reference, blue as measurement
  * there is a temp dependence corrected on YSI probes
  * similar accuracy to electrochemical sensors -- better in the 0-20mg/L range
* steady-state polarographic sensors
  * gold cathode, silver anode
  * polarized at 0.8V constantly
  * requires 5-15min warm up before reading or calibration -- 1yr warranty is typical
* steady-state galvanic
  * silver cathode, zinc (or lead) anode
  * difference in electrodes self polarizes (no externally-applied potential needed)
  and reduces O2 molecules (similar to a battery)
  * instant-on, but contstantly consuming the anode (6-mo warranty is typical)
* response time
  * optical T95 can be 40s (!) but they've done internal studies to show that stirring can half that time --
  note the T95 test is pretty worse case: going from 100% to 0% saturation and timing until the sensor reads 5%
  * galvanic or polarographic can be as low as 8s with the right membrane
* calibration hold
  * optical can hold for "many months"
  * electrochemical sensors used in spot-sampling need daily calibration
* cleaning
  * some sensors equipped with automatic wipers to prevent bio-fouling --
  this was called out in a 52 day test
