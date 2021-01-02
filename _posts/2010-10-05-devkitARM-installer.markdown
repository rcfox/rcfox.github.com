---
title: devkitARM Installer for Linux/OSX
category: project
tags:
- nintendo-ds
- perl
---

# devkitARM Installer for Linux/OSX #

## Introduction ##
If you want to do any development for the Nintendo DS, you need to either license the Nitro SDK from Nintendo, (and fulfill all of their arbitrary requirements, like having previously published a game) or you can download the open source [devkitARM and libnds](https://www.devkitpro.org/).

There is currently only an official installer for Windows. It will get the latest version of all of the various packages in a nice GUI. If you're not on Windows, you must follow [a set of instructions](https://wiki.devkitpro.org/index.php/Getting_Started/devkitARM) involving downloading and untarring several files. This is a big pain since each file has its own version scheme, you must untar the files in the correct places, and if you miss a package you lose some functionality.

To alleviate these problems, I've written the following Perl script to take care of:
* Determining which OS you are running to get the correct files
* Finding the latest versions of all of the required files
* Downloading the files from Sourceforge
* Extracting all of the files into the correct directory structure
* Setting environment variables to allow the default makefiles to work correctly (Currently only `bash` is supported.)

## Dependencies ##
To make my life easier, I used some third-party Perl libraries to take care of reading the devkitProUpdate.ini file, untarring the files, and running downloads in parallel. These libraries can be obtained from [CPAN](https://cpan.org/) by either going to their respective pages and downloading them, or by using the following commands:

* cpan [Config::INI::Reader](https://search.cpan.org/perldoc?Config::INI::Reader)
* cpan [Archive::Tar](https://search.cpan.org/perldoc?Archive::Tar)
* cpan [Parallel::ForkManager](https://search.cpan.org/perldoc?Parallel::ForkManager)

If you don't have `cpan`, you'll have to download the libraries yourself.
If you do have `cpan`, but can't use it because you don't have `root` access, you can [set up cpan to work in your home directory](https://help.webfaction.com/index.php?_m=knowledgebase&_a=viewarticle&kbarticleid=132).

## Download ##

* Source: [https://github.com/rcfox/devkitARM-downloader](https://github.com/rcfox/devkitARM-downloader)

## To Do ##
- Test!
  * I've tested on my own machine, which is x86_64-linux, and it works for me.
  * I don't have access to OSX, so I haven't been able to test it.
  * I haven't gotten around to testing on Windows. (I try to avoid it nowadays. ;)
- Add Windows-specific environment variables (It'd be nice to have a universal installer.)
- Create packages using the [Perl Packager](https://search.cpan.org/perldoc?pp) so that users don't need to download the dependencies, or even have Perl installed.
- Support other platforms by downloading the source and compiling.

Note: Unless there's a big push for it, I probably won't get around to finishing off the Windows stuff, since there already is a [Windows installer](https://www.devkitpro.org/downloads/devkitpro-windows-installer/).
