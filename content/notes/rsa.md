+++
date = "2015-07-31T10:24:12-07:00"
description = "RSA review from doctrina.org"
menu = ""
tags = ["reading"]
title = "rsa"

+++

At work we've been setting up [tinc](http://www.tinc-vpn.org) networks alongside OpenVPN.
I wanted to use the public key embedded in the OpenVPN crt with tinc,
so I started trying to parse the crt and use `pyasn1`
to create a public RSA key in a tinc-friendly format.
I was learning about the exponent and modulus in RSA when
I eventually realized the public key could be generated from the private key :|
but in the meantime here are some notes from
[reading about RSA](http://doctrina.org/How-RSA-Works-With-Examples.html).


#### basic background math
* if two numbers have a gcd of 1, then the smaller number
has a multiplicative inverse in the modulo of the larger number.
E.g. `gcd(4,9) = 1` so 4 has a multiplicative inverse in mod9,
and that happens to be 7 because `4 * 7 = 28 = 1mod9`.
Whereas 3 is in mod9 (the set of integers between 1 and 9)
but `gcd(3,9) = 3` (not 1) so 3 doesn't have a multiplicative inverse in modulo 9.
* for any prime number `p`, every number from `1` to `p-1`
has a gcd of 1 with p, and therefore has a multiplicative inverse in modulo p.
* Euler's totient `phi` is the number of elements that have a multiplicative inverse
in a set of modulo integers.  For example, `phi(7) = 6`.
For prime numbers, `p`, `phi(p) = p - 1`
