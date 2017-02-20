<a name="shortcuts"></a>

## shortcuts : <code>object</code>
**Kind**: global namespace  

* [shortcuts](#shortcuts) : <code>object</code>
    * [.clear(params)](#shortcuts.clear) ⇒ <code>function</code>
    * [.toCamelCase(params)](#shortcuts.toCamelCase) ⇒ <code>function</code>
    * [.toSnakeCase(params)](#shortcuts.toSnakeCase) ⇒ <code>function</code>

<a name="shortcuts.clear"></a>

### shortcuts.clear(params) ⇒ <code>function</code>
Shortcut for clear object

**Kind**: static method of <code>[shortcuts](#shortcuts)</code>  
**Returns**: <code>function</code> - Returns transformed object with snake_case keys  
**See**: [actions.clear](actions.clear) Original method  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Origin object |

**Example**  
```js
import clear from 'rmk/shortcuts/clear';

let data = {foo:null, bar: 0, baz:null}
clear(data)
// => {bar:0}
```
<a name="shortcuts.toCamelCase"></a>

### shortcuts.toCamelCase(params) ⇒ <code>function</code>
Function of converts object keys to camelCase.

**Kind**: static method of <code>[shortcuts](#shortcuts)</code>  
**Returns**: <code>function</code> - Returns transformed object with snake_case keys  
**See**: [actions.toCamelCase](actions.toCamelCase) Original method  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Origin object |

**Example**  
```js
import toCamelCase from 'rmk/shortcuts/toCamelCase';

let data = {FooBar:1, foo_baz:2, bar:3, baz:4}
toCamelCase(data)
// => {fooBar:1, fooBaz:2, bar:3, baz:4}
```
<a name="shortcuts.toSnakeCase"></a>

### shortcuts.toSnakeCase(params) ⇒ <code>function</code>
Function of converts object keys to snake_case.

**Kind**: static method of <code>[shortcuts](#shortcuts)</code>  
**Returns**: <code>function</code> - Returns transformed object with snake_case keys  
**See**: [actions.toSnakeCase](actions.toSnakeCase) Original method  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Origin object |

**Example**  
```js
import toCamelCase from 'rmk/shortcuts/toSnakeCase';

let data = {fooBar:1, foo_baz:2, bar:3, Baz:4}
toSnakeCase(data)
// => {foo_bar:1, foo_baz:2, bar:3, baz:4}
```
