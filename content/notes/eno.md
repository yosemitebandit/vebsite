+++
date = "2015-08-04T10:28:29-08:00"
location = "Oakland"
tags = ["werk", "python", "projects", "hardware"]
thumbnail = "/img/eno-board-thumbnail.jpg"
title = "eno"

+++

At Endaga I worked on [`eno`](https://github.com/endaga/eno-python),
a "programmable cell phone" testing system.

<!--more-->

Endaga built really affordable cell phone towers
and we wanted to be able to test our boxes with real phones creating real traffic.
Eno used a Beaglebone Black and an [Adafruit Fona]
(with an attached Endaga SIM card) to send messages and place calls.

The Beaglebone nodes ran a small command and control server,
while the testing machine used a simple API to pass messages to the test nodes.

See more [on github](https://github.com/endaga/eno-python)!
