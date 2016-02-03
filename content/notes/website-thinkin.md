+++
date = "2015-01-21T10:39:25Z"
description = "thoughts on a new site"
tags = ["web", "ops"]
title = "website thinkin"

+++

..I'd hate for this sidebar site to be my main thing --
it'd be fun to be more creative

<!--more-->

like what about a generative site..
you scroll down and roots continue being created in the side/background.
and you can browse back into old projects.
maybe you have to hack them away to actually read the site.
generative flowers and animals on the notes site
or like animated ascii art.

```

                             *@*
                          *@*
            +B         *@*
            +B        *@*
             +B      (%&%]
               +B  ([%&&&%))
                 +B[%&&&&&%) >n
                   ([%&&&%))   >n
                     (%&%)       >n
                      *@*         >n
                    *@*           >n
                  *@*
               *@*


```

like this awesome demo from [nick kwiatek](http://nkwiatek.com/experiments/ascii#)
or something colorful ala [substack](substack.net)

or maybe the projects page scrolls horizontally,
everybody loves stuff like that :|
something a bit less prosaic and predictable,
I mean, that's ok for the blog stuff,
but the projects section should be fun..

there are lots of interesting [typographical glyphs](https://dev.w3.org/html5/html-author/charref)
to play with

on urls, what a wonderful timesink..
[this site](http://www.manythings.org/vocabulary/lists/l/words.php?f=noll06)
helped me find some interesting words for mashing together.
for instance, "pinewire" and "oakmachine" were available, and they sound nice.

The workflow, I got my theme set as a subtree:

```shell
git subtree add --prefix themes/pasture https://github.com/yosemitebandit/pasture.git master --squash
```

Then I can pull or push

```shell
git subtree pull --prefix themes/pasture git@github.com:yosemitebandit/pasture.git master --squash
git subtree push --prefix themes/pasture git@github.com:yosemitebandit/pasture.git master --squash
```

#### structure

It would be nice to view tags in two ways:
the first typical way would just shows articles corresponding to that tag.
The second would actually show the full article for every tag
to make searching with `CTRL+F` easier.

I also find myself adding on to notes a lot..
I think I should just write some notes each day and tag sections / paragraphs.
When the tag is clicked, things could be aggregated there.
Then this could be more of a traditional blog where I'm just writing..
So each article would be a "day" and the pages with meaningful names would be tags.


#### others

* 8th light has a nice looking set of articles
