+++
date = "2016-01-19T16:15:15-08:00"
description = ""
menu = ""
tags = []
title = "bitcoin"

+++

notes on an older video, [How Bitcoin Works Under the Hood](https://www.youtube.com/watch?v=Lx9zgZCMqXE):

* just a group of computers maintaining a ledger --
emphasis on group, rather than some central banking authority
* everyone knows about everyone else's transactions
* every transaction is signed and verified with public/private keys
* so you can prove who you are on the ledger
by generating a signature with your private key and a transaction message
* there is no "account balance" per se -- just a large transaction chain
and an index of "unspent transactions" which may be used for future payments
* there are 10^48 possible bitcoin addresses --
people often create a new public/private keypair for each transaction,
or even multiple for a single transaction
(though they could still be linked back to the same owner)
* somehow nodes have to agree on transaction order..tough in decentralized systems --
the block chain attempts to solve this (different than the transaction chain)
* the block chain is a big linked list that grows over time
* transactions in the same block are considered to have happened at the same time --
TXs not in a block are considered unordered / unconfirmed
* nodes can group a bunch of these unconfirmed transactions into a new block
and can broadcast this "block suggestion" to the rest of the network
* they also have to input some random number into the set of transactions (a nonce) --
the `SHA256` of the transaction set + the nonce + the previous block's hash must be below some threshold,
this is the "mathematical puzzle" that must be solved for the block suggestion to be valid.
A typical computer would take years to solve that puzzle,
but the whole network takes only about ten minutes.
(In fact, the puzzle is calibrated such that it takes ~10min, despite increases in the network hash rate.)
The "puzzle" is in place to make it unlikely that two people will submit block suggestions at the same time.
* This solving of transaction blocks is mining, and it is rewarded by a small number of BTC.
The BTC reward is halved every four years.
* Only 21M BTC will be produced in total, the last in 2140.
There are about 11.4M in circulation as of 2013.
* Miners also receive transaction fees that can be optionally included in each transaction
(an incentive to keep mining when the reward is small).
So sending money with BTC in the future will not be free
as miners will prioritize the transactions with larger fees.
* it can happen that blocks are solved at the same time -- then the blockchain splits.
This split is resovled once the next block is solved as clients will use the longest chain available.
* blocks can't be precomputed and injected into the network at a convenient time
because the `SHA256` includes the previously solved block's hash
* cool: the network hash rate is constantly increasing as specialized hardware is developed
and more nodes join the network -- this results in faster block solutions.
But every two weeks the network's software recalibrates the "puzzle"
to keep the block solution time at about ten minutes.
* Litecoin, by comparison, operates with a 2.5min block time.
A smaller block time means waiting a shorter amount of time before a transaction is verified by the network,
but it also means it's easier for the blockchain to fork,
and mining guilds could sieze control of the chain in an easier fashion.
