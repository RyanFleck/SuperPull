# SuperPull

[![Build Status](https://travis-ci.com/RyanFleck/SuperPull.svg?branch=master)](https://travis-ci.com/RyanFleck/SuperPull) [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-red.svg)](https://www.gnu.org/licenses/gpl-3.0)

CLI Program to fetch remote branches and commits for a collection of local repositories. Small and well-documented.

**Update 2019-07-03**

As I improve as a developer, I get to experience the joy and horror of looking back on old projects. *SuperPull* completes a task that could be written far more clearly in ~20 lines of python, or even ~5, in a matter of minutes if you don't want to use a config file of directories or parse cli options. Something like:

```py
import os

# Pull all git repositories in child directories of current directory.
issue_dirs = []
for dirname, subdirs, filenames in os.walk(os.getcwd()):
    if '.git' in subdirs:
        print("\nRepository: " + dirname)
        output = os.system("cd " + dirname + " && git pull")
        if(output != 0):
            issue_dirs.append(dirname)

# Inform user of directories that exited with errors or warnings.
if(len(issue_dirs) > 0):
    x = 0
    print('\nErrors were thrown when attempting to pull ' +
          str(len(issue_dirs)) + ' repositories:')
    for repo in issue_dirs:
        x = x + 1
        print('\t' + str(x) + ': ' + repo)
```

*SuperPull* is an excellent example of massive and unnecessary complexity for a simple task. *Please don't use it.*

<br />

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
