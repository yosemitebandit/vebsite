+++
date = "2014-12-16T13:00:00-08:00"
thumbnail = ""
title = "storing and deploying keys securely"
location = ""
tags = ["linux", "drafts"]

+++

In several flask apps at aquaya,
I used a combo of environment variables and sample config files
filled in with real data on the live servers only, not in the source.
But how to do this with a lot of servers that may be rebuilt at any time?
How do you avoid passing state to these servers when you provision them?
And how do you share these credentials among team members?

* ah, 1password or some other password vault would work -- schneier wrote one, even
* and then you use two-factor on the vault
* IAM roles may be the AWS way
* so maybe use config files and ACLs?

* [nice article](http://developer.securekey.com/securing-api-access-tokens)
on token storage in mobile apps (suggests provisioning, splitting, rotating)
* [travis suggests](http://docs.travis-ci.com/user/environment-variables/#Secure-Variables)
having a type of secure, encrypted key
* [services hashing their API keys](https://octopusdeploy.com/blog/hashing-api-keys),
displaying them in plaintext just once and expecting you to treat them like passwords (and use a vault)

* ah, a provisioning idea
  * master service provisions a new instance
  * new instance generates a keypair
  * master encrypts secret with instance's public key, and sends encrypted text to the instance
  * instance deciphers into an env var

* a nice [ansible example](http://www.stavros.io/posts/example-provisioning-and-deployment-ansible)
with mention of git-crypt which is kinda similar to the idea above
* another [ansible post](http://red-badger.com/blog/2014/02/28/deploying-ssl-keys-securely-with-ansible)
using openssl to encrypt certs and `vars_prompt` to get a user-typed password
