<a name="shortcuts"></a>

## shortcuts : <code>object</code>
**Kind**: global namespace  

* [shortcuts](#shortcuts) : <code>object</code>
    * [.module.exports(origin)](#shortcuts.module.exports) ⇒ <code>function</code>
    * [.module.exports(origin, config)](#shortcuts.module.exports) ⇒ <code>function</code>
    * [.module.exports(origin)](#shortcuts.module.exports) ⇒ <code>function</code>
    * [.module.exports(origin)](#shortcuts.module.exports) ⇒ <code>function</code>
    * [.module.exports(origin, config)](#shortcuts.module.exports) ⇒ <code>function</code>

<a name="shortcuts.module.exports"></a>

### shortcuts.module.exports(origin) ⇒ <code>function</code>
Shortcut for clear object

**Kind**: static method of <code>[shortcuts](#shortcuts)</code>  
**Returns**: <code>function</code> - Returns transformed object with snake_case keys  
**See**: [Original method](../actions#actions.clear)  

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
<a name="shortcuts.module.exports"></a>

### shortcuts.module.exports(origin, config) ⇒ <code>function</code>
Rename state by config

**Kind**: static method of <code>[shortcuts](#shortcuts)</code>  
**Returns**: <code>function</code> - Returns transformed object with snake_case keys  
**See**: [Original method](../actions#actions.rename)  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>Object</code> | Origin object |
| config | <code>Object</code> | Configuration with struct {field: fn(state)} or {field:value} |

**Example**  
```js
import update from 'rmk/shortcuts/update';

let data = {foo:1}
rename(data, {
   foo: 'bar'
})
// => {bar:1}

let data = [{foo:1}, {foo:2}]
update(data, {
   foo: 'bar'
})
// =>  [{bar:1}, {bar:2}]


let data = {year: 2001}
rename(data, {
    year: (state) => {
      return (state.year.toString().lentgth == 4) ? 'fullYear' : 'year';
    }
})
// => {fullYear: 2001}

let data = [{year: 2001}, {year: 2002}]
rename(data, {
    year: (state) => {
      return (state.year.toString().lentgth == 4) ? 'fullYear' : 'year';
    }
})
// => [{fullYear: 2001}, {fullYear: 2002}]
```
<a name="shortcuts.module.exports"></a>

### shortcuts.module.exports(origin) ⇒ <code>function</code>
Function of converts object keys to camelCase.

**Kind**: static method of <code>[shortcuts](#shortcuts)</code>  
**Returns**: <code>function</code> - Returns transformed object with snake_case keys  
**See**: [Original method](../actions#actions.toCamelCase)  

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
<a name="shortcuts.module.exports"></a>

### shortcuts.module.exports(origin) ⇒ <code>function</code>
Function of converts object keys to snake_case.

**Kind**: static method of <code>[shortcuts](#shortcuts)</code>  
**Returns**: <code>function</code> - Returns transformed object with snake_case keys  
**See**: [Original method](../actions#actions.toCamelCase)  

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
<a name="shortcuts.module.exports"></a>

### shortcuts.module.exports(origin, config) ⇒ <code>function</code>
Update state by config

**Kind**: static method of <code>[shortcuts](#shortcuts)</code>  
**Returns**: <code>function</code> - Returns transformed object with snake_case keys  
**See**: [Original method](../actions#actions.update)  

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
