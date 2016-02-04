+++
date = "2014-12-20T13:00:00-08:00"
thumbnail = ""
title = "on apache kafka"
location = ""
tags = ["linux", "drafts"]

+++

Notes from this [slideshare](http://www.slideshare.net/miguno/apache-kafka-08-basic-training-verisign).

* very high throughput messaging
* producers write to brokers; consumers read from brokers; data stored in 'topics', topics are split into partitions which are replicated
* topics are ordered, immutable sequences of messages that are appended to
* each message in a partition receives a sequential, unique (per-partition) id called the 'offset'
* consumers track their pointers via (topic, partition, offset) tuples
* partitions are for consumer parallelism
* there are also replicas for backup; never read to or written from though
* for each partition, kafka picks one broker as the 'leader'; partition replicas are spread over brokers

* can audit kafka with custom topics and consumers; per-cluster consumers can read all messages out of the cluster and count all messages for a topic

* tune the OS, the JVM, but not too much to be done on kafka itself, except concurrent processors

* messages are committed when some number of in-sync replicas (a tunable parameter) for that partition have applied the data to their datalog; so you can trade latency for durability

* consumers only ever see committed messages
