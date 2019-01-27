# SuperPull

[![Build Status](https://travis-ci.com/RyanFleck/SuperPull.svg?branch=master)](https://travis-ci.com/RyanFleck/SuperPull)

CLI Program to fetch remote branches and commits for a collection of local repositories.

Usage:

1. Run `superpull -c` to add all git repos in my home folder to `~/.superpull`
1. Run `superpull -a <path>` to add unique repositories at `<path>` 
2. Run `superpull` to pull new commits and fetch new remote branches for all repositories

Documentation available at <https://ryanfleck.github.io/SuperPull/>

First functional release completed in **4** hours on 2019-01-26, including a break for breakfast :D 

**Resources**

1. [Chalk Documentation](https://github.com/chalk/chalk)
1. [Commander Documentation](https://github.com/tj/commander.js/)
1. [Child_Process Documentation](https://nodejs.org/api/child_process.html)
1. [FreeCodeCamp Commander Tutorial](https://medium.freecodecamp.org/writing-command-line-applications-in-nodejs-2cf8327eee2)
