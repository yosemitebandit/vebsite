+++
date = "2016-04-26T14:54:48-07:00"
location = ""
tags = ["reading", "rust", "vim"]
thumbnail = "/img/neovim-logo-thumbnail.png"
title = "neovim"

+++

How I got started with neovim --
and especially how I setup neomake to work with rust.

<!--more-->

basics:

built neovim from source, following the [repo's instructions](https://github.com/neovim/neovim/wiki/Building-Neovim<Paste>), then

```python
$ brew install python3
$ mkdir -p ~/.config/nvim
$ touch ~/.config/nvim/init.vim  # the new ~/.vimrc
$ alias nv='nvim'
```

I used most of my existing `.vimrc` (my [dotfiles are here](https://github.com/yosemitebandit/dotdotdot))
with these exceptions:

* upgraded to `vim-plug`
* thought it was a good time to try `vim-sensible` --
subsequently dropped a lot of my old vimrc, that was nice
* dropped `syntastic` in favor of `neomake` -- more on this later
* using `deoplete` instead of `neocomplcache`
* setup a 256 color term and a new theme -- [OceanicNext](https://github.com/mhartington/oceanic-next)
and the corresponding `airline` theme ..and the corresponding iterm2 theme

[neomake](https://github.com/benekastah/neomake) and rust:

* you want to install neomake and then call `:Neomake! cargo`
from within vim -- despite what the docs say about extra config,
this worked for me out of the box
* and then you probably want to do that on save, so, in `init.vim`:
`autocmd BufWritePost *.rs Neomake! cargo`
* see more in [my init.vim](https://github.com/yosemitebandit/dotdotdot/blob/master/nvim-init.vim) --
you can change the signs and adjust how errors are displayed
* sadly you have to stick with symbols in the gutter
until [this PR](https://github.com/benekastah/neomake/pull/361) lands
and allows highlighting of columns and rows (well it will with some slight rework)
* can't seem to get the gutter setup properly so neomake kind of pops in and out rather annoyingly ..alas
* maybe consider [vim-accio](https://github.com/pgdouyon/vim-accio)

[vim-racer](https://github.com/racer-rust/vim-racer):

* `gd` to jump to a definition and then `Ctrl + O` to go back to where you were
