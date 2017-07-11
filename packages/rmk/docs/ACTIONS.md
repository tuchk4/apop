<a name="rmk"></a>

## rmk : <code>object</code>
**Kind**: global namespace  

* [rmk](#rmk) : <code>object</code>
    * [.clear(config)](#rmk.clear) ⇒ <code>function</code>
    * [.each(callback)](#rmk.each) ⇒ <code>function</code>
    * [.rename(config)](#rmk.rename) ⇒ <code>function</code>
    * [.toCamelCase()](#rmk.toCamelCase) ⇒ <code>function</code>
    * [.toSnakeCase()](#rmk.toSnakeCase) ⇒ <code>function</code>
    * [.update(config)](#rmk.update) ⇒ <code>function</code>

<a name="rmk.clear"></a>

### rmk.clear(config) ⇒ <code>function</code>
By default action parse object.  For recursive flow use rmk.recursive(rmk.clear())(data)

**Kind**: static method of [<code>rmk</code>](#rmk)  
**Returns**: <code>function</code> - Returns function clear object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>Object</code> |  |  |
| [config.emptyArray] | <code>Boolean</code> | <code>true</code> | Clear [] |
| [config.emptyObject] | <code>Boolean</code> | <code>true</code> | Clear {} |
| [config.emptyString] | <code>Boolean</code> | <code>true</code> | Clear "" |
| [config.nullValue] | <code>Boolean</code> | <code>true</code> | Clear null |
| [config.undefinedValue] | <code>Boolean</code> | <code>true</code> | Clear undefined |

**Example**  
```js
import rmk from 'rmk';

let formula = rmk(rmk.clear({ // default all true
 nullValue: false,
 undefinedValue: false
}))
let data = {a:null, b: 0, c: null, d: {}, e: [], f: [1],  g: false, h: '', j: new Date(), k: 'test'}
formula(data)
// or
rmk.clear()(data)
// => {a:null, b: 0, c: null, f: [1],  g: false, j: new Date(), k: 'test'}
```
<a name="rmk.each"></a>

### rmk.each(callback) ⇒ <code>function</code>
By default action parse object.  For recursive flow use rmk.recursive(rmk.each(callback))(data)

**Kind**: static method of [<code>rmk</code>](#rmk)  
**Returns**: <code>function</code> - Returns function parse eachKeys  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Function for parse each field in object (key, value) => ({key: newKey, value: newValue}) |

**Example**  
```js
import rmk from 'rmk';

let formula = rmk(rmk.each((key, value) => {
 return {key: key + '_', value: value * 2}
})
let data = {a:1, b: 2, c: 3, d: 4}
formula(data)
// or
rmk.clear()(data)
// => {a_: 2, b_: 4, c_: 6, d_: 8}
```
<a name="rmk.rename"></a>

### rmk.rename(config) ⇒ <code>function</code>
By default action parse object.
For recursive flow use rmk.recursive(rmk.rename(config))(data)

**Kind**: static method of [<code>rmk</code>](#rmk)  
**Returns**: <code>function</code> - Returns function rename fields to object  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Object with rename params {fromKey: 'toKey', ...} |
| config.anykey | <code>String</code> | Rename to const value |
| config.anykey | <code>function</code> | Rename to value by function. |

**Example**  
```js
import rmk from 'rmk';

let formula = rmk(rmk.rename({
   oldValue: 'newValue',
   year: (localState) => {
      return localState.wasBorn ? 'birthYear' : 'deathYear'
   }
}))
let data = [
 {oldValue:1, year: 2001, wasBorn: true},
 {oldValue:1, year: 2008, wasBorn: false}
]
formula(data)

// or

rmk.rename({
   oldValue: 'newValue',
   year: (localState) => {
      return localState.wasBorn ? 'birthYear' : 'deathYear'
   }
})(data)

// => [
 {newValue:1, birthYear: 2001, wasBorn: true},
 {newValue:1, deathYear: 2008, wasBorn: false}
]
```
<a name="rmk.toCamelCase"></a>

### rmk.toCamelCase() ⇒ <code>function</code>
By default action parse object. For recursive flow use rmk.recursive(rmk.toCamelCase())(data)

**Kind**: static method of [<code>rmk</code>](#rmk)  
**Returns**: <code>function</code> - Returns function transform object keys to camelCase  
**Example**  
```js
import rmk from 'rmk';

let formula = rmk(rmk.toCamelCase())
let data = {fooBar:1, foo_bar:2, bar:3, Foo:4}
formula(data)
// or
rmk.toCamelCase()(data)
// => {fooBar:1, fooBar:2, bar:3, foo:4}
```
<a name="rmk.toSnakeCase"></a>

### rmk.toSnakeCase() ⇒ <code>function</code>
By default action parse object. For recursive flow use rmk.recursive(rmk.toSnakeCase())(data)

**Kind**: static method of [<code>rmk</code>](#rmk)  
**Returns**: <code>function</code> - Returns function transform object keys to snake_case  
**Example**  
```js
import rmk from 'rmk';

let formula = rmk(rmk.toSnakeCase())
let data = {fooBar:1, foo_bar:2, bar:3, Foo:4}
formula(data)
// or
rmk.toSnakeCase()(data)
// => {foo_bar:1, foo_bar:2, bar:3, foo:4}
```
<a name="rmk.update"></a>

### rmk.update(config) ⇒ <code>function</code>
By default action parse object. For recursive flow use rmk.recursive(rmk.update(config))(data)

**Kind**: static method of [<code>rmk</code>](#rmk)  
**Returns**: <code>function</code> - Returns function update fields of object  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Object with update params {newKey: 'const', newKeyFn: state => state.id, ...} |
| config.anykey | <code>String</code> | Set const value |
| config.anykey | <code>function</code> | Set value by function |

**Example**  
```js
import rmk from 'rmk';

let formula = rmk(rmk.update({
   bar: 3,
   year: (state) => {
      return state.date.getFullYear()
    }
}))
let data = {foo:1, date: new Date(2001)}
formula(data)
// or
rmk.update()(data)
// => {foo:1, bar:3, date: new Date(2001), year: 2001}
```
