+++
date = "2015-08-19T17:58:30-07:00"
description = "on learning clojure"
tags = ["watching", "reading", "clojure"]
title = "clojure"

+++

going through the [LispCast Clojure Tutorial videos](http://www.purelyfunctional.tv)..

* methods like `contains?` that end in `?` return a boolean by convention
* the `dotimes [e n]` form will execute some block `n` times,
maintaining a counter in `e`
* sets are collections that look like `#{:milk :egg :flour}` --
duplicate keys cannot be included
* multi-arity functions often follows this pattern:

```clojure
(defn add-ingredient
  ([ingredient]
    (add-ingredient ingredient 1))
  ([ingredient amount]
    ; ...
  ))
```

* if/elif/else statements can be constructed with `cond`.
Interestingly, you just use the `:else` keyword to trigger the last statement
as keywords are truthy.
* or, if the conditional is simple enough you can just use `if` --
the first form will execute if true, the second if false.
* `into` will push values into a map:

```clojure
(def ingredients {:flour 2 :sugar 3})
(defn multiply-ingredients [n ingredients]
  (into {}
    (for [[ingredient amount] ingredients]
      [ingredient (* n amount)])))
(multiply-ingredients 3 ingredients)
; {:flour 6 :sugar 9}
```

* also notice (in the above example) the unpacking of the map via `for`
* accessing values in a map is about as terse as imaginable:

```clojure
(def order {:items {:cake 3 :cookies 4}})
(:cake (:items order) 0)
; 3
```

* if there was no `:cake` keyword in the `:items` map,
the default of `0` would be returned
* function names can be pretty zany: `order->ingredients` (which I think is awesome)
* `let` creates a scoped binding for some variable(s) ala:

```clojure
(let [items (:items order)
      racks (:racks status)])
```

* the `(defn -main [])` form is special -- it is the static function used by `lein run`
* `(partition n coll)` returns a sequence of lists of `n` items each
(note how the "remainder" of 9 and 10 are dropped):

```clojure
(partition 4 (range 10))
;;=> ((0 1 2 3) (4 5 6 7))
```


now on to a [vim-fireplace tutorial](http://clojure-doc.org/articles/tutorials/vim_fireplace.html)

* hm, sometimes I have to completely reload the repl, bummer
(`cpR` isn't enough to get changes to the test file to reload)
* ah, later in the tutorial they point out you might indeed have to restart the repl
or try `cq` and unmap the test from the namespace: `(ns-unmap *ns* 'a-test)`.
Though to be honest I don't understand the quasi-repl provided by `cq`..
* `K` gives documentation about a given symbol

* the `%` motion is helpful to go between matching parens
* block motions are arguably better though -- `ab` (all block) and `ib` (inner block)


back to purely functional for their webapp series:

* `ring` is the standard that presents a standard interface
for frameworks like jetty, netty and others.
It consists of adapters, middleware and handlers.
Adapters convert HTTP reqs into Ring Requests.
Recall that middleware can modify requests /and/ responses
* `compojure` is the ring lib used for routing and HTTP method switching
* `handle-dump` is another nice function within ring, useful for debugging requests
* you use `defroutes` to specify paths:

```clojure
(defn calc [req]
  (let [a (Integer. (:a (:route-params req)))
        ...])
  ...)

(defroutes app
  (GET "/calc/:a/:operator/:b" [] calc))
```
* here's the full example:

{{% gist yosemitebandit 8d12355c51d833fd714a %}}

and here's a tutorial on [clojure webapps from heroku](https://devcenter.heroku.com/articles/clojure-web-application)

* I had to futz with my [version of javac](http://askubuntu.com/questions/117189/apt-get-install-openjdk-7-jdk-doesnt-install-javac-why)
so java, JDBC and the postgres driver all played nice together

and another tutorial on [clojure desktop games](http://noobtuts.com/clojure/2d-pong-game):

* the [quil package](quil.info) is pretty great -- it's a port of Processing
* note the `atom` pattern with `swap!`:

```clojure
(def ball (atom [1 2 3 4]))
(swap! ball next-ball @ball-dir)
; where @ball-dir refers to yet another atom
```

* the game fragment I ended up making:

{{% gist yosemitebandit 33a29d246382bd0c7cc3 %}}


what about quoting, that's kinda weird.. here are notes from
[8th light](https://blog.8thlight.com/colin-jones/2012/05/22/quoting-without-confusion.html):

* `'` or `quote` is a very basic special form in Lisp --
it will return the form without evaluating it:

```clojure
user=> (quote (- 4 5 6))
(- 4 5 6)
```

* all the symbols shown remain unevaluated symbols
* syntax quote (backtick: \`) is slightly different than `quote` and `'`:
symbols are resolved (so you may get namespace-qualifed symbols returned)
and unquoting can happen inside via `~`.. from the 8thlight post:

```clojure
user=> `(this ~(symbol (str "i" "s" \- "cool")))
(user/this is-cool)
```

* this stuff is helpful in macros -- keeping in mind the idiom that code is data
* you will often see quoting when importing modules: `(require 'cljs.build.api)`


now looking a bit at the [aphyr tutorial](https://aphyr.com/posts/311-clojure-from-the-ground-up-logistics)

* `->` vs `->>` -- both are "threading macros,"
the former puts results as the first arg, the latter as the last arg,
some good examples are [here](http://jdevuyst.blogspot.com/2013/11/thoughts-on-clojure-threading-macros.html)
* I don't like threading..think I need to practice doing things in the non-threading manner first..


now checking out this [spell-checker tutorial](http://www.bernhardwenzel.com/blog/2015/02/01/clojure-hands-on-tutorial-for-beginners-building-a-spell-checker)

* recall clojure lists are unordered collections (vectors are the ordered form)


todo: split into basics + vim, webapps and quil
