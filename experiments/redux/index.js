// import { replace, swap } from 'rmk/shortcuts';
//
// const reducer = (state = {}, action) => {
//   switch action.type {
//
//     'UPDATE':
//       return {
//         ...state,
//         // list: rmk(
//         //   rmk.replace(action.index, action.data)
//         // )(state.list)
//         list: replace(action.index, action.data)(state.list)
//       };
//
//     'SORT':
//       return {
//         ...state,
//         // list: rmk(
//         //   rmk.index(actions.from, action.to)
//         // )(state.list),
//         list: swap(actions.from, action.to)(state.list)
//       };
//
//     default
//       return state;
//   }
// }
