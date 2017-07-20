<a name="op"></a>

## op : <code>object</code>
**Kind**: global namespace  
**Example**  
```js
// Init for each example:

import opRecursive from 'op/recursive/op';
import op from 'op';

let deepData = {
  a: "",
  b : 1,
  c_d: null,
  dB: undefined,
  deep: {
    g: null,
    h: true,
    moreDeep: {kE: "", m_r:false}
  }
 };

 let simpleData = {
  a: "",
  b : 1,
  c_d: null,
  dB: undefined
};

 let eachRename = (key, value) => {
   return {key: `_${key}_`, value: value}
 };

 let renameKeys = {
   a: state => `${state.b}_${typeof d}`
   b: 'newB',
   h: 'newH'
 };
 let updateKeys = {
   a: state => `${state.b}_${typeof d}`
   b: 'newB',
   h: 'newH'
 };
```

* [op](#op) : <code>object</code>
    * [.recursive](#op.recursive) : <code>object</code>
        * [.clear(config)](#op.recursive.clear) ⇒ <code>function</code>
        * [.each(callback)](#op.recursive.each) ⇒ <code>function</code>
        * [.rename(config)](#op.recursive.rename) ⇒ <code>function</code>
        * [.toCamelCase()](#op.recursive.toCamelCase) ⇒ <code>function</code>
        * [.toSnakeCase()](#op.recursive.toSnakeCase) ⇒ <code>function</code>
        * [.update()](#op.recursive.update) ⇒ <code>function</code>
    * [.clear(config)](#op.clear) ⇒ <code>function</code>
    * [.each(callback)](#op.each) ⇒ <code>function</code>
    * [.rename(config)](#op.rename) ⇒ <code>function</code>
    * [.toCamelCase()](#op.toCamelCase) ⇒ <code>function</code>
    * [.toSnakeCase()](#op.toSnakeCase) ⇒ <code>function</code>
    * [.update()](#op.update) ⇒ <code>function</code>

<a name="op.recursive"></a>

### op.recursive : <code>object</code>
**Kind**: static namespace of [<code>op</code>](#op)  

* [.recursive](#op.recursive) : <code>object</code>
    * [.clear(config)](#op.recursive.clear) ⇒ <code>function</code>
    * [.each(callback)](#op.recursive.each) ⇒ <code>function</code>
    * [.rename(config)](#op.recursive.rename) ⇒ <code>function</code>
    * [.toCamelCase()](#op.recursive.toCamelCase) ⇒ <code>function</code>
    * [.toSnakeCase()](#op.recursive.toSnakeCase) ⇒ <code>function</code>
    * [.update()](#op.recursive.update) ⇒ <code>function</code>

<a name="op.recursive.clear"></a>

#### recursive.clear(config) ⇒ <code>function</code>
Recursive clear

**Kind**: static method of [<code>recursive</code>](#op.recursive)  
**See**: [Clear action](OBJECT_ACTIONS.md#clear)  

| Param |
| --- |
| config | 

**Example**  
```js
import clear from 'op/recursive/clear';
clear()(deepData);
// => {b:1, deep: {h:true, moreDeep: {m: false}}}
```
**Example**  
```js
import clear from 'op/clear';
opRecursive(clear())(deepData);
// => {b:1, deep: {h:true, moreDeep: {m: false}}}

* @example
op.recursive(op.clear())(deepData);
// => {b:1, deep: {h:true, moreDeep: {m: false}}}

 
```
**Example**  
```js
import clear from 'op/clear';
 op.recursive(clear())(deepData);
// => {b:1, deep: {h:true, moreDeep: {m: false}}}
```
<a name="op.recursive.each"></a>

#### recursive.each(callback) ⇒ <code>function</code>
Recursive each key|value.

**Kind**: static method of [<code>recursive</code>](#op.recursive)  
**See**: [Each action](OBJECT_ACTIONS.md#each)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Function (key,value) => {key: new Key, value: newValue} |

**Example**  
```js
import each from 'op/recursive/each';
each(eachRename)(deepData);
// => { _a_: "", _b_:1, _c_d_: null, _dB_:"undefined", _deep_: {_g_:null: _h_:true, _moreDeep_: {_kE_: "", _m_r_:false}} }
```
**Example**  
```js
opRecursive(op.each(eachRename))(deepData);
// => { _a_: "", _b_:1, _c_d_: null, _dB_:"undefined", _deep_: {_g_:null: _h_:true, _moreDeep_: {_kE_: "", _m_r_:false}} }
```
**Example**  
```js
op.recursive(op.each(eachRename))(deepData);
// => { _a_: "", _b_:1, _c_d_: null, _dB_:"undefined", _deep_: {_g_:null: _h_:true, _moreDeep_: {_kE_: "", _m_r_:false}} }
```
**Example**  
```js
import each from 'op/each';
op.recursive(each(eachRename))(deepData);
// => { _a_: "", _b_:1, _c_d_: null, _dB_:"undefined", _deep_: {_g_:null: _h_:true, _moreDeep_: {_kE_: "", _m_r_:false}} }
```
<a name="op.recursive.rename"></a>

#### recursive.rename(config) ⇒ <code>function</code>
Recursive rename Object Keys

**Kind**: static method of [<code>recursive</code>](#op.recursive)  
**See**: [Rename action](OBJECT_ACTIONS.md#rename)  

| Param | Type |
| --- | --- |
| config | <code>Object</code> | 

**Example**  
```js
import rename from 'op/recursive/rename';
rename(renameKeys)(deepData);
// => { "1_object": "", newB: 1, c_d: null, dB:"undefined", deep: {g:null: newH:true, moreDeep: {kE: "", m_r:false}} }
```
**Example**  
```js
opRecursive(op.rename(renameKeys))(deepData);
// => { "1_object": "", newB: 1, c_d: null, dB:"undefined", deep: {g:null: newH:true, moreDeep: {kE: "", m_r:false}} }
```
**Example**  
```js
op.recursive(op.rename(renameKeys))(deepData);
// => { "1_object": "", newB: 1, c_d: null, dB:"undefined", deep: {g:null: newH:true, moreDeep: {kE: "", m_r:false}} }
```
**Example**  
```js
import rename from 'op/rename';
op.recursive(rename(renameKeys))(deepData);
 // => { "1_object": "", newB: 1, c_d: null, dB:"undefined", deep: {g:null: newH:true, moreDeep: {kE: "", m_r:false}} }
```
<a name="op.recursive.toCamelCase"></a>

#### recursive.toCamelCase() ⇒ <code>function</code>
Recursive toCamelCase

**Kind**: static method of [<code>recursive</code>](#op.recursive)  
**See**: [toCamelCase action](OBJECT_ACTIONS.md#toCamelCase)  
**Example**  
```js
import toCamelCase from 'op/recursive/toCamelCase';
toCamelCase()(deepData);
// => { a: "", b: 1, cD: null, dB:"undefined", deep: {g:null: h:true, moreDeep: {kE: "", mR:false}} }
```
**Example**  
```js
opRecursive(op.toCamelCase())(deepData);
// => { a: "", b: 1, cD: null, dB:"undefined", deep: {g:null: h:true, moreDeep: {kE: "", mR:false}} }
```
**Example**  
```js
op.recursive(op.toCamelCase())(deepData);
// => { a: "", b: 1, cD: null, dB:"undefined", deep: {g:null: h:true, moreDeep: {kE: "", mR:false}} }
```
**Example**  
```js
import toCamelCase from 'op/toCamelCase';
op.recursive(toCamelCase())(deepData);
 // => { a: "", b: 1, cD: null, dB:"undefined", deep: {g:null: h:true, moreDeep: {kE: "", mR:false}} }
```
<a name="op.recursive.toSnakeCase"></a>

#### recursive.toSnakeCase() ⇒ <code>function</code>
Recursive toSnakeCase

**Kind**: static method of [<code>recursive</code>](#op.recursive)  
**See**: [toSnakeCase action](OBJECT_ACTIONS.md#toSnakeCase)  
**Example**  
```js
import toSnakeCase from 'op/recursive/toSnakeCase';
toSnakeCase()(deepData);
// => { a: "", b: 1, c_d: null, d_b:"undefined", deep: {g:null: h:true, moreDeep: {k_e: "", m_r:false}} }
```
**Example**  
```js
opRecursive(op.toSnakeCase())(deepData);
// => { a: "", b: 1, c_d: null, d_b:"undefined", deep: {g:null: h:true, moreDeep: {k_e: "", m_r:false}} }
```
**Example**  
```js
op.recursive(op.toSnakeCase())(deepData);
// => { a: "", b: 1, c_d: null, d_b:"undefined", deep: {g:null: h:true, moreDeep: {k_e: "", m_r:false}} }
```
**Example**  
```js
import toSnakeCase from 'op/toSnakeCase';
op.recursive(toSnakeCase())(deepData);
 // => { a: "", b: 1, c_d: null, d_b:"undefined", deep: {g:null: h:true, moreDeep: {k_e: "", m_r:false}} }
```
<a name="op.recursive.update"></a>

#### recursive.update() ⇒ <code>function</code>
Recursive update

**Kind**: static method of [<code>recursive</code>](#op.recursive)  
**See**: [update action](OBJECT_ACTIONS.md#update)  
**Example**  
```js
import update from 'op/recursive/update';
update(updateKeys)(deepData);
// => { a: "1_object", b: "newB", c_d: null, dB:"undefined", deep: {g:null: h:"newH", moreDeep: {kE: "", m_r:false}} }
```
**Example**  
```js
opRecursive(op.update(updateKeys))(deepData);
// => { a: "1_object", b: "newB", c_d: null, dB:"undefined", deep: {g:null: h:"newH", moreDeep: {kE: "", m_r:false}} }
```
**Example**  
```js
op.recursive(op.update(updateKeys))(deepData);
// => { a: "1_object", b: "newB", c_d: null, dB:"undefined", deep: {g:null: h:"newH", moreDeep: {kE: "", m_r:false}} }
```
**Example**  
```js
import update from 'op/update';
op.recursive(update(updateKeys))(deepData);
// => { a: "1_object", b: "newB", c_d: null, dB:"undefined", deep: {g:null: h:"newH", moreDeep: {kE: "", m_r:false}} }
```
<a name="op.clear"></a>

### op.clear(config) ⇒ <code>function</code>
Clear Object

**Kind**: static method of [<code>op</code>](#op)  
**See**: [Clear action](OBJECT_ACTIONS.md#clear)  

| Param |
| --- |
| config | 

**Example**  
```js
op.clear()(simpleData);
// => {b:1}
```
**Example**  
```js
import clear from 'op/clear';
clear()(simpleData);
// => {b:1}
```
<a name="op.each"></a>

### op.each(callback) ⇒ <code>function</code>
Modify each key|value.

**Kind**: static method of [<code>op</code>](#op)  
**See**: [Each action](OBJECT_ACTIONS.md#each)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Function (key,value) => {key: new Key, value: newValue} |

**Example**  
```js
import each from 'op/each';
each(eachTypeOf)(simpleData);
// => { _a_: "", _b_:1, _c_d_: null, _dB_:"undefined", _deep_: {g:null: h:true, _moreDeep: {k: "", m:false}} }
```
**Example**  
```js
op.each(eachTypeOf)(simpleData);
// => { _a_: "", _b_:1, _c_d_: null, _dB_:"undefined", _deep_: {g:null: h:true, _moreDeep: {k: "", m:false}} }
```
<a name="op.rename"></a>

### op.rename(config) ⇒ <code>function</code>
Rename Object Keys

**Kind**: static method of [<code>op</code>](#op)  
**See**: [Rename action](OBJECT_ACTIONS.md#rename)  

| Param | Type |
| --- | --- |
| config | <code>Object</code> | 

**Example**  
```js
import rename from 'op/rename';
rename(renameKeys)(simpleData);
// => { "1_object": "", newB: 1, c_d: null, dB:"undefined"}
```
**Example**  
```js
op.rename(renameKeys)(simpleData);
// => { "1_object": "", newB: 1, c_d: null, dB:"undefined"}
```
<a name="op.toCamelCase"></a>

### op.toCamelCase() ⇒ <code>function</code>
Transform Object Keys to CamelCase

**Kind**: static method of [<code>op</code>](#op)  
**See**: [toCamelCase action](OBJECT_ACTIONS.md#toCamelCase)  
**Example**  
```js
import toCamelCase from 'op/toCamelCase';
toCamelCase()(simpleData);
// => { a: "", b: 1, cD: null, dB:"undefined"}
```
**Example**  
```js
op.toCamelCase()(simpleData);
// => { a: "", b: 1, cD: null, dB:"undefined"}
```
<a name="op.toSnakeCase"></a>

### op.toSnakeCase() ⇒ <code>function</code>
Transform Object Keys to snake_case

**Kind**: static method of [<code>op</code>](#op)  
**See**: [toSnakeCase action](OBJECT_ACTIONS.md#toSnakeCase)  
**Example**  
```js
import toSnakeCase from 'op/toSnakeCase';
toSnakeCase()(simpleData);
// => { a: "", b: 1, c_d: null, d_b:"undefined"}
```
**Example**  
```js
op.toSnakeCase()(simpleData);
// => { a: "", b: 1, c_d: null, d_b:"undefined"}
```
<a name="op.update"></a>

### op.update() ⇒ <code>function</code>
Update Object values

**Kind**: static method of [<code>op</code>](#op)  
**See**: [update action](OBJECT_ACTIONS.md#update)  
**Example**  
```js
import update from 'op/update';
update(updateKeys)(simpleData);
// => { a: "1_object", b: "newB", c_d: null, dB:"undefined"}
```
**Example**  
```js
op.update(updateKeys)(simpleData);
// => { a: "1_object", b: "newB", c_d: null, dB:"undefined"}
```
