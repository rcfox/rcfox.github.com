---
title: "Power Metal Statistics"
category: project
tags: [powermetal]
---

Someone on Reddit wondered [what the average song length of power metal songs is](https://www.reddit.com/r/PowerMetal/comments/446c8x/what_do_you_think_is_the_average_song_length_of/). Rather than guess, I decided to grab the data and find the actual answer.

All of the data is available [here](https://docs.google.com/spreadsheets/d/1po0rnTS7BweVDsTYkPYnlRBAI57HqdvVcTaIyNjaBFk/edit?usp=sharing). The columns are "Artist - Title" and "Duration in seconds". (It's a large spreadsheet though, and can cause the browser to slow down.)

From the spreadsheet, I was able to generate a histogram: ![Song length histogram](/images/powermetal-song-length.png)

There were some very long durations (more than 20 minutes!), but very few instances of those. They made the histogram harder to read, so I cut out the 1% outliers, which is why the right-most bucket appears to have so many instances.

---

On a separate occasion, someone wondered [what the most popular words in power metal song titles are](https://www.reddit.com/r/PowerMetal/comments/3047vt/the_most_popular_words_in_power_metal_songs_title/).

I guess I didn't hold on to my raw data, but I ended up with this chart: ![Power metal song title words](/images/powermetal-song-titles.png)

The 10 most-common words were removed because they were all very common filler words, and made the chart much harder to read. Really, I should have taken out all common words.
