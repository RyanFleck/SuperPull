#!/usr/bin/env node

/*
 * SuperPull.js - Pull a managed list of repositories.
 *
 * Copyright (c) 2019 Ryan Fleck - ryan.fleck@protonmail.com
 *
 * This file contains the entirety of the functional code for SuperPull.js.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

const prog = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const exec = require('child_process').exec;
const config = require('os').homedir().concat('/.superpull');

/* Section One:
 *   File processing tools.
 */

const getArrayOfDirs = () => [];

/* Section Two:
 *   Check for config file, create if not found.
 */

if (!fs.existsSync(config)) {
    console.log(`Superpull config ${chalk.red('missing')}! Adding at ${config}`);
    fs.writeFileSync(config, '', 'utf8', (err) => {
        console.log(`${chalk.red('Failed')} to write ~/.superpull\n${err}\nExiting...`);
        process.exit();
    });
}

/* Section Three:
 *   Program Functions.
 */

const addDir = (dir, cmd) => {
    console.log(`${chalk.red('Add Dir to Config')}!`);
};

const listDirs = (dir, cmd) => {
    console.log(`${chalk.yellow('List Config Dirs')}!`);
};

const superPull = () => {
    console.log(`${chalk.green('SuperPull')}!`);
};

const main = (dir, cmd) => {
    if (prog.list) {
        listDirs(dir, cmd);
    } else if (prog.add) {
        addDir(dir, cmd);
    } else {
        superPull();
    }
};

/* Section Four:
 *   Commander Initialization.
 */

prog
    .version('0.1')
    .option('-l, --list', 'List configured repositories in config')
    // .option('-c, --config','Print full path to config file to STDOUT.')
    .option('-a, --add [dir]', 'Adds current or [specified] dir to config')
    .action(main, 'SuperPulls all directories in config.')
    .parse(process.argv);
