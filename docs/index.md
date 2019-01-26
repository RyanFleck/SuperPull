---
layout: default
title: Home
---

**SuperPull** is a CLI Application written in NodeJS for quickly bringing many local git repositories up to date. The project was created after searching on Github and failing to find a tool that did *exactly this*, though another program exists that clones all repos for a given user. I'm writing this program for myself, but have decided to place it on GitHub so others might see and use the tool.

<h3>Contents</h3>
1. TOC
{:toc}

# Installation

Prerequisites:

- NodeJS.
- GNU/Linux OS. (Support for Windows not implemented *yet*.)
- Git

# Basic Usage

If directories have been added to your `~/.superpull` file, simply typing `superpull` in your shell will run the program, and output will show all successful and failed attepts to pull/fetch remote branches.

# Flags

`-a`

Adds a repo.

`-l`

Lists configured repos.

`-V`

Outputs version.

`-h`

Help.

# Advanced Usage

SuperPull currently has no advanced features.

# Sample Output

```sh
rflec028@gnubox:~/SuperPull$ ./superpull.js
SuperPull directories.

/home/rflec028/ryanfleck.ca
Fetching origin
Already up-to-date.

/home/rflec028/SuperPull
Fetching origin
Updating 84c7de2..789e21e
Fast-forward
 todo.md | 5 +++++
 1 file changed, 5 insertions(+)

From github.com:RyanFleck/SuperPull
   84c7de2..789e21e  master     -> origin/master

/home/rflec028/Projects
Fetching origin
Already up-to-date.

/home/rflec028/ryanfleck.github.io
Fetching origin
Already up-to-date.
```
