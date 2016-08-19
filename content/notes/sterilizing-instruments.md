+++
date = "2016-08-01T14:36:50-07:00"
location = ""
tags = ["reading", "bio"]
thumbnail = "/img/sterilization-device-thumbnail.png"
title = "sterilizing instruments"

+++

reading about various ways to clean probes and instruments --
[wikipedia has a great review](https://en.wikipedia.org/wiki/Sterilization),
as does [Finesse](http://www.finesse.com/media/121750/Finesse.TruFluor.ApNote.3.042408.pdf).

<!--more-->

*autoclaving*

* 15-20 min of steam at 121 C, or 134 C for 3-4 min
* performed at high pressure: 100 kPa (which is 1 atm, basically)
* longer cycles for prions
* items have to be physically cleaned beforehand


*dry heat*

* 160 C for 2 hrs or 190 C for 6 min


*flaming, incineration, tyndalization, heated beads*

* heating, burning or boiling water..


*ethylene oxide*

* most common method -- used for ~70% of all sterilizations and over 50% of disposable medical devices
* gas concentrations of 200 - 800 mg/L
* 30-60 C with RH above 30%
* process takes 2-3 hours of exposure and then 12hrs more to vent
* kills bacteria, spores, viruses, yeast and other fungi -- also very hazardous to humans
* subs in for H atoms on molecules, disrupting many chemical processes
* explosive at concentrations above 3% (so it's often diluted)
* very strict OSHA reqs around EtO's use -- if you can smell it, you've had a hazardous dose
* it can permeate some plastics so you can actually bag your equipment before sterilizing it
* they typically use bio indicators to test the sterilization's efficacy on weirdly shaped equipment --
it can kill to a 10^-6 level


*nitrogen dioxide*

* applied at room temp and ambient pressure and "very low concentrations" of the gas
* inactivates spores, bacteria and viruses
* boils at 21 C so people often use liquid NO2 -- often called dinitrogen tetroxide (the dimer)
* less corrosive, no condensation (so the aeration phase is limited)
* still seems like a new technique though, without much commercially-available equipment


*ozone*

* for cleaning surfaces, water and air
* has to be made on-site, typically in the sterilizer itself from medical-grade O2
* easy to remove waste ozone via a catalyst
* dangerous at 5ppm ..way lower than EtO


*glutaraldehyde and formaldehyde*

* 22 hrs+ of immersion
* short shelf life once opened (<2 weeks) and expensive
  * [$60 / gallon at fishersci](https://www.fishersci.com/shop/products/contec-sporicidin-sterilizing-high-level-disinfecting-solution-3/p-3829034#tab1)
* volatile and toxic to skin contact and inhalation


*hydrogen peroxide*

* sometimes used in vaporized form -- liquid purities are at 35 - 90%
* cycle times as short as 30 min
* listed as dangerous at 75ppm (a tenth of EtO)


*peracetic acid*

* 0.2% purity used as a liquid sterilant


*non-ionizing radiation (UV)*

* 250-260 nm light breaks molecular bonds in a microorganisms DNA
* useful for surfaces (like glass vessels)
* may damage plastics


*ionizing radiation*

* gamma, x-ray, electron beam -- some more penetrating than others
* trivia: meat and DC mail gets irradiated, as does feathers in blankets
* gamma uses cobalt-60 or iridium-192 -- it can penetrate 80cm
* gamma radiation can initiate cross-linking in some polymers
but isn't strong enough to make a material radioactive
* probability of gamma absorption is related to a material's cross section, density and thickness --
when a gamma ray strikes an atom, an electron may be ejected into the atom,
this is the photoelectric effect and is the typical mode of interaction
at energies < 10keV.
Gamma facilities actually use systems around 1MeV where pair production (ionization cascades) effects begin
* nice info on [gamma in this pdf](http://cdn.intechopen.com/pdfs/32842/InTech-Sterilization_by_gamma_irradiation.pdf)
  * what actually damages cells isn't firmly known: could be genetic damage,
  damage to the cell wall, release of free radicals like OH-
  * it's estimated that one gray of radiation induces 1k single strand breaks,
  40 double strand breaks, 150 cross links between DNA and protein and 250 oxidations of thymine
  * (one gray is one joule / kg -- equal to 100 rad)
  * nice info on D10 values -- dosage required for log reduction, typically around 0.5kGy
  * will typically use around 25kGy though to exceed a 10^-6 sterility assurance level
  * some spores have a D10 as high as 6.8 (*Clostridium botulinum*)


*clean-in-place and steam-in-place in general*

* lots of validation required to prove that chemicals have been flushed
* Finesse says the overall sterilization cost is comparable
between EtO, gamma and traditional steam-in-place methods,
but single use methods require less labor


*validation*

* [this webinar](https://youtu.be/enWzaJGUD6w?t=49m36s) had a note about
validating with sterile soybean casein digest media --
incubate for 14days with the little challenge tabs, if anything grows that's a failure


*summary*

* seems like UV could work well for glass vessels
* EtO could be used for sensitive probes
* autoclave for sturdier probes
* this is a nice review of [chemical sterilants][http://www.ncbi.nlm.nih.gov/pmc/articles/PMC99773/)
