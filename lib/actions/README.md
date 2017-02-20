<a name="actions"></a>

## actions : <code>object</code>
**Kind**: global namespace  

* [actions](#actions) : <code>object</code>
    * [.clear(config)](#actions.clear) ⇒ <code>function</code>
    * [.toCamelCase(config)](#actions.toCamelCase) ⇒ <code>function</code>
    * [.toSnakeCase(config)](#actions.toSnakeCase) ⇒ <code>function</code>

<a name="actions.clear"></a>

### actions.clear(config) ⇒ <code>function</code>
Function of clear object keys from null and undefined values

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>function</code> - Returns function clear object from undefined and null values  
**See**: [shortcuts.clear](shortcuts.clear) Shortcut method  

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
<a name="actions.toCamelCase"></a>

### actions.toCamelCase(config) ⇒ <code>function</code>
Function of converts object keys to camelCase.

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>function</code> - Returns function mutation object keys to camelCase  
**See**: [shortcuts.camelCase](shortcuts.camelCase) Shortcut method  

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
<a name="actions.toSnakeCase"></a>

### actions.toSnakeCase(config) ⇒ <code>function</code>
Function of converts object keys to snake_case.

**Kind**: static method of <code>[actions](#actions)</code>  
**Returns**: <code>function</code> - Returns function mutation object keys to snake_case  
**See**: [shortcuts.toSnakeCase](shortcuts.toSnakeCase) Shortcut method  

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