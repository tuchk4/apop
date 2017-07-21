# Apply actions to deep arrays

For apply actions to Deep arrays use \`ap/recursive\`.

Example:

```js
import op from 'op';

let formula = op.recursive(
    op.sort(),
    op.remove(2),
    op.join('#'),
);

formula([5, 2, 1, 4, 3, [8, 7, 6, 10, 9, [14, 12, 13, 11, 15]]])
// => ["1#2#4#5", ["6#7#9#10", ["11#12#14#15"]]]
```



