---
title: "Tracking the health of a boss in Warframe"
category: project
tags: [games, warframe]
---

In the game [Warframe](https://warframe.com/), there's a periodically-appearing megaboss called the [Balor Fomorian](http://warframe.wikia.com/wiki/Balor_Fomorian). It tries to destroy one of the few social hubs in the game, and it's up to the entire community to destroy it before that happens. Players are presented with a mission to sabotage the Balor Fomorian, and are rewarded with a small chance to get parts of a new weapon as well as a larger chance to get useful resources.

Each successful completion of the mission is supposed to decrease the health of the boss slightly. So while there is a fixed deadline for the mission to end (and if that deadline is reached, the social hub is destroyed!) the actual end of the event is unknown. Once the event starts, people will report it on Reddit. People at work or who are otherwise unable to play immediately often get anxious about missing the event before having a chance to participate, so I decided to track the end of the boss the next time it appeared.

Real-time information about the events in the game are made available [via the web](http://content.warframe.com/dynamic/worldState.php). It's a simple matter of periodically downloading the events data and pulling out the health value. I used [hook.io](https://hook.io/) to host my script to download the file, and they also provided a datastore to keep the values.

On May 11, 2016, another Balor Fomorian appeared. I was in the game when it happened, so I immediately checked that my script was working and... it wasn't! It turns out something about my hook.io account got screwed up, and I had to ask them to fix it. So I missed the data from the beginning of the event! I also had a couple of instances where the datastore wouldn't let me write any more values to the key I was using, causing me to miss some data in the middle of the event as well. I'm not really sure why that happened, and the workaround was to just use a different key.

Here's how the event progressed:
![Fomorian Health over Time](/images/fomorian-health.png)

(There are three lines because the game is available for PC, Xbox One and Playstation 4, each with their own distinct universes. The thinner parts of the lines are where I missed some data.)

Surprisingly linear, right? I would have expected the rate of decline to vary as people went to bed or to work, etc.

Here's the rate of change:
![dH/dt](/images/fomorian-health-delta.png)

We can see that PC and PS4 initially tackled the event pretty quickly, but XB1 took some time to get started on it. Eventually, they all settled at nearly the same, constant rate of health decline. That's very suspicious! It almost seems like community participation had no impact during the middle of the event.

At the very end, the PC universe defeated their Balor Fomorian first, despite PS4's lead throughout the event. The Xbox One universe almost didn't make it! They managed to defeat their Balor Fomorian with an hour left before the deadline.

All of the data I collected can be inspected at my [Fomorian Health Tracker](http://rcfox.ca/FomorianHealthTracker/). You can even zoom around on the graphs.
