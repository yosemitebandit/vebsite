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
and it makes a system call to start `/bin/ls` as a child process (forking)
and give it access to the screen and keyboard through the kernel
* this forking results in a copy of the environment from the parent process to the child
* then the shell sleeps, waiting for that command to finish..
* when `/bin/ls` finishes, it'll issue an `exit` system call
* then the kernel wakes up the shell and tells it to resume
* note that some commands like `cd` are shell builtins
and do not require a new process to be spawned -- the shell can just take action on its own


### ..you access google.com

from [IITK](http://www.iitk.ac.in/LDP/HOWTO/Unix-and-Internet-Fundamentals-HOWTO/internet.html)
and the compiled notes [here](https://github.com/alex/what-happens-when)

first we need to establish a connection with the machine where the document lives:

* find the address of `google.com` from the name server,
an IP address you may have setup from your ISP or from some other source (like `8.8.8.8`)
* this is DNS..the first step in finding that IP
is querying the authoritative name server for `.com`
* the primary server might then query other servers on your behalf (er, or is that on the client?)
until the nameserver for `google.com` is found
* some of this info might be in a nameserver's cache
* we also use ARP in here to find the MAC address corresponding to an IP --
machines on the same subnet use MACs to communicate.
ARP involves sending a request tasking "who is <some-ip>?"
All machines receive the message and the target replies with its MAC.
* ARP is used to determine MACs so that devices can communicate in layer 2 (data link)
whereas we appear to only be using layer 3 (network aka TCP/IP)

requesting the page:

* now that we have an address, we can form a packet
* the request may be something like `GET / HTTP/1.0`,
this'll be wrapped up with the destination address,
the source address and a destination port number (typically 80 or 443)
* this packet gets shipped to a router (by attaching layer 2 MAC info)
and eventually makes it to the wider internet
* routers do the hard work of finding the fastest functioning routes for a packet
* the destination machine uses the port number to send the packet to a web server
and the web server can reply to the destination address with a series of packets

tcp/ip:

* the addressing of packets follows IP
* TCP determines how the connection operates: receivers know to send `acks` of
received packets, and senders will retransmit if an `ack` is not received
* sequence numbers are also attached to each packet,
providing some resiliency against weird network performance
where packets may not arrive in the order sent
* a checksum is also provided to enable the detection of data corruption
* a socket between the client and server is opened

http:

* riding on top of the TCP/IP stack is HTTP, that `GET` request at the beginning
* it's a human-readable application level protocol for communicating strings of bytes
* the response is also human readable -- a block of headers
followed by the text of the document which the browser will display
* if the client sent the right headers, the browser might reply with `304 Not Modified`
* the server might also indiciate whether the connection should be closed or persist
(in HTTP 1.1 only)
* after parsing the HTML, the process is repeated for every resource referenced by the HTML page
* SPDY may also be used by some clients -- this is like compression of HTTP requests
and also performs some other optimizations by caching headers and keeping certain connections alive
