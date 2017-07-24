# Array Action - Join

Adapter for native [`array.join(separator = ',')`](https://www.w3schools.com/jsref/jsref_join.asp)

### Imports for simple Array parsing

Import ap with actions:

```js
import ap from 'apop/ap';
ap.join(separator)(data)
```

Import filter action:

```js
import join from 'apop/ap/join'
join(separator)(data)
```

### Import for recursive Array parsing

Import recursive ap:

```js
import recursive from 'apop/ap/recursive'
recursive.join(separator)(data)
```

Import direct recursive action:

```js
import join from 'apop/ap/recursive/join'
join(separator)(data)
```

Import recursive ap and filter action:

```js
import join from 'apop/ap/join'
import recursive from 'apop/ap/recursive'

recursive(join(separator))(data)
```

## Examples

Equal to array.join

```js
let formula = ap.join('#');

formula([1, 2, 3, 4, 5])
// => "1#2#3#4#5"
```

Usage in flow

```js
let formula = ap(
    ap.filter(currentValue => currentValue > 2), // => [3, 2, 1]
    ap.sort((a, b) => a - b) // => [1, 2, 3],
    ap.join('#')
);

formula([5, 4, 3, 2, 1])
// => "1#2#3"
```



