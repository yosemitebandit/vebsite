+++
date = "2016-05-12T14:12:05-07:00"
location = ""
tags = ["ops", "python"]
thumbnail = "/img/app-engine-logo-thumbnail.png"
title = "App Engine"

+++

some notes on using Google App Engine with python:

<!--more-->

### app versions
* see [this SO post](http://stackoverflow.com/questions/3848131/google-app-engine-version-numbers) --
can't use semver with periods, but you can use dashes :/
* so you can upload a new version with `appcfg.py` but how do you make it live?


### testing
* got `py.test` working with the [`pytest-beds`](https://pypi.python.org/pypi/pytest-beds) package


### the SDK
* I have a symlink in /usr/local/google_appengine/

