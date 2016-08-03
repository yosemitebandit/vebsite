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


### [PDF from Emerson](http://www2.emersonprocess.com/siteadmincenter/PM%20Rosemount%20Analytical%20Documents/Liq_ADS_43-002.pdf)

* cleaning solutions may enter the reference liquid junction..
they'll persist until they diffuse out --
a new "hydrolysis reference junction" (called TUpH by Emerson) has smaller pores
and may prevent fouling
* some sensors can sound an alarm if the reference impedance grows too large
(indicating something has fouled that component and cleaning is needed)


### [Mettler Toledo on glass junctions](http://www.mt.com/us/en/home/perm-lp/product-organizations/pro/ph-probe-selection.html)

* ceramic: the typical porous junction that allows the ref electrolyte to diffuse out --
fouled by proteins (which precipitate when they contact the KCl ref electrolyte) and other suspended solids
* PTFE annular diaphragm: increases surface exposed to the medium to preven fouling
* open junction: the ref electrolyte is completely open (only possible with a solid polymer ref electrolyte) --
cannot clog but has slow reaction time
* dual-membrane sans junction: for specific "chlor-alkali" processes, has builtin Na ref glass


### ISFET probes

* "hydrogen ion-selective field effect transistor" --
some notes from [this page](http://www.all-about-ph.com/nonglass-ph-electrode.html)
  * a gate connects two electrodes, the source and drain --
  all three are embedded in silicon, the gate is in direct contact with the solution
  and is sensitive to H+ ions
  * a ref electrode in the solution is still needed and operates in the same manner as in other glass probes
  * will produce a high current, low impedance output (in contrast to glass)
  * sensing area can be cleaned with a toothbrush (in fact, I saw this recommended by one vendor)
  * can be stored dry -- have fast response times and fast measurements
  * light-sensitive
  * prone to drift and may be less accurate than glass (though a commenter disagrees)
* notes [from wikipedia](https://en.wikipedia.org/wiki/ISFET)
  * still limited by ref probe so some systems are trying to use a FET for the ref as well (REFET) --
  needs frequent calibration though
  * ref may leak??  "KCl leak" or "glycerol leak" -- hadn't heard about that!
* [Schmid on ISFET operation and applications (PDF)](http://wwwmayr.informatik.tu-muenchen.de/konferenzen/MB-Jass2006/courses/2/AbstractSchmid.pdf)
  * ISFET tech can be altered to sense other things like enzymes or DNA
  * [this PDF](http://www.colorado.edu/MCEN/micronanobio/Homework/Homework_Nano-ScaleEngineering_3_2008_Solutions.pdf)
  also captures some sensor possibilities


### [YSI on cleaning electrodes](https://www.ysi.com/ysi-blog/water-blogged-blog/2013/10/extend-the-life-of-your-ph-electrode-in-3-practical-steps)

* single rods and ref electrodes: store in solution that's the same as the ref
* glass electrodes: DI water
* organic adhesions: use an organic solvent
* inorganic adhesions: use a slightly acidic or basic solution and heat if necessary
* clean ref electrode with the ref solution -- heat to break up KCl crystals


### [YSI on electrolytes](https://www.ysi.com/ysi-blog/water-blogged-blog/2015/05/anatomy-of-a-ph-electrode-glass-ph-probes-part-3-of-4)

* typical for a ref electrode to leak into solution (!?)
* 3M KCl is a typical choice, may have a gelling agent
* faster response times with liquid electrolytes
  * refillable electrodes last longer -- have a little port with a closable window
  * more resistant to temp and temp changes
  * susceptible to diffusion potential issues in strongly basic or acidic solutions
  as the outflow rate will be higher compared to gels / polymers
* gels
  * less likely to see silver precipitation at the junction
  * less likely to have ions from the solution invade the reference


### [YSI on ref junctions](https://www.ysi.com/ysi-blog/water-blogged-blog/2015/05/anatomy-of-a-ph-electrode-glass-ph-probes-part-4-of-4)

* aka the diaphragm
* need low resistance and an inert material, but some level of ion permeability
* nice table of junction types, outflow rates (0 - 3mL / day)
* bizarrely, they're saying that the reference electrodes that have greater outflow rates are easier to clean --
I would've thought the opposite, that solution could more easily infiltrate and contaminate the ref
* double and triple junctions exist to reduce contamination
* nice [product breakdown](https://www.ysi.com/File%20Library/Documents/Guides/YSI_Lab_pH_Electrode_Selection_Guide_W75-03_0815.pdf)
* to clean after protein exposure you can immerse in a pepsin cleaning solution (PEP/pH) for 1hr


### [1991 intraluminal ISFET study](http://gut.bmj.com/content/32/3/240.full.pdf)

* identical curves over 24hrs *in vitro* between glass and ISFET probes
  * same result over 21hrs *in vivo*
* some notes on response times too
