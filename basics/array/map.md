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

### Import for recursive Array pasing

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

Equal to array.filter

```js
let formula = ap.join('#');

formula([1, 2, 3, 4, 5])
// => "1#2#3#4#5"
```

Usage in flow

```js
let formula = ap(
    ap.filter(currentValue => currentValue > 2), // => [3, 2, 1]
    ap.sort((a, b) => a - b), // => [1, 2, 3]
    ap.join('#')
);

formula([5, 4, 3, 2, 1])
// => "1#2#3"
```



