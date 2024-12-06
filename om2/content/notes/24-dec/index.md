+++
title = "December 2024"
date = 2024-12-06
+++


:supervillain: malicious github branch names
- really interesting exploit [covered on lobste.rs](https://lobste.rs/s/btagmw/maliciously_crafted_github_branch_name)
with more discussion in the issues
- ultralytics repo (mainly YOLO [image segmentation / object detection])
received a PR with a `curl .. | bash` inside the branch name,
this affected the build system (Github actions)
and embedded a crypto miner into the releases that landed on pypi
