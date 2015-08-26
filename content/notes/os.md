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
* the MMU looks up the page number in the page table
and gets the corresponding physical page number,
combining that with the offset produces a PA
* page tables are often implemented as sparse arrays or associated arrays
since most processes don't use even a small fraction of their virtual address space
* wikipedia has a [nice article](https://en.wikipedia.org/wiki/Virtual_memory) on this topic
but the gist is that VM is used for security,
to hide memory fragmentation
and, via paging, to allow programs to use more memory than is physically present on the system
* Unix calls this moving of memory pages between RAM and disk "swapping,"
and an entire hard disk partition may be devoted to this (the swap partition)

memory segments:

* data corresponding to a running process has four segments:
* a text segment consisting of the machine language instructions that constitute the program,
* a static segment with variables allocated by the compiler (global vars and local vars declared `static`),
* another static segment with the run-time stack, itself consisting of stack frames
(stack frames contain parameters and local variables of a function)
* the heap segment with chunks of memory allocated at run-time


### Ch4 - the file system

* the file system abstraction is that of a key-value store
with filenames as keys and the contents of a file (the sequence of bytes) as the value
* the OS translates the byte-based operations we carry out in programs
into block-based operations on the storage level
* when a file is opened the initial block is read into memory
and a variable is stored to track our position in the file
* as we read through, we increment that position tracker
and when there are no more bytes to read, we try to fetch the next block
* we also track the fact that this file is currently open for reading
* data for writing to a file is also stored in memory until a full block is available
* let's talk speed:
a 2GHz processor completes an instruction every 0.5ns,
an SSD will read a 4KiB block (4x2^10B) in 25us and write one in 250us
whereas a disk drive will take 2-6ms to read a block.
So the CPU will complete ~10M instructions while waiting for data from the hard drive.
* OSs and hardware will do things like prefetching, buffering and caching
to try to reconcile these differences in storage retrieval and processing speeds
* OSs aren't required to place data contiguously on a disk --
a data structure called an "inode" (index node) tracks where each block is on a disk.
* inodes track permissions, ownership, modified times and accessed times
and block numbers for the first 12 blocks that make up a file
* inodes use single-, double-, and triple- indirection blocks which point to other blocks,
allowing us to reference files up to 8TiB.
Other file systems handle things differently --
FAT for instance has a big linked list of entries pointing to blocks
* file systems have to track block allocation,
Unix currently uses ext4 but may soon move to btrfs (a B-tree based filesystem)
* the Unix "everything is a file" and "files are streams of bytes" ideas
are useful for piping around data and handling network streams

notes from [IITK](http://www.iitk.ac.in/LDP/HOWTO/Unix-and-Internet-Fundamentals-HOWTO/disk-layout.html)

* each partition on a disk is either swap (for virtual memory) or part of a file system
* the first partition is often the boot partition, where a kernel would be located
* an inode pool exists in the lowest-level blocks -- each inode describes a file
(but doesn't know the filename).  The filename is stored in the directory structure
which maps names to inodes so multiple true names (hard links) are possible in Unix
* on boot, other partitions are mounted as directories onto the root partition


### Ch8 - multitasking

interrupts:

* beyond just running several processes on multiple cores,
each core can switch between processes quickly
* the kernel, the lowest-level software, implements multitasking
by handling interrupts -- an event taht stops the normal instruction cycle
and causes the flow of execution to jump to an interrupt handler
* (hah, the "shell" is so named because it surrounds the kernel..)
* a NIC might create a hardware interrupt when a packet arrives,
or a disk drive might raise an interrupt when some data transfer completes
* software interrupts might be raised when an instruction cannot compelte,
e.g. division by zero
* programs needing to access a hardware device will issue a system call
which triggers an interrupt and causes the execution flow to jump to the kernel
* the program state must be saved before executing an interrupt --
the hardware state (state of registers) must also be saved and then later restored
before the interrupted process resumes
(the interrupted process will generally not know there ever was an interruption)
* note that we only save the state of hw registers that will be used
* context switches (switch to another process) are time consuming
as the MMU might need to be cleared, new data has to be loaded into the new process
and more registers have to be saved
* the kernel's scheduler deliberately interrupts processes for context switches --
processes are allowed to run for a small time slice and then they are stopped.
The scheduler may allow the process to resume or it may context switch.

process life cycle:

* each process, when created, tracks information about itself in the process control block:
* whether or not it is running, whether it's ready and waiting for a core to be free,
whether it's blocked, awaiting more events/data,
and whether it's done with exit status info that hasn't yet been read
* a process is created when a running program executes something like `fork` --
after this the scheduler may resume the parent process
* the scheduler can do some prioritization to, for instance,
prevent an interactive program from sitting in the `ready` state for too long
* these priorities are generally set based on how long a process stays in its time slice,
its connections to other processes and its CPU usage
* `nice` is the system call used to decrease its own priority
* real-time scheduling is more useful for robotic systems --
there would be better control of priority, deadlines for process completion
and pre-emption of low priority tasks by high priority tasks
