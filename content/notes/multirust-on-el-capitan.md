+++
date = "2016-05-02T11:57:12-07:00"
location = ""
tags = ["rust", "ops"]
thumbnail = ""
title = "multirust on El Capitan"

+++

Here's how to setup multiple rust toolchains setup on El Capitan.

<!--more-->

First uninstall any old toolchains you might have
(I just had a vanilla install of stable 1.8):

```python
$ /usr/local/lib/rustlib/uninstall.sh
```

Then trust brson and grab multirust,
this will use the stable toolchain by default:

```python
$ curl -sf https://raw.githubusercontent.com/brson/multirust/master/blastoff.sh | sh
```

Get GPG so rust binaries can be verified, then add the nightly toolchain:

```python
$ brew install gpg
$ multirust update nightly
```

Now start a new project (the [diesel demo](http://diesel.rs/guides/getting-started/), in my case)
and use the nightly toolchain:

```python
$ cargo new diesel_demo
$ cd diesel_demo
$ multirust override nightly
```

Read more about using alternative toolchains
on the [multirust project page](https://github.com/brson/multirust).
