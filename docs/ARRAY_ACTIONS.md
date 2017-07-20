## Functions

<dl>
<dt><a href="#filter">filter(condition)</a> ⇒ <code><a href="#MiddlewareArrayFunction">MiddlewareArrayFunction</a></code></dt>
<dd><p>Filter Array</p>
</dd>
<dt><a href="#join">join(separator)</a> ⇒ <code><a href="#MiddlewareStringFunction">MiddlewareStringFunction</a></code></dt>
<dd><p>Join Array</p>
</dd>
<dt><a href="#map">map(callback)</a> ⇒ <code><a href="#MiddlewareArrayFunction">MiddlewareArrayFunction</a></code></dt>
<dd><p>Map Array</p>
</dd>
<dt><a href="#remove">remove(...indexes)</a> ⇒ <code><a href="#MiddlewareArrayFunction">MiddlewareArrayFunction</a></code></dt>
<dd><p>Remove from Array</p>
</dd>
<dt><a href="#sort">sort(sortField, dest)</a> ⇒ <code><a href="#MiddlewareArrayFunction">MiddlewareArrayFunction</a></code></dt>
<dd><p>Sort Array</p>
</dd>
<dt><a href="#swap">swap(a, b)</a> ⇒ <code><a href="#MiddlewareArrayFunction">MiddlewareArrayFunction</a></code></dt>
<dd><p>Swap array elements a to b, b to a</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#MiddlewareArrayFunction">MiddlewareArrayFunction</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#MiddlewareStringFunction">MiddlewareStringFunction</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#MiddlewareObjectFunction">MiddlewareObjectFunction</a> ⇒ <code>Object</code></dt>
<dd></dd>
</dl>

<a name="filter"></a>

## filter(condition) ⇒ [<code>MiddlewareArrayFunction</code>](#MiddlewareArrayFunction)
Filter Array

**Kind**: global function  
**See**: [w3 schools Array filter](https://www.w3schools.com/jsref/jsref_filter.asp)  

| Param | Type | Description |
| --- | --- | --- |
| condition | <code>function</code> | Filter condition |

**Example**  
```js
import filter from 'ap/filter';

filter((el) => el > 2)([1, 2, 3, 4, 5])
// => [3, 4, 5]
```
<a name="join"></a>

## join(separator) ⇒ [<code>MiddlewareStringFunction</code>](#MiddlewareStringFunction)
Join Array

**Kind**: global function  
**See**: [w3 schools Array join](https://www.w3schools.com/jsref/jsref_join.asp)  

| Param | Type | Description |
| --- | --- | --- |
| separator | <code>String</code> | [somebody] Join separator |

**Example**  
```js
import join from 'ap/join';

join('%')([1, 2, 3, 4, 5])
// => '1%2%3%4%5'
```
<a name="map"></a>

## map(callback) ⇒ [<code>MiddlewareArrayFunction</code>](#MiddlewareArrayFunction)
Map Array

**Kind**: global function  
**See**: [w3 schools Array map](https://www.w3schools.com/jsref/jsref_map.asp)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Map function |

**Example**  
```js
import map from 'ap/map';

map((el) => el + 1)([1, 2, 3, 4, 5]);
// => [2, 3, 4, 5, 6]
```
<a name="remove"></a>

## remove(...indexes) ⇒ [<code>MiddlewareArrayFunction</code>](#MiddlewareArrayFunction)
Remove from Array

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...indexes | <code>Number</code> | Remove indexes, separate by comma |

**Example**  
```js
import remove from 'ap/remove';

remove(1, 3, 5)([1, 2, 3, 4, 5]);
// => [2, 4]
```
<a name="sort"></a>

## sort(sortField, dest) ⇒ [<code>MiddlewareArrayFunction</code>](#MiddlewareArrayFunction)
Sort Array

**Kind**: global function  
**See**: [w3 schools Array filter](https://www.w3schools.com/jsref/jsref_filter.asp)  

| Param | Type | Description |
| --- | --- | --- |
| sortField | <code>String</code> \| <code>function</code> | sort field or condition function. |
| dest | <code>String</code> | [somebody] if sort field = 'asc' or 'desc' |

**Example**  
```js
import sort from 'ap/sort';

sort('id', 'asc')([{id:3}, {id:7}, {id:1}])
// => [{id:1}, {id:3}, {id:7}]

sort('id', 'desc')([{id:3}, {id:7}, {id:1}])
// => [{id:7}, {id:3}, {id:1}]

sort((a, b) => {
   if (a < b) return -1;
   if (a > b) return 1;
   return 0;
})([3, 7, 1])
// => [1, 3, 7]
```
<a name="swap"></a>

## swap(a, b) ⇒ [<code>MiddlewareArrayFunction</code>](#MiddlewareArrayFunction)
Swap array elements a to b, b to a

**Kind**: global function  
**See**: [StackOverflow solution](https://stackoverflow.com/a/25910841)  

| Param | Type |
| --- | --- |
| a | <code>Number</code> | 
| b | <code>Number</code> | 

**Example**  
```js
import swap from 'ap/swap';

swap(2,3)([1,2,3,4,5]);
// => [1,2,4,3,5]
```
<a name="MiddlewareArrayFunction"></a>

## MiddlewareArrayFunction ⇒ <code>Array</code>
**Kind**: global typedef  
**Returns**: <code>Array</code> - Transformed Array  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Original | <code>Array</code> | Array |

**Example**  
```js
// input data is Array
(config) => (data) => actionFn(config, data)
// return Array
```
<a name="MiddlewareStringFunction"></a>

## MiddlewareStringFunction ⇒ <code>String</code>
**Kind**: global typedef  
**Returns**: <code>String</code> - Transformed String  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Original | <code>Array</code> | Array |

**Example**  
```js
// input data is Object
(config) => (data) => actionFn(config, data)
// return String
// =>
```
<a name="MiddlewareObjectFunction"></a>

## MiddlewareObjectFunction ⇒ <code>Object</code>
**Kind**: global typedef  
**Returns**: <code>Object</code> - Transformed Object  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Original | <code>Object</code> | Object |

**Example**  
```js
// input data is Object
(config) => (data) => actionFn(config, data)
// return Object
```
