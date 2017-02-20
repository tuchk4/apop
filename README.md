# RMK
**See**: [lib/actions](actions)
**See**: [lib/shortcuts](shortcuts)
**See**: [lib/utils](utils)

Object transformation without mutations.

```
REMAKE = Function(data): newData
Formula = Function(REMAKE_1 ... REMAKE_n): Function(data): newData
```

Pseudo example:

```js
import rmk from 'rmk';
import toCamelCase from '@rmk/to-camel-case';
import clear from '@rmk/clear';
import update from '@rmk/update';

const formula = rmk(
  toCamelCase(),
  clear(),
  update({
    id: data => data.id + 10
  })
);

const object = [{
  id: 1,
  groupId: 1,
  name: null
}, {
  id: 2,
  groupId: 2,
  name: ''
}];

const newObject = rmk(object);
expect(newObject).toEqual([{
  id: 10,
  group_id: 1
}, {
  id: 20,
  group_id: 2
}])
```
