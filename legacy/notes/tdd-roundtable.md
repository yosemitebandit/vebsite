+++
date = "2014-12-20T13:00:00-08:00"
thumbnail = ""
title = "tdd roundtable"
location = ""
tags = ["ops", "python", "reading", "watching"]

+++

I use TDD at work and even on some personal projects
so it was interesting to hear perspectives from Beck, Fowler and DHH.

[is tdd dead?](https://www.youtube.com/watch?v=z9quxZsLcfo)
- hangout with dhh, martin fowler and kent beck

 * betteridge's law says, of course, no
 * mostly just some interesting thoughts on their experiences
 * "if I can't write a test first I have no business writing it," says beck
 * "do programmers deserve to feel confident?" asks beck. (the answer must surely be yes.)
but dhh doesn't get that confidence from tdd,
interestingly..ah, he just doesn't like the red/green/refactor bit
 * for beck, it's about flow, "from specific to general, this kind of inductive style"
 * "to make a design's intermediate results testable comes with a cost..it comes with a benefit too," says beck,
and follows with a nice example of orthogonal functionality in a parser --
actually parsing vs, given a parse tree, computing the correct result
 * beck mocks almost nothing -- if he can't test everything with the real stuff,
he looks for another route; he's seen mocks returning mocks returning mocks..tests
too coupled to the implementation rather than the interface
 * fowler also avoids mocks

robert martin has a
[wrap up](http://blog.cleancoder.com/uncle-bob/2014/06/17/IsTddDeadFinalThoughts.html)
of this series

 * have to consider tdd as a team discipline

[when tdd fails](http://blog.8thlight.com/uncle-bob/2014/04/30/When-tdd-does-not-work.html)

 * claims tdd is ineffective at the physical boundary
and at the layer in front of the boundary that requires 'human fiddling'
 * not testing the human fiddling stuff doesn't sit well with me..
 * says you have to manually test the physical interaction at some point
and then trust a mocked driver, which I guess is true

also skimmed [monogamous tdd](http://blog.8thlight.com/uncle-bob/2014/04/25/MonogamousTDD.html)
which touches on similar topics:

 * interesting point about tdd vs integration-only tests;
could just go full integration testing with, say selenium.
but it fails the author's requirements of trustworthiness (essentially coverage) and speed

