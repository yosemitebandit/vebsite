+++
date = "2015-09-13T11:35:04-07:00"
description = ""
menu = ""
tags = ["reading"]
title = "clojurescript"

+++

I'm going through the [cljs quickstart](https://github.com/clojure/clojurescript/wiki/Quick-Start)
as I wait for the lispcast Om video to come out..

* need javac 1.8 (aka JDK 8) and the ClojureScript JAR in the root of the project
* this is a lein-less tutorial, presumably there are other projects that provide that templating
* cljs uses the Google Closure Library to provide namespaces, dependency maps and other features
* a clojure build script sits in the top level of your directory:

```clojure
(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:main 'hello-world.core
   :output-to "out/main.js"})
```

* you can use `cljs.build.api/watch` to recompile when files are changed
* you can also make production builds that take advantage of dead code elimination
* cljs supports an in-browser repl and can also be run with node
* deps are most easily included as JARs, often from [CLSJS](http://cljsjs.github.io/)
* you can also setup deps with lein
