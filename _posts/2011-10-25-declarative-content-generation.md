---
title: "Declarative Content Generation"
teaser: carcassonne3.png
category: project
tags:
- answer-set-programming
- procedural-content-generation
- games
#header:
#  teaser: carcassonne1.png
---

Procedural content generation is getting more and more popular these days, and it's really quite interesting. Of course, I'm not one to be content with just following the crowd, so I've been experimenting in a slightly different direction:

Declarative content generation!

Who wants to write algorithms when you could just specify a loose set of rules to govern whatever it is you're trying to generate? To illustrate this, I've written a Carcassonne-style map generator.

Carcassonne is essentially a board game where you build a world out of randomly-selected tiles. The tiles will have parts of cities, roads, or fields extending to the edges. Each tile must be placed beside a previously-placed tile, and the edges must match.

I've cheated a tiny bit because in a regular game of Carcassonne, the world ends up being full of gaps and branches in various directions. For my purposes, all worlds are complete and square. It's easier to manage, and it looks nicer.

So with that little bit of cheating, and some data management to encode the tile properties (which turned out to be a little bit of a pain in the ass), the entire map generator boils down to the following rules:

1) For every tile T1 at (X,Y) and tile T2 at (X-1,Y), T1.left == T2.right

2) For every tile T1 at (X,Y) and tile T2 at (X,Y-1), T1.top == T2.bottom

With these two rules, we can generate every possible Carcassonne map. The vast majority of them are pretty boring though. The actual game comes with a few extra limitations, which will force the generator to be a bit more interesting:

3) You always start with a particular tile which has a road, a city and a field.

4) The number of tiles is not unlimited. Each Carcassonne set comes with a specific number of each tile. I won't bother you with those details.

Now, the generator is not free to repeat the same tile for the entire map. If it runs out of one tile, it'll have to make do without it for the rest of the map.

With these rules in place, I get an interesting map!

![Foo](/images/carcassonne1.png)

Just for fun, I decided to add another rule:

5) The tiles at the edges of the map must have grass at the outside.

Now we end up with this:

![Foo](/images/carcassonne2.png)

And another:

![Foo](/images/carcassonne3.png)

And there you have it. Feel free to check out my code here:

[https://github.com/rcfox/Carcassonne-Map-Generator](https://github.com/rcfox/Carcassonne-Map-Generator)

If you're interested in learning about the technology behind this, you can find a good starting point here:

[http://eis-blog.ucsc.edu/2011/10/map-generation-speedrun/](http://eis-blog.ucsc.edu/2011/10/map-generation-speedrun/)
