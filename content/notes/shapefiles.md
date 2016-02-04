+++
date = "2014-12-20T13:00:00-08:00"
thumbnail = ""
title = "shapefiles"
location = ""
tags = ["python", "drafts"]

+++

some basics on shapefiles:

* [wikipedia](http://en.wikipedia.org/wiki/Shapefile) has a nice intro
* .shp, .shx and .dbf files are required --
they're binary files with all of the vector data, indexing info and feature notes
* other optional files may be present too, like .prj (projection info)
* everything's sequential -- first record in the .shp corresponds to the first record in the .dbf
* fiona is a nice python package for reading shapefile info --
it returns [GeoJSON](http://geojson.org/geojson-spec.html#introduction)

* and here's a [gist](https://gist.github.com/yosemitebandit/335480129c103b91a0ba)
on using 2010 TIGER block-level census data to find the population of a circular area

* you can also do a lot in ipython as
[this post](http://sensitivecities.com/so-youd-like-to-make-a-map-using-python-EN.html#.VJHlX81Gh5R)
highlights
* my notes on setting up a virtualenv with gdal, basemap, ipython, etc are
[here](my notes on ubuntu / python setup: https://gist.github.com/yosemitebandit/91b4143ffad899aebef8)
