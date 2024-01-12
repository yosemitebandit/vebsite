+++
date = "2016-12-14T09:10:21-08:00"
location = ""
tags = ["watching", "bio"]
thumbnail = "/img/muscle-bioreactor-thumbnail.png"
title = "bioreactors for cell therapies"

+++

notes from a recorded talk on bioreactors
(the image above is a muscle bioreactor that stretches out / exercises the cells..pretty cool!)

<!--more-->

*Julie G. Allickson, PhD, Director of the Wake Forest Institute for Regenerative Medicine*

* bioreactors are used to make kidneys, ears, bone, muscle, blood vessels, heart valves, etc..
have to be easy to ship because they'll be sent straight to a clinician, interesting!
* really interesting design factors for mechanical stimulation of these different types of cells..
* materials must be USP Class VI, ISO 10993 --
sterilization might also affect leachables and extractables (?)



*Biren Mistry, MS, Celgene Cellular Therapeutics*

* bioreactors can be used to produce allogeneic cell therapies (patient-derived)
like CD34+ hematopoetic stem cells, RBC "farming" or immune cells
* traditional cell therapy platforms require high OPEX and high CAPEX
to enable scale-out (rather than scale-up) -- but they're relatively technically simple
* a 1000L bioreactor might make 200B cells per batch (vs 200L -> 40B)
and you'd expect to run 200 batches per year on these (Schirmaier et al 2014)
* microcarriers: microscopic beads suspended in a stirred tank --
cells grow on these biocompatible beads
* cannot compare RPM across different vessel volumes,
but can compare power input (energy dissipation or by impeller tip speed)



*Pascal Beauchesne, PhD, Juno Therapeutics*

* there's been an evolution of sorts from from small molecule drugs to biologics to cell therapies --
they're very selective and can also self-distribute.
Doses can be auto-regulated in very interesting ways (you can signal that the cells should die, for instance)
* there are three approved autologous cell therapy-based products:
Carticel (cartilage repair), Provenge (prostate cancer), LaViv (scarring, no longer in production?)
* he works on adoptive T Cell therapy like CAR
(a single chain with variable fragments that can bind to a cancerous cell and activate t-cells)
and high affinity t-cell receptors (genetically modified cells with a very high affinity to peptides on cancerous cells)
* the process: leukapheresis (cell collection), cells are shipped to a facility for washing and activation,
gene transfer occurs to genetically engineer the cells, cells are expanded and then infused back to the patient
* cell expansion must maintain phenotypes and should probably be done in single use culture vessels
* small scale work will give "some insight" into critical process params:
cell health, populations (composition) and functionality (potency) -- these are critical quality attributes (CQAs)
* scaleout has to happen with bioreators controlled from a server:
centralized recipes, alarm monitoring, user permissions, run log archive,
CFR 21 Part 11 (FDA regs on electronic systems and signatures)
* culture systems: bags, expandable gabs, G-REX, rocking motion bioreactors, hollow-fiber bioreactors --
here is the G-REX system in action:

{{% youtube Q4exiq_zAcI %}}

* bags may be made from semi-permeable materials: FEP (fluorinated ethylene propylene), polyolefin, EVO copolymers
* G-REX can supposedly hit 20B+ cells/mL on large surface area systems despite having no online measurements (volume?)
versus rocking motion bags: 15M cells/mL
* some systems need a shear-protecting agent added to the culture
* hollow fiber can do 100M cells/mL and have online measurements
* single use consumable designs, if they have open manipulations require ISO 5/ Class 100 BSC --
(aka Class II Type A, I think)
  * also need DEHP-free PVC for sterile welding
  * closed sampling systems: bi-directional reusable ports are not considered closed
  * for leak-proof connections bonded > barbed > luer lock, also need to pressure-test
  * single use components need to provide a characterization of their extractables and leachables
* "more online measurements would be desirable to further automate automated bioreactor control strategies" --
especially wrt feed strategies
* the quantum terumo BCT product is interesting..
