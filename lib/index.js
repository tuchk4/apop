import rmkActions from './actions';
import rmkParse from './utils/parse';

const singleActions = {};
const recursiveActions = {};

Object.keys(rmkActions).forEach(function(action) {
  singleActions[action] = function(config) {
    return rmkParse({
      actions: [rmkActions[action](config)],
      isRecursive: false,
    });
  }; //Use for shortcuts rmk.action

  recursiveActions[action] = function(config) {
    return rmkParse({
      actions: [rmkActions[action](config)],
      isRecursive: true,
    });
  }; //Use for shortcuts rmk.recursive.action
});

const rmk = Object.assign(
  function(...actions) {
    return rmkParse({ actions, isRecursive: false }); //Use for single flow rmk(...actions)
  },
  singleActions
);

const recursive = Object.assign(
  function(...actions) {
    return rmkParse({ actions, isRecursive: true }); //Use for recursive flow rmk.recursive(...actions)
  },
  recursiveActions
);

export default Object.assign(rmk, { recursive });
