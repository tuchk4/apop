import reduce from './utils/reduce';
import rmkActions from './actions';

const rmk = (...actions) => origin => reduce(origin, actions);

Object.keys(rmkActions).forEach(action => {
  rmk[action] = rmkActions[action];
});

export default rmk;
