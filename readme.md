## testing
the history API doesn't work for local files so start a server

    $ cd vebsite/public
    $ python -m SimpleHTTPServer

then check `http://localhost:8000/projects`


## deploy

    $ fab prod deploy


## gitignore
 - git repos that end up in public/ are added to the gitignore of the vebsite project
 - maybe would be better to add them as submodules..
 - or figure out the symlinking scheme


### workflow

make some content, get the theme's latest and test that sucker out:

    $ hugo new notes/yup.md
    $ hugo server --theme=pasture --port=8080 --watch --disableLiveReload
    $ git subtree pull --prefix themes/pasture https://github.com/yosemitebandit/pasture.git master --squash

changed the theme (a subtree) inside this repo?

    $ git subtree push --prefix themes/pasture https://github.com/yosemitebandit/pasture.git master
