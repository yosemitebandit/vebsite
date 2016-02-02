notes on various things


#### organization

* `/notes/305` -- permalink to each page
* `/fusion-360`, `/python` -- tags
* `/about`, `/all` -- special pages


#### things to make better

* some sense of "updated" since I frequently add more to the same article
* get all those notes and projects from `master`
* get all those notes and projects from the old `vvebsite` blog
* some kind of landing page
* code rendering on the site (instead of embedded gists)
* some handling of ipython notebooks
* pasture can be smaller
* search
* cache invalidation


#### reorg todos

* show all tags
* show the latest ten on the home page
* import `public-old`, `vvebsite`, and the posts here in `content`
* rename "tags" to something like..sections?  idk..


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

or, with the power of fabric, build and deploy:

    $ fab oak build deploy
