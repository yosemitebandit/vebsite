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
split into a "child DAO" and got about 3.6M ETH total before being stopped.
That's about 4% of the total ETH in circulation, and leaves the DAO with 7.9M ETH.
The attack took 258 ETH per sec -- 1 ETH is worth about $15 atm, after a 25% drop in value today.
The balance will be frozen for 27 days due to, I think, the DAO's rules.
Er, and also because many (all?) of the exchanges paused their trading for a bit
according to [these logs](http://pastebin.com/aMKwQcHR).

<!--more-->

[This blog post was crazy to read](https://blog.slock.it/dao-security-advisory-live-updates-2a0a42a2d07b#.7nm2mafve) --
the slock.it "organizers" first ask the community to spam the network to stop the drain.
They post a code snippet for ethereum clients that is supposed to create a lot of spam,
but it's unsigned code that could do just about anything, yikes.

[This post on the ethereum blog](https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability/)
then discusses what the "leaders" of the community have agreed to do -- a soft fork followed by a hard fork.
(See [here](https://en.bitcoin.it/wiki/Softfork) for more on hardforks vs softforks --
it's basically backwards-incompatible vs compatible changes.)
The soft fork will change ethereum's codebase to prevent withdrawals from the DAO address and its children.
This will extend the 27 day window and prevent the attacker from withdrawing funds at any time.
The hard fork would be the follow up -- it would allow people to only withdraw *their* invested ETH,
and since nothing has been spent, it should all be recoverable.
The DAO would essentially be shuttered.

These are forks to ethereum itself,
even though it was only a bad contract written into the DAO that caused this issue.
Miners would have to come on board,
and this has come some controversy about the allegedly decentralized nature of ETH.
Who decides when a bad contract is bad enough to warrant a fork?
Well one pretty good answer is that the miners still decide..it's still a consensus-driven system.
And it's a lot of the global supply of ETH tied up in this bad contract --
the price seems like it'll drop no matter what they do.
[Ethcore agrees in their response](https://blog.ethcore.io/attack-on-thedao-what-will-be-your-response/) --
pointing out that bitcoin worked through similar bugs via consensus-driven hard forks.
[Bloomberg](http://www.bloomberg.com/view/articles/2016-06-17/blockchain-company-s-smart-contracts-were-dumb)
has an amusing and informative take on how the "hack" is unfolding..

There are fun conspiracy theories about the attacker paying off miners to not accept these proposals..
And other great theories about how the plan was to short ETH all along..

The slock.it team looked at [this type of vulnerability only 5 days ago](https://blog.slock.it/no-dao-funds-at-risk-following-the-ethereum-smart-contract-recursive-call-bug-discovery-29f482d348b#.2elkeocon)
and thought they were safe -- here's another post breaking down [the exploit](http://vessenes.com/more-ethereum-attacks-race-to-empty-is-the-real-deal/).
I think it's a race issue where you recursively withdraw funds,
calling another "withdraw" before the contract checks that you actually still have funds.

There is also some discussion about "proof of stake" vs the traditional "proof of work" --
I'm still trying to understand this..
Apparently ETH was contemplating forking to PoS but that hadn't gone through yet.

It was pretty fun reading about this today -- it'd be fun to participate in the future.
I'd also like to read more on Monero.
