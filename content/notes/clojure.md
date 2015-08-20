+++
date = "2015-08-19T17:58:30-07:00"
description = "on learning clojure"
menu = ""
tags = ["watching"]
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
; 2
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
