+++
date = "2015-09-10T09:31:52-07:00"
description = ""
menu = ""
tags = ["reading", "python"]
title = "think bayes"

+++

* Downey generally recommends starting with simple models
and focusing on the clarity and "goodness" of the model
* then add details to reduce the biggest sources of error in the model
* then look for performance optimizations and better analytic methods

* independence: `P(B|A) = P(B)`
* conjunctions are commutative: `P(A and B) = P(A) * P(B|A) = P(B and A) = P(B) * P(A|B)`
* Bayes Theorem: `P(A|B) = P(A) * P(B|A) / P(B)`
* the diachronic interpretation: Bayes gives us a way
to update the probability of a hypothesis, `H`, in light of some data, `D`:
`P(H|D) = P(H) * P(D|H) / P(D)`
* here, `P(H)` is the prior -- the probability of the hypothesis before we see the data.
`P(H|D)` is the posterior, `P(D|H)` is the likelihood
and `p(D)` is the probability of the data under any hypothesis,
also called the normalizing constant
* the prior comes from background info, but can be subjective
* to make it easier to determine these factors,
pick hypotheses that are mutually exclusive and collectively exhaustive
* a suite is a set of hypotheses that has these properties

* a distribution is a set of values and their corresponding probability
* the `thinkbayes` module provides `Pmf` which tracks distributions via a dictionary
