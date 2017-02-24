<a name="actions"></a>

## actions : <code>object</code>
**Kind**: global namespace  

* [actions](#actions) : <code>object</code>
    * [.module.exports(config)](#actions.module.exports) ⇒ <code>function</code>
    * [.module.exports(config)](#actions.module.exports) ⇒ <code>function</code>
    * [.module.exports(config)](#actions.module.exports) ⇒ <code>function</code>
    * [.module.exports(config)](#actions.module.exports) ⇒ <code>function</code>
    * [.update(config)](#actions.update) ⇒ <code>function</code>

<a name="actions.module.exports"></a>

### actions.module.exports(config) ⇒ <code>function</code>
Function of clear object keys from null and undefined values

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>function</code> - Returns function clear object from undefined and null values  
**See**: [Shortcut method](../shortcuts#shortcuts.clear)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Default empty. No used in action. |

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
 // => foo: true, bar: false, baz: 1 }
```
<a name="actions.module.exports"></a>

### actions.module.exports(config) ⇒ <code>function</code>
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
<a name="actions.module.exports"></a>

### actions.module.exports(config) ⇒ <code>function</code>
Function of converts object keys to camelCase.

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>function</code> - Returns function mutation object keys to camelCase  
**See**: [Shortcut method](../shortcuts#shortcuts.toCamelCase)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Default empty. No used in action. |

**Example**  
```js
import toCamelCase from 'rmk/actions/toCamelCase';

let formula = rmk(toCamelCase())
let data = {fooBar:1, foo_bar:2, bar:3, Foo:4}
formula(data)
// => {fooBar:1, fooBar:2, bar:3, foo:4}
```
<a name="actions.module.exports"></a>

### actions.module.exports(config) ⇒ <code>function</code>
Function of converts object keys to snake_case.

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>function</code> - Returns function mutation object keys to snake_case  
**See**: [Shortcut method](../shortcuts#shortcuts.toSnakeCase)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Default empty. No used in action. |

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
