---
layout: default
title: Home
---

**SuperPull** is a CLI Application written in NodeJS for quickly bringing many local git repositories up to date. The project was created after searching on Github and failing to find a tool that did *exactly this*. I'm writing this program for myself, but have decided to place it on GitHub so others might see and use the tool.

I use SuperPull like this:

1. Run `sp -c` to add all repos in my home folder.  
2. Run `sp` to pull new commits and fetch new remote branches for all repositories.

Download the latest compiled binary for GNU/Linux [here](https://github.com/RyanFleck/SuperPull/releases/latest). 


<h2>Contents</h2>
1. TOC
{:toc}

# Basic Usage

**Add** directories to the config by executing `sp -a` while in the directory, or `sp -a <path>` from another location.

**Crawl** child directories, adding each repository to the config, by executing `sp -c` while in the directory you wish to crawl, or `sp -c <path>` from another location.

**SuperPull** all added repositories by executing `sp`. Output will show all successful and failed attempts to pull/fetch remote branches.

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

**Add** `-a , --add `

Adds the current directory to the `~/.superpull` file. Will throw an error if the directory is not a git repository, or already exists within the configuration file.

```sh
user@debian:~$ sp -a
Adding /home/user/currentdir to ~/.superpull
```

**Add** with path `-a <path> , --add <path> `

Adds the directory specified by `<path>` to the `~/.superpull` file. Will throw an error if the directory is not a git repository, or already exists within the configuration file.

```sh
user@debian:~$ sp -a ProjectA
Adding /home/user/ProjectA to ~/.superpull
```
**Crawl** `-c, --crawl `

Checks all first-order sub-directories for git repositories and adds them to the `~/.superpull` file.

```sh
user@debian:~$ sp -c
Scanning /home/user/Calibre Library/ ... false
Scanning /home/user/c-header-ci-test/ ... true
-> Added: Directory /home/user/c-header-ci-test/ appended to ~/.superpull
```

**Crawl** `-c <path>, --crawl <path> `

Checks all first-order sub-directories at `<path>` for git repositories and adds them to the `~/.superpull` file.

```sh
user@debian:~$ sp -c Documents
Scanning /home/user/Documents/ELG2138/ ... false
Scanning /home/user/Documents/hyperledger/ ... true
-> Added: Directory /home/user/Documents/hyperledger/ appended to ~/.superpull
```

**List** `-l , --list `

Lists configured repositories.

```sh
user@debian:~$ sp -l 

SuperPull Repositories:
-----------------------

0 Projects @ /home/user/Projects
1 user.github.io @ /home/user/user.github.io
```

**Version** `-V , --version ` 

Outputs program version.

```sh
user@debian:~$ sp -V
1.1
```

**Help** `-h , --help `

Displays all available commands in a help menu.

```sh
user@debian:~$ sp -h
Usage: sp [options]

Options:
  -V, --version    output the version number
  -l, --list       List configured repositories in config
  -a, --add [dir]  Adds current or [specified] dir to config
  -h, --help       output usage information
```

# Sample Output

Run superpull:

```sh
user@debian:~$ sp
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
user@debian:~$ sp -l
SuperPull Repositories:
-----------------------

0 Projects @ /home/user/Projects
1 user.github.io @ /home/user/user.github.io
2 user.com @ /home/user/user.com
3 Crusher @ /home/rflec028/Crusher
```

<br />

SuperPull is tested with *Travis CI*.

[![Build Status](https://travis-ci.com/RyanFleck/SuperPull.svg?branch=master)](https://travis-ci.com/RyanFleck/SuperPull)
