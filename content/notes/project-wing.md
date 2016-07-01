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

I also worked on the systems ESCs -- the electronic speed controllers convert control signals
into three phase power to drive a single brushless motor.
Our vehicle had four of these components per vehicle and, for a few months,
it felt like we'd lose an ESC on just about every flight.
We were using an off-the-shelf component and unfortunately we were uncovering some firmware bugs..
I built a test rig to replay control data from our logs onto a benchtop ESC,
and eventually I could show that a specific sequence of control commands could
put the ESC into a faulty state.
We worked with the vendor to fix this, and also explored making our own ESCs in-house.
(Turns one of the first engineers on Google Maps is also an ESC expert!)

![wing vehicles](/img/wing-vehicles.png)

GPS was another fun area to troubleshoot --
we had bought some pretty high end gear with dedicated antennas on each vehicle,
but comms interference and even interference from the flight computer caused lots of problems.
It was interesting to think of alternative ways to localize the vehicle during flight,
and I had a good time building other prototypes to explore things like differential GPS.

I worked on a pair of simulators too:
the first tried to emulate the dynamics of our vehicle in the flight sim software, XPlane.
This didn't work out so well,
it was tough to model a vehicle that took off vertically but primarily flew horizontally.
It's hard to capture the aerodynamic forces that occur in that transitory regime.
And it's hard to do all this in realtime in Python!
Shoulda went with Go..oh well.
The other simulator took a very broad look at the delivery service as a whole,
helping the team understand how many vehicles we would need to cover demand
given parameters like vehicle range and speed, the time it takes to deliver,
the time it takes to prep orders, etc.

I also got to visit Australia to do some flight tests -- Wing was a very fun project all around!
