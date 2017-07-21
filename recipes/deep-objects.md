# Apply actions to Deep Objects

If you work with nested arrays. You can apply `op.recursive` for deep parsing Object.

```js
import op from 'op';

let formula = op.recursive(
    op.toCamelCase(),
    op.rename({
      'id': 'value'
    })
);

formula({
  value: 1,
  deep_data: {
    value: 2,
    more_deep_data: {
      value: 3
    }
  }
})
// => {
// id: 1,
// deepData: {
//    id: 2,
//    moreDeepData: {
//      id: 3
//    }
//  }
//}
```



