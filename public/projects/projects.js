var projects = {
    "title": "projects"
    , "history": [
        {
            year: "2011"
            , projects: [
                {
                    name: "MEDuele"
                    , blurb: "connecting people to health information and resources"
                    , where: "Palo Alto"
                    , tags: ["large", "favorite"]
                    , expound: "<p>A website app for the Cal Health Data Hackathon with my friends <a href='http://stchangg.com'>Stephanie</a>, Will, and Patrick"
                        + "  See the full site at <a href='https://callmeduele.com'>callmeduele.com</a>.</p>"
                        + "  <p>Check the source on <a href='http://github.com/yosemitebandit/meduele'>github</a> and the short demo below.</p>"
                        + '<iframe frameborder="0" allowfullscreen height="380" width="640" src="http://www.youtube.com/embed/q_gSaW4sj6I?hd=1"></iframe>'
                    , photos: {
                        thumb: "http://i.imgur.com/qisdp.png"
                    }
                }
                , {
                    name: "Redwood Cloud"
                    , blurb: "gathering, storing, and managing lots of distributed sensor data"
                    , where: "Palo Alto"
                    , tags: ["large", "favorite"]
                    , expound: "<p>This was one of my last projects I made while working at <a href='http://redwoodsystems.com'>Redwood Systems</a>."
                        + "  Redwood collects a huge amount of highly-resolved sensor data and this not-so-cleverly-named project aggregated the data on a 'cloud' platform.</p>"
                        + "<p>I built a backend storage system with MongoDB and created an API and some authentication methods for sending and receiving the data."
                        + "  I also created the flask-based frontend, demoed in the video below.</p>"
                        + "<iframe width='640' height='380' src='http://www.youtube.com/embed/DdJOxZUw0kM?hd=1' frameborder='0' allowfullscreen></iframe>" 
                        + "<p>A shorter, more 'promo-ish' video might still be up at <a href='https://redwoodcloud.com'>redwoodcloud.com</a>."
                        + "  But since leaving Redwood in early December 2011, I no longer work on that site.</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/GzCBx.png"
                    }
                }
                , {
                    name: "Vinyl"
                    , blurb: "real-time visualization of sensor data"
                    , where: "Palo Alto"
                    , tags: ["small", "favorite"]
                    , expound: "<p><a href='http://redwoodsystems.com'>Redwood</a> is ostensibly a lighting company but they also have a <i>ton</i> of sensor data."
                        + "  I built some APIs on a MongoDB backend for managing a slice of this data in the Redwood offices.</p>"
                        + "  <p>Vinyl was a javascript visualization of this data, greatly inspired by 'Icicle,' one of <a href='http://thenoviceoof.com'>Nathan's</a> projects."
                        + "  Each circle is a sensor in the building - they light up when something moves within their detection radius."
                        + "  There was a barebones UI, vaguely inspired by youtube, that let people rewind to any part of the day or change the playback speed.</p>" 
                        + '<iframe width="640" height="380" src="http://www.youtube.com/embed/0aEmD2X_-sw?hd=1" frameborder="0" allowfullscreen></iframe>'
                    , photos: {
                        thumb: "http://i.imgur.com/qwL0A.png"
                    }
                }
            ]
        }
        , {
            year: "2010"
            , projects: [
                {
                    name: "Perkinsense"
                    , blurb: "wifi-enabled occupancy sensors communicating to a web-backend"
                    , where: "Durham"
                    , tags: ["large", "favorite"]
                    , expound: "<p>These were sensors I designed and built for the Perkins library at Duke when I was a senior"
                        + "  The Duke study rooms are extremely popular and this project helped people find open ones."
                        + "  Battery-powered and running on 8-bit AVRs, they used a rather fickle WiFi module called the 'WiFly.'"
                        + "  This was one of my first web projects - the backend was, uh, interesting."
                        + "  But there was a very basic web interface that showed the status of the ~20 rooms.</p>"
                        + '<iframe width="480" height="360" src="http://www.youtube.com/embed/oXoiZqXyRsg?hd=1" frameborder="0" allowfullscreen></iframe>'
                        + "<p>Alas, the project is no more and code and schematics are lost to me..perhaps someone else has copies?"
                        + "  The video above gives a good overview of how things were.  (And here's <a href='http://ondemand.duke.edu/video/23338/perkinsense-a-new-way-to-find-' target='_blank'>another</a>.)</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/WtPWz.png"
                    }
                }
                , {
                    name: "DuTrack"
                    , blurb: "real-time bus tracking on the cheap"
                    , where: "Durham"
                    , tags: ["large"]
                    , links: ["http://today.duke.edu/2010/08/mattball.html"]
                    , photos: {
                        thumb: "http://i.imgur.com/jeNmM.jpg"
                    }
                }
            ]
        }
        , {
            year: "2009"
            , projects: [
                {
                    name: "bike light"
                    , blurb: "bright as the sun &emdash; design from dan"
                    , where: "Durham"
                    , tags: ["small", "favorite"]
                    , photos: {
                        thumb: "http://i.imgur.com/I13Zq.jpg"
                    }
                }
                , {
                    name: "savonius wind turbine"
                    , blurb: "building some scaled-down turbines for a water purification demo"
                    , where: "Durham"
                    , tags: ["small"]
                    , eject: "https://wiki.duke.edu/display/wtw/energy+capture"
                    , photos: {
                        thumb: "http://i.imgur.com/uNwZt.jpg"
                    }
                }
                , {
                    name: "trebuchet 2"
                    , blurb: "the second quick iteration on a simple trebuchet design"
                    , where: "Durham"
                    , tags: ["large"]
                    , expound: 
                        "<p>With <a href='trebuchet.htm'>many lessons learned</a>,"
                        + " and only a little pre-planning, I've launched into a second trebuchet build."
                        + "  I'm looking at a 10' arm on an 8' tall frame.  Around 18 pieces will be bolted together to constitute the machine."
                        + "  Custom-poured concrete blocks serve as counterweight.</p>"
                        + "<object width='400' height='300'>"
                          + "<param name='allowfullscreen' value='true' />"
                          + "<param name='allowscriptaccess' value='always' />"
                          + "<param name='movie' value='http://vimeo.com/moogaloop.swf?clip_id=3657375&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1' />"
                              + "<embed src='http://vimeo.com/moogaloop.swf?clip_id=3657375&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1' type='application/x-shockwave-flash' allowfullscreen='true' allowscriptaccess='always' width='400' height='300'></embed>"
                        + "</object>"
                        + "<p>Here's an early launch with about 120+ lbs of counterweight and a half liter bottle projectile; "
                        + "more of the same on my <a href='http://vimeo.com/user1044247'>vimeo page</a>."
                    , photos: {
                        thumb: "http://i.imgur.com/dxtSk.jpg"
                    }
                }
                , {
                    name: "t-shirt design"
                    , blurb: "bleaching with discharge paste"
                    , where: "Chapel Hill"
                    , tags: ["small"]
                    , expound: "<p>I made some TNT t-shirts for my step-brother using"
                        + " this method from  <a href='http://www.instructables.com/id/Controlled-Bleaching-with-Discharge-Paste/'>fungus amungus</a>.</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/oiuKR.jpg"
                    }
                }
                , {
                    name: "scene design"
                    , blurb: "set models from some classic plays"
                    , where: "Durham"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/fSz3p.jpg"
                    }
                }
                , {
                    name: "early Matlab"
                    , blurb: "some interesting matlab modeling and analysis"
                    , where: "Durham"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/yJWBZ.jpg"
                    }
                }
                , {
                    name: "portable theater proposal"
                    , blurb: "my proposal for a portable outdoor theater setup..maybe it'll get built one of these days."
                    , where: "Durham"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/ZE3sq.jpg"
                    }
                }
            ]
        }
        , {
            year: "2008"
            , projects: [
                {
                    name: "plywood dug"
                    , blurb: "two eight foot canoes from two sheets of 4x8 plywood"
                    , where: "Chapel Hill"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/OdgwF.jpg"
                    }
                }
                , {
                    name: "gift wrap"
                    , blurb: "wrapping things up with old newspapers.  revolutionary."
                    , where: "Chapel Hill"
                    , tags: ["small"]
                    , eject: "http://www.instructables.com/id/gift-wrapping-with-newspaper/"
                    , photos: {
                        thumb: "http://i.imgur.com/lPrkO.jpg"
                    }
                }
                , {
                    name: "surveying in the Altiplano"
                    , blurb: "surveying for a potential bridge in rural Bolivia"
                    , where: "Obrajes"
                    , tags: ["large", "favorite"]
                    , expound: "<embed type='application/x-shockwave-flash'"
                        + "src='https://picasaweb.google.com/s/c/bin/slideshow.swf'" 
                        + "width='600' height='400'"
                        + "flashvars='host=picasaweb.google.com&hl=en_US&feat=flashalbum&RGB=0x000000&feed=https%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2Fmattball43%2Falbumid%2F5208048113868756241%3Falt%3Drss%26kind%3Dphoto%26hl%3Den_US'"
                        + "pluginspage='http://www.macromedia.com/go/getflashplayer'></embed>"
                    , photos: {
                        thumb: "http://i.imgur.com/YNd4G.jpg"
                    }
                }
                , {
                    name: "scale"
                    , blurb: "a fairly accurate scale from a bicycle axle"
                    , where: "Nkokonjeru"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/EudwH.jpg"
                    }
                }
                , {
                    name: "jatropha biofuel"
                    , blurb: "making biofuel and peanut butter in some hand-powered, small-scale expellers"
                    , where: "Nkokonjeru"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/ao9FL.jpg"
                    }
                }
                , {
                    name: "RASD infrastructure"
                    , blurb: "helped build gates, and an internet cafe for the Rural Agency for Sustainable Development in Uganda"
                    , where: "Nkokonjeru"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/zikJ8.jpg"
                    }
                }
                , {
                    name: "portable refridgeration"
                    , blurb: "testing Zeer pots and other methods of portable refridgeration for EWH"
                    , where: "Durham"
                    , tags: ["small"]
                    , eject: "https://wiki.duke.edu/display/engworld/Portable+refrigeration"
                    , photos: {
                        thumb: "http://i.imgur.com/R4ICr.jpg"
                    }
                }
                , {
                    name: "community garden"
                    , blurb: "building beds and RWH tanks and sheds and compost bins"
                    , where: "Durham"
                    , tags: ["favorite", "large"]
                    , photos: {
                        thumb: "http://i.imgur.com/0g4CW.jpg"
                    }
                }
                , {
                    name: "microcontroller experimentation"
                    , blurb: "started playing with 8bit AVRs"
                    , where: "Durham"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/1lR7z.jpg"
                    }
                }
            ]
        }
        , {
            year: "2007"
            , projects: [
                {
                    name: "soldering station"
                    , blurb: "just a little soldering iron holder and solder dispenser"
                    , where: "Chapel Hill"
                    , eject: "http://www.instructables.com/id/Soldering-Station/"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/dGggf.jpg"
                    }
                }
                , {
                    name: "rainwater harvesting"
                    , blurb: "designed and built a 2900 gallon RWH tank in rural Uganda"
                    , where: "Kasaka/Kanoni"
                    , eject: "http://picasaweb.google.com/mattball43/Uganda2007"
                    , tags: ["large", "favorite"]
                    , photos: {
                        thumb: "http://i.imgur.com/H2hdd.jpg"
                    }
                }
                , {
                    name: "biomass charcoal"
                    , blurb: "researched biomass charcoal production for use in rural Uganda"
                    , where: "Durham"
                    , eject: "https://wiki.duke.edu/display/engineerswithoutborders/Biomass+Charcoal"
                    , tags: ["large"]
                    , photos: {
                        thumb: "http://i.imgur.com/KEu57.jpg"
                    }
                }
                , {
                    name: "archery"
                    , blurb: "even the most primitive bows and arrows are pretty fun"
                    , where: "Chapel Hill"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/Xe9WX.jpg"
                    }
                }
            ]
        }
        , {
            year: "2006"
            , projects: [
                {
                    name: "trebuchet"
                    , blurb: "building a twenty foot siege weapon"
                    , where: "Durham"
                    , expound: "made with my friends Ben and Jen at NCSSM"
                    , tags: ["favorite", "large"]
                    , photos: {
                        thumb: "http://i.imgur.com/I2acq.jpg"
                        , gallery: [
                            "../static/img/canoe_1.png"
                            , "../static/img/canoe_2.png"
                        ]
                    }
                }
                , {
                    name: "weatherwood cabin"
                    , blurb: "some construction work on my family's tiny place in Virginia"
                    , where: "Bedford"
                    , expound: "my family and I tore down and then built back the walls of this 14x20 cabin.  We had a pro do the roof cause that's a bit hairy.  Right on the blueridge parkway and the AT."
                    , tags: ["favorite", "large"]
                    , photos: {
                        thumb: "http://i.imgur.com/qy7KP.jpg"
                        , gallery: [
                            "../static/img/canoe_1.png"
                            , "../static/img/canoe_2.png"
                        ]
                    }
                }
                , {
                    name: "ECG testers"
                    , blurb: "manufacturing over a hundred ECG calibration devices for the developing world"
                    , where: "Durham"
                    , expound: "we built a whole mess of these things"
                    , tags: ["large"]
                    , photos: {
                        thumb: "http://i.imgur.com/yN0ba.jpg"
                    }
                }
                , {
                    name: "Fire extinguisher lamp"
                    , blurb: "making a lamp from a fire extinguisher"
                    , where: "Durham"
                    , eject: "http://www.instructables.com/id/Fire-Lamp!/"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/AfZ0B.jpg"
                    }
                }
            ]
        }
    ]
};
