# Apply actions to deep Objects

For apply action to Deep Objects use \`op/recursive\`. Example:

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



