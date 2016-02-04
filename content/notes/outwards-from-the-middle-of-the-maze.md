+++
date = "2014-12-20T13:00:00-08:00"
thumbnail = ""
title = "outwards from the middle of the maze"
location = ""
tags = ["linux", "watching", "drafts"]

+++

[https://www.youtube.com/watch?v=ggCffvKEJmQ](https://www.youtube.com/watch?v=ggCffvKEJmQ)

* developers used to have application-level guarantees via transactions (think action1, action2, commit)
* but in today's ecosystem (mostly sans transactions),
there are fundamental problems with latency, concurrency and partial failure that are hard to hide
* when will we get those guarantees back? and how?
* he mentions brewer's previous keynote and brewer's point
that we should build simple reusable components that are intended to be combined;
we can reason about these components (their latency, their failures) in a direct way;
he also mentions people ten years ago thought this would be impossible --
building libraries of reusable components for large scale systems

* so we have composition now, but we have to compose /guarantees/

* two things make distributed systems hard: asynchrony and partial failure
* asynchrony could be handled in isolation by timestamping things and interleaving replies
* partial failures can be handled in isolation by providing replication in time or space
(more nodes or replay messages)

* these fixes do not work with both problems together though..

* on asynchrony, a mention of CRDTs, leveraging datastructure properties
to help achieve cheaper replication; basically objects have semantics
that we can exploit and replicas won't diverge
* or we can find 'confluent components' -- functions that, for all orderings of inputs,
produce the same set of outputs..but some things unfortunately need to coordinate
* could enforce some order..or could enforce producer / consumer relationships

* so ask how components change state and avoid coordination where possible..

* on fault tolerance, composing fault-tolerant components doesn't result in fault-tolerant systems
because it also depends on the glue that binds them
* nice example at 31min on kafka (message system), zookeeper (decides on replicas, clients)
* component specs often do not compose..so we do a top-down testing approach;
put the system together then just do integration testing :/ or we run chaos monkey..
but when do we stop running these things, they take forever..
* so we really just run these things til they seem ok..
* or, since we have a system, we can run it! and then we can ask why did a good thing happen?
* ft is just redundancy in time and space (think having nodes rebroadcast messages [time]
and then having replica nodes [space])
* look at the fine-grained data lineage, and try to find a set of failures that breaks the good outcomes
* more interesting failures at 52min from kafka, two-phase commit, 3pc
