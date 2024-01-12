+++
date = "2016-06-27T17:43:04-07:00"
location = ""
tags = ["drafts", "reading", "bio"]
thumbnail = "/img/mouse-cholera-antibody-thumbnail.png"
title = "what it takes to make protein"

+++

[Virvio](http://www.virvioinc.com/research/) recently published a paper
on [*a Computationally Designed Hemagglutinin Stem-Binding Protein*](http://journals.plos.org/plospathogens/article?id=10.1371/journal.ppat.1005409)
that can protect against a wide variety of flu strains.
Their methods were interesting to me --
I'd like to categorize all the techniques, reagents, equipment and software that they used.

<!--more-->

*notes on the work itself*

* they took a "broadly cross-reactive HA binding protein, HB36.5"
and optimized it to increase its affinity for multiple HA subtypes
  * HA is an "influenza envelope glycoprotein," hemagglutinin.
  It's a surface protein that contains 18 subtypes
  and many genetic variants (strains) within each subtype
  * (recall that current flu vaccines are strain-specific)
* *in vitro* studies have shown that, by targeting the HA stem,
"broadly neutralizing monoclonal antibodies" can neutralize strains
by blocking "conformational rearrangements" required for the virus to fuse to a cell's membrane
  * their goal was to design a protein that has the same broad affinity as bnAbs
* they created a protein that reduced viral replication in mice
and could be administered intranasally as a prophylactic or therapeutic
  * they also found, somewhat surprisingly,
  that they didn't need to engage Fc-FcγR receptors for this to work *in-vivo*
  * Fc receptors typically bind to antibodies that are themselves bound to pathogens,
  the receptors then stimulate an immune response of some sort
  * they expected to need a "fuller" immune response based on past work,
  but they found their protein worked so well that Fc-FcγR wasn't as important


*aside on yeast display*

* a technique to "engineer the affinity, specificity and stability of antibodies,"
according to [openwetware.org](http://openwetware.org/images/8/8d/Yeast_surface_display.pdf)
* a protein of interest is displayed on the surface of yeast cells
as a fusion of a transmembrane protein, Aga2p
  * the target protein, because of this fusion, is held kind of at "arm's length" from the cell,
  minimizing potential interactions with the yeast itself
* you can then add potential ligands, themselves complexed with flourescent and / or magnetic substances,
and see which yeast bind to the ligands
  * flourescing additives allow quantification
  * and magnetic beads can be used for separation
* you've presumably done this in a yeast library with ~10^8 variants
(clones, but for some randomly mutated sequence),
so you can extract the yeast that bound with high affinity, sequence it, and make your protein of interest


*their methods*

...
