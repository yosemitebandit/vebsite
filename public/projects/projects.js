var projects = {
    "title": "projects"
    , "history": [
        {
            year: "2013"
            , projects: [
                {
                    name: "Target Accrual"
                    , blurb: "getting to significant N"
                    , where: "Stanford"
                    , tags: ["small"]
                    , expound: "<p>Me and some friends built <a href='http://targetaccrual.com'>targetaccrual.com</a> for the StartX-Med hackathon at Stanford.</p> <p>It's two..frankly separate ideas.  We wanted to build a <a href='http://targetaccrual.com/researcher-network'>network graph</a> of researchers for the Rare Cancer Research Foundation (led by friends that work on the <a href='http://chordoma.org'>Chordoma Foundation</a>).  PubMed was scraped to establish co-authorship networks for various diseases.  See <a href='https://github.com/yosemitebandit/crabnet'>github</a> and the demo for more.</p> <div class='embedded-content'><img src='http://s3.amazonaws.com/yb-img/polycythemia-vera.png' /></div> <p>To present a business angle, we got into headhunting for clinical trials.  Many trials fail due to a lack of enrollment and these failures are expensive.  We planned to use scraping systems to inform a custom ad network.  Ads would be targeted to connect doctors, candidates and trials.</p>"
                    , photos: {
                        thumb: "https://s3.amazonaws.com/yb-img/target-accrual-network.png"
                    }
                }
                , {
                    name: "the Prism (ultimater version)"
                    , blurb: "close encounters with the bay"
                    , where: "Menlo Park"
                    , tags: ["small"]
                    , expound: "<p>My friend <a href='http://trevorshp.com'>Trevor</a> and I built a one-sheet boat using plans from the famous <a href='http://koti.kapsi.fi/hvartial/oss2/oss2.htm'>Hannu</a>.  All you need is a lone sheet of birch plywood (3/8\" I think..), some 1x2 runners for support and fiberglass for the outer seams where the flat bottom meets the sides.  The inner seams were covered with a thickened resin.  The outside has a few coats of Tung oil.</p> <p>Hannu's 'ultimater' version of the Prism has some stability enhancements and can theoretically displace 800 lbs.  But we got a little nervous with three people inside &ndash; the freeboard gets to be <i>quite</i> low and if you're not all carefully balanced, the bow or stern can swamp.</p> <div class='embedded-content'><img src='https://s3.amazonaws.com/yb-img/boat-finish.jpg' /></div> <p>We have lots more <a href='https://plus.google.com/photos/104532315857990767595/albums/5833521596572962657'>pictures</a> of our various excursions into the Bay, including Trevor's excellent <a href='https://plus.google.com/photos/104532315857990767595/albums/5833521596572962657/5843564031949934738'>timelapse</a>.  The boat seems to handle South Bay waters just fine, and we're tentatively discussing a journey to the East Bay, probably following the narrowing along the Dumbarton Bridge..</p>"
                    , photos: {
                        thumb: "https://s3.amazonaws.com/yb-img/widowmaker-tiny.jpg"
                    }
                }
            ]
        }
        , {
            year: "2012"
            , projects: [
                {
                    name: "Clusterbus"
                    , blurb: "exploring the phenomenon of bus-bunching with SFMTA data"
                    , where: "San Francisco"
                    , tags: ["small"]
                    , expound: "<p>During the <a href='http://hattery.com/reroutesf/'>ReRoute/SF hackathon</a>, I helped build a way to examine <a href='http://en.wikipedia.org/wiki/Bus_bunching'>bus-bunching</a> with Boaz, Wai Yip, Trucy and Kevin.  We were thinking about the really busy bus lines and how they sometimes get 'clumped' with two buses on the same line only separated by a few seconds.</p><p>This happens when one bus gets behind and the second driver adheres to his schedule.  Some transit agencies will tell the second driver to pass or slow down.  But SFMTA operates based on on-time performance, so the second driver is incentivized to stay on his schedule, regardless of the first bus's trouble.  Other agencies handle this a little better by optimizing 'headway,' or the spacing between the buses.  Spacing is what riders really care about &ndash; on a crowded line, they just want to minimize their wait.  Being precisely on schedule is less important when buses come every five minutes.</p><p>So we built a way to look at the headway of historical data on certain lines.  We pre-processed lots of old GPS data to calculate the headway of buses, and we then generated some metrics based on certain periods of time.  SFMTA operators said they might be interested in using these tools in a live operation so the dispatchers can better control the spacing of their drivers.</p><p>I worked on the frontend, bits of the API and some of the pre-processing.  The main site is in a state of flux.. but the code is <a href='https://github.com/yosemitebandit/clusterbus'>on github</a>."
                    , photos: {
                        thumb: "https://s3.amazonaws.com/yb-img/clusterbus-tiny.png"
                    }
                }
                , {
                    name: "DoubleYou"
                    , blurb: "avatars for visualizing health data"
                    , where: "Berkeley"
                    , tags: ["small"]
                    , expound: "<p>After building <a href='http://localhost:8000/projects/?y=2011&p=MEDuele'>MEDuele</a> in 2011, I returned to the <a href='http://blogs.ischool.berkeley.edu/hackinghealth/'>Cal Health Hackathon</a> to work with Stephanie, Patrick, Cyrus, Jas and Kristen on another idea.</p><p>One of the hackathon's challenges was to build something that encourages the use of a bodymedia fitness tracker armband. These are wearable sensors that log heartrate and accelerometer readouts (footsteps) throughout a normal day.  We also had a sample dataset from the armband but we wanted to do more than just create a typical dashboard of charts..</p><p>So we began thinking about how this might be presented to a child.  We came up with a <a href='http://en.wikipedia.org/wiki/Tamagotchi'>Tamagotchi-like</a> system &ndash; an online avatar would represent the data coming from the armband and other sources.  This 'DoubleYou' would be an easy way for a child to understand his progress towards fitness or dietary goals.</p><p>The site we demoed is at <a href='http://mydoubleyou.org'>mydoubleyou.org</a>.  Stephanie built some great avatars that react to parameters like fitness and mood.  I helped build the backend, crunch the sample data and setup an API for the avatars to consume.  The code is <a href='https://github.com/yosemitebandit/doubleyou'>on github</a>.  And we ended up taking second place, woo!"
                    , photos: {
                        thumb: "https://s3.amazonaws.com/yb-img/doubleyou-tiny.png"
                    }
                }
                , {
                    name: "Pipeline"
                    , blurb: "aggregating and analyzing water system data"
                    , where: "San Francisco"
                    , tags: ["large", "favorite"]
                    , expound: "<p>A data collection and management system being built during my work at Aquaya.  It's in production at <a href='https://pipelinehq.org'>pipelinehq.org</a> and open sourced <a href='https://github.com/aquaya/pipeline'>on github</a>.</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/6vlp8.png"
                    }
                }
                , {
                    name: "stravanova"
                    , blurb: "bike ride playback machine"
                    , where: "San Francisco"
                    , tags: ["small", "favorite"]
                    , expound: "<p>The real action's at <a href='http://yosemitebandit.github.com/stravanova'>yosemitebandit.github.com/stravanova</a>.</p> </p>Stravanova plays and overlays <code>gpx</code> files.  It can be one rider on multiple rides or multiple riders doing the same ride.  The start times are normalized.  A python script interpolates points such that the dataset has a position for every second.  This gives time-accurate and smooth playback, although it will put your computer through its paces..</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/cOyqI.png"
                    }
                }
                , {
                    name: "IVRHub"
                    , blurb: "mobile data collection on any device, in any language"
                    , where: "San Francisco"
                    , tags: ["large", "favorite"]
                    , expound: "Voice-based data collection &ndash; read more at <a href='https://ivrhub.org/about'>IVRHub.org</a>."
                    , photos: {
                        thumb: "https://s3.amazonaws.com/yb-img/ivrhub-response-tiny.png"
                    }
                }
            ]
        }
        , {
            year: "2011"
            , projects: [
                {
                    name: "Erik the Wall-Plotter"
                    , blurb: "a robo-artist"
                    , where: "Palo Alto"
                    , tags: ["small"]
                    , expound: "<p>Inspired by several other vertical wall-plotters we saw online, my buddy Will and I built Erik, a drawing robot.  It uses two stepper motors to pull a pen around a canvas.  But the pen cannot be lifted!  So there are some interesting path-generation challenges.  The software that interfaces with the controller board was written by us and it's available on <a href='https://github.com/yosemitebandit/erik'>github</a>.</p><p>I also blog about erik from <a href='http://post.yosemitebandit.com/tagged/erik'>time to time</a>.</p><div class='embedded-content'><img src='http://i.imgur.com/PGe7V.jpg' /></div>"
                    , photos: {
                        thumb: 'http://i.imgur.com/5Uv4H.jpg'
                    }
                }
                , {
                    name: "SMS Time Capsule"
                    , blurb: 'communicate little moments to your future self'
                    , where: "Palo Alto"
                    , tags: ["small"]
                    , expound: "<p>This is a time capsule for your text messages. Send a text to (650) 830-0777 and, after some amount of time, that message will be sent back to you.</p><p>For example, a message like <code>king of Sunol, the wildcat sauntered towards me %5d 3h 4m 10s</code> would be sent back in five days, three hours, four minutes and ten seconds.  Read more about it and see the source on <a href='https://github.com/yosemitebandit/never'>github</a>.</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/zq0WJ.png"
                    }
                }
                , {
                    name: "MEDuele"
                    , blurb: "connecting people to health information and resources"
                    , where: "Palo Alto"
                    , tags: ["large", "favorite"]
                    , expound: "<p>A website built for the Cal Health Data Hackathon with my friends <a href='http://stchangg.com'>Stephanie</a>, Will, and Patrick.  </p><p>Check the source on <a href='http://github.com/yosemitebandit/meduele'>github</a> and the short demo below.  (Alas, I recently let go of the callmeduele.org domain.)</p><div class='embedded-content'><iframe frameborder='0' allowfullscreen height='380' width='640' src='http://www.youtube.com/embed/q_gSaW4sj6I?hd=1'></iframe></div>"
                    , photos: {
                        thumb: "http://i.imgur.com/qisdp.png"
                    }
                }
                , {
                    name: "Redwood Cloud"
                    , blurb: "gathering, storing and visualizing lots of distributed sensor data" 
                    , where: "Palo Alto"
                    , tags: ["large", "favorite"]
                    , expound: "<p>This was one of the last projects I made while working at <a href='http://redwoodsystems.com'>Redwood Systems</a>.  Redwood collects a huge amount of highly-resolved sensor data and this not-so-cleverly-named project aggregated the data on a 'cloud' platform.</p><p>I built a backend storage system with MongoDB and created an API and some authentication mechanisms for sending and receiving the data.  I also created the <a href='http://flask.pocoo.org'>flask-based</a> frontend for viewing reports - it's demoed in the video below.</p><div class='embedded-content'><iframe width='640' height='380' src='http://www.youtube.com/embed/DdJOxZUw0kM?hd=1' frameborder='0' allowfullscreen></iframe></div><p>A shorter, more 'promo-ish' video might still be up at <a href='https://redwoodcloud.com'>redwoodcloud.com</a>.  But since leaving Redwood in early December 2011, I no longer work on that site.</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/GzCBx.png"
                    }
                }
                , {
                    name: "Vinyl"
                    , blurb: "real-time visualization of sensor data"
                    , where: "Palo Alto"
                    , tags: ["small", "favorite"]
                    , expound: "<p><a href='http://redwoodsystems.com'>Redwood</a> is ostensibly a lighting company but they also have a <i>ton</i> of sensor data.  I built some APIs on a MongoDB backend for managing a slice of this data in the Redwood offices.</p><p>Vinyl was a javascript visualization of this data, greatly inspired by 'Icicle,' one of <a href='http://thenoviceoof.com'>Nathan's</a> projects.  Each circle is a sensor in the building - they light up when something moves within their detection radius.  There was a barebones UI, vaguely inspired by youtube, that let people rewind to any part of the day or change the playback speed.</p><div class='embedded-content'><iframe width='640' height='380' src='http://www.youtube.com/embed/0aEmD2X_-sw?hd=1' frameborder='0' allowfullscreen></iframe></div>"
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
                    , expound: "<p>These were sensors I designed and built for the Perkins library at Duke when I was a senior.  The Duke study rooms are extremely popular and this project helped people find open ones.  Battery-powered and running on 8-bit AVRs, they used a rather fickle WiFi module called the 'WiFly.'  This was one of my first web projects - the backend was, uh, interesting.  But there was a very basic web interface that showed the status of the ~20 rooms.</p><div class='embedded-content'><iframe width='480' height='360' src='http://www.youtube.com/embed/oXoiZqXyRsg?hd=1' frameborder='0' allowfullscreen></iframe></div><p>Alas, the project is no more and code and schematics are lost to me..perhaps someone else has copies?  The video above gives a good overview of how things were.  (And here's <a href='http://ondemand.duke.edu/video/23338/perkinsense-a-new-way-to-find-' target='_blank'>another</a>.)</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/WtPWz.png"
                    }
                }
                , {
                    name: "DuTrack"
                    , blurb: "real-time bus tracking on the cheap"
                    , where: "Durham"
                    , tags: ["large", "favorite"]
                    , expound: "<p>I leveraged the open source <a href='http://www.opengts.org'>OpenGTS</a> project to bring create a low-cost bus-tracking system for my school when I was a senior.  For about $150 per year, you can have an unlimited data plan on some really cheap GPS-enabled cell phones.  The OpenGTS project has a small client app that runs on the phones and transmits position data back to the OpenGTS server, which we initially ran on a small desktop in the <a href='http://dukesmarthome.com'>Smarthome</a>.</p><p>We installed ~30 trackers to cover the whole fleet - A mechanic was nice enough to connect the trackers to each bus's electrical system so they could stay on.  We then modified the OpenGTS source to greatly increase the update rate so it would send coordinates about every 5s.</p><div class='embedded-content'><img src='http://i.imgur.com/fq9sY.jpg' /></div><p>I worked with a team to build a public-facing UI that showed the live positions of buses on certain routes (css-only Google maps icons, woo!).  There was also an admin section for assigning buses to routes, creating new routes, writing bulletins and other things.  And then I left and it all went away, hah, I transitioned it poorly..  But I wrote <a href='http://www.instructables.com/id/Bus-tracking-on-the-cheap/?ALLSTEPS'>this instructable</a> when we were testing things.  And here's <a href='http://today.duke.edu/2010/08/mattball.html'>a story</a> they wrote about the project.</p>"
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
                    , expound: "<p>a 555 timer-based bike light, designed by <a href='http://www.instructables.com/id/Ultimate-Bike-Light---FrontRear-Combo---100-Lumen/'>dan at instructables</a></p>"
                    , photos: {
                        thumb: "http://i.imgur.com/I13Zq.jpg"
                    }
                }
                , {
                    name: "savonius wind turbine"
                    , blurb: "scaled-down turbines for a water purification contest"
                    , where: "Durham"
                    , tags: ["small", 'favorite']
                    , expound: "<p>I worked for the 'turbine research group' in a contest to create a wind-powered, mechanical energy-only, desal prototype.  We built some variants on the the savonius vertical-axis design to test the effects of different geometries.  Our team eventually took 'most-innovative' at the <a href='http://www.ieenmsu.com/events/design-contest/past-years/2009-2/'>WERC contest</a>.</p><p>See some notes about what we were up to are <a href='http://wiki.duke.edu/display/wtw/energy+capture'>here</a>.</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/uNwZt.jpg"
                    }
                }
                , {
                    name: "trebuchet 2"
                    , blurb: "the second quick iteration on a simple trebuchet design"
                    , where: "Durham"
                    , tags: ["large"]
                    , expound: "<p>With <a href='trebuchet.htm'>many lessons learned</a>, and only a little pre-planning, I've launched into a second trebuchet build.  I'm looking at a 10' arm on an 8' tall frame.  Around 18 pieces will be bolted together to constitute the machine.  Custom-poured concrete blocks serve as counterweight.</p><div class='embedded-content'><object width='400' height='300'><param name='allowfullscreen' value='true' /><param name='allowscriptaccess' value='always' /><param name='movie' value='http://vimeo.com/moogaloop.swf?clip_id=3657375&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1' /><embed src='http://vimeo.com/moogaloop.swf?clip_id=3657375&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1' type='application/x-shockwave-flash' allowfullscreen='true' allowscriptaccess='always' width='400' height='300'></embed></object></div> <p>Here's an early launch with about 120+ lbs of counterweight and a half liter bottle projectile; more of the same on my <a href='http://vimeo.com/user1044247'>vimeo page</a>."
                    , photos: {
                        thumb: "http://i.imgur.com/dxtSk.jpg"
                    }
                }
                , {
                    name: "t-shirt design"
                    , blurb: "bleaching with discharge paste"
                    , where: "Chapel Hill"
                    , tags: ["small"]
                    , expound: "<p>I made some TNT t-shirts for my step-brother using this method from  <a href='http://www.instructables.com/id/Controlled-Bleaching-with-Discharge-Paste/'>fungus amungus</a>.</p>"
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
                    , blurb: "some modeling and analysis that I found interesting"
                    , where: "Durham"
                    , tags: ["small"]
                    , photos: {
                        thumb: "http://i.imgur.com/yJWBZ.jpg"
                    }
                }
                , {
                    name: "portable theater proposal"
                    , blurb: "just a proposal, sadly - maybe it'll get built someday"
                    , where: "Durham"
                    , tags: ["small"]
                    , expound: '<p>Duke was soliciting "good student ideas," but this got no reply, hah.</p><iframe class="scribd_iframe_embed" src="http://www.scribd.com/embeds/75401597/content?start_page=1&view_mode=list&access_key=key-ls8hgthoxjmku9j4bna" data-auto-height="true" data-aspect-ratio="0.772727272727273" scrolling="no" id="doc_39060" width="100%" height="600" frameborder="0"></iframe><script type="text/javascript">(function() { var scribd = document.createElement("script"); scribd.type = "text/javascript"; scribd.async = true; scribd.src = "http://www.scribd.com/javascripts/embed_code/inject.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(scribd, s); })();</script>'
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
                    , tags: ["large", "favorite"]
                    , expound: "<p>Me and my friend Jaime built two canoes as gifts using <a href='http://koti.kapsi.fi/hvartial/oss3/oss3.htm'>Hannu's 'Dug' design</a>.  These were awesome little boats; really stable and could hold about 250lbs before it was time to start baling.</p><div class='embedded-content'><img src='http://i.imgur.com/iGcdE.jpg' /></div>"
                    , photos: {
                        thumb: "http://i.imgur.com/OdgwF.jpg"
                    }
                }
                , {
                    name: "gift wrap"
                    , blurb: "wrapping things up with old newspapers - revolutionary."
                    , where: "Chapel Hill"
                    , tags: ["small"]
                    , expound: "<p>gift wrapping with newspaper.. some very interesting newspaper - written up for some reason on <a href='http://www.instructables.com/id/gift-wrapping-with-newspaper/'>instructables</a></p>"
                    , photos: {
                        thumb: "http://i.imgur.com/lPrkO.jpg"
                    }
                }
                , {
                    name: "the Altiplano"
                    , blurb: "talking to people and surveying the land in rural Bolivia"
                    , where: "Obrajes"
                    , tags: ["large", "favorite"]
                    , expound: "<p>I traveled to Obrajes, Bolivia in the summer of 2008 as part of an Engineers Without Borders team.  The communities in the area are seasonally impeded by a river that swells with the rains and mountain runoff; crops cannot be taken to the nearby city of Oruro and children are sometimes kept from school by the waters.</p><div class='embedded-content'><img src='http://i.imgur.com/dGkLG.jpg' /></div><p>Our small team took survey data of the river contours, tested the soil's bearing capacity, and conducted numerous interviews with residents, all in preparation for a potential bridge construction project to take place in 2009.  The report I created to summarize the MATLAB analysis of the survey data may be viewed <a href='http://www.scribd.com/doc/75417759/Bolivia-Survey-Report'>here</a>.</p><div class='embedded-content'><img src='http://i.imgur.com/VYMMN.jpg' /></div><p>This work generated a lot of reflection on issues of project sustainability and impact.  Should US citizens be building infrastructure in Bolivia?  I'm not so sure..  But Evo promised a bridge and had not yet delivered.  And the communities made it clear that this was important.  I'm no longer involved with the work since the summer's end, but many Duke students traveled to the area in 2009 and completed a crossing.</p><p>Up-to-date information about the Bolivia team's work can be viewed on the <a href='https://wiki.duke.edu/display/engineerswithoutborders/bolivia'>team's wiki</a>.  And all of my photos from this amazing trip are online <a href='http://picasaweb.google.com/mattball43/Bolivia2008#'>here</a>.</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/YNd4G.jpg"
                    }
                }
                , {
                    name: "scrap scale"
                    , blurb: "a fairly accurate scale from a bicycle axle"
                    , where: "Nkokonjeru"
                    , tags: ['small', 'favorite']
                    , expound: "<p>When the electricity went off in Nkokonjeru I (finally) had an excuse to stop welding the gates for RASD, the NGO where we worked.  Some other projects at the site needed to weigh things so I tried making a scale.</p><div class='embedded-content'><img src='http://i.imgur.com/Vjm9F.jpg' /></div><p>I used a moment-balance system where a known volume of water (usually 500mL) would be shifted until it balanced the load on the other side of the scale.  It's somewhat similar to a physician's scale for weighing people.  I used a bike hub and some tough wood to form the scale's body; scrap metal on the short end helped cancel the weight of the long arm.</p><p>When it was working, Abhinav Kapur and I estimated a 40g precision.  I made the mistake of taking the balance apart before finishing a second, nicer version.  Version two, of course, was never completed.  Sigh. I'd like to put one together in the States and employ the convenience of so many nice power tools, it would be handy to have a scale around.</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/EudwH.jpg"
                    }
                }
                , {
                    name: "jatropha biofuel"
                    //, blurb: "making fuel and sometimes peanut butter in some hand-powered, small-scale expellers"
                    , blurb: "bio-oils of various kinds from tiny expellers"
                    , where: "Nkokonjeru"
                    , tags: ["small"]
                    , expound: "<p>Kerosene for lamps and generators is incredibly expensive in Uganda with some households spending 30% of their income on the fuel.  We wanted to work with RASD and explore the possibilities of small-scale bio-oil production using <a href='http://piteba.com'>Piteba presses</a>.  The presses used a candle to heat a hand-cranked screw press.  We made quite a bit of peanut butter during testing in the States and the presses proved to work decently well with jatropha seeds.  The seeds are poisonous if ingested so some safety precautions had to be observed.  We worked with RASD to find a small quantity of ripe seeds but, after producing a small amount of oil, we were unable to ignite it in any sort of lamp apparatus.</p>Further research was needed on precisely when to pick the jatropha seeds and how long to store them prior to expelling.  And we unfortunately did not even scratch the surface of building an organizational structure for collecting seeds in appreciable quantities (probably the more interesting problem compared to figuring out how to squeeze more oil).  Dan Moss completed a great write-up of the work <a href='https://wiki.duke.edu/display/engineerswithoutborders/Jatropha+Processing'>here</a>.</p><div class='embedded-content'><img src='http://i.imgur.com/SMd4W.jpg' /></div><p>As a long aside, the backstory for this project is pretty interesting: Uganda once had a booming vanilla industry and, vanilla being a vine, the many plants required a support structure.  The jatropha plant was a popular choice for many Ugandan farmers as it grew very rapidly and was native to the area.  Vanilla waned after some time (Madagascar's production recovered, we were told) and people began noticing that the abundance of jatropha seeds were an excellent candidate for bio-oil production.</p><p>While in Uganda in 2007, my friend Lee Pearson organized a trip to Royal Van Zanten's enormous flower-growing operation, just a short distance from the capital.  Many flower exporters have greenhouses in Uganda because of the excellent climate and the small timezone difference between East Africa and Europe.  Thousands of tons of flowers are flown to the Netherlands every week.  RVZ was just in the midst of a large-scale jatropha operation intending to power their generators with jatropha-based biodiesel.  They had previously employed several truck drivers to collect the seeds in surrounding communities and had recently planted every spare acre of their land with the bushy plants.  We were given a tour of their industrial expelling and filtration process (led by Bas van Lankfeld, I believe).</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/ao9FL.jpg"
                    }
                }
                , {
                    name: "RASD infrastructure"
                    , blurb: "capacity building with an NGO in Uganda"
                    , where: "Nkokonjeru"
                    , tags: ["small"]
                    , expound: "<p>I spent the better part of the summer in Nkokonjeru working with friends and the awesome people at the Rural Agency for Sustainable Development.  Led by Ignitius Bwoogi, RASD provides agricultural assistance, leads local health programs, and offers technical training to the community.  RASD and Ignitius are very well-respected within the community and this was our group's third year of working with him.  My buddy Will worked for many months to plan out some of the infrastructure projects that RASD believed would help the organization make money and better serve the community.  We worked with them during the summer to create a welding and carpentry workshop, classrooms, and a fence.</p><div class='embedded-content'><img src='http://i.imgur.com/b6IAC.jpg' /></div><p>Ignitius's largest goal was to set up an internet cafe at RASD - it would be the first in the community and could provide a steady stream of income to finance RASD's other programs.  I played a small part in helping Will set this up with solar-powered Inveneo computers and Meraki routers.  I also worked on the biomass charcoal and jatropha bio-fuel projects which can also be found on this site.</p>"
                    , photos: {
                        thumb: "http://i.imgur.com/zikJ8.jpg"
                    }
                }
                , {
                    name: "portable refridgeration"
                    , blurb: "keeping biological samples cold in remote areas"
                    , where: "Durham"
                    , tags: ["small"]
                    , expound: "<p>See <a href='https://wiki.duke.edu/display/engworld/Portable+refrigeration'>the wiki</a> for details.</p>"
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
                    , blurb: "playing with 8bit AVRs"
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
                    , expound: "<p>Made a little soldering iron station - wrote it up on <a href='http://www.instructables.com/id/Soldering-Station/'>instructables</a></p>"
                    , photos: {
                        thumb: "http://i.imgur.com/dGggf.jpg"
                    }
                }
                , {
                    name: "rainwater harvesting"
                    , blurb: "designing and building a 2900 gallon RWH tank in rural Uganda"
                    , where: "Kasaka and Kanoni"
                    , expound: '<p>Learned a tremendous amount from this one - I lived and worked for three weeks in rural Uganda with friends from the States and with our hosts from the Central Buganda University.  An assessment team had visited the community in 2006 and, working with CBU, determined that clean water access was an area where we could lend a hand.  That group decided rainwater harvesting and a small handwashing campaign was the way to go.</p><p>Back stateside, I joined on and started conducting some rainwater harvesting simulations based on the size of the communities, some info on the catchment buildings and weather data for the area.  This gave us estimates of supply and demand which we used to size several rainwater harvesting tanks (Uganda has one and sometimes two rainy seasons so the goal was to store enough water to get people through the dry spells).</p><p>I got picked for the travel team and jumped in to the literature on the construction of RWH tanks, guttering systems, and other "accessories" that can help keep RWH tanks clean.  The <a href="http://www2.warwick.ac.uk/fac/sci/eng/research/civil/crg/dtu/rwh/">Warwick DTU</a> was a tremendous resource; they have very accessible papers on RWH tech and we used a lot of their ideas.  I designed some formwork for building a 2900 gallon octagonal tank with 4" concrete walls.  We used the forms to pour three sections of two foot high walls on top of one another.  Rebar and a wire mesh made up the roof.  Here we are, just prior to pouring the second "lift."</p><div class="embedded-content"><img src="http://i.imgur.com/732LT.jpg" /></div><p>So we ended up with one finished tank that continues to function to the present day (woo!).  And my friend Patrick and I became pretty good friends with Kenneth, a really nice guy that has gone on to do interesting things all over Uganda.  There were some, uh, sticking points though that I should probably note.. so in no particular order:</p><p>The tiny community of Kasaka already had a handful of rainwater harvesting tanks in various states of disrepair, which made me wonder why our team was building another one.  For the sake of "experiential learning" I was told to disregard Warwick\'s published methods for building a concrete tank and create my own.  It was clear the Ugandans we worked with knew how to build these things and our formwork method was atypical.  We also just generally struggled in our communication with the local partner group.  That was the biggest lesson: talk to the local group as often as possible, there really can\'t be enough need-finding.</p><p>This was an incredible trip though, I ended up back in Uganda the next year and expect I\'ll be there again at some point.  More pictures from the people we met and our work are online <a href="https://picasaweb.google.com/mattball43/Uganda2007">here</a>.</p>'
                    , tags: ["large", "favorite"]
                    , photos: {
                        thumb: "http://i.imgur.com/H2hdd.jpg"
                    }
                }
                , {
                    name: "biomass charcoal"
                    , blurb: "researching ways to make fuel from agricultural waste in rural Uganda"
                    , where: "Durham"
                    , expound: "<p>My friends and I closely followed <a href='http://en.wikipedia.org/wiki/Amy_B._Smith'>Amy Smith</a> and the <a href='http://d-lab.mit.edu/'>D-Lab's</a> research on biomass charcoal production.  She was operating in Haiti, pyrolizing corn cobs to create a safe cooking fuel.  Smoke-inhalation from indoor cooking fires is the number one killer of children in the developing world and smokeless charcoal is an ideal alternative to burning sticks or other matter.  Producing traditional wood-based charcoal is becoming more difficult in Haiti, Uganda, and elsewhere due to rampant deforestation.</p><div class='embedded-content'><img src='http://i.imgur.com/2zDzL.jpg' /></div><p>The D-Lab developed a small-scale pyrolysis process which we expounded upon in experiments in the States as well as in Uganda (see the photo above).  Some notes on our work, collected by Dan Moss, are on the <a href='https://wiki.duke.edu/display/engineerswithoutborders/Biomass+Charcoal'>Duke Wiki</a>.</p>"
                    , tags: ["large", 'favorite']
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
                    , blurb: "making ECG calibration devices for hospitals in Central America"
                    , where: "Durham"
                    , expound: "I led a small team in the production of 70 ECG calibration devices.  Feedback from Engineering World Health's partners in the field indicated that these devices were very useful and that more were needed.  The hardware, designed by a student group of yore, created sinusoidal waveforms and emulated heartbeats to assist in the calibration of electrocardiogram machines.</p><p>I sourced the parts for these devices and organized weekly builds where the solder flowed freely.  After in-house testing, we gave them to the EWH national group where they were sent along with trained volunteers to Central American hospitals.</p>"
                    , tags: ["large"]
                    , photos: {
                        thumb: "http://i.imgur.com/yN0ba.jpg"
                    }
                }
                , {
                    name: "Fire extinguisher lamp"
                    , blurb: "making a lamp from a spent fire extinguisher"
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
