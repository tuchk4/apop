<a name="shortcuts"></a>

## shortcuts : <code>object</code>
**Kind**: global namespace  

* [shortcuts](#shortcuts) : <code>object</code>
    * [.clear(origin)](#shortcuts.clear) ⇒ <code>function</code>
    * [.toCamelCase(origin)](#shortcuts.toCamelCase) ⇒ <code>function</code>
    * [.toSnakeCase(origin)](#shortcuts.toSnakeCase) ⇒ <code>function</code>
    * [.update(origin, config)](#shortcuts.update) ⇒ <code>function</code>

<a name="shortcuts.clear"></a>

### shortcuts.clear(origin) ⇒ <code>function</code>
Shortcut for clear object

**Kind**: static method of <code>[shortcuts](#shortcuts)</code>  
**Returns**: <code>function</code> - Returns transformed object with snake_case keys  
**See**: [../action#actions.clear](../action#actions.clear) Original method  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>Object</code> | Origin object |

**Example**  
```js
import clear from 'rmk/shortcuts/clear';

let data = {foo:null, bar: 0, baz:null}
clear(data)
// => {bar:0}
```
<a name="shortcuts.toCamelCase"></a>

### shortcuts.toCamelCase(origin) ⇒ <code>function</code>
Function of converts object keys to camelCase.

**Kind**: static method of <code>[shortcuts](#shortcuts)</code>  
**Returns**: <code>function</code> - Returns transformed object with snake_case keys  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>Object</code> | Origin object |

**Example**  
```js
import toCamelCase from 'rmk/shortcuts/toCamelCase';

let data = {FooBar:1, foo_baz:2, bar:3, baz:4}
toCamelCase(data)
// => {fooBar:1, fooBaz:2, bar:3, baz:4}
```
<a name="shortcuts.toSnakeCase"></a>

### shortcuts.toSnakeCase(origin) ⇒ <code>function</code>
Function of converts object keys to snake_case.

**Kind**: static method of <code>[shortcuts](#shortcuts)</code>  
**Returns**: <code>function</code> - Returns transformed object with snake_case keys  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>Object</code> | Origin object |

**Example**  
```js
import toCamelCase from 'rmk/shortcuts/toSnakeCase';

let data = {fooBar:1, foo_baz:2, bar:3, Baz:4}
toSnakeCase(data)
// => {foo_bar:1, foo_baz:2, bar:3, baz:4}
```
<a name="shortcuts.update"></a>

### shortcuts.update(origin, config) ⇒ <code>function</code>
Update state by config

**Kind**: static method of <code>[shortcuts](#shortcuts)</code>  
**Returns**: <code>function</code> - Returns transformed object with snake_case keys  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>Object</code> | Origin object |
| config | <code>Object</code> | Configuration with struct {field: fn(state)} or {field:value} |

**Example**  
```js
import update from 'rmk/shortcuts/update';

let data = {foo:1}
update(data, {
   bar: 3
})
// => {foo:1, bar:3}

let data = [{foo:1}, {foo:2}]
update(data, {
   bar: 3
})
// =>  [{foo:1, bar:3}, {foo:2, bar:3}]


let data = {date: new Date(2001)}
update(data, {
    year: (state) => {
      return state.date.getFullYear()
    }
})
// => {date: new Date(2001), year: 2001}

let data = [{date: new Date(2001)}, {date: new Date(2002)}]
update(data, {
    year: (state) => {
      return state.date.getFullYear()
    }
})
// => [{date: new Date(2001), year: 2001}, {date: new Date(2002), year: 2002}]
```
