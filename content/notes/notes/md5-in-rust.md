+++
date = "2016-04-29T14:42:27-07:00"
location = ""
tags = ["rust"]
thumbnail = ""
title = "MD5 in rust"

+++

Here's how to compute the MD5 of a string in rust:

<!--more-->

```rust
extern crate crypto;

use crypto::md5::Md5;
use crypto::digest::Digest;

fn main() {
  let must hasher = Md5::new();
  let s = "hi there!";
  hasher.input_str(&s);
  let hash = hasher.result_str();

  println!("{}", hash);
}
```

You'll also need to add a dependency in `Cargo.toml`: `rust-crypto = "0.2.35"` --
then you can build and run it:

```python
$ cargo build
$ cargo run
fd33e2e8ad3cb1bdd3ea8f5633fcf5c7
```

The thing that bothered me with this code was the need for `use crypto::digest::Digest;` --
without that line there is a build error.

```python
$ cargo build
   Compiling hash-test v0.1.0 (file:///Users/matt/hash-test)
src/main.rs:9:12: 9:21 error: no method named `input_str` found for type `crypto::md5::Md5` in the current scope
src/main.rs:9     hasher.input_str(&s);
                         ^~~~~~~~~
src/main.rs:9:12: 9:21 help: items from traits can only be used if the trait is in scope; the following trait is implemented but not in scope, perhaps add a `use` for it:
src/main.rs:9:12: 9:21 help: candidate #1: `use crypto::digest::Digest`
src/main.rs:10:23: 10:33 error: no method named `result_str` found for type `crypto::md5::Md5` in the current scope
src/main.rs:10     let hash = hasher.result_str();
                                     ^~~~~~~~~~
src/main.rs:10:23: 10:33 help: items from traits can only be used if the trait is in scope; the following trait is implemented but not in scope, perhaps add a `use` for it:
src/main.rs:10:23: 10:33 help: candidate #1: `use crypto::digest::Digest`
error: aborting due to 2 previous errors
Could not compile `hash-test`.

To learn more, run the command again with --verbose.
```

It's annoying that `crypto::digest::Digest` is seemingly unused in the code,
but the compiler does helpfully indicate that we're trying to use methods from traits that are not in scope.
It even recommends the trait to pull in, so I guess the workflow isn't too bad.
