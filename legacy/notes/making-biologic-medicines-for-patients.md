+++
date = "2016-06-22T17:39:49-07:00"
location = ""
tags = []
thumbnail = ""
title = "Making Biologic Medicines for Patients"

+++

I'm going through the edX course, MITx 10.03 Making Biologic Medicines for Patients:
The Principles of Biopharmaceutical Manufacturing
led by Drs Chris Love, Stacy Springs and Paul Barone,
here are some notes:

<!--more-->


### unit one -- intro

* Dec 1983 -- genzyme makes alglucerase, the first synthetically engineered beta-glucocerebrosidase,
an enzyme that, when lacking, causes Gaucher's Disease
* biologic medicines are quite broad according to the FDA --
proteins (the focus of this course), vaccines, blood components,
cell therapies, natural hormones and plant / animal extract
  * cell therapy: something like injecting live T-cells into a patient --
  alternative medicine has also co-opted this term to injecting non-human cells
  * animal extract: for example, insulin from pigs
* these engineered proteins are quite complex --
monoclonal antibodies are 1.3k amino acids and 144k Daltons
  * compare that to "small molecule drugs" -- <1k daltons
* first hybridoma created in 1975 by Georges Kohler and Cesar Milstein
  * they had to be further "humanized" (glycosolated?) to make them effective in humans
* some history:
  * ~7000BC: a pot from China was used to make something like wine..cool
  * the 1850s: Pasteur characterized the activity of yeast and bacteria in distillery equipment in Lille
  * 1894: antibody therapy was inadvertently created with a diphtheria treatment
  involving a "serum" from guinea pigs that had been infected with a heat-inactivated bacteria --
  later horses were used to increase production
  (anti-toxins and anti-venoms are still made in horses and other animals --
  I wonder how they handle human-compatibility -- ah, the comments say that this is still a problem,
  but you are likely using the treatment for an acute and serious condition and not something chronic)
  * WWI: scientists on both sides used bacteria and yeast to make
  glycerol (for explosives), butanol (synthetic rubber precursor) and acetone (more explosives) --
  they pioneered aseptic processing where the reactors, media and equipment were sterilized
  * WWII: Howard Florey and Ernst Boris Chain worked on penicillin production in Peoria with the USDA,
  they (again serendipitously), found another species of the *Penicillium* mold
  on a cantaloupe in a farmer's market -- it made 60ug / mL.
  With X-rays and UV radiation they mutated the mold and applied some selection pressure,
  eventually finding a strain that could make 500mg / mL..wow
  * 1945: Fleming, Florey and Chain win a Nobel Prize
  * 1952: there are 58k polio cases in the US -- Salk treats Polio with a mammalian-produced product
  * 1953: Watson, Crick and Franklin deduced the double helix structure of DNA
  * 1973: recombinant DNA tech (plasmid injection)
  * the 70s: HGH was isolated from cadavers to treat growth deficiencies
  * the 80s: genzyme makes that Gaucher's enzyme..but it takes 20k placentas to treat 1 child / yr, wow..
  they soon looked into recombinant techniques
* the steps of biomanufacturing:
  * cell line dev: recombinant DNA techniques + variant selection
  * upstream processing: reactor condition optimization
  * downstream processing: purification and recovery
  * fill and finish: adding other components to the active pure product to make a final drug


### unit two -- protein structure and function

* seven of the top-10 best selling drugs of 2013 (including the top-3) were protein drugs
as opposed to small molecule drugs (aspirin, penicillin)
  * the top three included humira (an immunosuppressant), enbrel (treats autoimmune diseases)
  and remicade (another immunosuppressant) ..they're all for stuff like arthritis
* small molecules are, compared to biolgic drugs..
  * far easier to characterize
  * far less targeted (where we're targeting DNA, RNA or receptor proteins)
  or where we're accidentally affecting other pathways
  (where the biologic drug is so complex that these consequences are unlikely)
  * more stable -- less likely to be affected by, say, oxidation or deamidation,
  processes that can alter a protein's folded structure and thus its function
  * less likely to aggregate improperly
  * administered orally, as opposed to protein drugs which typically must be given parenterally
* biotherapeutic categories affect:
  * enzymatic / regulatory activity (like insulin or erythropoietin)
  * special targeting activity (like rituximab -- it targets B-cells for destruction,
  a treatment for non-Hodgkin's lymphoma)
  * protein vaccines (HPV, HepB and flu vaccines, for instance)
* amino acids
  * differentiated by side chains
  * our DNA makes 20 different side chains
  * some have charges which can form ionic bonds (lysine and glutamic acid, for instance)
  * some have polar functional groups and can form hydrogen bonds
  * most are neither charged nor are they polarized --
  they are hydrophobic and thus typically make up the core of a protein's structure
  * cysteine has a thiol group which can form very strong disulfide bonds
  * proline's side chain is linked to the amine group in the main part of the amino acid,
  kinking the structure
* peptides come about through dipeptide bonds,
  * < 40 amino acids makes a peptide, anything more is a protein
* in the discussion about structure, there's a cool example involving insulin:
  * typically produced and stored as a hexamer --
  three dimers that join together via two zinc atoms
  * but insulin is only active as a monomer, and it naturally forms dimers
  * so insulin analogs have been engineered that reduce the dimerization
* post-translational mods
  * oxidation, reduction in the side chains
  * proteins can be trimmed
  * disulfide bonds can be formed
  * they can tag and destroy mis-folded proteins or mediate other protein function
* new molecules can be attached to the protein like in glycosolation --
glycans are linear or branched polysaccharides.
Half of human proteins are glycosolated
and mammalian cell lines most closely reproduce glycosolation patterns found in a human
* the Gaucher's Disease example was cool --
they created a carbohydrate on an engineered enzyme
that would trigger natural uptake by a macrophage
* deamidation is a PTM to avoid, in this case Asparagine loses an amide --
one example of deamidation they listed was fixed when the final product was stored in plastic rather than glass
* acylation can, in insulin, adjust the release profile of the drug
* PEGylation (polyethylene glycol addition) -- PEG polymers are added to biologics as a shield.
They can prevent the immune system from clearing the drugs

*protein structure and function examples -- insulin*

* they discuss engineered changes to insulin:
  * "lispro" was an insulin variant that had Lys and Pro switched at the end of one chain --
  this resulted in less dimerization and a release profile more similar to natural insulin
  * it was found by looking at another molecule and wasn't a product of screening
  * glargine developed to be a "long-lasting" insulin

*protein structure and function examples -- antibodies*

* five of the top ten best selling drugs of 2013 are antibody drugs
  * some target cells for destruction, others make it so small molecules can't be used by the body,
  others deliver radioactive or chemotoxic agents to cells,
  some just block other receptors
* IgG antibodies are about 150kDa
  * y-shaped, they have two identical heavy chains and two identical heavy chains
  * each chain has a constant domain and a variable domain --
  in humans this is literally a random sequence of amino acids
  * with PTMs, there are 100M possibilities for each antibody
* an antibody's "glyco profile" is the library of glycosolation changes made to a single dose --
it can have a big effect on safety and efficacy
