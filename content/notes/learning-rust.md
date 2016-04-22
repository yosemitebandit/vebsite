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


#### tutorial from the [rust-lang book](https://doc.rust-lang.org/book/guessing-game.html)
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

* [error handling](https://doc.rust-lang.org/book/error-handling.html)
  * `unwrap` gets the result of a computation and panics if there was a problem
  * both the `Option` and `Result` implement `unwrap`
  * you'd typically ahve a function return an `Option` and then,
  in the caller, use `match` to handle the `Some` and `None` possibilities
  * in fact, `unwrap` does case analysis for you, and just panics on the `None` result
  * `map` is often used to handle the `None => None`, `Some(value) => Some(f(value))` boilerplate
  * there is also `unwrap_or` which allows `None` results to translate into a default value
  * `Result` is a "richer" version of `Option` -- it expresses the possibility of `Error(E)` or `Ok(T)`
  * the docs say you should use `Result` when you can --
  when it's possible to explain why something failed
  * there are "`Result` idioms` like `Result<i32>` which fixes the error type to a particular result
  (like `ParseIntError`) for convenience
  * `unwrap` is not conventional unless you're just writing something quick
  or when there truly is an error in the code that `unwrap` would expose --
  `expect` is the equivalent on `Option` types -- it just gives you something nicer to print
  * convert an `Option` to a `Result` with `ok_or`
  * `and_then` chains computations when there could be an error
  * you can also return early with the explicit `return` keyword
  * and the `try!` macro abstracts away the early return pattern
  (it returns the value or an error)
  * rule of thumb: define your own error enum, but a `String` is ok too, especially in apps:

```rust
#[derive(Debug)]
enum CliError {
    Io(io:Error),
    Parse(num::ParseIntError),
}
```

* [closures](https://doc.rust-lang.org/book/closures.html)
  * syntatic sugar around traits.. a section I have yet to cover
  * pipes denote closures (lambda expressions):

```rust
let plus_one = |x: i32| x + 1;
assert_eq!(2, plus_one(1));
```

* [variables and bindings](https://doc.rust-lang.org/book/variable-bindings.html)
  * "shadowing" is just establishing a new variable binding
  with the same name as another binding that's currently in scope --
  just calling `let` again..  You can also change the mutability of a variable when shadowing

* [functions](https://doc.rust-lang.org/book/functions.html)
  * rust is an expression-based language and expressions (unlike statements) return values --
  one declaration though is `let`
  * vars can also bind to functions: `let f: fn(i32) -> i32 = plus_one;`

* primitives
  * `u8` is an unsigned 8-bit integer (0 to 255) while `i8` is a signed integer: -127 to 128, I believe
  * slices -- to get everything: `let complete = &a[..];`
  * you can destructure tuples with `let`, ala: `let (a, b, c) = (1, 2, 3);`
  * tuples you access with dot notation: `tuple.0`, whereas arrays use brackets: `array[2]`

* comments
  * `rustdoc` and the doc comments (`\\\`) seem really cool..


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

#### [rustlings exercises](https://github.com/carols10cents/rustlings)
* hm gotta read more on borrowing..why is the type signature of `&array` different than `array`
(if `let array = [1,2,3];`)

#### [pnkfelix exercises](http://pnkfelix.github.io/rust-examples-icfp2014/)
