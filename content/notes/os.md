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
