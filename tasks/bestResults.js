import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import spawn from 'cross-spawn';
import { argv } from 'yargs';

const bestResultsPath = path.join(
  __dirname,
  'bestResults.json'
);

const size = argv.size || 4000;

const prevBestResults = JSON.parse(fs.readFileSync(bestResultsPath).toString());
const prevBestSizeTimings = prevBestResults[size];
let prevBestSorted = [];

if (prevBestSizeTimings) {
  prevBestSorted = Object.keys(prevBestSizeTimings).sort((a, b) => {
    return prevBestSizeTimings[a] - prevBestSizeTimings[b];
  });
}

spawn.sync('node_modules/.bin/babel-node', [
  './tasks/timers/object.js',
  '--size',
  size,
  '--skip-summary'
], {
  stdio: 'inherit'
});

spawn.sync('node_modules/.bin/babel-node', [
  './tasks/timers/array.js',
  '--size',
  size,
  '--skip-summary'
], {
  stdio: 'inherit'
});

const bestResults = JSON.parse(fs.readFileSync(bestResultsPath).toString());
const bestSizeTimings = bestResults[size];

Object.keys(bestSizeTimings).sort((a, b) => {
  return bestSizeTimings[a] - bestSizeTimings[b];
}).forEach((key, i) => {
  let diff = 0;
  if (prevBestSorted[i] && prevBestSorted[i] !== key) {
    const delta = prevBestSorted.indexOf(key) - i;

    diff =  delta > 0
      ? chalk.green(`(+${Math.abs(delta)})`)
      : chalk.red(`(-${Math.abs(delta)})`)
  }

  console.log(`   ${chalk.green(i + 1)} ${diff ? diff : ''} ${chalk.cyan(key)} - ${bestSizeTimings[key]}sec`);
});
