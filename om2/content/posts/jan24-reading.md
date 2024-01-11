+++
title = "jan24-reading"
date = 2024-01-11
+++

- :computer: [JSFree.org](https://jsfree.org)
  - this gave me some inspiration for the css of my site
  - but I'm not this dogmatic about a js-less web,
  I guess it could affect site accessibilty.
  I have several friends who work on this, I should ask them.
  There are [detailed standards for web accessibilty](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1)
  (outside of just js)
  and tools like [`axe-core`](https://github.com/dequelabs/axe-core) can check compliace
- :cloud: [DNSSEC](https://www.cloudflare.com/learning/dns/dns-security/)
  - easy enough to turn this on with most registrars, I wonder why it's not the default?
  - not sure what DNS tunneling is: "Attackers can use SSH, TCP, or HTTP to pass malware or stolen information into DNS queries"
  - spoofing/hijacking makes sense.. the other listed vectors are also interesting variations on ddos
  - DNSSEC is just signing all the requests back to the root,
  with a [cool irl signing ceremony](https://www.cloudflare.com/dns/dnssec/root-signing-ceremony/) to cover the root zone.
  This reminds me of a [Radiolab episode about a signing ceremony](https://radiolab.org/podcast/ceremony)
  ..ah but that was a crypto project.
  - Deeper review of DNSSEC [here](https://blog.cloudflare.com/dnssec-an-introduction/)
  - I'll turn it on, seems like the downsides are what you'd expect:
  more overhead with parsing the requests and support is not universal,
  not relevant for my micro site but interesting to learn about
