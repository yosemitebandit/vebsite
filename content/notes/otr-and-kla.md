+++
date = "2016-08-25T14:38:00-07:00"
location = ""
tags = ["reading", "bio"]
thumbnail = ""
title = "OTR and kLa"

+++

I'm reading [this PDF from UGA](http://cmbe.engr.uga.edu/bche3180/Oxygen%20Transfer%20Lab.pdf)
on oxygen mass transfer..some notes:

<!--more-->

* like temperature changes, the rate at which a gas dissolves in a liquid is proportional
to the difference between the equilibrium concentration and the present concentration --
when the liquid has no dissolved gas, the dissolution rate is at a max,
and when the liquid is saturated, the rate is zero
* a liquid is "saturated" when it reaches this equilibrium concentration
* an equation defining the mass transfer coefficient: `F = kL * ([O2]s - [O2])`
where `F` is the molar oxygen flux, `[O2]s` is the concentration of O2 at saturation,
and the present concentration of O2 is given by `[O2]`
  * mass transfer coefficients are labeled `K` and `kL` is the liquid phase mass transfer coefficient
  * the liquid phase is more relevant for O2 transfer as oxygen isn't very soluble in water
* we can also describe the rate of change of O2 concentration: `d(V*[O2]) / dt = F*A`
where `V` is the system volume and `A` is the surface area available for transfer
  * then, since the system volume doesn't change,
  we can call `A / V` just `a`, the specific exchange surface, and we get:
  `d[O2] / dt = kLa * ([O2]s - [O2])`
  * we can think of `d[O2] / dt` as the oxygen transfer rate (OTR) -- units of mg / L / h
* the value of `a` is hard to nail down in a bioreactor,
so the `kLa` expression is often considered altogether --
it's called the volumetric oxygen transfer coefficient (units of `1 / h`).
  * some call this the overall mass transfer coefficient which is ..kinda correct
  * it's related to fluid properties, the impeller, vessel geometry, agitation and gas flow
  * to study scale up this relationship is used, given a set geometry, impellers and fluid properties:
  `kLa = alpha * (P / V) ^ beta * (U) ^ sigma`,
  where `P / V` is the power per volume ratio and `U` is the superficial gas velocity (units of `m / h`)
  * often a small bioreactor has a higher `P / V` and lower `U` compared to large scale systems
* you can use a similar equation to calculate the critical oxygen concentration for a given OUR (uptake rate)
  * but note that limiting growth by reducing O2 or some other nutrient can be smart --
  metabolism is more "controlled" (meaning, I think, that you'll produce your target protein)
  and also produces less heat
* good notes here on actually measuring kLa..


### more resources

* here on the [UGA BCHE 3180 page](http://cmbe.engr.uga.edu/bche3180/index.html)
* [PDF on kLa estimation methods](https://en.wikipedia.org/wiki/Henry%27s_law)
