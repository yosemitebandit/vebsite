+++
date = "2016-01-21T23:36:13-08:00"
description = ""
menu = ""
tags = []
title = "ipython"

+++

how I use iPython:

* I have a server image on digital ocean that's setup with iPython --
it can be created from scratch in just a few minutes when I want to create notebooks
(remember to copy over your ssh keys though..sometimes my user data isn't there)
* start the server with `jupyter notebook --no-browser --ip=\* --port=8888 --certfile=jupyter-cert.pem`
* I created an SSL cert and a notebook config with a password, as per the jupyter guidelines
* I sometimes use [this omnibox shortcut trick](http://meta.stackexchange.com/questions/49313)
to link directly to the server..
though I have to frequently update the search engine with the droplet's IP
since I destroy the droplet after using it
