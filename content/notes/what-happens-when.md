+++
date = "2015-08-13T18:13:45-07:00"
description = "notes on the everyday of sw engineering"
menu = ""
tags = ["reading"]
title = "what happens when.."

+++


### ..you run a program from the shell?

background,
from [IITK](http://www.iitk.ac.in/LDP/HOWTO/Unix-and-Internet-Fundamentals-HOWTO/running-programs.html):

* the shell wraps the kernel,
and the kernel determines what other processes can run
and it also mediates access to the hardware
* any such hardware access / general io must be made through system calls

the shell:

* when focused, the kernel echoes keystrokes to the screen
* when `Enter` is pressed, the line is passed to the shell,
and the shell will attempt to interpret this as input as a command
* the shell figures out you want to run `/bin/ls` (or whatever)
and it makes a system call to start `/bin/ls` as a child process
and give it acess to the screen and keyboard through the kernel
* then the shell sleeps, waiting for that command to finish..
* when `/bin/ls` finishes, it'll issue an `exit` system call
* then the kernel wakes up the shell and tells it to resume
