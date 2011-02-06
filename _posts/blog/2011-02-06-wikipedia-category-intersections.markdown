---
layout: default
title: Wikipedia Category Intersections
image: /images/venn.png
image_resize: 150
categories:
- blog
- wikipedia
---
# Wikipedia Category Intersections #

Have you ever wondered which games are available for both Linux and the Dreamcast? No? Well, now you don't have to!

<iframe src="http://csclub.uwaterloo.ca/~rcfox/wiki-intersect.pl?Linux_games&Dreamcast_games" frameborder="0" width="100%" height="210">&nbsp;</iframe>

To keep myself sane over the Christmas holidays, I wrote a little script to scrape Wikipedia category pages and find the intersections between two categories. You can specify more than two categories and it will do the two-way intersection between each pair. For instance: [http://csclub.uwaterloo.ca/~rcfox/wiki-intersect.pl?Linux_games&Dreamcast_games&Quake](http://csclub.uwaterloo.ca/~rcfox/wiki-intersect.pl?Linux_games&Dreamcast_games&Quake)

This script is by no means optimal. At the time of writing, I didn't realize that you could tell Wikipedia to just give you raw data without the HTML. Also, it seems that Mediawiki has an API for getting data, which means that you could potentially write a script to work with an Mediawiki wiki.

Source: [https://github.com/rcfox/Wikipedia-Category-Intersections](https://github.com/rcfox/Wikipedia-Category-Intersections)
