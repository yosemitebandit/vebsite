+++
date = "2016-05-15T10:24:23-07:00"
location = ""
tags = ["reading", "cs"]
thumbnail = ""
title = "assembly"

+++

Reading some things on assembly:

<!--more-->

### an [x86 primer](https://www.nayuki.io/page/a-fundamental-introduction-to-x86-assembly-programming)

basics:

* x86 CPUs have eight 32-bit, eight 16-bit and eight 8-bit registers --
the latter two being subparts of the eight 32-bit general purpose registers.
The 16-bit registers are `{ax, cx, dx, bx, sp, bp, si, di}` and are the bottom 16 bits
of the corresponding 32bit registers `{eax, ecx, ..edi}` (where `e` stands for "extended").
  * the 8-bit registers are `{a1, c1, d1, b1, ah, ch, dh, bh}` --
  they are the low and high eight bits of the `{ax, cx, dx, bx}` registers

instructions:

* in most operations, two registers are given --
the first is a source and the second is both a source and destination.
  * for example, `addl %ecx, %eax` would be something like `eax = eax + ecx;` in C notation,
  with both `eax` and `ecx` having type `uint32_t`
  * some operations take only one operator, like `notl %eax` is `eax ~= eax;`
  and `incl %ecx` would be `ecx = ecx + 1;`
* for bit shifting we write `shll %c1, %ebx` which is `ebx = ebx << c1;`
* "immediate values" are just fixed vars and prefixed with `$` --
so `movl $0xFF, %esi` means `esi = 0xFF;`
  * `movl` copies 32 bits from the first arg to the second arg --
  not really "moving," just blowing away the second arg's contents
  * (see [this SO discussion](http://stackoverflow.com/questions/20247944)
  on the suffixes in `movl`, `movw` and `movb` -- `l` indicates you're moving 32 bits,
  `w` is 16 and `b` is 8)
* you'll often need to write sequences of instructions -- you can't just try `addl %eax, %ebx, %ecx`

registers and memory:

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
entry:  // a label
negl %eax  // instruction with a label
```

jumps and machine code:

* and then you can jump to labels ala: `jmp entry` --
and there are lots of conditional jumps like `ja`: jump if above
* every machine code instruction is translated into 1-15 bytes of machine code
and the `eip` register tracks the current instruction being executed.
The CPU knows how to advance `eip` after each instruction.

the stack:

* just a region of memory addressed by the `esp` register
* grows downward -- larger addresses to smaller ones
* to push a 32-bit value onto the stack, you first decrement `esp` by 4,
then store your value starting at address `esp`
* to pop a value, read memory starting from `esp` (into some other register or discard)
then increment `esp` by 4
* `call` (used in functions) will first push the next instruction address onto the stack,
so after `retl` (which pops the address into `eip`) you can run the next bit of code --
C convention puts some (or all) of the args onto the stack as well
* on 32bit x86 Linux, the function caller (parent) pushes args from right to left onto the stack,
calls the function, receives the return value in `eax` and pops the args
* [more notes on the stack](https://www.cs.umd.edu/class/sum2003/cmsc311/Notes/Mips/stack.html)
  * notice that when you call a function, there is some scoping that occurs
  so internal vars don't leak, and successive calls of the same function have private memory, in a sense
  * when a program starts executing,
  a certain contiguous setion of memory is set aside -- this is the stack
  * the stack pointer has some lower bound, "the stack limit" --
  annoyingly, the "stack bottom" is actually the largest valid address
  * when the stack is initialized, the stack pointer points to the stack bottom
  * note that after popping, data is still on the stack (second diagram)
  but values below the stack pointer are considered invalid,
  so we've basically freed that memory..
  this is also how you can accidentally use pointers to local vars and have it work sometimes
  and fail other times
  * for each function call there's a reserved section in the stack for the function itself,
  its args and its return value, this is the "stack frame"
  * a frame pointer is used to track the location of the stack pointer,
  before the stack pointer was modified to handle a function's local vars --
  then you can easily return, moving the stack pointer back
  and effectively popping the function's allocated memory off of the stack
  * if that function calls another function, I presume another frame pointer is generated..
  * if too many stack frames are pushed, we enter into invalid memory
  and the OS will kill the program with a stack overflow error
  * the page notes that with RISC (?), using the stack is discouraged
  as it's in RAM and 100x slower than accessing a register
  * Fortran 77 doesn't use a stack, functions had sections of memory for their data and args --
  this prevented the use of recursion

64 bits:

* the 8 general purpose registers are just extended to be 64 bits long --
they're renamed to `{rax, rcx, rdx, rbx, rsp, rbp, rsi, rdi}` and,
as with the 8 bit and 4 bit variants, the 32bit variants (`eax`, etc)
occupy the lower 32bits of the new larger registers
* and there are 8 new 64-bit registers: `{r8, r9, r10, r11, r12, r13, r14, r15}`
(and these have 32, 16 and 8 bit sub-registers)
* all memory pointers must be 64bit


### more
* Bartlett's [Programming from the Ground Up](http://nongnu.askapache.com//pgubook/ProgrammingGroundUp-1-0-booksize.pdf)
* Petzold's [CODE](https://bobcarp.files.wordpress.com/2014/07/code-charles-petzold.pdf)
