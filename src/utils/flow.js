import isArray from './isArray';
const flow = actions =>
  origin => {
    let data = origin;

    if (isArray(data)) {
      for (let action of actions) {
        data = action.shortcut ? data.map(action) : action(data);
      }
    } else {
      for (let action of actions) {
        data = action(data);
      }
    }

    return data;
  };

export default flow;
