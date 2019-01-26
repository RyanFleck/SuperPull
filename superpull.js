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
const path = require('path');
const exec = require('child_process').exec;
const config = require('os').homedir().concat('/.superpull');

/* Section One:
 *   Check for config file, create if not found, print instructions, exit.
 */

if (!fs.existsSync(config)) {
    console.log(`Superpull config ${chalk.red('missing')}! Adding at ${config}`);
    fs.writeFileSync(config, '', 'utf8', (err) => {
        console.log(`${chalk.red('Failed')} to write ~/.superpull\n${err}\nExiting...`);
    process.exit();
    });
    console.log('Add current directory with:\n\n\tsuperpull -a\n');
    console.log('Add directory at a location with:\n\n\tsuperpull -a <full-path-to-directory>\n');
    process.exit();
}


/* Section Two:
 *   Configuration file processing tools.
 */

const getArrayOfDirs = () => {
    return fs.readFileSync(config).toString().split('\n').filter(x=>x!='');
};

const checkIfAlreadyInFile = (fullpath) => {
    return fs.readFileSync(config).toString().split('\n').some(x => x === fullpath);
}

const addDirToConfig = (fullpath) => {
    fs.appendFileSync(config, '\n'.concat(fullpath.trim()), (e) => {
        console.log(`Failed to modify ~/.superpull.\nFull path: ${config}\nDir: ${fullpath}\n${e}`);
        process.exit();
    });
};

const dirIsGitRepo = (path) => {
    try{
        return (fs.statSync(path).isDirectory());
    }catch(e){
        return false;
    }
}

const prettyPrintConfig = () => {
    const msg = '\nSuperPull Repositories:\n';
    console.log(msg+'-'.repeat(msg.trim().length));
    getArrayOfDirs().forEach( (dir,i) => {
        console.log(`${chalk.yellow(i)} ${chalk.green(path.basename(dir))} ${chalk.yellow('@')} ${dir}`); 
    });
    console.log('\n');
}


/* Section Three:
 *   Program Functions.
 */

const addDir = (dir, cmd) => {
    console.log(dir);
    console.log(`${chalk.red('Add Dir to Config')}!`);
    console.log(`Add is a string? >> ${(typeof dir.add === 'string')}`);
    
    let newDir = "";
    
    if (typeof dir.add === 'string'){
        newDir = path.resolve(dir.add)
    } else {
        newDir = process.cwd();
    }

    console.log(`Adding ${newDir} to ~/.superpull`);
    
    if(!dirIsGitRepo(newDir.concat('/.git'))){
        console.log(`Dir is ${chalk.red('NOT')} git repo.`); 
        console.log(newDir);
        process.exit(1);
    }else{
        console.log('Dir is git repo.'); 
        console.log(newDir);
        if(!checkIfAlreadyInFile(newDir)){
            addDirToConfig(newDir);
        }else{
            console.log('Dir already in file!'); 
            process.exit(1);
        }
        process.exit(0);
    }
};

const listDirs = (dir, cmd) => {
    prettyPrintConfig();
};

const superPull = (dir,cmd) => {
    console.log(dir);
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
