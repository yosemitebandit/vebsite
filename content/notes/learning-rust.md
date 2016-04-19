+++
date = "2016-04-18T15:04:24-07:00"
location = ""
tags = ["reading", "rust"]
thumbnail = ""
title = "learning rust"

+++

I'd like to do some homegrown machine learning work in rust
so I'm going through [rustbyexample.com](http://rustbyexample.com).

<!--more-->

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
* ..


#### [piston tutorial](https://github.com/PistonDevelopers/Piston-Tutorials/tree/master/getting-started)
* ..
