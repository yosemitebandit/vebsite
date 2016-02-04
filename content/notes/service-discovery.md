+++
date = "2014-12-20T13:00:00-08:00"
thumbnail = ""
title = "service discovery"
location = ""
tags = ["linux", "drafts"]

+++

[progrium.com](http://progrium.com/blog/2014/07/29/understanding-modern-service-discovery-with-docker)

* there is this mesos project
* says DNS is insufficient due to the impracticalities of managing one's own DNS
and the inability to handle real-time changes in name resolution
* google used chubby in 06 as distributed lock and kv store, replacing DNS
* zookeeper is open source chubby; high availability and reliability in exchange for performance
* both use paxos consensus algorithm (see raft alternative)
* etcd is the new http-friendly alternative to zookeeper
* says service discovery should have a consistent, ha directory + registration +
health monitoring + lookup and connection features
* in another post, talks about consul.io, a "powerful tool" with monitoring,
config store, DNS..maybe our tools should be less powerful and more puny.
though I guess consul is just gluing together a lot of other stuff
