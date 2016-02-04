a site built with [hugo](http://gohugo.io/overview/introduction/)


#### reminders

* use `<!--more-->` in an article to set the "read more" breakpoint --
yes that's an html comment in the markdown itself
* use `python shrinkify.py` to create thumbnails and shrink large images --
link thumbnails with `thumbnail = "/img/boat-thumbnail.png"` in the front matter
* tags should be plural or a gerund
* the menu topmatter is kind of not necessary anymore as the sidebar is hardcoded --
in fact, including a menu item, even a blank one,
will mean the page doesn't show up in article lists


#### things to make better

* code rendering on the site (instead of embedded gists)
ala [this post](http://ktmud.github.io/huggle/en/intro/)
* some handling of ipython notebooks
* pasture can be smaller
* better tag delimiting :| (see the delimit option in template functions)
ala [this post](https://discuss.gohugo.io/t/howto-delimiter-separated-tags/146/6)
* custom 404 page
* minify some of these images with a script --
see the fusion 360 post, for example, it's 3MB!
* maybe the `/projects` endpoint should just be pics
* some of the layouts should be in pasture, I think


#### hugo workflow

make some content, get the theme's latest and test that sucker out:

    $ hugo new notes/yup.md
    $ hugo server --theme=pasture --port=8080 --watch --disableLiveReload
    $ git subtree pull --prefix themes/pasture https://github.com/yosemitebandit/pasture.git master --squash

changed the theme (a subtree) inside this repo?

    $ git subtree push --prefix themes/pasture git@github.com:yosemitebandit/pasture.git master

view the site locally:

    $ hugo server --theme=pasture --port=8000 --watch --disableLiveReload --preserveTaxonomyNames

build the static content:

    $ hugo --theme=pasture --verbose

or, with the power of fabric, build and deploy:

    $ fab oak build deploy
