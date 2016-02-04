+++
date = "2013-02-12T13:00:00-08:00"
thumbnail = ""
title = "SSL setup on nginx"
location = ""
tags = ["ops"]

+++

I keep forgetting how to do this, so here are some notes:

1. you're going to buy a ComodoSSL cert from Namecheap or something
2. your server needs a cert-signing request,
but first we need an associated private key: `openssl genrsa -aes256 4096 > server.key`
3. move and rename the key based on your site:
`sudo mv server.key /etc/ssl/private/procession_org.key`
4. ..and protect it: `sudo chmod 400 /etc/ssl/private/procession_org.key`
5. now use the key to make a CSR:
`sudo openssl req -sha256 -new -key /etc/ssl/private/procession_org.key -out server.csr`
6. this opens a rare unix wizard &ndash;
the trick here is to put "procession.org" or whatever as the Common Name
7. give the generated CSR to the commercial provider and wait for their reply..
8. Comodo sent me `procession_org.crt`, `PositiveSSLCA2.crt` and `AddTrustExternalCARoot.crt`
these need to be concatenated in reverse order:

        cat procession_org.crt > procession_org-ssl-bundle.crt
        cat PositiveSSLCA2.crt >> procession_org-ssl-bundle.crt
        cat AddTrustExternalCARoot.crt >> procession_org-ssl-bundle.crt

9. I like to put that bundle in `/etc/ssl/certs/`
10. then in an nginx config file (probably `sites-available/procession_org.conf`):

        server {
            listen 443;

            ssl on;
            ssl_certificate /etc/ssl/certs/procession_org-ssl-bundle.crt
            ssl_certificate_key /etc/ssl/private/procession_org.key
        }

The [linode guide](http://library.linode.com/web-servers/nginx/configuration/ssl)
is quite good.
