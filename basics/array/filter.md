# Array Action - Filter

Adapter for native [`array.filter(function(currentValue, index, arr))`](https://www.w3schools.com/jsref/jsref_filter.asp)

### Imports for simple Array parsing

Import ap with actions:

```js
import ap from 'apop/ap';
ap.filter(conditions)(data)
```

Import filter action:

```js
import filter from 'apop/ap/filter'
filter(conditions)(data)
```

### Import for recursive Array parsing

Import recursive ap:

```js
import recursive from 'apop/ap/recursive'
recursive.filter(conditions)(data)
```

Import direct recursive action:

```js
import filter from 'apop/ap/recursive/filter'
filter(conditions)(data)
```

Import recursive ap and filter action:

```js
import filter from 'apop/ap/filter'
import recursive from 'apop/ap/recursive'

recursive(filter(conditions))(data)
```

## Examples

Equal to array.filter

```js
let formula = ap.filter(currentValue => currentValue > 2);

formula([1, 2, 3, 4, 5])
// => [3, 4, 5]
```

Filter array of objects

```js
let formula = ap.filter((currentValue, index) => {
    return currentValue.id > 2;
});

formula([{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]);
// => [{id: 3}, {id: 4}, {id: 5}]
```

Usage in flow

```js
let formula = ap(
    ap.filter(currentValue => currentValue > 2), // => [3, 2, 1]
    ap.sort((a, b) => a - b) // => [1, 2, 3]
);

formula([5, 4, 3, 2, 1])
// => [1, 2, 3]
```



