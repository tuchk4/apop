<a name="ArrayActions"></a>

## ArrayActions : <code>object</code>
**Kind**: global namespace  

* [ArrayActions](#ArrayActions) : <code>object</code>
    * [.filter(condition)](#ArrayActions.filter) ⇒
    * [.Sort(separator)](#ArrayActions.Sort) ⇒ <code>String</code>
    * [.map(callback)](#ArrayActions.map) ⇒
    * [.remove(indexes)](#ArrayActions.remove) ⇒
    * [.sort(sortField, dest)](#ArrayActions.sort)
    * [.swap(a, b)](#ArrayActions.swap) ⇒

<a name="ArrayActions.filter"></a>

### ArrayActions.filter(condition) ⇒
Test

**Kind**: static method of [<code>ArrayActions</code>](#ArrayActions)  
**Returns**: Array  
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
<a name="ArrayActions.Sort"></a>

### ArrayActions.Sort(separator) ⇒ <code>String</code>
Join Array

**Kind**: static method of [<code>ArrayActions</code>](#ArrayActions)  
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
<a name="ArrayActions.map"></a>

### ArrayActions.map(callback) ⇒
Map Array

**Kind**: static method of [<code>ArrayActions</code>](#ArrayActions)  
**Returns**: Array  
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
<a name="ArrayActions.remove"></a>

### ArrayActions.remove(indexes) ⇒
Test

**Kind**: static method of [<code>ArrayActions</code>](#ArrayActions)  
**Returns**: Array  

| Param | Type | Description |
| --- | --- | --- |
| indexes | <code>Number</code> | Remove indexes, separate by comma |

**Example**  
```js
import remove from 'ap/remove';

remove(1, 3, 5)([1, 2, 3, 4, 5]);
// => [2, 4]
```
<a name="ArrayActions.sort"></a>

### ArrayActions.sort(sortField, dest)
Sort Array

**Kind**: static method of [<code>ArrayActions</code>](#ArrayActions)  
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
<a name="ArrayActions.swap"></a>

### ArrayActions.swap(a, b) ⇒
Swap array elements a to b, b to a

**Kind**: static method of [<code>ArrayActions</code>](#ArrayActions)  
**Returns**: Array  
**See**: [Stackoverflow solution](https://stackoverflow.com/a/25910841)  

| Param |
| --- |
| a | 
| b | 

**Example**  
```js
import swap from 'ap/swap';

swap(2,3)([1,2,3,4,5]);
// => [1,2,4,3,5]
```
