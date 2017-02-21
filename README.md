# RMK

[Actions docs](lib/actions)

[Shortcuts  docs](lib/shortcuts)

[Utils  docs](lib/utils)

###Object transformation without mutations.###

##Example 1. Clear data.##
**Transform Object:**
```js
import rmk from 'rmk';
import rmkClearAction from 'rmk/actions/clear';

let data = {one: "", two: null, three: undefined, four: {}, five: []}
const formula = rmk(rmkClearAction());
const result = formula(data)
// =>  {}
```
**Transform array:**
```js
import rmk from 'rmk';
import rmkClearAction from 'rmk/actions/clear';

let data = [{one: "", two: null, a: 1}, {three: undefined, four: {}, five: [], b:2}]
const formula = rmk(rmkClearAction());
const result = formula(data)
// =>  [ {a:1}, {b:2} ]
```
**Shortcut:**
```js
import rmkClear from 'rmk/shortcuts/clear';

let data = {one: "", two: null, three: undefined, four: {}, five: []}
const result = rmkClear(data)
// =>  { birthDate: new Date(1975, 4,3), year: 1975 }
```


##Example 2. To snake case.##
**Transform Object:**
```js
import rmk from 'rmk';
import rmkToSnakeCaseAction from 'rmk/actions/toSnakeCase';

let data = {fooBar: 1, foo: 2, BAR: 3}
const formula = rmk(rmkToSnakeCaseAction());
const result = formula(data)
// =>  { foo_bar: 1, foo: 2, bar: 3 }
```
**Transform array:**
```js
import rmk from 'rmk';
import rmkToSnakeCaseAction from 'rmk/actions/toSnakeCase';

let data = [{fooBar: 1}, {barBaz: 2}]
const formula = rmk(rmkToSnakeCaseAction());
const result = formula(data)
// =>  [ {foo_bar: 1}, {bar_baz: 2} ]
```
**Shortcut:**
```js
import rmkToSnakeCase from 'rmk/shortcuts/toSnakeCase';

let data = {fooBar: 1, foo: 2, BAR: 3}
const result = rmkToSnakeCase(data)
// =>  { foo_bar: 1, foo: 2, bar: 3 }
```


##Example 3. To camel case.##
**Transform Object:**
```js
import rmk from 'rmk';
import rmkToCamelCaseAction from 'rmk/actions/toCamelCase';

let data = {foo_bar: 1, foo: 2, BAR: 3}
const formula = rmk(rmkToCamelCaseAction());
const result = formula(data)
// =>  { fooBar: 1, foo: 2, bar: 3 }
```
**Transform array:**
```js
import rmk from 'rmk';
import rmkToCamelCaseAction from 'rmk/actions/toCamelCase';

let data = [{foo_Bar: 1}, {bar_baz: 2}]
const formula = rmk(rmkToCamelCaseAction());
const result = formula(data)
// =>  [ {fooBar: 1}, {barBaz: 2} ]
```
**Shortcut:**
```js
import rmkToCamelCase from 'rmk/shortcuts/toCamelCase';

let data = {foo_bar: 1, foo: 2, BAR: 3}
const result = rmkToCamelCase(data)
// =>  { fooBar: 1, foo: 2, bar: 3 }
```


##Example 4. Add static field.##
**Transform Object:**
```js
import rmk from 'rmk';
import rmkUpdate from 'rmk/actions/update';

let data = {foo: 1, bar: 2}
const formula = rmk(rmkUpdate({
    baz:3
}));
const result = formula(data)
// =>  { foo: 1, bar: 2, baz:3 }
```
**Transform array:**
```js
import rmk from 'rmk';
import rmkUpdate from 'rmk/actions/update';

let data = [{foo: 1}, {foo: 4}]
const formula = rmk(rmkUpdate({
    baz: (localState) => foo + 1
}));
const result = formula(data)
// =>  [ {foo: 1, baz:2},  {foo: 4, baz:5} ]
```
**Shortcut:**
```js
import rmkUpdate from 'rmk/shortcuts/update';

let data = {foo: 1, bar: 2}
const result = rmkUpdate(data, {
  baz:3
});
// =>  {foo: 1, bar: 2, baz:3}
```



##Example 5. Complex transform array:##
```js
import rmk from 'rmk';
import rmkToCamelCaseAction from 'rmk/actions/toCamelCase';
import rmkClearAction from 'rmk/actions/clear';
import rmkUpdateAction from 'rmk/actions/update';

let data = [
    {birth_date: new Date(1975, 4,3), user: 1}, 
    {birth_date: new Date(1975, 4,3), user: undefined}
]
const formula = rmk(
  rmkToCamelCaseAction(),
  rmkUpdateAction({
    year: localState => localState.birthDate.getFullYear()
  }),
  rmkClearAction()
);
const result = formula(data);
// =>  [ {birthDate: new Date(1975, 4,3), year: 1975, user: 1},  {birthDate: new Date(1982, 4,3), year: 1982} ]

```

##Example 5. Complex transform array. Import all actions:##
```js
import rmk from 'rmk';
import rmkActions from 'rmk/actions';

let data = [
    {birth_date: new Date(1975, 4,3), user: 1}, 
    {birth_date: new Date(1975, 4,3), user: undefined}
]
const formula = rmk(
  rmkActions.toCamelCase(),
  rmkActions.update({
    year: localState => localState.birthDate.getFullYear()
  }),
  rmkActions.clear()
);
const result = formula(data);
// =>  [ {birthDate: new Date(1975, 4,3), year: 1975, user: 1}, {birthDate: new Date(1982, 4,3), year: 1982} ]

```


##Example 6. Complex transform array. Import all shortcuts:##
```js
import rmk from 'rmk';
import rmkShortcuts from 'rmk/shortcuts';

let data = [
    {birth_date: new Date(1975, 4,3), user: 1}, 
    {birth_date: new Date(1975, 4,3), user: undefined}
]
const step1 = rmkShortcuts.toCamelCase(data);
const step2 = rmkShortcuts.update(step1, {
 year: localState => localState.birthDate.getFullYear()
});
const result = rmkShortcuts.clear(step2);
// =>  [ {birthDate: new Date(1975, 4,3), year: 1975, user: 1},  {birthDate: new Date(1982, 4,3), year: 1982} ]

```

