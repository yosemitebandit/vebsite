+++
date = "2016-07-20T18:35:04-07:00"
location = "Trenton"
tags = ["projects", "python"]
thumbnail = ""
title = "heckbot"

+++

I made a bid recommendation script for the card game "Oh Hell."
I think it worked well!  Or, I did a lot better with it than without it (:

<!--more-->

In Oh Hell you're given a hand of cards and asked to bid on the number of tricks you'll win.
You have to play the suit that's led if you have it,
and after the first round, trump suits come into play.
Each round you're given one less card in your hand.

So to play with some computational assistance,
you tell heckbot the cards in your hand, the number of players,
the trump card if there is one, and your position in relation to the dealer.
Then heckbot plays your cards against a whole lot of randomly generated opponent hands.
It plays very dumbly -- essentially randomly except wrt following suit,
and it keeps track of the number of tricks you win in each simulated round.

After the average number of tricks stabilizes, it tells you what that average is.
This can take 10k+ rounds, or sometimes only a few hundred if your hand is particularly good or bad.
Either way the operations are simple so this only takes a few seconds.
And that's it!  It won't tell you how to play, just what it thinks you should bid.
Sometimes it recommends a bid like 2.5, hah, which isn't super helpful.
But you should probably round down and play conservatively in that case.

The code is [on github](https://github.com/yosemitebandit/heckbot), check it out!
