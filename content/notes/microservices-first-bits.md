+++
date = "2014-12-20T13:00:00-08:00"
thumbnail = ""
title = "microservices, first bits"
location = ""
tags = ["linux", "drafts"]

+++


[on architecture](http://blog.cleancoder.com/uncle-bob/2014/10/01/CleanMicroserviceArchitecture.html)

"The job of good system architects is to create a structure whereby
the components of the system -- whether Use-cases, UI components, database components,
or what have you -- have no idea how they are deployed and how they communicate with the
other components in the system."


[on micro-architectures](http://eugenedvorkin.com/seven-micro-services-architecture-problems-and-solutions)

* interesting note on synthetic / active monitoring:
periodically simulate a customer using your service and measure the simulated actions
* ..but overall not very substantive


[on configuration drift](http://kief.com/configuration-drift.html)

* either reapply configurations
or burn down the servers (see fowler's 'phoenix server' concept)
* this is from 2011, and I think it's a pretty well-accepted idea now


[on the size of microservices](http://bovon.org/2013/07/09/how-big-should-a-micro-service-be/)

* one brain should be able to comprehend the whole thing
* may also be useful to divide along read/write boundaries so those can scale separately
* "The point, though, that each application within a business capability
should have a comprehensible single purpose. The Single Source Of Truth for Customers,
Processing Queue Entries, Storing Requests, Projecting Events. Writing transactions."
* 'Many organisations end up arranged into teams according to specific technologies --
the BPM team, the DBAs, the "services" people." (reminiscent of conway)
goes on to say that this is undesirable -- we should be able to
talk with all colleagues about all things


[on testing microservices](http://martinfowler.com/articles/microservice-testing)

* proposes 'contract testing' -- something less than end-to-end but more than component
* basically an API test: certain fields must be available in a response, for example
