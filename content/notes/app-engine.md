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
* you can see various versions of the app by changing the URL, ala: `http://v0-1-0.my-app.appspot.com`
* so you can upload a new version with `appcfg.py` but how do you make it live??
  * you can do it from the GAE dashboard..
  * and there is an `appcfg.py start_module_version` command but I'm not sure how to get it working
  * would be nice to have a git tag-based workflow --
  create a tag, upload it, that version gets sent to GAE and traffic is migrated to it

list and delete versions:

```python
$ appcfg.py list_versions ./
$ appcfg.py delete_version ./ v1
```


### testing
* got `py.test` working with the [`pytest-beds`](https://pypi.python.org/pypi/pytest-beds) package


### the SDK
* I have a symlink in /usr/local/google_appengine/


### SSL with letsencrypt
I ran these commands in an ubuntu VM:
```python
$ git clone https://github.com/certbot/certbot
$ cd certbot
$ ./certbot-auto certonly --manual --email me@email.com -d superamazing.com -d www.superamazing.com
```

This displays the response text you have to show at some "challenge" url on your site.
To make that work for the naked domain,
I setup my app.yaml as described here: https://www.jeffgodwyll.com/posts/2016/letsencrypt
..and then did it again for the www domain.

Then convert your private key into an RSA private key:

```python
$ cd /etc/letsencrypt/live/superamazing.com
$ openssl rsa -in privkey.pem -out privkey-rsa.pem
```

And copy the certs over to the app engine dev console.
I suppose I'll do something similar in three months once these certs expire :/

After this is setup, you can redirect insecure requests to https
by setting [the `secure` key to `always`](https://cloud.google.com/appengine/docs/python/config/appref).
