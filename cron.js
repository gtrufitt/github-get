#!/usr/bin/env node 
const run = require('./index');

const cron = require('node-cron');
const repoNames = ['nandos-platform'];
const org = 'NandosUK';

if (!process.argv[2]) {
    console.log('Pass private access token as argument to script: node cron.js PATHERE')
}
 
console.log('Scheduling');
run(7, repoNames, org, process.argv[2]);

cron.schedule('30 9-17/3 * * 1-5', () => { //“At minute 30 past every 3rd hour from 9 through 17 on every day-of-week from Monday through Friday.”
    console.log('Running')
    run(1, repoNames, org, process.argv[2]);
});

cron.schedule('0 10 * * *', () => { // Every Monday 10am
    console.log('Running')
    run(7, repoNames, org, process.argv[2]);
});
