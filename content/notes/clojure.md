+++
date = "2015-08-19T17:58:30-07:00"
description = "on learning clojure"
menu = ""
tags = ["watching", "reading"]
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

<script src="https://gist.github.com/yosemitebandit/8d12355c51d833fd714a.js"></script>

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

<script src="https://gist.github.com/yosemitebandit/33a29d246382bd0c7cc3.js"></script>

todo: split into basics + vim, webapps and quil
