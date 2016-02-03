notes on various things



#### reminders

* use `<!--more-->` in an article to set the "read more" breakpoint --
yes that's an html comment in the markdown itself
* thumbnails should be 190 x 144px


#### organization

* `/notes/305` -- permalink to each page
* `/fusion-360`, `/python` -- tags
* `/about`, `/all` -- special pages


#### things to make better

* code rendering on the site (instead of embedded gists)
ala [this post](http://ktmud.github.io/huggle/en/intro/)
* some handling of ipython notebooks
* pasture can be smaller
* search
* cache invalidation
* better tag delimiting :| (see the delimit option in template functions)
ala [this post](https://discuss.gohugo.io/t/howto-delimiter-separated-tags/146/6)
* do not show "main" pages in lists
* custom 404 page
* capture location ala the old site


#### reorg todos

* setup the new style of numbered posts..or ponder this more
* convert the posts here to the new style
* create a fab method for uploading images to S3
(er, or are we just going to host images ourselves..)
* create some thumbnail functionality for displaying images in the article list
* import `public-old`
* import `vvebsite`


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
