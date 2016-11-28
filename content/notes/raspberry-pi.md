+++
date = "2016-11-25T20:55:17-08:00"
location = ""
tags = ["hardware", "ops"]
thumbnail = ""
title = "raspberry pi"

+++

various Π-related snippets..

<!--more-->


## setup an SD card with `jessie lite`

follow [these instructions](https://www.raspberrypi.org/downloads/raspbian/)


## fix keyboard issues, like `"` showing up as `@`

* start with `sudo raspi-config`
* go to internationalization options > change keyboard layout
* select "generic 101 key PC"
* go to other then select english
* it'll then ask you about special keys -- I leave those alone


## setup wifi

add the following to `/etc/wpa_supplicant/wpa_supplicant.conf`:

```
network={
  ssid="wifiwithmylittleeye"
  psk="somethingred"
}
```

and then reboot


## live stream with a raspberry pi camera and youtube

install some prereqs:

`$ apt-get install libx264.`

get ffmpeg source and build it:

```
$ git clone git://source.ffmpeg.org/ffmpeg.git --depth=5
$ cd ffmpeg
$ ./configure --enable-gpl --enable-nonfree --enable-libx264
$ make -j$(nproc)
$ sudo make install
```

and used the command from [this gist](https://gist.github.com/maxogden/69e4ae18a32d7efd00d9)
(more about the command on [this blogpost](https://maxogden.com/hd-live-streaming-cats.html))

(might look at nginx-rtmp, CDN services, Wowza servers, zencoder + videojs with m3u8 and S3)

more notes on [this gist](https://gist.github.com/yosemitebandit/c17db9fbc7dc908cb61a4e34d51ae791)
