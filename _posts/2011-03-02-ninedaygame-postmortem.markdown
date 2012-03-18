---
layout: post
title: NineDayGame - Postmortem
image: /images/nineday_icon.png
image_resize: 150
categories:
- project
tags:
- roguelike
- games
---

My friend Alex and I have both been playing [roguelike](http://roguebasin.roguelikedevelopment.org/index.php?title=What_a_roguelike_is) games for a while, and we were inspired to create our own. Since reading week was coming up this term, we decided to stop talking about writing a game and actually do it. I'm not going to go into a recap of the progression of the project because I feel like we did a pretty good job of that on the [@NineDayGame Twitter account](http://twitter.com/NineDayGame), on [my Youtube account](http://www.youtube.com/view_play_list?p=514EB1545CFC7371) and on [Alex's blog](http://www.kwartzlab.ca/?s=Nine+Day+Game).

Here is the final version, committed around midnight on the nineth day:

<iframe title="YouTube video player" width="480" height="390" src="http://www.youtube.com/embed/Tb4UopPh6yg" frameborder="0">&nbsp;</iframe>

* You can grab the source from GitHub: [https://github.com/NineDayGame/NineDayGame](https://github.com/NineDayGame/NineDayGame)
* We also have Linux 32- and 64-bit binaries available: [https://github.com/NineDayGame/NineDayGame/downloads](https://github.com/NineDayGame/NineDayGame/downloads)

Overall, I'm really impressed with what we managed to accomplish. We both put over 100 hours into this during those nine days, and I think it shows. We've got a randomly-generated, 3D world populated by 2D characters ([Paper Mario](http://en.wikipedia.org/wiki/Paper_Mario)-style) and dynamic lighting around the player. In addition, there is an on-screen console and displays, and you can even get a menu for interacting with your inventory. And there's even a targeting system to allow you to select when enemy to attack with your skills.

Behind the scenes, we've got an action scheduling system which manages when everyone acts. For instance, walking is faster than casting a spell. You can also increase your speed with magic to give yourself an advantage over the monsters.

Now, this wouldn't be a postmortem if I didn't mention some of the things that went bad, or could have gone better:
1. C++ - I had sort of hoped that we'd use straight C, since I've recently come to appreciate its simpleness. C++ did make some things easier, like organizing data and reusing code. However, it also introduced some additional complexity. Also, I'm not as familiar with C++, so I'm sure I reinvented some wheels.
1. Shared Pointers (shared_ptr) - I've never had too much trouble managing when and where memory should be allocated and freed, but I've also never had to throw around so many pointers. Alex suggested using [Boost's shared pointer library](http://www.boost.org/doc/libs/release/libs/smart_ptr/shared_ptr.htm) to help manage memory usage. While it was nice to not have to worry about freeing the memory, there were a couple of times when I expected objects to go away and they didn't. (Maybe I just don't know what I'm doing!) Also, casting shared_ptrs between base classes and child classes was a pain because it always required an explicit cast. I ended up writing some macros to help do this, but I feel that it made the code much uglier.
1. 3D stuff - I was a little apprehensive about making a 3D roguelike. For one, most of the other 3D roguelikes I've seen weren't very nice. ([ToME 4](http://te4.org/) is one exception to that!) I also know almost nothing about 3D graphics, and Alex isn't exactly an expert either. I managed to get by without having to touch any of the 3D code, and Alex seemed to enjoy doing it, so I guess that's a win. I did feel like the 3D stuff sort of hindered what we could do though. Once part of the world was created, it turned out to be very hard to change. This meant that the hero's blood splatters didn't get applied in the final version of the code. It also meant that adding extra dungeon features, like doors, would be difficult to update.
1. [libtcod](http://doryen.eptalys.net/libtcod/) - I used libtcod to handle the pathfinding and field of view algorithms since it seemed to do a good job of this. I was pretty happy with it, for the most part. I would have liked to be able to specify movement costs instead of just walkable/passable, and whenever I wanted one guy to pathfind to another guy, I'd have to first set their coordinates to walkable before computing the path. I also ran into a crazy issue where trying to draw my walls as dark grey would cause all sorts of segfaults in the pathfinding section's list operations. I guess that suggests memory corruptions, but I have no idea where.
1. Our own goals - We planned to have a somewhat complex character creation system. However, by the 7th or 8th day, we realized that this wasn't going to happen. One of our goals was also to end up with a fun game, something that people would want to play. This turns out to be difficult to do, especially when you've only got a day left. Instead, we decided to simply include a "kill counter" so that you could try to beat your old score. The game is also horribly unbalanced. I didn't have time to implement temporary stat improvements, so they're permanent. If you had the time, you could increase your eyesight to be able to see the entire screen, or increase your speed to give you 100 moves for everyone else's 1 move.
1. Fancy graphics - In short, we didn't really have any. I like the dynamic light that moves with the player, but we had also planned on having torches on the walls and a particle engine to make fireballs and such. Again, it boiled down to not enough time. By the time Alex could even think about starting on the particle engine, we had two hours left. Maybe he'll get to it later?

It wasn't all bad though. Some things turned out pretty well:

1. Working in parallel - I am terrible at sharing work. Fortunately, Alex was able to work on the 3D graphics while I worked on the data engine. For the first few days, there was little-to-no interaction needed between our code. This meant that we weren't waiting on each other to finish something, and that we could sort of design one part without having to compromise for the other. Once we started to connect them together, we did have to spend a little time to get the interfaces to line up though. Shortly after that, I introduced the concept of a game state into the engines which pretty much solved all of our remaining issues.
1. A place to work - We did almost all of our work in [Kwartzlab](http://www.kwartzlab.ca/), a local [hackerspace](http://en.wikipedia.org/wiki/Hackerspace) (sort of a communal workshop). Some days were cold, some were warm, but it was pretty comfortable overall. It was also well-stocked with pop and energy drinks, which helped a lot!
1. [redo](https://github.com/apenwarr/redo) - I convinced Alex to let me experiment with using as our build system instead of make. There was practically no learning curve to it, but that might have been due to my familiarity with how make works.
1. Twitter - As I mentioned before, we used Twitter to tell people about our progress. Most of our followers were Kwartzlab members, and we got several encouraging comments throughout the week about the videos we posted and how we were progressing. This was definitely helpful in staying motivated because we sort of felt like we were being held accountable for finishing.

