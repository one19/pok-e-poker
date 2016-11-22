### Poké poker

### This is a shoddy indicator of my skill as a developer.

There’s no two ways about it.  This is one of those **special gems** that sometimes you wish you didn’t put on github, but did anyway because **why not**. It’s poorly written, implemented, and run. It has very little documentation and will not handle anything well.  It doesn’t need any dependencies beyond node 6 _ish_ though! I whipped it up in a little bit to do some `back of the envelope` calls on Pokemon stats across generations to see if the latest gen was one of the slower ones on record. In fact, it is.

### Gen 7 is the second-slowest generation on record!

Neat! Average speed (without legendaries): `60.916666666666664`

### How to run:

`node app.js STATNAME FILTER_LEGENDARIES`
It’ll spit back an object with the average stats across all generations.
The acceptable stats are `attack`, `defense`, `spAttack`, `spDefense`, `speed`, `hp`, `total`, and `average`. Filter legendaries simply looks for anything to be written, if you don’t write any single word there, it won’t filter them.

### Leave your comments at the door.

I can almost guarantee I won't be taking this anywhere. You're free to use it however you like, if you realllllllly think that will help you accomplish anything.