+++
date = "2015-07-31T10:24:12-07:00"
description = "RSA review from doctrina.org"
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


### basic background math
* if two numbers have a gcd of 1, then the smaller number
has a multiplicative inverse in the modulo of the larger number.
E.g. `gcd(4,9) = 1` so 4 has a multiplicative inverse in mod9,
and that happens to be 7 because `4 * 7 = 28 = 1mod9`.
Whereas 3 is in mod9 (the set of integers between 1 and 9)
but `gcd(3,9) = 3` (not 1) so 3 doesn't have a multiplicative inverse in modulo 9.
* another example: 9 has a multiplicative inverse in the modulo of 11
(11 is prime so any number between 1 and 10 can be used here),
and that is 5 because `5 * 9 = 45 = 1mod11`.
* and 2 has a multiplicative inverse in 7 (4): `2 * 4 = 8 = 1mod7`, anyway..
* for any prime number `p`, every number from `1` to `p-1`
has a gcd of 1 with p, and therefore has a multiplicative inverse in modulo p.
* Euler's totient `phi` is the number of elements that have a multiplicative inverse
in a set of modulo integers.  For example, `phi(7) = 6`.
For prime numbers, `p`, `phi(p) = p - 1`


### RSA
* first generate two large primes, `p` and `q`
* generate the modulus, `n`: `n = p * q`
* the totient `phi(n)` is calculated pretty easily because the totient is associative:
`phi(n) = (p - 1)(q - 1)`
* determine the public key `e`: a prime number chosen in `[3, phi(n)]`,
this is typically 65537 (2^16 + 1),
but `e` must have a gcd of 1 with `phi(n)`
* find the multiplicative inverse of `e` with respect to `phi(n)`,
this is the private key, `d`: `e * d = 1mod(phi(n))`
* then we can encrypt a message `m` with key `k` into (or out of) cyphertext `c`
via `c = m^k mod(n)`.  Encryption and decryption are mirrored operations.


### an example
* let's use the message `12` and the primes `17` and `19`,
so the modulus will be `323`.
* the totient, `phi(n)` is `16 * 18 = 288`
* and we can use a public key of `11` as it has a gcd of `1` with `phi(n)`
* the multiplicative inverse of `e = 11` with respect to `phi(n) = 288`
is `131` based on the Extended Euclidean Algorithm -- this will be the private key
* so we can encrypt our message `12` with the public key: `c = 12^11 mod(323) = 312`
* and we can decrypt with the private key via `m = 312^131 mod(323) = 12` (woo!)
* we could also have encrypted with the private key: `c = 12^131 mod(323) = 198`
and then decrypted with the public key: `m = 198^11 mod(323) = 12`


### asides
* Wikipedia has [nice pseudocode](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm#Modular_integers)
for using the Extended Euclidean Algorithm to find multiplicative inverses in some modulus
* Rabin-Miller primality tests are used (in multiple rounds) to find large numbers
that are extermely likely to be prime
* to get our message into a numeric format, we can convert a string into a bit array,
and then convert that into a number
