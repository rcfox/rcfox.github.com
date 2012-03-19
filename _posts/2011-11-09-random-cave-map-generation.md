---
layout: post
title: "Random Cave Map Generation"
category: project
tags:
- procedural-content-generation
- haxe
---
{% include JB/setup %}

More map generation! This one's a bit more conventional:

1. You start with all walls.
2. Randomly place floors. (I used a 49% chance of each square being a floor.)
3. Apply a cellular automaton, using these rules for each square:
  * If fewer than 4 of the 8 adjacent squares are walls, then the square becomes a floor.
  * If more than 4 of the 8 adjacent squares are walls, then the square becomes a wall.
  * If the rules above don't apply, leave the square as it is.
4. Repeat step 3 several times. I did it 10 times.

And here's the result:

![Foo](/images/caves.png)

This tends to generate maps that sort of look like naturally-formed caves. Unfortunately, the map isn't fully connected: there are many areas that are inaccessible from other areas. The common approach to solving this is just to draw lines between disjoint areas. I think that's ugly though. 

Since dungeons in games are generally composed of several (or infinitely many) floors, my plan is to place (at least) one set of stairs down in each area. Then, when I go to generate the next floor, I will force floors (and stairs up) directly below where the stairs down are. This should make it so that if you go down and up, you should be able to eventually reach any location on every map, unless the RNG really hates you. I haven't gotten around to that just yet though.

The image I've attached is very colourful. Each colour indicates a new a disjoint area of the map. This is really more to confirm that I can find the disjoint areas, but it also make for an interesting visual.

Since this was also an experiment in learning [haXe](http://haxe.org/), I can provide a little Flash demo to look and refresh to generate a new map: [http://rcfox.ca/mapgen.swf?x=100&y=100](/mapgen.swf?x=100&y=100)

I find that 300x300 looks more interesting, but 100x100 is more realistic in terms of likely map sizes.

(Note: This article was cross-posted to [Google+](https://plus.google.com/113431013843451438802/posts/Wze6G1h95VF).)
