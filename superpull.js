#!/usr/bin/env node
'use strict';

const prog = require('commander');
const chalk = require('chalk');

const add_dir = (dir, cmd) => {
    console.log('ADD!');
};

const list_dirs = (dir, cmd) => {
    console.log('LIST!');
};

const super_pull = () => {
    console.log('SuperPull!');
}

const main = (dir, cmd) => {
    if( prog.list ){
        list_dirs(dir,cmd);
    }
    else if( prog.add ){
        add_dir(dir,cmd);
    } else {
        super_pull(); 
    }
};

prog
    .version('0.1')
    .option('-l, --list','List configured repositories in config')
    // .option('-c, --config','Print full path to config file to STDOUT.')
    .option('-a, --add [dir]','Adds current or [specified] dir to config')
    .action( main, 'SuperPulls all directories in config.')
    .parse(process.argv);

