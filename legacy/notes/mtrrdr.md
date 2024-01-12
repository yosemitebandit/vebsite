+++
date = "2013-03-29T13:00:00-08:00"
thumbnail = ""
title = "mtrrdr"
location = "Menlo Park"
tags = ["projects"]

+++

Trevor and I want to do some depth mapping of the bay in our boat.
We looked at using underwater sonar transducers
like those from [MaxBotix](http://www.maxbotix.com/Ultrasonic_Sensors/Outdoor_Sensors.htm)
but they're usually water-resistant and not waterproof.
(I guess that one's IP67 rated &ndash; someone in a forum said they've still had issues.)

So now we're looking at fishfinders and pre-built depth gauges.
To get the data out we could open them up, listen in on the RF comms
or maybe just take periodic images of the screen.
It's sort of a ridiculously roundabout method
but I think it could be useful for other folks with pre-built instruments.
Here's a sample panel from [Amazon](http://www.amazon.com/Norcross-Hawkeye-D10D-Depth-Sounder/dp/B000JEOEE0/ref=pd_cp_e_0):

![hawkeye depth gauge](/img/hawkeye-depth-gauge.jpg)

"mtrrdr" (meter reader) would be one part Android app and one part web service.
The app would take periodic, timestamped images of the fishfinder screen
(and also probably log position with GPS).
Those images would at some point be processed by an OCR library on a server.

For OCR I've been testing [tesseract](https://code.google.com/p/tesseract-ocr/wiki/ReadMe)
and a simple python interface, [pytesser](https://code.google.com/p/pytesser/).
I compiled tesseract for Ubuntu 12.10 (Quantal)
following the steps [here](https://code.google.com/p/tesseract-ocr/wiki/Compiling).
Then I added the English training data 
from [here](https://code.google.com/p/tesseract-ocr/wiki/TrainingTesseract3).
I could then run the basic "fnord"
[pytesser example](https://code.google.com/p/pytesser/).

Next step I think is to create a training dataset for our dial.
The default training data was unable to process the panel pictured above.
