+++
title = "Culture"
date = 2017-01-01
location = "South SF"
tags = ["werk", "hardware", "python"]

[extra]
thumbnail = "projects/culture/purple-reactor.jpg"
+++

I co-founded [Culture Biosciences](https://culturebiosciences.com)
with my good buddy Will Patrick.
We built custom 250mL bioreactors and we ran then as a service for biotech companies.
It all recently came to a tough ending --
disagreements with our board leading to me and Will leaving the company --
and there's so much to write about the years we spent here: dozens of customers,
hundreds of team members,
custom hardware and software projects growing and changing for years,
tens of $MMs in revenue.
It was the biggest and most complex endeavor I've been a part of --
lots of change, challenges, growth..

{{ resize_image(path="projects/culture/reactor-city.jpg", width=800, height=500, op="fit_width") }}

### The early days
Will and I started working from Autodesk's Pier9,
sitting next to the Instructables team (!)
We had access to an awesome machine shop and built the first prototype.
We shadowed several biotech companies
and talked to many more bioprocess engineers about challenges they faced.
We started circling the idea of "AWS for bioreactors."
An advisor told us about the basics of fermentation and process design.
and we did the first (but not the last) brainstorming for a company name,
landing on _Culture Robotics_.

{{ gallery(
  assets=[
    "projects/culture/whiteboards-pd.jpg",
    "projects/culture/whiteboards-names.jpg",
    "projects/culture/whiteboards-names2.jpg",
  ])
}}

We thought we needed a prototype to raise money from VCs.
We did not!
Will raised a seed round of about $750k from a handful of investors,
and they cared very little about the first devices,
they invested in us and in the sector.
IIRC we were valued at about $5M post.
So we mostly junked the prototype, definitely learned from it,
and also rebuilt pretty much all the software going forward.

{{ gallery(
  assets=[
    "projects/culture/puter.jpg",
    "projects/culture/steppers.jpg",
  ])
}}

We hired Collin out of a postdoc at MIT. We hired Fre from a national lab.
Collin built everything and got our first prototype working:
custom heating and cooling system, plastic parts, pumps and more.
I did electronics and software. Will kept CADing all kinds of parts like our single use system.
We also had two great interns: [Zac](https://github.com/zplizzi) and Chatham.
We worked out of Verily: Google's life science offices.
They were about to start a quasi-incubator but it wasn't ready
so we sat near their construction team and made a mess in their offices.
We hired [Dan](https://danchen.me), an amazingly creative and prolific prototyper.

(robotic arm video)

{{ gallery(
  assets=[
    "projects/culture/collin.jpg",
    "projects/culture/fre-will.jpg",
    "projects/culture/dan.jpg",
    "projects/culture/first-test.jpg",
  ])
}}



### Mistakes were made
- The tech, my purview as CTO, never really nailed it --
I think fundamentally we failed to achieve the original vision of "AWS for bioreactors."
The hardware wasn't automated enough and the software experience wasn't sufficient either.
The product was live so we hired staff to fill gaps in all things
-- labwork, project onboarding, client comms --
and this led to a very different company than what we envisioned.
We felt we had to launch,
but we could never really go back to a tech-focused company after this.
- Focus -- we didn't have it. Or we had it and lost it.
Or we had it, made some changes to grow and pursue new markets, and kind of lost our way.
I would joke that we had three businesses in one:
building custom hardware, building software for biotech labs and running a CRO.
We also did a lot of the supply chain logistics -- probably too much of that / for too long.


### I'm proud!
- Overall I'm proud of many things -- for one we never got hacked .. to my knowledge :see_no_evil:
- We managed a whole lot of technical client data and never mis-managed it / never lost it.
Well there was one incident in like 2019
where a dev ran a unit test and accidentally targeted prod, 
the test's teardown started deleting the DB,
but we stopped it and irrevocably lost only about 30min of timeseries data from a handful of experiments.
- We made tens of $MMs in revenue, from a variety of clients around the country,
even some international teams,
and we re-signed most of them to new contracts at various points -- they weren't one-and-done.
We did generate value for people.
- Culture is a part of hundreds of people's career journey --
many folks have leveled up either at Culture or in their next gig,
crossing from labwork to product, sales, going into management
and creating startups of their own.
- We supported multiple families through parental leave (including my own!)
and at least one couple even met at the company
- The company had an innovative and custom simulation/emulation system
for testing changes before pushing to the devices,
I thought that was pretty cool


### The End
In late 2023 Will and I came to disagree with our board about where to take the company.
Our board --
Andrew Lee from Northpond Ventures,
Dan Phillips from Cultivian,
Risa Stack from the Production Board
and Beth Thompson-Webb (independent)
wanted to pursue a Series C, then they wanted to sell the company, then they went back to wanting to fundraise.
I wanted to sell or focus exclusively on technology (vs tech + services).
At some point the board started building their case for regime change and hired consultants to evaluate the operations and exec team.
Will especially tried to facilitate things as best he could but the board was not communicative, nor were they truthful.
It was all pretty chaotic and wasteful, unfortunately.
I would warn other entrepreneurs about these firms but I don't think their funds are active anyway :shrug:
Will and I left around Q1 2024.

I realized I still have physical muscle memory from Culture!
And not in a bad way.
I open a terminal and my fingers' first instinct is to autojmp into the Culture mono repo, "universe" : `j univ` 
ready to hack on oxygen controllers, add to the website, or make some new stats project..

I'm grateful for the chance to meet and work with so many amazing folks via Culture --
I genuinely wish the team all the best and I hope they can find their way!
