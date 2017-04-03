<a name="actions"></a>

## actions : <code>object</code>
**Kind**: global namespace  

* [actions](#actions) : <code>object</code>
    * [.clear(config)](#actions.clear) ⇒ <code>Object</code>
    * [.pick(config)](#actions.pick) ⇒ <code>Object</code>
    * [.recursive(actions, deepLimit)](#actions.recursive) ⇒ <code>Array</code> &#124; <code>Object</code>
    * [.rename(config)](#actions.rename) ⇒ <code>function</code>
    * [.replace()](#actions.replace) ⇒ <code>Object</code>
    * [.swap()](#actions.swap) ⇒ <code>Object</code>
    * [.toCamelCase()](#actions.toCamelCase) ⇒ <code>function</code>
    * [.toSnakeCase()](#actions.toSnakeCase) ⇒ <code>function</code>
    * [.update(config)](#actions.update) ⇒ <code>function</code>

<a name="actions.clear"></a>

### actions.clear(config) ⇒ <code>Object</code>
Function of clear object keys from null and undefined values

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>Object</code> - Returns function clear object from undefined and null values  
**See**: [Shortcut method](../shortcuts#shortcuts.clear)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | = {   emptyArray: true,   emptyObject: true,   emptyString: true,   nullValue: true,   undefinedValue: true }; |

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
<a name="actions.pick"></a>

### actions.pick(config) ⇒ <code>Object</code>
Function of pick object keys and calculate other keys

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>Object</code> - Returns function for picking keys  
**See**: [Shortcut method](../shortcuts#shortcuts.pick)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Array</code> &#124; <code>Object</code> | Keys |

**Example**  
```js
import rmk from 'rmk';
import pick from 'rmk/actions/pick';

let formula = rmk(pick(['id', 'name'))
let data = {id:1, name: "abc", createDate: "01.01.1970", "isActive": false}
formula(data)
// => {id:1, name: "abc"}

let data = [
 {id:1, name: "abc", createDate: "01.01.1970", "isActive": false},
 {id:2, name: "bca", createDate: "01.02.1971", "isActive": true}
 ]
formula(data)
 // => [{id:1, name: "abc"}, {id:2, name: "bca"}]

 let data = {id:1, value: "abc", createDate: "01.01.1970", "isActive": false}
 let formula = rmk(pick({
   id: 'id',
   name:'value',
   date: (localState) => new Date(localState.createDate)
 })
formula(data)
 // => {id: 1, name: "abc", date: new Date("01.01.1970")}

 let data = [
   {id:1, value: "abc", createDate: "01.01.1970", "isActive": false}
   {id:2, value: "bca", createDate: "01.01.1971", "isActive": true}
 ]
formula(data)
 // => [
 //  {id: 1, name: "abc", date: new Date("01.01.1970")},
 //  {id: 2, name: "bca", date: new Date("01.01.1970")}
 // ]
```
<a name="actions.recursive"></a>

### actions.recursive(actions, deepLimit) ⇒ <code>Array</code> &#124; <code>Object</code>
Recursive parse data by actions

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>Array</code> &#124; <code>Object</code> - Recursive parsed Data by actions  

| Param | Type | Description |
| --- | --- | --- |
| actions | <code>Array</code> | array of actions |
| deepLimit | <code>Number</code> | Deep limit. Default 5. |

**Example**  
```js
let recursiveData = {
 foo_bar: 0,
 remove_baz: null,
 array_key: [1, 2, 3],
 array_objects: [
  {a_b: 'a', b_c: 'b'}
 ]
};
recursiveData.deep_obj = recursiveData;

 const formula = rmk(
   rmk.recursive(
     [
       rmk.toCamelCase(),
       rmk.update({
           arrayKeyStr: localState =>
             ((isArray(localState.arrayKey)) ? localState.arrayKey.join(',') : null),
        }),
       rmk.rename({
           arrayKeyStr: 'renamedStr',
         }),
       rmk.clear(),
     ]
   )
);
formula(recursiveData);
// => { "arrayKey": [1, 2, 3], "arrayObjects": [{"aB": "a", "bC": "b"}], "deepObj":
// { "arrayKey": [1, 2, 3], "arrayObjects": [{"aB": "a", "bC": "b"}],
// "deepObj": { "arrayKey": [1, 2, 3], "arrayObjects": [{"aB": "a", "bC": "b"}],
// "deepObj": { "deepObj": {"fooBar": 0}, "fooBar": 0 }, "fooBar": 0, "renamedStr": "1,2,3" },
// "fooBar": 0, "renamedStr": "1,2,3" }, "fooBar": 0, "renamedStr": "1,2,3" };
```
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
<a name="actions.replace"></a>

### actions.replace() ⇒ <code>Object</code>
Function to replace item in array by index

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>Object</code> - Returns function to replace item in array by index  
**See**: [Shortcut method](../shortcuts#shortcuts.replace)  
**Example**  
```js
import replace from 'rmk/actions/replace';

let formula = rmk(replace(1, 'baz' ))
let data = ['foo', 'bar']
formula(data)
// => ['foo', 'baz']
```
<a name="actions.swap"></a>

### actions.swap() ⇒ <code>Object</code>
Function to swap items in array by indexes

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>Object</code> - Returns function to swap items in array by indexes  
**See**: [Shortcut method](../shortcuts#shortcuts.index)  
**Example**  
```js
import swap from 'rmk/actions/swap';

let formula = rmk(swap(1, 2))
let data = ['foo', 'bar', 'baz']
formula(data)
// => ['foo', 'baz', 'bar']
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
| config | <code>Object</code> &#124; <code>function</code> | {field: fn(state)} or {field: value} |

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
