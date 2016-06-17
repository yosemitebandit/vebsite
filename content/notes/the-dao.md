+++
date = "2016-06-17T14:30:50-04:00"
location = ""
tags = ["reading"]
thumbnail = "/img/the-dao-logo-thumbnail.png"
title = "the DAO"

+++

A bug in [the DAO's smart contracts](https://daohub.org/)
was [exploited early this morning](https://www.reddit.com/r/ethereum/comments/4oiqj7/critical_update_re_dao_vulnerability/),
allowing ETH wrapped up in the DAO to be drained --
lamentable, but it's made for some really interesting reading!

[The attacker](https://etherchain.org/account/0x304a554a310c7e546dfe434669c62820b7d83490)
split into a "child DAO" and got about 2.4M ETH total before being stopped.
That's about 3% of the total ETH in circulation, and leaves the DAO with 7.9M ETH.
That was taking 258 ETH per sec -- 1 ETH is worth about $15 atm, after a 25% drop in value today.
The balance will be stuck there for 27 days due to, I think, the DAO's rules.

<!--more-->

[This blog post was crazy to read](https://blog.slock.it/dao-security-advisory-live-updates-2a0a42a2d07b#.7nm2mafve) --
the slock.it "organizers" first ask the community to spam the network to stop the drain.
They post a code snippet for ethereum clients that is supposed to gum up the network,
but it's unsigned code that could do just about anything, yikes.

They then start trying to figure out who owns the oldest "split" proposals --
hard DAO forks, if I understand correctly.
Miners (not token holders?) would vote to switch to one of these forks and, with a software update,
prevent the attack from continuing.
But this ruins the decentralized nature of the DAO --
now you have a collective deciding to operate outside of a smart contract.

Then there's a proposal (though it sounds quite final) that the DAO will be dissolved!
They say a hard fork will recover all the lost funds and only support retrieving funds.
So the original "investors" can recover their ETH, but the DAO as it stands now will be no more.
[Ethcore agrees in their response](https://blog.ethcore.io/attack-on-thedao-what-will-be-your-response/) --
pointing out that bitcoin worked through similar bugs via consensus-driven hard forks.
They are also endorsing the "shutdown" approach.

The slock.it team looked at [this type of vulnerability only 5 days ago](https://blog.slock.it/no-dao-funds-at-risk-following-the-ethereum-smart-contract-recursive-call-bug-discovery-29f482d348b#.2elkeocon)
and thought they were safe -- here's another post breaking down [the exploit](http://vessenes.com/more-ethereum-attacks-race-to-empty-is-the-real-deal/).
I think it's a race issue where you recursively withdraw funds,
calling another "withdraw" before the contract checks that you actually still have funds.

There is also some discussion about "proof of stake" vs the traditional "proof of work" --
I'm still trying to understand this..
Apparently ETH was contemplating forking to PoS but that hadn't gone through yet.
