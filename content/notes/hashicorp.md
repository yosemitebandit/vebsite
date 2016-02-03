+++
date = "2015-08-31T15:27:29-07:00"
description = ""
tags = ["reading"]
title = "hashicorp"

+++

Just about every day I find myself using `vagrant`, a tool for managing VMs,
and now I've discovered a lot of other great-looking new tools also made by hashicorp:

* [`terraform`](terraform.io) is like ansible but for cloud infrastructure --
so with just a config file and the CLI, you can stand up an AWS instance, for example.
* [`vault`](vaultproject.io) manages the access of various secrets.
I've always had static, locally-stored dotfiles with pw protection,
but this can handle dynamic secrets, leases, audits..
* [`serf`](serfdom.io) creates fault-tolerant, decentralized clusters via gossip.
Reminds me of `tinc`, to some extent, a P2P VPN I used for a work project recently.

They've also summarized their beliefs nicely in
[the tao of hashicorp](https://hashicorp.com/blog/tao-of-hashicorp.html):

* workflow-driven developemnt -- envision a streamlined UI to achieve a set goal,
and then build tools that simplify that workflow
* tech-agnostic
* stick to the unix philosophy of being simple, modular and composable
* build systems via CSP: Communicating Sequential Processes --
individual processes with a clear API
* utilize immutability and the take advantage of all it offers
(rollbacks, atomicity, auditing and inspection)
* all processes should be written as code and then be stored and versioned.
Processes should be automated where possible
and made resilient -- knowledge of a "desired" state should be codified.
* pragmatism and flexibility (and thus humility)
are always valued when approaching any problem,
and so the above axioms need not be viewed as some kind of law
