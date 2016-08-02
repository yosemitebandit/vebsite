+++
date = "2016-08-01T17:31:58-07:00"
location = ""
tags = ["reading", "bio"]
thumbnail = ""
title = "pH probes"

+++

learning about pH probes..

<!--more-->

### [a brief PDF on glass pH probes (2004)](https://www.electrochem.org/dl/interface/sum/sum04/IF6-04-Pages19-20.pdf)

* the alkali metals in the thin (0.1mm) glass membrane undergoes ion exchange
with the surrounding solution
* typically have a combined concentric design --
the inner vessel has one electrode surrounded by a constant buffer,
the outer ring has a reference electrode exposed to the solution
* I think you need temp compensation..but maybe having the ref takes care of that?
* two buffer calibration sets the linear relationship
* also need high impedance amplifier electronics (as the glass is very high impedance)
* should only report pH to the hundreths
as the calibration solutions don't get any better than that
* also notes practical reproducibility is +/- 0.05 units
* alkali metals (Na+ or K+) can interfere --
a special lithium glass can be used to mitigate this
* proteins can absorb to the surface to interfere with measurements
* no longer do probes need to remain wet and hydrated for proper measurement


### [Hach's PDF on pH](/misc/hach-ph-handbook.pdf)

* glass electrodes since ion *activity*, and a solution's ionic strength (its presence of other ions)
can affect measurements as well --
the activity coefficient is (strangely) affected by ionic strength
* Nernst equation describes the workings of pH-sensitive electrodes --
for hydrogen ions you'll see about 60mV changes per pH unit at 25C
* temp effects: caused by change in glass bulb resistance and dissociation changes in the solution
* you'll see about 0.003 pH error / pH unit / deg C in temp uncompensated systems
* pH probe will pass a small amount of current between the reference and measuring electrode,
so the meter must have a high internal impedance.
(Quora has good notes on impedance [here](https://www.quora.com/What-does-it-mean-to-have-a-high-or-low-output-impedance-physically).)


### [review from the All About Circuits site](http://www.allaboutcircuits.com/textbook/direct-current/chpt-9/ph-measurement/)

* probes allow H+ ions to migrate through a selective barrier, producing an electrical potential
  * the measurement probe is made of a special glass to produce this selective barrier --
  it's doped with lithium ions which will react to H+ ions
  * the reference probe has a neutral buffer that exchanges ions
  with the process solution through a porous separator,
  making a relatively low resistance connection to the liquid
  * (a plain metal wire cannot be used as it may react to the solution and produce its own voltage)
* good explanation of why you need a high impedance voltmeter:
  * the reference electrode might have an impedance of a few kilo-ohms,
  but the measurement electrode (being glass) might be at hundreds of mega-ohms
  * so if the voltmeter's resistance is low, the current passing through the other components
  will create a large voltage drop on those components, and not much of one on the voltmeter
  * so the voltmeter needs an impedance of something like 10^17 ohms
  * or a "null balance" voltage measurement setup can be used
  where a precision variable voltage source is adjusted until it reads zero --
  i.e., there is no current flowing in the circuit.
  A voltmeter can then be connected in parallel
* notes that glass probes are subject to fouling
* temp compensation is needed to adjust the pH/mV response of the measurement probe
