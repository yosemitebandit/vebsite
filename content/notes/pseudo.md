+++
date = "2016-05-05T15:28:53-07:00"
location = "Mountain View"
tags = ["projects", "favorites", "rust"]
thumbnail = ""
title = "pseudo"

+++

I built a barebones webapp + cli to learn more about rust --
it's a "compiler" for pseudocode that runs in the cloud (:
Check out the site at [pseudo-lang.oakmachine.com](http://pseudo-lang.oakmachine.com)
and see the source [on github](https://github.com/yosemitebandit/pseudo).

<!--more-->

`pseudoc` is the local compiler -- it sends input files to the server,
and then it waits..polling an endpoint for results.
`pseudo_server` is a little postgres-backed webapp that handles input code submissions
and provides an interface for updating data.

I'm not sure I'd do another webapp in rust --
diesel (the ORM) and nickel (the routing + templating system) are still nascent projects.
I'm too much of a rust amateur to understand the myriad of
code generation, macro and trait-importing tricks that these projects rely on,
so writing the server side wasn't much fun.

I like rust's error handling and match patterns, and I'm loving the compiler,
so making the CLI, `pseudoc`, was fun.
And rust is supposed to be used for these kind of lower level utilities anyway,
so I'll probably stick with that in the near future.

Try it out!  And I apologize if it's slow (:
