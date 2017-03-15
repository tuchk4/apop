import reduce from './utils/reduce';
import actions from './actions';

const rmk = (...actions) => origin => reduce(origin, actions);

Object.keys(actions).forEach(action => rmk[action] = actions[action]);

export default rmk;
