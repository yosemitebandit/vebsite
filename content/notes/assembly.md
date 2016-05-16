+++
date = "2016-05-15T10:24:23-07:00"
location = ""
tags = ["reading", "cs", "drafts"]
thumbnail = ""
title = "assembly"

+++

Reading some things on assembly:

<!--more-->

### an [x86 primer](https://www.nayuki.io/page/a-fundamental-introduction-to-x86-assembly-programming)
* x86 CPUs have eight 32-bit, eight 16-bit and eight 8-bit registers --
the latter two being subparts of the eight 32-bit general purpose registers.
The 16-bit registers are `{ax, cx, dx, bx, sp, bp, si, di}` and are the bottom 16 bits
of the corresponding 32bit registers `{eax, ecx, ..edi}` (where `e` stands for "extended").
* the 8-bit registers are `{a1, c1, d1, b1, ah, ch, dh, bh}` --
they are the low and high eight bits of the `{ax, cx, dx, bx}` registers
* in most operations, two registers are given --
the first is a source and the second is a source and destination.
For example, `addl %ecx, %eax` would be something like `eax = eax + ecx;` in C notation,
with both `eax` and `ecx` having type `uint32_t`
* some operations take only one operator, like `notl %eax` is `eax ~= eax;`
and `incl %ecx` would be `ecx = ecx + 1;`
* for bit shifting we write `shll %c1, %ebx` which is `ebx = ebx << c1;`
* "immediate values" are just fixed vars and prefixed with `$` --
so `movl $0xFF, %esi` means `esi = 0xFF;`
* `movl` copies 32 bits from the first arg to the second arg --
not really "moving," just blowing away the second arg's contents
* see [this SO discussion](http://stackoverflow.com/questions/20247944)
on the suffixes in `movl`, `movw` and `movb` -- `l` indicates you're moving 32 bits,
`w` is 16 and `b` is 8
* you'll often need to write sequences of instructions -- you can't just try `addl %eax, %ebx, %ecx`
* there's a 32-bit register, `eflags` that some instructions modify --
it can largely be ignored though
* RAM and registers -- RAM is just a big array of bytes, it's system memory
* data is stored in little endian form --
bytes at lower memory addresses are loaded into the lower part of the register
(makes things appear to read backwards if you write out the addresses left to right)
* reading memory: `movb (%ecx), %a1` means (again in C-like notation) `a1 = *ecx;`
* writing: `movb %b1, (%edx)` means `*edx = b1;`
* you can also use memory operands in arithmetic instructions:
`addl (%ecx), %eax` means `eax = eax + (*ecx);` (reading 32 bits from memory)
or `addl %ebx, (%edx)` which means `*edx = (*edx) + ebx;` (reading and writing)
* there is a more ergonomic memory addressing syntax for inspecting arrays and handling indices
* instructions can be prefixed with labels ala:

```c-objdump
entry:  /* a label */
negl %eax  /* instruction with a label */
```

### more
* Bartlett's [Programming from the Ground Up](http://nongnu.askapache.com//pgubook/ProgrammingGroundUp-1-0-booksize.pdf)
* Petzold's [CODE](https://bobcarp.files.wordpress.com/2014/07/code-charles-petzold.pdf)
