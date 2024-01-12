+++
date = "2013-03-23T23:18:52-08:00"
tags = ["projects", "python", "favorites"]
thumbnail = "/img/redream-thumbnail.png"
title = "redream"
location = "SF"

+++

I helped build a dream restoration machine during a hackathon hosted by GAFFTA and the Tribeca Institute.
Our site took written memories of dreams and pieced together video montages that evoke the nocturnal experience.

<!--more-->

We used to tweet out all the dreams on [`@redream_us`](https://twitter.com/redream_us),
but we no longer have the redream.us domain, and the compilations were rendered client side,
so the montages are lost to time :(

We applied some really simple natural language processing techniques to find keywords in the dreams people described,
and we pulled clips based on those keywords from Vimeo and the Prelinger Archive.
The videos were spliced together on the site and kind of time-shifted,
so the dream would seem to loop, but they'd be subtly different each time.
And we let the audio of all clips play simultaneously --
this was my favorite change that made the montages really flow.

Some of the filmmakers on the team put together [this great compilation by hand](https://vimeo.com/62589601) --
it gives some feel for what the reconstructed dreams are like.

This team was really, really great -- everyone's listed [here](https://github.com/yosemitebandit/redream/blob/master/serve/templates/about.html).
We put our code [on github](https://github.com/yosemitebandit/redream),
and the readme goes through more of the technical specifics if you're curious!
