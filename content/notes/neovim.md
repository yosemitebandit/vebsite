+++
date = "2016-04-26T14:54:48-07:00"
location = ""
tags = ["reading"]
thumbnail = ""
title = "neovim"

+++

How I got started with neovim:

<!--more-->

* get `neovim`: `brew install neovim/neovim/neovim` (yeah, idk)
* get python3 too: `brew install python3`
* create a  `~/.config/nvim/init.vim` (the new `~/.vimrc`) --
you could link your existing config, but I wanted to start anew
* make `~/.config/nvim/autoload/`
and get [vim-plug](https://github.com/junegunn/vim-plug) set up inside there
* `alias nv=nvim`

I used most of my existing `.vimrc` with these exceptions:

* upgraded to `vim-plug`
* thought it was a good time to try `vim-sensible` (subsequently dropped a lot of my vimrc, that was nice)
* dropped `syntastic` in favor of.. not sure yet.. maybe `neomake`?
* using `deoplete` instead of `neocomplcache`
* 256 color term and a new theme -- OceanNext and the corresponding `airline` theme
.. and the corresponding iterm2 theme
