+++
date = "2016-04-22T13:46:07-07:00"
location = "Mountain View"
tags = ["projects", "python"]
thumbnail = "/img/erbb2ip-expression-thumbnail.png"
title = "plotting gene expression data"

+++

I plotted some gene expression data from the NIH --
each plot is the expression of a gene measured with different probes
at different time points.

<!--more-->

![erbb2ip expression](/img/erbb2ip-expression.png)

You can see some probes don't find much activity during gestation,
while others see increasing or decreasing levels leading up to a mouse's birth.

![usp7 expression](/img/usp7-expression.png)

The code I used to make the plots is here:

{{% gist yosemitebandit 12f7bb6542315f10f4467392eb6f603f %}}
