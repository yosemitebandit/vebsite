+++
date = "2016-04-18T15:04:24-07:00"
location = ""
tags = ["reading", "rust"]
thumbnail = "/img/rustacean-thumbnail.png"
title = "learning rust"

+++

I'd like to do some homegrown machine learning work in rust
so I'm going through some tutorials..

<!--more-->

### [rust by example](http://rustbyexample.com)
* the compiler is great, have yet to find a way to get compilation results in vim's quickfix window,
syntastic is also missing errors --
Neomake works ok though, (here's [my post on getting that setup](/neovim))
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

#### structs, enums and constants
* unit, tuple and classic C-like structs are all possible --
structs can also contain other structs
* `let` can destructure a struct
* use attribute notation to access fields, ala `point.x`
* create types with `enum` -- good examples [here](http://rustbyexample.com/custom_types/enum.html)
with variant creation and matching
* `use` with enums brings names in to scope
* can also use an `enum` as an integer, just like C
* the `Box` is heap-allocated, by the way -- recall the heap is memory space shared by all programs,
while each thread in an app will have its own stack
* `'static` lifetimes last for the duration of the running program

#### casting, literals and inference
* you use the `as` keyword..very nice:

```rust
let number = 123.45678;
let integer = decimal as u8;
```

* `i32` and `f64` are assumed -- you can also append the type ala `let x = 3u8;`
* with the exception of primitives, types must use CamelCase --
relevant when you perform type aliasing: `type NanoSecond = u64;`
(this provides no extra type safety though --
anything that's `u64` under the hood can be added to a `NanoSecond`)

#### match
* tuples can be destructured in a `match` --
see the example [here](http://rustbyexample.com/flow_control/match/destructuring/destructure_tuple.html)
* destructuring (`&`, `ref` and `ref mut`) is different than dereferencing (`*`)
* the destructuring in `match` seems to be done just so we modify the vars in the `match` block,
that is, both of these work:

```rust
let mut x = 5;

match x {
    v => println!("it's just a value, {}", v);
}

match x {
    &v => println!("now I've made it a ref, {}", v);
}

match x {
    ref mut v => {
        // deref it here so we can modify it
        *v += 10;
        println!("now I've modified it, {}", v);
    }
}

println!("strangely this is 15, {}", x);
```

* for ranges, an interesting `@` binding
[is also possible](http://rustbyexample.com/flow_control/match/binding.html)
* `if let` is cleaner than `match` sometimes
* `while let` is a thing too..
* note that a `ref` borrow on the left side of an assignment
is the same as an `&` borrow on the right:

```rust
let c = 2;
let ref ref_c1 = c;
let ref_c2 = &c;
```



### the [rust-lang book](https://doc.rust-lang.org/book/guessing-game.html)
* rust automatically imports ["the prelude"](https://doc.rust-lang.org/std/prelude/)
into every program -- there is also an io prelude..but I don't really get what that's about,
just more imports I think
* because `fn main() {` doesn't include a return type, it's assumed to be an empty tuple
* `String::new()` creates a growable, UTF-8 encoded portion of text
* the `::` means `new` is a static method -- a method associated with `String` itself,
rather than with a particular instance of a `String`
* you could also write `String::from("hi");` to build a `String` from an `&str` (string slice)
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
  * you'd typically have a function return an `Option` and then,
  in the caller, use `match` to handle the `Some` and `None` possibilities
  * in fact, `unwrap` does case analysis for you, and just panics on the `None` result
  * `map` is often used to handle the `None => None`, `Some(value) => Some(f(value))` boilerplate
  * there is also `unwrap_or` which allows `None` results to translate into a default value
  * `Result` is a "richer" version of `Option` -- it expresses the possibility of `Error(E)` or `Ok(T)`
  * the docs say you should use `Result` when you can --
  when it's possible to explain why something failed
  * there are "`Result` idioms" like `Result<i32>` which fixes the error type to a particular result
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
  * `rustdoc` and the doc comments (`\\\`) seem cool..

* `if`
  * `if` is an expression so you can do `let y = if x == 5 { 10 } else { 3 };`
  because the value of the expression is the value of the last expression in the chosen branch

* loops
  * `loop` just goes infinitely and the compiler handles it better than `while true`
  * you can enumerate `for` loops: `for (i, v) in (5..10).enumerate() { .. }`
  * `break` and `continue` work as they do in python
  * cool -- "loop labels" let you break or continue out of a specific inner or outer
  or somewhere-in-between loop: `'outer: for x in 0..10 { .. }`

* [ownership](https://doc.rust-lang.org/book/ownership.html)
  * if you bind a variable, then pass that var to a function, the fn now owns the var
  and you won't be able to use it..so you use refs
  * traits are annotations to types that change the behavior of the type
  * all primitives implement the `Copy` trait so that copies of data are assigned if a variable is used --
  so really that first bullet I wrote is only applicable to non-primitives, like for `Vectors` for instance
  * (aside: you can use a leading underscore on unused vars to prevent a compiler warning)
  * references are used in arguments: `fn test(v1: &Vec<i32>) { .. } -> i32`
  and thus also in args: `let answer = test(&vector);`
  * references are immutable -- so you can't push new values into a vector reference
  * you can also do weird stuff with [`&mut` refs](https://doc.rust-lang.org/book/references-and-borrowing.html#mut-references) --
  you may see the deref syntax with `*` for stuff like this
  * there are [borrowing rules](https://doc.rust-lang.org/book/references-and-borrowing.html#mut-references) --
  one or more `&T` refs to a resource, but /only/ one mutable reference `&mut T` to prevent data races
  * scopes matter and the compiler will give you good info about where scopes begin and end
  * even printing borrows: `println!("{}", x);` -- that's a borrow on `x`
  * this all prevents stuff like..modifying collections over which you are iterating, and use after free
  * declaration order matters!  you need to define `let x = 5;` before you can: `let y: &i32`
  if your plan is to `y = &x;`
  * lifetimes: declared in the `<>` of a function call, ala: `fn bar<'a>(x: &'a i32)` --
  other "generic parameters" can be in the `<>`, by the way
  * could also have `&'a mut i32` as "a mutable reference to an `i32` with the lifetimes `'a`

* [strings](https://doc.rust-lang.org/book/strings.html)
  * unicode scalar values encoded as a stream of UTF-8 bytes
  * `&str`: string slices -- has a fixed size
  * string literals are statically allocated (saved inside the compiled program) --
  `let greeting = "hi there";` is of type `&'static str`
  * you can tell if you've got a string slice with the `'static` lifetime
  if the data of the string lives in the code itself
  * multiline via `\` or just continue writing to preserve the whitespace
  * `Strings` are heap-allocated and growable --
  they are often created by converting a string slice via `to_string`
  * convert the other way (`String` to `&str`) via `&`..or sometimes `&*` if a trait is needed
  * use `.as_bytes()` or `.chars()` to index a string
  * slicing works, though you get byte offsets, not char offsets
  * concatenate with `+` or with [`format`](https://github.com/nrc/patterns/blob/master/idioms/concat-format.md) --
  though the latter may not be the most efficient



### [piston tutorial](https://github.com/PistonDevelopers/Piston-Tutorials/tree/master/getting-started)
* `impl` provides the ability to use the "method call syntax" --
`circle.area()` or something chained like `finances.report().send()`
* they also recommend the [builder pattern](https://doc.rust-lang.org/book/method-syntax.html)



### other notes
* you can use `cargo` like `pip` via `cargo install pulldown-cmark` --
this looks to `crate.io` for the referenced markdown processor
and, if a binary target is specified in the repo's `Cargo.toml`,
it'll install to your system.
..Although the two markdown bins I just installed aren't working for me :|
`markdown` and `pulldown-cmark` are both having issues.
* `rust-clippy` and `cargo-clippy` are neat linters
* [arewewebyet.org](http://www.arewewebyet.org/) has good framework suggestions
  * here's a post on using [iron](https://blog.wearewizards.io/trying-rust-for-web-services)
  * and another on building [http test](https://github.com/brson/httptest)



### [rustlings exercises](https://github.com/carols10cents/rustlings)
* hm gotta read more on borrowing..why is the type signature of `&array` different than `array`
(if `let array = [1,2,3];`)
* there is no `assert_not_eq!` macro but you can just negate stuff with `!`: `assert!(!false)`



### [pnkfelix exercises](http://pnkfelix.github.io/rust-examples-icfp2014/)



### Alex Crichton's talk [(slides)](http://people.mozilla.org/~acrichton/rust-talk-2014-12-10/#/)

{{% youtube agzf6ftEsLU %}}

* there is explicit memory management and reference counting if you want it via `std::rc::Rc`
* values can be frozen by borrowing -- his example:

```rust
let mut a = Vec::new();
{
    let b = &a
    a.push(1);   // error
}
a.push(2);  // valid -- the b borrow has ended
```

* mutability propagates deeply into owned types (think nested structs)
* `spawn(proc() { .. });` is a nice way to achieve parallelism
* an `enum` can have data -- and you can do something with that data when you match
* `&` pointers are never null -- but you can have the `Option` type be `None`
* there can only ever be one mutable pointer to your data
* most FFI happens in `unsafe` blocks since you can't guarantee a foreign function's signature
or how it affects the stack



### [too many lists tutorial](http://cglab.ca/~abeinges/blah/too-many-lists/book/)

* `Box<T>` provides simple  heap allocation -- see [this answer](http://stackoverflow.com/a/25296420/232638)
for more: "One way ot regard `Box<T>` is that it's a normal `T` with the guarantee that it has a fixed size."
* on non-static methods: `&` is for methods that only want to observe `self` --
most methods actually don't want `self` as taking it would prevent other locations from accessing it
* I think `Option` as well as `Some` and `None` (`Option` variants) are part of the prelude import
* `mod` creates modules (and adjusts namespaces.. you might need something like `use super::List;`)
* and the `[cfg(test)]` block tells the compiler to only compile a block during test
* the `Drop` trait is a destructor -- if you contain types that implement `Drop`, you don't need to implement it on your own
* `impl Drop for List` is the syntax for implementing a trait (an interface)
* `while let` will do a thing until a pattern doesn't match
* `Option` has a method, `take`, that is very similar to the `mem::replace(&mut option, None)` idiom
(taking the value out of the option, leaving a `None` in its place)
* `match option { None => None, Some(x) => Some(y)` is also a popular idiom --
we use `map` + a closure (the `|` syntax) for it
* generics..just sprinkle in the `<T>`s -- see [this example](http://cglab.ca/~abeinges/blah/too-many-lists/book/second-generic.html) --
used it to make a linked list handle datatypes besides `i32`
* lifetimes: the name of a scope somewhere in a program --
when refs are tagged with a lifetimes, we're saying the ref must be valid for the entire scope
* you work with lifetimes at the type and API level,
telling the compiler about the relationship between different lifetimes --
this isn't necessary within a function
* [examples of lifetime elision](http://cglab.ca/~abeinges/blah/too-many-lists/book/second-iter.html):
  * one input reference means the output must be dervied from that input
  * many inputs: assume they all have independent lifetimes
  * with methods: assume all output lifetimes are derived from `self`
* and there is more with `Arc`..maybe later


### [learn x in y minutes](https://learnxinyminutes.com/docs/rust/)
* an example of "more advanced matching" where there is an additional if tree --
that is apparently a "match guard" -- see [here](http://rustbyexample.com/flow_control/match/guard.html)
* terse examples of references and borrowing



### [my friend Suchin's post on matrix multiplication](http://www.suchin.co/2016/04/25/Matrix-Multiplication-In-Rust-Pt-1/)
* nice example of `fold` and `ArrayView`



### [learn you a rust for greater good](http://pro.theta.eu.org/2016/03/12/learn-you-a-rust-for-great-good.html)
* talk of borrows and mutable borrows
[in the second part especially](http://pro.theta.eu.org/2016/03/18/lyar-borrows.html)
* by default, variable bindings have "move semantics,"
but some types implement `Copy` (giving them "copy semantics"),
meaning we don't have to pass around refs all the time -- this is true for the primitives


### [24 days of rust](http://zsiciarz.github.io/24daysofrust)


### the rust-lang blog
* [on traits](http://blog.rust-lang.org/2015/05/11/traits.html)
* [on FFI](http://blog.rust-lang.org/2015/04/24/Rust-Once-Run-Everywhere.html)
