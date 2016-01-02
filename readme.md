notes on various things


#### things to make better

* some sense of "updated" since I frequently add more to the same article
* get all those notes and projects from `master`
* some kind of landing page


#### hugo workflow

make some content, get the theme's latest and test that sucker out:

    $ hugo new notes/yup.md
    $ hugo server --theme=pasture --port=8080 --watch --disableLiveReload
    $ git subtree pull --prefix themes/pasture https://github.com/yosemitebandit/pasture.git master --squash

changed the theme (a subtree) inside this repo?

    $ git subtree push --prefix themes/pasture git@github.com:yosemitebandit/pasture.git master

view the site locally:

    $ hugo server --theme=pasture --port=8000 --watch --disableLiveReload

build the static content:

    $ hugo --theme=pasture --verbose

or with the power of fabric:

    $ fab oak build deploy
