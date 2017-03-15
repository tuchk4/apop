import { argv } from 'yargs';
import chalk from 'chalk';

import timer from './utils/timer';
import output from './utils/output';
import generateData from './utils/generateData';
import getActions from './utils/getActions';

import rmk from '../../lib';

const size = argv.size || 1000;
const data = [];
let arrSize = Math.round(size / 10);
if (arrSize < 10) {
  arrSize = 10;
}

const ID = 'rmk(<Array>)';
console.log('');
console.log(`Start ${chalk.green(ID)} measuring with ${chalk.cyan(arrSize)} items of object with ${chalk.cyan(size)} keys`);
console.log('');

for (let i = 0; i < arrSize; i++) {
  data.push(generateData(size));
}

timer(() => {
  const formula = rmk(...getActions());
  const generated = formula(data);
}).then(time => {
  output(ID, size, time);
});
