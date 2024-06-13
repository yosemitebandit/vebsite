+++
title = "June 2024"
date = 2024-06-08
+++

:robot: [Fooocus](https://github.com/lllyasviel/Fooocus)
- this is a really impressive text-to-image package
- out of the box I think it's just
llama3 expanding / adding nuance to your original prompts
and then using stable diffusion,
specifically the default model as of now is `juggernautXL_v8Rundiffusion`
- I've played with Midjourney for a while and Fooocus gives really good results out of the box,
I'd say very very close to the outputs you can get from Midjourney
- I tested in colab only, would be fun to try it locally
- the prompt for the image below was just "beach",
generated in a few min on colab:

{{ resize_image(path="notes/media/beach.png", width=500, height=500, op="fit_width") }}


:fire: [Pano AI](https://pano.ai)
- Pano looks like a cool company!
They make cameras + software to try to detect wildfires quickly.
- I wonder how it compares to a traditional (human) firewatch
and also satellite imagery, would that be a quasi-competitor to a product like this?
- How much acreage do these cameras typically cover?
In IRL deployments how have the cameras impacted response times?
Are they visible light only -- are the cameras inoperative at night?
- And I wonder if they do any IRL testing/in-situ calibration with like a large smoke machine, hah..
Related -- here is [imagery from a controlled burn in Aspen CO](https://www.youtube.com/watch?v=zqqPFw8Dftw)
- Would be a fun challenge to manage these device in very rugged deployments,
reminds me of my work at [Endaga](@/projects/eno/index.md) where ssh into the boxes was tough!
At [Culture](@/projects/culture/index.md) I would joke that our deployment is so easy
-- no batteries, wired internet, engineers 50ft away.. easy!
- afaik they ship all their imagery to the cloud for processing,
but I could imagine a product variant for super remote areas which tries to do some analysis onsite and
sends just analysis results (vs all the imagery) over low bandwidth links like sat, or custom long-range networks.
