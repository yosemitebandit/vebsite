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
                        + '<div class="embedded-content"><iframe frameborder="0" allowfullscreen height="380" width="640" src="http://www.youtube.com/embed/q_gSaW4sj6I?hd=1"></iframe></div>'
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
                        + "<div class='embedded-content'><iframe width='640' height='380' src='http://www.youtube.com/embed/DdJOxZUw0kM?hd=1' frameborder='0' allowfullscreen></iframe></div>" 
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
                        + '<div class="embedded-content"><iframe width="640" height="380" src="http://www.youtube.com/embed/0aEmD2X_-sw?hd=1" frameborder="0" allowfullscreen></iframe></div>'
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
                        + '<div class="embedded-content"><iframe width="480" height="360" src="http://www.youtube.com/embed/oXoiZqXyRsg?hd=1" frameborder="0" allowfullscreen></iframe></div>'
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
                    , tags: ["large", "favorite"]
                    , expound: "<p>I leveraged the open source <a href='http://www.opengts.org'>OpenGTS</a> project to bring create a low-cost bus-tracking system for my school when I was a senior."
                        + "  For about $150 per year, you can have an unlimited data plan on some really cheap GPS-enabled cell phones."
                        + "  The OpenGTS project has a small client app that runs on the phones and transmits position data back to the OpenGTS server, "
                        + " which we initially ran on a small desktop in the <a href='http://dukesmarthome.com'>Smarthome</a>.</p>"
                        + "<p>We installed ~30 trackers to cover the whole fleet - A mechanic was nice enough to connect the trackers to each bus's electrical system so they could stay on."
                        + "  We then modified the OpenGTS source to greatly increase the update rate so it would send coordinates about every 5s.</p>"
                        + " <div class='embedded-content'><img src='http://i.imgur.com/fq9sY.jpg' /></div>"
                        + "<p>I worked with a team to build a public-facing UI that showed the live positions of buses on certain routes."
                        + "  (CSS-only Google maps icons, woo!)."
                        + "  There was also an admin section for assigning buses to routes, creating new routes, writing bulletins and other things."
                        + "  And then I left and it all went away, hah, I transitioned it poorly.."
                        + "  But I wrote <a href='http://www.instructables.com/id/Bus-tracking-on-the-cheap/?ALLSTEPS'>this instructable</a> when we were testing things."
                        + "  And here's <a href='http://today.duke.edu/2010/08/mattball.html'>a story</a> they wrote about the project.</p>"
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
                    , blurb: "bright as the sun"
                    , where: "Durham"
                    , tags: ["small", "favorite"]
                    , expound: "<p>a 555 timer-based bike light, designed by "
                        + " <a href='http://www.instructables.com/id/Ultimate-Bike-Light---FrontRear-Combo---100-Lumen/'>"
                        + "dan at instructables</a></p>"
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
                        + "<div class='embedded-content'><object width='400' height='300'>"
                          + "<param name='allowfullscreen' value='true' />"
                          + "<param name='allowscriptaccess' value='always' />"
                          + "<param name='movie' value='http://vimeo.com/moogaloop.swf?clip_id=3657375&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1' />"
                              + "<embed src='http://vimeo.com/moogaloop.swf?clip_id=3657375&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1' type='application/x-shockwave-flash' allowfullscreen='true' allowscriptaccess='always' width='400' height='300'></embed>"
                        + "</object></div>"
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
                    , expound: "<p>Duke was soliciting 'good student ideas,' but this got no reply, hah.</p>" 
                        + '<iframe class="scribd_iframe_embed" src="http://www.scribd.com/embeds/75401597/content?start_page=1&view_mode=list&access_key=key-ls8hgthoxjmku9j4bna"' 
                        + 'data-auto-height="true" data-aspect-ratio="0.772727272727273" scrolling="no" id="doc_39060"'
                        + 'width="100%" height="600" frameborder="0"></iframe>'
                        + '<script type="text/javascript">(function() { var scribd = document.createElement("script");' 
                        + 'scribd.type = "text/javascript"; scribd.async = true; '
                        + 'scribd.src = "http://www.scribd.com/javascripts/embed_code/inject.js"; '
                        + 'var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(scribd, s); })();</script>'
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
                    , expound: "<p>Me and my friend Jaime built two canoes as gifts using "
                        + "<a href='http://koti.kapsi.fi/hvartial/oss3/oss3.htm'>Hannu's 'Dug' design</a>."
                        + "  These were awesome little boats; really stable and could hold about 250lbs before it was time to start baling.</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/OdgwF.jpg"
                    }
                }
                , {
                    name: "gift wrap"
                    , blurb: "wrapping things up with old newspapers.  revolutionary."
                    , where: "Chapel Hill"
                    , tags: ["small"]
                    , expound: "<p>gift wrapping with newspaper.. some very interesting newspaper -"
                        + " written up for some reason on <a href='http://www.instructables.com/id/gift-wrapping-with-newspaper/'>instructables</a></p>"
                    , photos: {
                        thumb: "http://i.imgur.com/lPrkO.jpg"
                    }
                }
                , {
                    name: "surveying in the Altiplano"
                    , blurb: "surveying for a potential bridge in rural Bolivia"
                    , where: "Obrajes"
                    , tags: ["large", "favorite"]
                    , expound: "<p>I traveled to Obrajes, Bolivia in the summer of 2008 as part of an Engineers Without Borders team."
                        + "  The communities in the area are seasonally impeded by a river that swells" 
                        + " with the rains and mountain runoff; crops cannot be taken to the nearby city of Oruro"
                        + " and children are sometimes kept from school by the waters.</p>"
                        + "<div class='embedded-content'><img src='http://i.imgur.com/dGkLG.jpg' /></div>"
                        + "<p>Our small team took survey data of the river contours, tested the soil's bearing capacity,"
                        + " and conducted numerous interviews with residents, all in preparation for"
                        + " a potential bridge construction project to take place in 2009."
                        + "  The report I created to summarize the MATLAB analysis of the survey data may be "
                        + " <a href='http://www.scribd.com/doc/75417759/Bolivia-Survey-Report'>here</a>.</p>"
                        + "<div class='embedded-content'><img src='http://i.imgur.com/VYMMN.jpg' /></div>"
                        + "<p>This work generated a lot of reflection on issues of project sustainability and impact;"
                        + " I am no longer involved with the work since the summer's end, but many Duke students" 
                        + " traveled to the area in 2009 and completed a bridge crossing.</p>"
                        + "<p>Up-to-date information about the Bolivia team's work can be viewed on the"
                        + " <a href='https://wiki.duke.edu/display/engineerswithoutborders/bolivia'>team's wiki</a>."
                        + "  And all of my photos from this amazing trip are online"
                        + " <a href='http://picasaweb.google.com/mattball43/Bolivia2008#'>here</a>.</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/YNd4G.jpg"
                    }
                }
                , {
                    name: "scrap scale"
                    , blurb: "a fairly accurate scale from a bicycle axle"
                    , where: "Nkokonjeru"
                    , tags: ['small', 'favorite']
                    , expound: "<p>When the electricity went off in Nkokonjeru,"
                        + " I (finally) had an excuse to stop welding the gates for RASD, the NGO where we worked."
                        + "  Some other projects at the site needed to weigh things so I tried making a scale.</p>"
                        + "<div class='embedded-content'><img src='http://i.imgur.com/Vjm9F.jpg' /></div>"
                        + "<p>I used a moment-balance system where a known volume of water (usually 500mL)"
                        + " would be shifted until it balanced the load on the other side of the scale."
                        + "  It's somewhat similar to a physician's scale for weighing people."
                        + "  I used a bike hub and some tough wood to form the scale's body;"
                        + " scrap metal on the short end helped cancel the weight of the long arm.</p>"
                        + "<p>When it was working, Abhinav Kapur and I estimated a 40g precision."
                        + "  I made the mistake of taking the balance apart before finishing a second, nicer version."
                        + "  Version two, of course, was never completed."
                        + "  Sigh. I'd like to put one together in the States and employ the convenience of so many nice power tools,"
                        + " it would be handy to have a scale around.</p>"
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
                    , tags: ["small"]
                    , expound: "<p>Made a little soldering iron station -"
                        + " wrote it up on <a href='http://www.instructables.com/id/Soldering-Station/'>instructables</a></p>"
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
                    , expound: "made a lamp from an old fire extinguisher with some friends,"
                        + " wrote it up on <a href='http://www.instructables.com/id/Fire-Lamp!/'>instructables</a>"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/AfZ0B.jpg"
                    }
                }
            ]
        }
    ]
};
