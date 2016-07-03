+++
date = "2014-01-15T14:27:24-07:00"
location = "Mountain View"
tags = ["projects", "favorites", "hardware", "travels", "werk"]
thumbnail = "/img/wing-thumbnail.jpg"
title = "Project Wing"

+++

I was part of the team that worked on Google's 'self-flying vehicle' project.
We started with the goal of delivering emergency medical supplies to people in need --
things like AEDs when someone's having a heart attack,
or antivenom to hikers in the wilderness.
(A background video is [here](https://www.youtube.com/watch?v=cRTNvWcx9Oo).)

<!--more-->

I learned a ton on this project..
I designed and built early prototypes of the winching delivery system,
our method of choice for getting things to the ground.
The idea was to hover about 10m over the delivery area and,
via a retractable cable, lower the payload to the ground in a controlled manner.
This worked quite well in that it was accurate and kept people away from the propellors.
It did make for some awesome crashes though ..we had a great crash reel (:
Below is an early delivery prototype.

![the egg prototype](/img/egg-prototype.png)

I also worked on the electronic speed controllers -- components that convert control signals
into three phase power to drive a single brushless motor.
Our vehicle had four of these components per vehicle and, for a few months,
it felt like we'd lose an ESC on just about every flight.
We were using an off-the-shelf component and unfortunately we were uncovering some firmware bugs.
I built a test rig to replay control data from our logs onto a benchtop ESC,
and eventually I could show that a specific sequence of control commands could
put the ESC into a faulty state.
We worked with the vendor to fix this, and also explored making our own ESCs in-house.
(Turns one of the first engineers on Google Maps is also an ESC expert!)

GPS was another fun area to troubleshoot --
we had bought some pretty high end gear with external antennas on each vehicle,
but we faced issues with accuracy, interference and, at one point, even with data transmission rates.
I built a standalone system to test differential GPS as a way to improve the precision of our location fix,
though we ultimately didn't deploy it due to its complexity.
I used that same test rig to debug our transmission rate issue.
And our interference woes were eventually solved via various shielding and antenna mount prototypes.

![wing vehicles](/img/wing-vehicles.png)

I worked on a pair of simulators too:
the first emulated the dynamics of our vehicle in XPlane, an off-the-shelf flight simulator.
This didn't work out so well unfortunately --
our vehicle took off vertically but primarily flew horizontally,
and it was tough to model the aerodynamic forces that occured in the transitory regime.
The "glue" code between our control software and the aero simulator was also written in Python
and that interpreted language was just too slow, should've used Go!
The other simulator took a very broad look at the delivery service as a whole,
helping the team understand how many vehicles we would need to cover demand
given parameters like vehicle range and speed.

I also got to visit Australia to do some flight tests -- Wing was a very fun project all around!
