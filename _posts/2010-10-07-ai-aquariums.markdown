---
layout: post
title: AI Aquariums
categories:
- project
tags:
- ai
---
# World Exploration AI #

Source: [https://github.com/rcfox/World-Exploration-AI](https://github.com/rcfox/World-Exploration-AI)

The AIs begin with no knowledge of the world, and have to find their way around. They have a limited range of view, but they remember the parts of the world that they've seen, and take that into account for path finding. It is possible for the layout of the world to change, which may surprise the AIs.

World Features:
<table border="2">
<tr><th>Colour</th><th>Function</th><th>Solid</th><th>Transparent</th></tr>
<tr><td>Green </td><td>Grass   </td><td>No   </td><td>Yes        </td></tr>
<tr><td>Grey  </td><td>Wall    </td><td>Yes  </td><td>No         </td></tr>
<tr><td>White </td><td>Fog     </td><td>No   </td><td>No         </td></tr>
<tr><td>Cyan  </td><td>Glass   </td><td>Yes  </td><td>Yes        </td></tr>
</table>

<iframe title="YouTube video player" width="480" height="390" src="http://www.youtube.com/embed/oYhccD20icQ" frameborder="0">&nbsp;</iframe>

# Goal-based AI #

Source: [https://github.com/rcfox/RPG-Aquarium](https://github.com/rcfox/RPG-Aquarium)

The idea behind the goal-based AI is that the AIs get some sort of high-level goal that they must accomplish. Each goal might have a number of subgoals. If a goal can't be accomplished in the current state, the next available goal will be chosen and will result in the AI being in a state where it is able to accomplish the original goal.

## Fighting ##

In this scenario, there are red bad guys and blue good guys. They each have the overall goal of killing all of the other group.

Just for fun, the good guys gain levels as they kill, which makes them more powerful. This helps to offset the advantage that the bad guys get, since there are so many of them.

<iframe title="YouTube video player" width="480" height="390" src="http://www.youtube.com/embed/0HzK-yhYinc" frameborder="0" >&nbsp;</iframe>

## Gathering ##

This time, the red spots are items that the blue guys gather and then bring to the upper-left corner of the world. There are two different versions. In the first version, everyone goes for the closest item that they see. In the second version, the AIs will "call dibs" on an item so that the others will not target it, which leads to more efficient gathering.

<iframe title="YouTube video player" width="480" height="390" src="http://www.youtube.com/embed/_U05ccQ5lsA" frameborder="0" >&nbsp;</iframe>

<iframe title="YouTube video player" width="480" height="390" src="http://www.youtube.com/embed/ku6fDRV-OGs" frameborder="0" >&nbsp;</iframe>
