---
title: "The Power Metal Social Network"
category: project
tags: [graphs, powermetal]
---

I noticed that in [The Metal Archives](http://www.metal-archives.com/), there are links between bands and their artists. If you enjoy a band, it's simple to find similar bands by looking at the artists' other bands. I decided to scrape all of these relationships and build a graph. Artists and bands are nodes, joined by edges indicating their current or former association.

[![Power Metal Graph](/images/powermetal-graph.png)](http://rcfox.ca/PowerMetalGraph/)

I'm mostly just interested in power metal, so I limited the scope to that, leaving 8340 bands out of more than 100,000. Between those 8340 bands and their members, there turned out to be 60672 nodes and 58873 connections between nodes.

That was just way too much to deal with. I noticed that there was only one subgraph that contained more than 200 nodes, so I went with it. It has 20333 nodes, 22810 connections. That's still too many, so I stripped out any band members who are only members of one band. (They're probably less interesting anyway, unless you happen to be them.) That takes it down to 5781 nodes and 8258 connections. 

2461 out of 8340 bands remain in this graph. What's interesting is that all of these bands are either directly or indirectly connected to each other. I'm not really sure how that compares to other genres or other social graphs, but I think that's pretty amazing.

You can play with the graph [here](http://rcfox.ca/PowerMetalGraph/), or view the source for the scraper and visualization [here](https://github.com/rcfox/PowerMetalGraph).
