# Apply actions to Deep Arrays

If you work with nested arrays. You can apply `ap.recursive` for deep parsing Array.

<!-- js-console -->
```js
import op from 'apop/op';

let formula = op.recursive(
    op.sort(),
    op.remove(2),
    op.join('#'),
);

formula([5, 2, 1, 4, 3, [8, 7, 6, 10, 9, [14, 12, 13, 11, 15]]])
// => ["1#2#4#5", ["6#7#9#10", ["11#12#14#15"]]]
```

In example each array in deep sorting,  remove element with index 2, and join by \#.

