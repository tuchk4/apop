# Array Action - Map

Adapter for native [`array.map(function(currentValue, index, arr))`](/ https://www.w3schools.com/jsref/jsref_map.asp)

### Imports for simple Array parsing

Import ap with actions:

```js
import ap from 'apop/ap';
ap.map(conditions)(data)
```

Import filter action:

```js
import map from 'apop/ap/map'
map(conditions)(data)
```

### Import for recursive Array parsing

Import recursive ap:

```js
import recursive from 'apop/ap/recursive'
recursive.map(conditions)(data)
```

Import direct recursive action:

```js
import join from 'apop/ap/recursive/join'
map(conditions)(data)
```

Import recursive ap and filter action:

```js
import join from 'apop/ap/join'
import recursive from 'apop/ap/recursive'

recursive(map(conditions))(data)
```

## Examples

Equal to array.map

```js
let formula = ap.map(currentValue => currentValue + 1);

formula([1, 2, 3, 4, 5])
// => [2, 3, 4, 5, 6]
```

Map array of objects

```js
let formula = ap.map((currentValue, index) => {
    return {id: currentValue.id + index};
});

formula([{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]);
// => [{id: 1}, {id: 3}, {id: 5}, {id: 7}, {id: 9}]
```

Usage in flow

```js
let formula = ap(
    ap.filter(currentValue => currentValue > 2), // => [3, 2, 1]
    ap.sort((a, b) => a - b) // => [1, 2, 3]
    ap.map(currentValue => {id: currentValue})
);

formula([5, 4, 3, 2, 1])
// => [{id:1}, {id:2}, {id:3}]
```



