+++
date = "2016-12-10T13:06:51-08:00"
location = ""
tags = ["reading", "ops"]
thumbnail = "/img/influx-logo-thumbnail.png"
title = "influxdb"

+++

notes on influxdb..

<!--more-->

* config files must have the sections uncommented as well -- sections like `[admin]`
* there are "databases" which contain "measurements" -- these are like tables, I think
* you can further create fields and tags which create some other level of division
* if you try to add a duplicate entry it is just ignored
* data can be injected quickly enough via bulk operations and the python client:
34s for 100k records added to a remote instance,
14s for 100k records added to the local instance,
(the instance being a 2.20GHz vCPU with 3.75GB RAM)
* storage efficiency: I think I'm seeing 5MB for 200k simple records (25B / record)
* auth pretty easy to setup..see the docs

*other products*

* telegraf: collects data
* chronograf: graphs things
* kapacitor: creates alerts
