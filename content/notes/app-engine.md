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
I setup my app.yaml [as described here](https://www.jeffgodwyll.com/posts/2016/letsencrypt)
..and then did it again for the www domain.
Finish the LE setup and you should have certs.

Before uploading to GAE, convert your private key into an RSA private key:

```python
$ cd /etc/letsencrypt/live/superamazing.com
$ openssl rsa -in privkey.pem -out privkey-rsa.pem
```

And then you're good to copy the certs over to the app engine dev console.
I suppose I'll do something similar in three months once these certs expire :/

I could take down the challenge / response URLs,
but maybe I'll need them when it comes time to renew?

After this is setup, you can redirect insecure requests to https
by setting [the `secure` key to `always`](https://cloud.google.com/appengine/docs/python/config/appref).


### [concepts](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine)

* each service has a config file and each service has a set of versions,
and versions have scaling types (to determine scaling properties)
and instance classes (to determine compute resources)
* all services share the datastore, memcache and task queue

![appengine hierarchy](/img/appengine-hierarchy.png)

* apps are sandboxed -- you can read from the filesystem but not write,
you have to respond to requests within a few seconds or the process is killed,
you can't make system calls
* certain modules are replaced or customized (e.g. `tempfile`, `logging`)
* threads can be used and even run in the background on manually scaled instances

*subdomains*

* each of my subdomains is a different `service` in GAE parlance --
for each subdomain / service, you'll need to specify a yaml file and an entrypoint (`main.py` equivalent)
* you'll need a `dispatch.yaml`, something like this:

```yaml
application: my-app
dispatch:

  # The default module serves the main app.
  - url: "www.example.com/"
    module: default
  - url: "example.com/"
    module: default

  # The API is served by another service.
  - url: "api.culturerobotics.com/"
    module: api
```

* the main service is just known as `default` whether you label it as such in `app.yaml` or not
* all services are public by default -- specify `login: admin` to the service handlers to restrict access
* you can start multiple modules at once with `dev_appserver.py app.yaml demo.yaml api.yaml`
* update the dispatch with `appcfg.py -A my-app update_dispatch .`


### [the bookshelf tutorial](https://cloud.google.com/python/getting-started/tutorial-app)

* SO has a great [note on flask blueprints](http://stackoverflow.com/questions/24420857/what-are-flask-blueprints-exactly),
but I'm not convinced my apps really needs them..
I suppose it improves one's organization to some extent
