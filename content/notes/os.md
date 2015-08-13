+++
date = "2015-08-13T09:45:52-07:00"
description = "notes on the Think OS book"
menu = ""
tags = ["reading", "cs"]
title = "os"

+++

Some notes on the [Think OS book](http://greenteapress.com/thinkos/)
from Green Tea Press.


### Ch1 - compilation

compiled vs interpreted languages:

* compiled langs like C are translated into machine language
and then executed by hardware
* interpreted langs like Python are read and executed by another software program,
an interepreter
* although there are C interpreters and Python compilers..
* and there are langs like Java which compile into an intermediate language,
Java bytecode, and then executed by an interpreter, the JVM
* compiled langs often have static types,
meaning you can look at the program and determine a variable's type
* static types are resolved at compile time
whereas dynamic types cannot be known until runtime
* these type declarations can help errors be found more quickly
(during compilation) whereas with a system like python
you need to test (execute) the code to be sure nothing raises a `RunTimeError`
* and these checks don't have to run during runtime,
so compiled languages get a speed boost from that
* compiled langs can also be more memory efficient
as they do not have to store type info

compilation steps:

* preprocessing: e.g. address all of the `#include` statements in a C file
* parsing: build an "abstract syntax tree" of the code
* static checking: check types and function calls
* code generation: generate machine or byte code
* linking: includes required libraries -- in Unix this is the job of `ld`,
the Unix linker, so named because "loading" is another step related to linking
* optimization: the compiler can perform its own optimizations during the previous steps

gcc:

* with the `-c` flag, machine code is generated, but not an executable
* this `.o` file is object code -- not executable in and of itself,
but it can be linked to form an executable
* the `-0` and `-01` (etc) flags will slowly increase optimization levels
* `-S` will generate assembly
* `-E` will run the preprocessor only (bringing in `include` files)


### Ch2 - processes

isolation:

* the process model provides isolation in an OS
* processes are "software objects" containing data and methods that operate on that data
* multitasking: the OS allows a process to be interrupted at almost any time,
its hardware state is saved and the process may resume later
* virtual memory: the OS makes it appear as though each process
has its own isolated, dedicated chunk of memory
* device abstraction: the OS allows processes to access the network interface,
graphics cards, the hard drive and other peripherals in an ordered way

unix processes:

* typing something in the shell, like `make`, will create a new process to run `make`
(via forking, I believe).
This will then create another process to run `LaTeX` and then another to display the output.
* `ps` will show running processes associated with the current terminal
* adding `-e` will show all processes, even those belonging to another user (!)
* "tty" comes from "teletypewriter"
* and the etymology of "daemon" has to do with helpful spirits (ala His Dark Materials)


### Ch3 - virtual memory

basics:

* running processes put their data in main memory, usually RAM
* memory is, for historical reasons, measured in binary units (e.g. gibibytes, or 2^30 bytes)
* each byte in main memory has a physical address --
in a 1GiB system the highest valid address is 2^30 - 1: `0x03ff ffff`

virtual memory:

* OSs provide virtual memory, the size of which is determined by the OS and the hardware:
in 32 bit systems the virtual address space runs from `0` to `0xffff ffff` (2^32 bytes),
in 64 bit systems the size of the virtual address space is 2^64 bytes
(16 exbibytes, ~ one billion times larger than typical physical address spaces)
* programs generate virtual addresses when reading and writing values in memory --
this is per-process, so even if the same virtual address is generated,
they map to different locations in physical memory, providing per-process isolation
* the memory management unit (MMU) sits between the CPU and main memory --
it performs translation between virtual and physical addresses
* VAs have two parts: the page number and the offset -- the page is just a chunk of memory
and the size of the page is typically around 1-4 KiB
* the MMU looks up the page number in teh page table
and gets the corresponding physical page number,
combining that with the offset produces a PA
* page tables are often implemented as sparse arrays or associated arrays
since most processes don't use even a small fraction of their virtual address space
* wikipedia has a [nice article](https://en.wikipedia.org/wiki/Virtual_memory) on this topic
but the gist is that VM is used for security,
to hide memory fragmentation
and, via paging, to allow programs to use more memory than is physically present on the system
* unix calls this moving of memory pages between RAM and disk "swapping,"
and an entire hard disk partition may be devoted to this (the swap partition)

memory segments:

* data corresponding to a running process has four segments:
* a text segment consisting of the machine language instructions that constitute the program,
* a static segment with variables allocated by the compiler (global vars and local vars declared `static`),
* another static segment with the run-time stack, itself consisting of stack frames
(stack frames contain parameters and local variables of a function)
* the heap segment with chunks of memory allocated at run-time
