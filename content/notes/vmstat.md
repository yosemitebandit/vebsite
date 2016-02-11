+++
date = "2015-08-17T16:25:09-07:00"
description = ""
tags = ["reading", "ops"]
title = "vmstat"

+++

I typically use `top` to look at system performance and per-process metrics,
but `vmstat` gives an alternative look:

<!--more-->

```shell
mercury  ~  vmstat
procs ------------memory-------------- ---swap-- -----io---- -system-- ------cpu-----
 r  b  swpd     free     buff    cache   si   so    bi    bo   in   cs us sy id wa st
 1  0     0   272256    19132    96332    0    0  1169    18  134  481  6  5 89  1  0
```

Let's go through section-by-section:

```shell
procs
 r  b
 1  0
```

The first block shows running (or runnable, i.e. waiting-to-run) and blocked processes.

```shell
------------memory--------------
 swpd     free     buff    cache
    0   272256    19132    96332
```

Next we have various memory usages: virtual, idle, in-buffer and in-cache (kB by default).
Buffered memory is that which describes file metadata and tracks in-flight pages.
Cached data is the contents of those pages.

```shell
---swap--
  si   so
   0    0
```

Then there's the amount of memory swapped from disk.

```shell
----io----
  bi    bo
1169    18
```

And blocks received and written from and to a block device (e.g. a hard drive)
in blocks / second.  Blocks in linux are now 1024B.

```shell
 -system--
   in   cs
  134  481
```

There's a count of interrupts per second and context switches per second --
the latter just being the process scheduler giving time to different processes.

```shell
 ------cpu-----
 us sy id wa st
  6  5 89  1  0
```

Finally we have percentages of the total cpu time spent by
user code and kernel code.  There is also time spent idle,
time spent waiting for IO and time stolen from a VM.
You might also see `nice` time
which is the time spent running processes with a positive nice value.
A `0` nice value is normal, a negative value is higher priority.
So when a positive nice valued process is running,
it would get deprioritized if any other process started.
