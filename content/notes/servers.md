+++
date = "2016-03-14T18:33:51-07:00"
location = ""
tags = []
thumbnail = ""
title = "servers"

+++

various admin notes:

<!--more-->

* I have `fail2ban` setup on `kepler`, I used this to open up access to port 8888:
`sudo /sbin/iptables -I INPUT -p tcp -m tcp --dport 80 -j ACCEPT`
