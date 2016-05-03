+++
date = "2016-05-03T11:33:07-07:00"
location = ""
tags = ["rust", "ops"]
thumbnail = "/img/postgres-logo-thumbnail.png"
title = "postgres"

+++

some postgres notes:

<!--more-->

* connect, list databases, list tables and select:

```python
$ psql diesel_demo
psql (9.5.2)
Type "help" for help.

diesel_demo=# \l
                               List of databases
    Name     | Owner | Encoding |   Collate   |    Ctype    | Access privileges
-------------+-------+----------+-------------+-------------+-------------------
 diesel_demo | matt  | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 new-db      | matt  | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 postgres    | matt  | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 pseudo      | matt  | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 template0   | matt  | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/matt          +
             |       |          |             |             | matt=CTc/matt
 template1   | matt  | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/matt          +
             |       |          |             |             | matt=CTc/matt
(6 rows)

diesel_demo=# \dt
                  List of relations
 Schema |            Name            | Type  | Owner
--------+----------------------------+-------+-------
 public | __diesel_schema_migrations | table | matt
 public | posts                      | table | matt
(2 rows)

diesel_demo=# select * from posts;
 id | title |   body    | published |         created_at
----+-------+-----------+-----------+----------------------------
  1 | coool | pleasseee+| t         | 2016-05-03 21:00:18.639813
    |       |           |           |
(1 row)

```



### postgres with rust
I'm trying [`diesel`](http://diesel.rs), but I might switch to the vanilla,
non-ORM [`rust-postgres`](https://github.com/sfackler/rust-postgres) package.
The ORM functionality is definitely nice, but my projects aren't that complicated
and `diesel` is still a work-in-progress.

On the [diesel demo](http://diesel.rs/guides/getting-started/):

* got to play with multirust and rust nightly
* nice example of a project structure too with multiple binaries and a `lib.rs` gluing it together
* datetimes were annoying in diesel and still kind of being worked on, it seems --
see [my pseudo-lang project](https://github.com/yosemitebandit/pseudo) for an example.
It came down to adding a sql type like `created_at TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'utc')`
and, in the diesel model definition having a struct field like `pub created_at: PgTimestamp`
where that type comes from `diesel::pg::data_types::PgTimestamp`


### migrations
After I finished the diesel demo I wanted to add a new column, `created_at`, which would be a `Timestamp`.
I ran `diesel migration generate add_post_created_at` to make some files,
then, in `up.sql`, I added:

```sql
ALTER TABLE posts
  ADD COLUMN created_at TIMESTAMP DEFAULT (now() AT TIME ZONE 'utc');
```

and in `down.sql`:

```sql
ALTER TABLE posts
  DROP COLUMN created_at;
```

I guess one day diesel will watch your model changes and actually write this stuff for you.
