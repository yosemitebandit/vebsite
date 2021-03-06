+++
date = "2016-05-19T11:36:53-07:00"
location = ""
tags = ["reading", "hardware", "bio"]
thumbnail = "/img/fermac-320-bioreactor-thumbnail.png"
title = "bioreactors"

+++

I've been learning about bioreactors and fermenters:
devices used to grow bacterial and mammalian cells.
There are a lot of interesting startups in the synthetic bio space
that use bioengineered organisms to produce unique proteins --
these companies need bioreactors to run experiments.

<!--more-->


### basics
* [2011 article on single use vs stainless steel bioreactors](http://www.genengnews.com/gen-articles/finding-a-bioreactor-that-s-right-for-you/3750/)
  * there are even benchtop autoclavable vessels
  * lots of innovation in single use sensors, improving aeration, feeding and waste removal
  * pros of single use: reduced time and labor and energy;
  cons: capacity, reliabililty, automatibility, security, waste
  * GE analyzed 5 2000L steel tanks vs 20 500L (!) disposable bioreactors --
  the latter was only 40% cheaper (suprisingly low), required 18% less staff,
  and produced 34% more product
  * only really the best if you're doing 100kg/yr of product in 500L - 1kL reactors
  and if the facility is at 90% utilization (not sure why that is) and if you need to be very flexible
  * Sartorius says there is rising interest in 50L single use system for microbial applications
  * people want more sensors: biomass and CO2

* [challenges in fermentation scalability](http://www.genengnews.com/gen-articles/tackling-the-challenge-of-scalability/5755/?kwrd=bioreactor)
  * a review of eppendorf's product line -- they have autoclavable, sterilize-in-place (SIP) and single-use designs
  * critical to reproduce bioprocess params at each scale to maintain yield
  * they examined vessel and impeller geometry, tip speed, mixing time, oxygen transfer rate,
  impeller power number
  * with mammalian cells and stem cells especially, you have to be careful with tip speed
  or you could shear the cells -- but then in bigger volumes you may need to mix a lot more
  * good notes on testing mix rates, OTR and impeller power number

* [Apr 2016 article on single use innovation](http://www.genengnews.com/gen-articles/innovation-continues-in-single-use/5734/?kwrd=bioreactor)
  * strong research interest in single use and continuous flow
  * people in the industry think a facility that only uses disposables is coming

* [Apr 2015 article on single use processing for microbial cultures](http://www.bioprocessintl.com/upstream-processing/fermentation/single-use-processing-for-microbial-fermentations/)
  * single use vessels for mammalian purposes "have gained wide acceptance"
  but the industry still needs options for "column chromatography media, cryopreservation, and process monitoring"
  * single use vessels in microbial fermentation is rare
  * "Fermentation is principally the domain of nonglycosylated recombinant proteins
  and peptides such as insulin, erythropoietin, and interferon." -- I-know-some-of-those-words.jpg
      * nonglycosylated: from [this pubmed abstract](http://www.ncbi.nlm.nih.gov/pubmed/9951685),
      it seems like proteins expressed in *E. coli* may be nonglycosylated
      whereas the same protein from CHO cells may be glycosylated.
      The effect of the sugar chain may be small in terms of its contribution to molecular weight (4%),
      but there is some debate as to how the sugar chain can change the protein's function.
      * insulin: regulates blood sugar levels
      * erythropoietin: secreted by the kidneys, it increases the rate of production of red blood cells
      in response to falling oxygen levels
      * inteferon: a signaling protein released in response to the presence of pathogens,
      they activate other immune cells
  * new high-value therapeutics produced through fermentation:
  "antibody fragments, fusion proteins, nonglycosylated antibodies"
      * antibody fragments: ..
      * fusion proteins: aka [chimeric proteins](https://en.wikipedia.org/wiki/Fusion_protein)
      they are the result of translating a gene sequence that is the combination of two parent sequences.
      For instance, if you develop a monoclonal antibody in a mouse,
      you may need to reengineer the sequence a bit to make it more like a human antibody
      * monoclonal antibody: antibodies specific to one antigen made by identical immune cells --
      used in detection and purification of substances, often made by just harvesting cells from live mice
      * nonglycosylated antibodies: presumably an antibody without that sugar chain..
  * risks to biomanufacturers: regulatory (I keep hearing about this vaguely)
  and a lack of "reliable platform processes that reduce development costs and shorten time to market"
  * conventional single-use bioreactors that are suited for mammalian culture
  are not well-suited for single-use fermentations --
  worse by a factor of three in the OD600 dept, according to one app note
  * nice notes on fermentator design..
  fermentation is governed by oxygen transfer and heat dissipation rates,
  OTR can change with the geometry of the vessel, impeller speed, impeller fin number,
  sparge gas bubble size, and other factors
  * they tested their 30 and 300L single use fermentors against stainless steel bioreactors
  with *E. coli* and *Pichia pastoris* and saw similar OD600 values over time
  and similar dry cell weights



### small scale
* my friend Will made this awesome instructable on an algae bioreactor,
[Farma](http://www.instructables.com/id/Farma-an-at-home-bioreactor-for-pharmaceutical-dru/).
* [Sunny Allen's Biomonstaaar](http://www.instructables.com/id/Biomonstaaar/)
is another algae bioreactor from BioCurious.


### medium scale

* Nov 2014 [article about Lygos](http://m.sfgate.com/bayarea/article/Life-science-startups-find-new-life-in-used-5920679.php):
  * they got $1M of equipment for $150k
  * they've gotten 32 bioreactors together, according to their own press note
  * Cal Institute for Quantitative Bioscience, QB3, has shared facilities
* [Lygos presentation, Mar 2015](http://energy.gov/sites/prod/files/2015/04/f21/biochemical_conversion_steen_0230.pdf)
  * barriers: cost effective production, reduced cycle time for dev (design and construction tools)
  * issues with translating small scale experiments to "relevant fermentation process"
  * one goal: expand workflow capacity


### industrial scale
* the GE "FlexFactory" with bioreactors of various sizing
and other industrial equipment -- more for when you're scaling up an operation I suppose.
This is from their 2011 Xcellerex acquisition, though this vid is from mid-2014.
The software could use an upgrade.

{{% youtube mEQ5Br7Ke38 %}}


### companies in this space..there are so many
* Pierre Guerin Technologies
* New Brunswick Scientific -- BioFlow 610
* GE Healthcare Life Sciences -- makers of the Wave platform (single use)
* Sartorius
* Applikon -- miniBio
* Electrolabtech.co.uk
* Cercell
* Fisher Scientific
* Danaher-Pall
* [PBS Biotech](http://www.pbsbiotech.com/store/c1/Featured_Products.html)
* Cellexus -- here is their single-use reactor at work:

{{% youtube WhaW-YMnjxs %}}
