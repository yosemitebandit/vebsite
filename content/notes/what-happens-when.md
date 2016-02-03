+++
date = "2015-08-13T18:13:45-07:00"
description = "notes on the everyday of sw engineering"
tags = ["reading", "ops"]
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
and the shell will attempt to interpret this input as a command
* the shell figures out you want to run `/bin/ls` (or whatever)
and it makes a system call to start `/bin/ls` as a child process (forking)
and give it access to the screen and keyboard through the kernel
* this forking results in a copy of the environment from the parent process to the child
* then the shell sleeps, waiting for that command to finish..
really it's just that the scheduler has gotten another process to deal with (`/bin/ls`)
and so it will context switch the shell and other processes as usual
* when `/bin/ls` finishes, it'll issue an `exit` system call
* then the kernel wakes up the shell and tells it to resume
* note that some commands like `cd` are shell builtins
and do not require a new process to be spawned --
the shell can just take action on its own by calling `chdir`
* to see all these system calls being made you use `strace <some-command>` --
files are opened and `stat`ed and attributes are read, stdout may get written to..etc


### ..you access google.com

from [IITK](http://www.iitk.ac.in/LDP/HOWTO/Unix-and-Internet-Fundamentals-HOWTO/internet.html)
and the compiled notes [here](https://github.com/alex/what-happens-when)

overview:

* recall that each layer -- layer2 link/MAC, layer3 network/IP, layer 4 transport/TCP
and layer 7 application/http -- can work independently
* ultimately we will construct "packets / MAC frames" as follows
(and we will need to determine each of these ports and addresses):

```
Application data (e.g. HTTP)
---
TCP src/dst ports (transport)
---
IP src/dst addresses (network)
---
MAC src/dst addresses (link)
```

or similarly:

![data layers](/img/data-layers.png)

first we need to establish a connection with the machine where the document lives,
this is done via DNS:

* my laptop will make a request to a domain resolver for the IP address of `google.com`
* then the domain resolver (8.8.8.8 or some other ISP-provided machine)
will make an NS request to the .com root server
* the response will be an IP addr for a nameserver, say some cloudflare endpoint
* the domain resolver will then ask the nameserver for `www.endaga`
and the nameserver might reply with an IP of the requested site
or with another nameserver (and that could continue)
* eventually though an IP will be returned with a TTL,
the domain resolver will pass that on to the client
* the OS manages this hostname/IP translation
* and a large amount of caching can happen on all these intermediary machines

requesting the page (application data):

* now that we have an IP address, we can form a packet
* the application request data may be something like `GET / HTTP/1.0`
and additional HTTP headers for cache control, cookies, user-agent etc
* the server's response body will come in this layer,
it may indicate that the response is unmodified and the browser should use its cache.
It may also indicate whether a connection should persist or be closed.
* after parsing the HTML, the process is repeated for every resource referenced by the HTML page
* SPDY may also be used by some clients -- this is like compression of HTTP requests
and also performs some other optimizations by caching headers and keeping certain connections alive

on to TCP:

* application data is wrapped up with the TCP destination port number
(typically 80 or 443)
* TCP is all about streaming program-to-program data over a socket
so its headers include congestion window (controlling tx flow),
flow control info (how much the receiver can buffer) and sequence and numbers
* sequence numbers are also attached to each packet,
this way we can handle slow start / AIMD
providing some resiliency against weird network performance
where packets may not arrive in the order sent
* TCP has a three way handshake when the client first connects to the server:
a `SYN` from the client, `SYN-ACK` from the server and an `ACK` from the client
with sequence numbers incremented and acknowledged along the way

then IP data is added:

* recall that IP is all about host-to-host communications..
* IP source and destination headers are set
* a TTL field in IP is decremented at each router hop --
if it drops to zero, the packet is discarded.
This prevents immortal packets from looping through networks forever.
Note that this seemingly should belong in the transport layer but is in fact in IP!
A typical starting value of TTL is 64.

finally we get to the link layer, MAC:

* MAC is about connecting NICs and getting data out on the right physical wire
by setting src/dst MAC address headers
* routers do the hard work of finding the fastest functioning routes for a packet
* as an aside, switches by definition will only look at link layer (aka MAC) headers
the "outermost layers" of a packet, whereas routers will only consider the IP header
* MAC layers will be continually stripped and re-added
as the inner layers (untouched save for the IP packet's TTL) are moved around between network devices
in transit from server to client or client to server
* we also use ARP in here to find the MAC address corresponding to an IP --
machines on the same subnet use MACs to communicate.
ARP involves sending a request asking "who is \<some-ip\>?"
All machines receive the message and the target replies with its MAC.
* as DNS finds IP/hostname mapping, ARP finds MAC/IP mapping


congestion control aside
(notes from [this deck](http://www.slideshare.net/KrishnaRanjan/congestion-control-13017107):

* the internet is basically a queue of packets, with some devices adding packets to the queue
and some devices removing packets
* sometimes parts of the network may have an inbalanced flow where more packets are being added
than are being removed -- this is congestion
* routers may be forced to drop packets if they run out of memory
or if they can't process packets quickly enough packets time out
(and drops causing retransmission, making things worse)
* a "token" control strategy involves generating tokens at some rate and,
when there are tokens available, it's ok to transmit a packet,
but if there are no tokens available, we have to wait to transmit
* a closed loop approach involves detecting congestion
and either shutting off new connections (ala the PSTN)
or routing around congestion via new virtual connections
* choke packets can be sent between routers as a downstream signal
that traffic should be reduced between nodes
* load shedding can be implemented where packets are dropped randomly
or based on some assigned priority
* the TCP spec has "slow start" to allow only a certain amount of data to be sent initially,
with that max amount being raised with each packet's `ACK`
* more on slow start in this [UCSD lecture](http://cseweb.ucsd.edu/classes/fa11/cse123-a/123f11_Lec15.pdf)
* but the most important part is slow start + AIMD (additive increase, multiplicative decrease):
double the number of packets we send until a packet is lost (slow start)
and then +1 the number of packets we send, halving when they are lost
* and this is all managed at the OS layer, the OS will buffer packets until the next ack comes.
There is a congestion window header established at the TCP layer
