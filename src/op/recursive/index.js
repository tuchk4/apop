import actions from '../actions';

import { recursiveApply } from '../utils/apply';

const recursive = Object.assign((...args) => recursiveApply(...args), actions);

export default recursive;
