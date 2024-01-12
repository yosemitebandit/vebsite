+++
date = "2016-11-25T20:55:17-08:00"
location = ""
tags = ["hardware", "ops"]
thumbnail = ""
title = "raspberry pi"

+++

various Π-related snippets..

<!--more-->


## Setup an SD card with `jessie lite`

Follow [these instructions](https://www.raspberrypi.org/downloads/raspbian/).


## Fix keyboard issues, like `"` showing up as `@`

* start with `sudo raspi-config`
* go to internationalization options > change keyboard layout
* select "generic 101 key PC"
* go to other then select english
* it'll then ask you about special keys -- I leave those alone


## Setup wifi

Add the following to `/etc/wpa_supplicant/wpa_supplicant.conf`:

```
network={
  ssid="wifiwithmylittleeye"
  psk="somethingred"
}
```

and then reboot.


## Live stream with a raspberry pi camera and youtube

Install some prereqs:

`$ apt-get install libx264.`

Get ffmpeg source and build it:

```
$ git clone git://source.ffmpeg.org/ffmpeg.git --depth=1
$ cd ffmpeg
$ ./configure --enable-gpl --enable-nonfree --enable-libx264
$ make -j$(nproc)
$ sudo make install
```

Could be more clever with `./configure` and disable many unused filters, protocols, etc,
as per [this answer on SO](https://stackoverflow.com/questions/24849129/).

I used the command from [this gist](https://gist.github.com/maxogden/69e4ae18a32d7efd00d9) to stream
(more about the command on [this blogpost](https://maxogden.com/hd-live-streaming-cats.html)).
More streaming notes on [this gist](https://gist.github.com/yosemitebandit/c17db9fbc7dc908cb61a4e34d51ae791).
