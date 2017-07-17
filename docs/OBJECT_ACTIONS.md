## Functions

<dl>
<dt><a href="#clear">clear(config)</a> ⇒ <code>function</code></dt>
<dd><p>Clear object</p>
</dd>
<dt><a href="#each">each(callback)</a> ⇒ <code>function</code></dt>
<dd><p>Parse object. Return (new key|new value) for (each key|value).</p>
</dd>
<dt><a href="#rename">rename(config)</a> ⇒ <code>function</code></dt>
<dd><p>By default action parse object.
For recursive flow use op.recursive(op.rename(config))(data)</p>
</dd>
<dt><a href="#toCamelCase">toCamelCase()</a> ⇒ <code>function</code></dt>
<dd><p>Convert object keys to camelCase.</p>
</dd>
<dt><a href="#toSnakeCase">toSnakeCase()</a> ⇒ <code>function</code></dt>
<dd><p>Convert object keys to snake_case.</p>
</dd>
<dt><a href="#update">update(config)</a> ⇒ <code>function</code></dt>
<dd><p>By default action parse object. For recursive flow use op.recursive(op.update(config))(data)</p>
</dd>
</dl>

<a name="clear"></a>

## clear(config) ⇒ <code>function</code>
Clear object

**Kind**: global function  
**See**

- [op.clear](OP.md#op.clear)
- [op.recursive.clear](OP.md#op.recursive.clear)


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
import clear from 'op/clear';

clear()({a:null, b: 0, c: null, d: {}, e: [], f: [1],  g: false, h: '', j: new Date(), k: 'test'})
// => {a:null, b: 0, c: null, f: [1],  g: false, j: new Date(), k: 'test'}
```
<a name="each"></a>

## each(callback) ⇒ <code>function</code>
Parse object. Return (new key|new value) for (each key|value).

**Kind**: global function  
**See**

- [op.each](OP.md#op.each)
- [op.recursive.each](OP.md#op.recursive.each)


| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (key, value) => ({key: newKey, value: newValue}) |

**Example**  
```js
import each from 'op/each';

op.each((key, value) => {
 return {key: key + '_', value: value * 2}
})({a:1, b: 2, c: 3, d: 4})
// => {a_: 2, b_: 4, c_: 6, d_: 8}
```
<a name="rename"></a>

## rename(config) ⇒ <code>function</code>
By default action parse object.
For recursive flow use op.recursive(op.rename(config))(data)

**Kind**: global function  
**See**

- [op.rename](OP.md#op.rename)
- [op.recursive.rename](OP.md#op.recursive.rename)


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Object with rename params {fromKey: 'toKey', ...} |

**Example**  
```js
import rename from 'op/rename';

rename({
   oldValue: 'newValue',
   year: (localState) => {
      return localState.wasBorn ? 'birthYear' : 'deathYear'
   }
})({oldValue:1, year: 2001, wasBorn: true})
```
<a name="toCamelCase"></a>

## toCamelCase() ⇒ <code>function</code>
Convert object keys to camelCase.

**Kind**: global function  
**See**

- [op.toCamelCase](OP.md#op.toCamelCase)
- [op.recursive.toCamelCase](OP.md#op.recursive.toCamelCase)

**Example**  
```js
import toCamelCase from 'op/toCamelCase';

op.toCamelCase()({fooBar:1, foo_bar:2, bar:3, Foo:4})
// => {fooBar:1, fooBar:2, bar:3, foo:4}
```
<a name="toSnakeCase"></a>

## toSnakeCase() ⇒ <code>function</code>
Convert object keys to snake_case.

**Kind**: global function  
**See**

- [op.toSnakeCase](OP.md#op.toSnakeCase)
- [op.recursive.toSnakeCase](OP.md#op.recursive.toSnakeCase)

**Example**  
```js
import toSnakeCase from 'op/toSnakeCase';

op.toSnakeCase()({fooBar:1, foo_bar:2, bar:3, Foo:4})
// => {foo_bar:1, foo_bar:2, bar:3, foo:4}
```
<a name="update"></a>

## update(config) ⇒ <code>function</code>
By default action parse object. For recursive flow use op.recursive(op.update(config))(data)

**Kind**: global function  
**See**

- [op.update](OP.md#op.update)
- [op.recursive.update](OP.md#op.recursive.update)


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Object with update params {newKey: 'const', newKeyFn: state => state.id, ...} |

**Example**  
```js
import update from 'op/update';

op.update({
  bar: 3,
  year: (state) => state.date.getFullYear()
})({
  foo:1,
  date: new Date(2001)
});
// => {foo:1, bar:3, date: new Date(2001), year: 2001}
```
