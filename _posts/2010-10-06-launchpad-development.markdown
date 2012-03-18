---
layout: post
title: Launchpad Development Tools for Linux
categories:
- tutorial
tags:
- embedded-systems
---

Texas Instruments has released the [LaunchPad](http://processors.wiki.ti.com/index.php/MSP430_LaunchPad_(MSP-EXP430G2),
a new open-source development board for the value line of the MSP430. The chips aren't very powerful, but at
[$4.30](http://processors.wiki.ti.com/index.php/MSP430_LaunchPad_%28MSP-EXP430G2%29#Quick_Links), it's hard to go wrong!

However, they do not give any official support for Linux development. There is already a GCC toolchain for the MSP430,
and little-to-no effort is needed to get it working with the LaunchPad.

## Getting Started ##
### GCC ###
The [mspgcc4 project](http://mspgcc4.sourceforge.net) offers a GCC toolchain targeted at the MSP430.
Compared to the (somehow much more visible) [mspgcc project](http://mspgcc.sourceforge.net/), it boasts better optimization, and
better support for C++.

From the [building](http://mspgcc4.sourceforge.net/#building) section, you can get latest version of mspgcc4 with:

    svn checkout https://mspgcc4.svn.sourceforge.net/svnroot/mspgcc4
    cd mspgcc4 && sh buildgcc.sh
(For me, the script's default options worked well.)

This will take a while to build...

### MSPDebug ###
In order to load programs to your board, you'll need [MSPDebug](http://mspdebug.sourceforge.net/).

Grab the latest version from the [Sourceforge download page](http://sourceforge.net/projects/mspdebug/files).
From the [installation instructions](http://mspdebug.sourceforge.net/download.html), you can build MSPDebug with:

    sudo apt-get install libusb-dev libreadline-dev
    make
    sudo make install
(If you're not running Debian or Ubuntu, you'll need to get libusb and libreadline another way.)

## Programming the Board ##
### Temperature Demo ###
The code written for the TI's Windows tools needs to be modified to build with GCC.

For now, I've shamelessly (and without permission) stolen some modified code from
["losinggeneration"](http://losinggeneration.homelinux.org/2010/07/02/msp430-launchpad-on-linux/).

You can get it here: [temperature-demo.tar.bz2](http://www.engineering.uwaterloo.ca/~rcfox/dokuwiki/lib/exe/fetch.php?media=temperature-demo.tar.bz2)

To build the code, simply run:

    make
You should end up with a file called main.elf.

### Loading the Code ###
To load the code, run:

    sudo mspdebug rf2500
    prog main.elf
(If you'd like to be able to run mspdebug without sudo, check the
[MSPDebug installation instructions](http://mspdebug.sourceforge.net/download.html).)

As soon as you exit mspdebug, the program will start.

### Debugging ###
Instead of closing mspdebug, you can run the 'gdb' command. This will open a "remote target."

From another terminal, run:

    msp430-gdb main.elf
    target remote localhost:2000

Do whatever you might want to do, like setting breakpoints, etc.

Since the program is technically already running on the board, use the 'continue' command to start debugging.
