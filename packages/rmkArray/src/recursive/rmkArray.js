import rmkArrayActions from './../actions';
import rmkArrayParse from './../utils/parse';

const rmkArrayRecursiveActions = {};

Object.keys(rmkArrayActions).forEach(action => {

  rmkArrayRecursiveActions[action] = config =>
    rmkArrayParse({
      actions: [rmkArrayActions[action](config)],
      isRecursive: true,
    });
});

const recursive = Object.assign(
  (...actions) => rmkArrayParse({ actions, isRecursive: true }),
  rmkArrayRecursiveActions
);

export default recursive;
