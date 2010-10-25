---
layout: default
title: AI Aquariums
image: /images/ai-world-screen.png
image_y: 250
categories:
- project
- ai
---
# World Exploration AI #

The AIs begin with no knowledge of the world, and have to find their way around. They have a limited range of view, but they remember the parts of the world that they've seen, and take that into account for path finding. It is possible for the layout of the world to change, which may surprise the AIs.

World Features:
<table border="2">
<tr><th>Colour</th><th>Function</th><th>Solid</th><th>Transparent</th></tr>
<tr><td>Green </td><td>Grass   </td><td>No   </td><td>Yes        </td></tr>
<tr><td>Grey  </td><td>Wall    </td><td>Yes  </td><td>No         </td></tr>
<tr><td>White </td><td>Fog     </td><td>No   </td><td>No         </td></tr>
<tr><td>Cyan  </td><td>Glass   </td><td>Yes  </td><td>Yes        </td></tr>
</table>

<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/oYhccD20icQ?fs=1&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/oYhccD20icQ?fs=1&amp;hl=en_US" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>

# Goal-based AI #

The idea behind the goal-based AI is that the AIs get some sort of high-level goal that they must accomplish. Each goal might have a number of subgoals. If a goal can't be accomplished in the current state, the next available goal will be chosen and will result in the AI being in a state where it is able to accomplish the original goal.

## Fighting ##

In this scenario, there are red bad guys and blue good guys. They each have the overall goal of killing all of the other group.

Just for fun, the good guys gain levels as they kill, which makes them more powerful. This helps to offset the advantage that the bad guys get, since there are so many of them.

<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/0HzK-yhYinc?fs=1&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/0HzK-yhYinc?fs=1&amp;hl=en_US" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>

## Gathering ##

This time, the red spots are items that the blue guys gather and then bring to the upper-left corner of the world. There are two different versions. In the first version, everyone goes for the closest item that they see. In the second version, the AIs will "call dibs" on an item so that the others will not target it, which leads to more efficient gathering.

<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/_U05ccQ5lsA?fs=1&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/_U05ccQ5lsA?fs=1&amp;hl=en_US" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>

<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/ku6fDRV-OGs?fs=1&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/ku6fDRV-OGs?fs=1&amp;hl=en_US" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>
