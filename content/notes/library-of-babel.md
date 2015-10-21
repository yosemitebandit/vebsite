+++
date = "2015-10-12T22:51:12-07:00"
description = ""
menu = ""
tags = ["reading"]
title = "library of babel"

+++

I'm reading about the fascinating [Library of Babel](https://libraryofbabel.info/theory4.html):
a site created to realize the excellent Borges short story of the same name.
The books in the library have 410 pages each, each page containing 3200 chars.
All the books in the library have every possible page of 29 chars.
So for perspective: the Library of Congress contains 37M (~`10^7.57`) books.
The Library of Babel would have `10^4685` books by my calculation.
Meanwhile the poor universe has only `10^80` atoms to put to use.

I understood the idea of using seeds to reliably generate random text
since storing pregenerated books would be impossible.
But I was perplexed about how the virtual library created for that site could be searchable.
To make this possible a reversible pseudorandom number generator was used.

> This means that for any block of text,
> the program can work backwards to calculate its location in the library
> (the random seed which would produce that output).
> I couldn’t help but feel that the result was a computer-age form of gematria,
> converting text to numbers and back again to text.

A [Halton Sequence](https://en.wikipedia.org/wiki/Halton_sequence) was also considered --
this sequence would've been handy to know about for my work on [uniform sampling](/uniform-sampling-in-a-polygon).

One of my favorite parts: the creator, Jonathan Basile,
taught himself C++ to make the library a reality.
