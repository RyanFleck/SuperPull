---
layout: default
title: Home
---

**SuperPull** is a CLI Application written in NodeJS for quickly bringing many local git repositories up to date. The project was created after searching on Github and failing to find a tool that did *exactly this*, though another program exists that clones all repos for a given user. I'm writing this program for myself, but have decided to place it on GitHub so others might see and use the tool.

Download the latest compiled binary for GNU/Linux [here](https://github.com/RyanFleck/SuperPull/releases/latest). 

[![Build Status](https://travis-ci.com/RyanFleck/SuperPull.svg?branch=master)](https://travis-ci.com/RyanFleck/SuperPull)

<h2>Contents</h2>
1. TOC
{:toc}

# Basic Usage

1. Add directories to the config by executing `superpull -a` while in the directory, or `superpull -a <path>` from another location.
2. Superpull all added repositories by executing `superpull`

If directories have been added to your `~/.superpull` file, simply typing `superpull` in your shell will run the program, and output will show all successful and failed attepts to pull/fetch remote branches.

# Installation

Prerequisites:

- GNU/Linux OS.
- Git

The program shouldn't have any problems building and running on *MacOS*, but I don't own any Apple machines to compile and provide an executable.

To install, simply download the latest compiled binary for GNU/Linux [here](https://github.com/RyanFleck/SuperPull/releases/latest) and place it in a bin accessible from your PATH. On Debian, the best place to do this is `/home/username/bin`. You can add this folder to your `~/.profile` if the script will not run after being placed in the bin:

```sh
PATH="$HOME/bin:$PATH"
```

# Flags

`-a`  
Adds the current directory to the `~/.superpull` file. Will throw an error if the directory is not a git repository, or already exists within the configuration file.

`-a <path>`  
Adds the directory specified by `<path>` to the `~/.superpull` file. Will throw an error if the directory is not a git repository, or already exists within the configuration file.

`-l` Lists configured repositories.

`-V` Outputs program version.

`-h` Displays all commands.

# Sample Output

Run superpull:

```sh
user@debian:~$ superpull
SuperPull directories.

/home/user/Crusher
Fetching origin
Already up-to-date.

From github.com:User/Crusher
 * [new tag]         0.23        -> 0.23
 
 /home/user/user.com
 Fetching origin
 Already up-to-date.
 
 /home/user/Projects
 Fetching origin
 Already up-to-date.
 
 /home/user/user.github.io
 Fetching origin
 Already up-to-date.
```

List configured directories:

```sh
user@debian:~$ superpull -l
SuperPull Repositories:
-----------------------

0 Projects @ /home/user/Projects
1 user.github.io @ /home/user/ryanfleck.github.io
2 user.com @ /home/user/user.com
3 Crusher @ /home/rflec028/Crusher
```
