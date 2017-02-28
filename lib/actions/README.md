<a name="actions"></a>

## actions : <code>object</code>
**Kind**: global namespace  

* [actions](#actions) : <code>object</code>
    * [.clear()](#actions.clear) ⇒ <code>Object</code>
    * [.recursive(actions, deepLimit)](#actions.recursive) ⇒ <code>\*</code>
    * [.rename(config)](#actions.rename) ⇒ <code>function</code>
    * [.toCamelCase()](#actions.toCamelCase) ⇒ <code>function</code>
    * [.toSnakeCase()](#actions.toSnakeCase) ⇒ <code>function</code>
    * [.update(config)](#actions.update) ⇒ <code>function</code>

<a name="actions.clear"></a>

### actions.clear() ⇒ <code>Object</code>
Function of clear object keys from null and undefined values

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>Object</code> - Returns function clear object from undefined and null values  
**See**: [Shortcut method](../shortcuts#shortcuts.clear)  
**Example**  
```js
import clear from 'rmk/actions/clear';

let formula = rmk(clear())
let data = {foo:null, bar: 0, baz:null}
formula(data)
// => {bar:0}

let data = {foo: new Date(), bar: {}, baz: [] }
formula(data)
 // => {foo: new Date()}

 let data = {foo: "", bar: "foo", baz: [1] }
formula(data)
 // => {bar: "foo", baz: [1]}

 let data = {foo: true, bar: false, baz: 1 }
formula(data)
 // => { foo: true, bar: false, baz: 1 }
```
<a name="actions.recursive"></a>

### actions.recursive(actions, deepLimit) ⇒ <code>\*</code>
Recursive parse data by actions

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>\*</code> - let recursiveData = {
 foo_bar: 0,
 remove_baz: null,
 array_key: [1, 2, 3],
 array_objects: [
  {a_b: 'a', b_c: 'b'}
 ]
};
recursiveData.deep_obj = recursiveData;

 const formula = rmk(
   rmkActions.recursive(
     [
       rmkActions.toCamelCase(),
       rmkActions.update({
           arrayKeyStr: localState =>
             ((isArray(localState.arrayKey)) ? localState.arrayKey.join(',') : null),
        }),
       rmkActions.rename({
           arrayKeyStr: 'renamedStr',
         }),
       rmkActions.clear(),
     ]
   )
);
formula(recursiveData);
// => { "arrayKey": [1, 2, 3], "arrayObjects": [{"aB": "a", "bC": "b"}], "deepObj":
{ "arrayKey": [1, 2, 3], "arrayObjects": [{"aB": "a", "bC": "b"}],
"deepObj": { "arrayKey": [1, 2, 3], "arrayObjects": [{"aB": "a", "bC": "b"}],
"deepObj": { "deepObj": {"fooBar": 0}, "fooBar": 0 }, "fooBar": 0, "renamedStr": "1,2,3" },
"fooBar": 0, "renamedStr": "1,2,3" }, "fooBar": 0, "renamedStr": "1,2,3" };  

| Param | Type | Description |
| --- | --- | --- |
| actions | <code>Array</code> | array of actions |
| deepLimit |  | Deep limit. Default 5. |

<a name="actions.rename"></a>

### actions.rename(config) ⇒ <code>function</code>
Rename state by config

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>function</code> - Returns function add new field to object  
**See**: [Shortcut method](../shortcuts#shortcuts.rename)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | {field: fn(state)} or {field: value} |

**Example**  
```js
import update from 'rmk/actions/update';

let formula = rmk(rename({
   bar: 'baz'
}))
let data = {foo:1, bar:2}
formula(data)
// => {foo:1, baz:2}

let data = [{bar:1}, {bar:2}]
formula(data)
// =>  [{baz:1}, {baz:2}]

let formula = rmk(rename({
    year: (localState) => {
     return (localState.hasOwnProperty('customField') ? 'birthYear' : 'deathYear'
    }
}))
let data = {year: 2001, customField: true}
formula(data)
// => {birthYear: 2001}
let data = {year: 2001, customField: false}
formula(data)
// => {deathYear: 2001}
```
<a name="actions.toCamelCase"></a>

### actions.toCamelCase() ⇒ <code>function</code>
Function of converts object keys to camelCase.

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>function</code> - Returns function mutation object keys to camelCase  
**See**: [Shortcut method](../shortcuts#shortcuts.toCamelCase)  
**Example**  
```js
import toCamelCase from 'rmk/actions/toCamelCase';

let formula = rmk(toCamelCase())
let data = {fooBar:1, foo_bar:2, bar:3, Foo:4}
formula(data)
// => {fooBar:1, fooBar:2, bar:3, foo:4}
```
<a name="actions.toSnakeCase"></a>

### actions.toSnakeCase() ⇒ <code>function</code>
Function of converts object keys to snake_case.

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>function</code> - Returns function mutation object keys to snake_case  
**See**: [Shortcut method](../shortcuts#shortcuts.toSnakeCase)  
**Example**  
```js
import toSnakeCase from 'rmk/actions/toSnakeCase';

let formula = rmk(toSnakeCase())
let data = {fooBar:1, foo_bar:2, bar:3, Foo:4}
formula(data)
// => {foo_bar:1, foo_bar:2, bar:3, foo:4}
```
<a name="actions.update"></a>

### actions.update(config) ⇒ <code>function</code>
Update state by config

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>function</code> - Returns function add new field to object  
**See**: [Shortcut method](../shortcuts#shortcuts.update)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | {field: fn(state)} or {field: value} |

**Example**  
```js
import update from 'rmk/actions/update';

let formula = rmk(update({
   bar: 3
}))
let data = {foo:1}
formula(data)
// => {foo:1, bar:3}

let data = [{foo:1}, {foo:2}]
formula(data)
// =>  [{foo:1, bar:3}, {foo:2, bar:3}]

let formula = rmk(update({
    year: (state) => {
      return state.date.getFullYear()
    }
}))
let data = {date: new Date(2001)}
formula(data)
// => {date: new Date(2001), year: 2001}

let data = [{date: new Date(2001)}, {date: new Date(2002)}]
// => [{date: new Date(2001), year: 2001}, {date: new Date(2002), year: 2002}]
```
