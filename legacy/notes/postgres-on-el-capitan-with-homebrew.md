+++
date = "2016-05-02T11:27:15-07:00"
location = ""
tags = ["ops"]
thumbnail = ""
title = "postgres on El Capitan with homebrew"

+++

This particular mac I'm working with has never had Postgres running locally,
so there's nothing to uninstall and no data to backup,
and installing 9.5 on is easy
(though brew is nice enough to remind you of other upgrade steps if you do need that):

<!--more-->

```python
$ brew update
$ brew install postgresql
```

Then to start postgres with brew's `launchctl` manager
(more on [brew services here](https://github.com/Homebrew/homebrew-services)):

```python
$ brew services start postgresql
```

Test it out:

```python
$ createdb new-db
$ psql new-db -c "SELECT version();"
                                                   version
--------------------------------------------------------------------------------------------------------------
 PostgreSQL 9.5.2 on x86_64-apple-darwin15.4.0, compiled by Apple LLVM version 7.3.0 (clang-703.0.29), 64-bit
(1 row)
```
