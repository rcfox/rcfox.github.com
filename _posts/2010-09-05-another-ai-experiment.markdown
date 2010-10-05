---
layout: default
title: Another AI Experiment
image: /images/ai-world-screen.png
image_y: 250
categories:
- blog
- ai
- youtube
---
My last attempt at making an AI aquarium got a little bit too complicated too fast. I did some [neat things](http://www.engineering.uwaterloo.ca/~rcfox/dokuwiki/doku.php?id=rpg_aquarium), but I kind of worked myself into a corner, and it got harder and harder to do new stuff.

I've decided to start over, this time with an emphasis on describing the world correctly, and ensuring that the AIs can navigate it properly. I think I've somewhat accomplished this. The AIs now all have a proper field of vision, rather than know about everything on the map, and they also have to independantly learn about the layout of the terrain. Since the AIs move around, the only time they really know where each other are is when they can see them.

I've got a little video to demonstrate my experiement. In this video, grey squares are walls, green squares are grass, cyan squares are windows (you can see through them, but you can't move through them) and the white squares are fog (you can walk through it, but not see through it). The AIs' colours are randomly chosen. The AIs travel to randomly placed locations. When they get to their destination, they choose another random point.

<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/oYhccD20icQ?fs=1&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/oYhccD20icQ?fs=1&amp;hl=en_US" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>
