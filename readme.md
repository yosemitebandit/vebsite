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
* make sure you activate the virtualenv when you run the fab task --
I think you need pygmentize on your path for code highlighting to work right.
The fabfile /should/ handle this now..
* don't use `shell`-type code fences -- it looks bad, just use `python`


#### things to make better

* maybe the `/projects` endpoint should just be pics -- more brutalist as before
* more travel updates
* images look bad on nicer screens (like my phone :|)
* fix image permissions issues -- everything should be 644


#### hugo workflow

make some content, get the theme's latest and test that sucker out:

    $ hugo new notes/yup.md
    $ git subtree pull --prefix themes/pasture https://github.com/yosemitebandit/pasture.git master --squash
    $ hugo server --port=8080 --watch --disableLiveReload --preserveTaxonomyNames

changed the theme (a subtree) inside this repo?

    $ git subtree push --prefix themes/pasture git@github.com:yosemitebandit/pasture.git master

view the site locally:

    $ hugo server --port=8000 --watch --disableLiveReload --preserveTaxonomyNames

build the static content:

    $ hugo --verbose

or, with the power of fabric, build and deploy:

    $ fab oak build deploy
