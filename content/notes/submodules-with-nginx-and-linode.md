+++
date = "2013-01-28T13:00:00-08:00"
thumbnail = ""
title = "configuring submodules with nginx and linode"
location = ""
tags = ["ops"]

+++

I wanted to setup a custom subdomain to serve static content on nginx and a linode.
The nginx config file looked as you might expect.

In the Linode DNS manager, I had to setup the A records.
<del>And this last part tripped me up: I also had to delegate nameservers for the subdomain.
I made `ns5` and `ns6.linode.com` point to my new subdomain and it all worked out.</del>

*update*

Ok, I think the nameserver stuff is wrong.
I thought that was a fix but in the morning that didn't work.
So I removed the nameservers and it was fine.

That means all that's necessary is to setup your A records and your nginx config.
Assigning `nsX.linode.com` should not be done..
