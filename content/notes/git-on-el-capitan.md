+++
date = "2016-04-18T08:55:06-07:00"
location = ""
tags = []
thumbnail = ""
title = "git on el capitan"

+++

Saw [this article](http://rachelbythebay.com/w/2016/04/17/unprotected/)
on open vulnerabilities with the version of git on El Capitan.
The gist is that apple makes it hard to even find where the binary is located --
the process of actually symlinking in a new one is even more obfuscated.

<!--more-->

I installed an upgrade with homebrew, moved the old git binary
and linked in the new binary:

```
$ brew install git
$ sudo mv /Library/Developer/CommandLineTools/usr/bin/git /Library/Developer/CommandLineTools/usr/bin/git-apple
$ sudo ln -s /usr/local/bin/git /Library/Developer/CommandLineTools/usr/bin/git
```

git claims to still be in `/usr/bin`, but the version is now correct so it seems fine:

```
$ which git
/usr/bin/git
$ which git
git version 2.8.0
```
