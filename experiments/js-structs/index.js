// import rmk from '../../lib';
//
// // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map
// const data = new Set();
//
// data.add(new Map([['x', '0'], ['y', '0']]));
// data.add(new Map([['x', '1'], ['y', '1']]));
// data.add(new Map([['x', '2'], ['y', '2']]));
// data.add(new Map([['x', '3'], ['y', '3']]));
// data.add(new Map([['x', '4'], ['y', '4']]));
//
//
// const formula = rmk(
//   rmk.filter(state => state.x === 0 && state.y === 0),
//   point => ({
//     x: point.get('x') + 1,
//     y: point.get('y') + 1,
//   })
// );
//
//
// // ?
// // point => {
// //   return new Map([['x', point.get(x) + 1], ['y', point.get(y) + 1]])
// // }
//
// formula(data);
