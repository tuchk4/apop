import isArray from './isArray';
const flow = actions =>
  origin => {
    if (isArray(origin)) {
      for (let action of actions) {
        origin = action.shortcut ? origin.map(action) : action(origin);
      }
    } else {
      for (let action of actions) {
        origin = action(origin);
      }
    }

    return origin;
  };

export default flow;
