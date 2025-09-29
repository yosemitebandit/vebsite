+++
title = "Pseudo"
date = 2016-05-05
location = "Mountain View"
tags = ["projects", "favorites", "rust"]

[extra]
thumbnail = "projects/pseudo/code-screenshot.png"
+++

I built a barebones webapp + cli to learn more about rust --
it's a "compiler" for pseudocode that runs in the cloud (:
The source is [on github](https://github.com/yosemitebandit/pseudo).

`pseudoc` is the local compiler -- it sends input files to the server,
and then it waits..polling an endpoint for results.
`pseudo_server` is a little postgres-backed webapp that handles input code submissions
and provides an interface for updating data.

My idea was to be the human behind the "compiler,"
solving the problem to the best of my abilities using whatever coding language was requested.
While the service was live I got one request and my response was pretty slow, hah.

I'm not sure I'd do another webapp in rust --
diesel (the ORM) and nickel (the routing + templating system) are still nascent projects.
I'm too much of a rust amateur to understand the myriad of
code generation, macro and trait-importing tricks that these projects rely on,
so writing the server side wasn't much fun.

I like rust's error handling and match patterns, and I'm loving the compiler,
so making the CLI, `pseudoc`, was fun.
And rust is supposed to be used for these kind of lower level utilities anyway,
so I'll probably stick with that in the near future.
