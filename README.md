# SuperPull

[![Build Status](https://travis-ci.com/RyanFleck/SuperPull.svg?branch=master)](https://travis-ci.com/RyanFleck/SuperPull) [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-red.svg)](https://www.gnu.org/licenses/gpl-3.0)

CLI Program to fetch remote branches and commits for a collection of local repositories. Small and well-documented.

**Usage:**

1. Run `sp -c` to add all git repos in my home folder to `~/.superpull`
1. Run `sp -a <path>` to add unique repositories at `<path>` 
2. Run `sp` to pull new commits and fetch new remote branches for all repositories

Documentation available at <https://ryanfleck.github.io/SuperPull/>

First functional release completed in **4** hours on 2019-01-26, including a break for breakfast :D 

**Resources**

1. [Chalk Documentation](https://github.com/chalk/chalk)
1. [Commander Documentation](https://github.com/tj/commander.js/)
1. [Child_Process Documentation](https://nodejs.org/api/child_process.html)
1. [FreeCodeCamp Commander Tutorial](https://medium.freecodecamp.org/writing-command-line-applications-in-nodejs-2cf8327eee2)
