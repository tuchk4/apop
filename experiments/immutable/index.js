import rmk from '../../lib';

// https://facebook.github.io/immutable-js/docs/#/Collection
import { Record, List } from 'immutable';

const Point = Record({
  x: 0,
  y: 0
});

const data = Map(
  new Point({
    x: 0,
    y: 0
  }),

  new Point({
    x: 11,
    y: 31
  }),

  new Point({
    x: 42,
    y: 52
  }),

  new Point({
    x: 13,
    y: 33
  }),
);

const formula = rmk(
  rmk.filter(state => state.x === 0 && state.y === 0),
  point => {
    let newPoint = point.set(point.x, point.x * 2);
    newPoint = newPoint.set(newPoint.y, newPoint.y * 2);

    return newPoint;
  }
);

formula(data);
