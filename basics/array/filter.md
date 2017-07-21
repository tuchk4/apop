# Filter Action

Adapter for native array.filter\(function\(currentValue, index, arr\)\)

## Imports

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

## Usage with recursive

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

```js
ap.filter(currentValue => currentValue > 2)([1, 2, 3, 4, 5])
```

```
ap.filter((currentValue, index) => {
    return currentValue.id > 2;
})([1, 2, 3, 4, 5])
```

```
ap.filter(i => i > 2)([1, 2, 3, 4, 5])
```

```
ap.filter(i => i > 2)([1, 2, 3, 4, 5])
```

```
ap.filter(i => i > 2)([1, 2, 3, 4, 5])
```



