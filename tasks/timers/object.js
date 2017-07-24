import { argv } from 'yargs';
import chalk from 'chalk';

import timer from './utils/timer';
import output from './utils/output';
import generateData from './utils/generateData';
import getActions from './utils/getActions';

import op from '../../src/build/op';

const size = argv.size || 1000;

const ID = 'apop(<Object>)';

console.log('');
console.log(`Start ${chalk.green(ID)} measuring with ${chalk.cyan(size)} keys`);
console.log('');

const data = generateData(size);

timer(() => {
  const formula = op(...getActions());
  const generated = formula(data);
}).then(time => {
  output(ID, size, time);
});
