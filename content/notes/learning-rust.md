+++
date = "2016-04-18T15:04:24-07:00"
location = ""
tags = ["reading", "rust"]
thumbnail = ""
title = "learning rust"

+++

I'd like to do some homegrown machine learning work in rust
so I'm going through some tutorials..

<!--more-->

#### [rust by example](http://rustbyexample.com)
* the compiler is great, have yet to find a way to get compilation results in vim's quickfix window,
syntastic is also missing errors
* I smiled at the "return on the statement with no semicolon" idea --
can also drop the last semicolon if it's the last statement in a scope, I think
* underscores for readability in ints is cool --
like `1_000_000u32` is one million
* print formatting:

```rust
println!("{:.2}deg C", 23.456");
=> 23.46deg C
```

* arrays: known size at compile time and all objects within them have the same type,
slices: unknown size at compile time, vectors: growable array type:

```rust
// array
let xs: [i32; 5] = [1, 2, 3, 4, 5];
// vector
let mut vec = vec![1, 2, 3];
vec.push(4);
let mut vec2 = Vec::new();
vec2.push(1)
vec2.pop()
// slice (of a vec)
let vec = vec![1, 2, 3];
let int_slice = &vec[..];
// or borrow a whole array as a slice
analyze_slice(&xs);
// or just take a bit
analyze_slice(&ys[1 .. 4]);
```

* [discussion](http://stackoverflow.com/questions/24771655) on `Option`
(enums with `Some` and `None` variants) -- you might see these when accessing slices
* panics still possible if you out-of-bounds index an array :((


#### tutorial from [rust-lang book](https://doc.rust-lang.org/book/guessing-game.html)
* rust automatically imports ["the prelude"](https://doc.rust-lang.org/std/prelude/)
into every program -- there is also an io prelude..but I don't really get what that's about,
just more imports I think
* because `fn main() {` doesn't include a return type, it's assumed to be an empty tuple
* `String::new()` creates a growable, UTF-8 encoded portion of text
* the `::` means `new` is a static method -- a method associated with `String` itself,
rather than with a particular instance of a `String`
* breaking down this line:

```rust
io::stdin().read_line(&mut guess).expect("failed to read line");
```

* `read_line(&mut guess)` calls the method on a mutable reference to `guess` --
rust uses these references to reduce copying.
References are immutable by default.
* why `expect` -- it has to do with the return of `read_line` (an `io::Result`) --
there is an `expect` method on this type
that takes the value it's called with and `panic!`s with that message

* [cargo.toml vs cargo.lock](http://doc.crates.io/guide.html#cargotoml-vs-cargolock) --
commit the lock file for binaries, leave it out for libs.
There are ways to update the lock file -- sometimes it's automatated and sometimes not,
see [here](https://doc.rust-lang.org/book/guessing-game.html#generating-a-secret-number)

* hm, not a fan of this: have to call `extern crate rand;` then `use rand::Rng;` to get
the `Rng` train in scope, then we can call `rand::thread_rng.gen_range(1, 101);` --
need to learn more about traits, I think..would be nicer if there was an explicit use of `Rng`

* this statement: `let guess: u32 = guess.trim().parse().expect("need a number!");`
converts guess into an `int` (and feeds rust the expected type, `u32`)
* switch from `expect` to `match` if you actually want to handle the error (and not panic)
* `_` is a catch all -- like if you don't know what error type you might raise


#### [piston tutorial](https://github.com/PistonDevelopers/Piston-Tutorials/tree/master/getting-started)
* `impl` provides the ability to use the "method call syntax" --
`circle.area()` or something chained like `finances.report().send()`
* they also recommend the [builder pattern](https://doc.rust-lang.org/book/method-syntax.html)

#### other notes
* you can use `cargo` like `pip` via `cargo install pulldown-cmark` --
this looks to `crate.io` for the referenced markdown processor
and, if a binary target is specified in the repo's `Cargo.toml`,
it'll install to your system.
..Although the two markdown bins I just installed aren't working for me :|
`markdown` and `pulldown-cmark` are both having issues.
