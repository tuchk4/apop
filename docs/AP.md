<a name="ap"></a>

## ap : <code>object</code>
**Kind**: global namespace  
**Example**  
```js
// Init for each example:

import apRecursive from 'apop/op/apRecursive';
import ap from 'ap';

let deepData = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]];
let simpleData = [1, 2, 3, 4 ,5];

let filterCondition = (num) => {
   return num > 5 && n < 12;
 };
```

* [ap](#ap) : <code>object</code>
    * [.recursive](#ap.recursive) : <code>object</code>
        * [.filter(condition)](#ap.recursive.filter) ⇒ <code>function</code>
        * [.join(args)](#ap.recursive.join)
        * [.map(callback)](#ap.recursive.map)
        * [.remove(indexes)](#ap.recursive.remove)
        * [.sort(args)](#ap.recursive.sort)
        * [.swap(args)](#ap.recursive.swap)
    * [.filter(args)](#ap.filter)
    * [.join(args)](#ap.join)
    * [.map(args)](#ap.map)
    * [.remove(args)](#ap.remove)
    * [.sort(args)](#ap.sort)
    * [.swap(args)](#ap.swap)

<a name="ap.recursive"></a>

### ap.recursive : <code>object</code>
**Kind**: static namespace of [<code>ap</code>](#ap)  

* [.recursive](#ap.recursive) : <code>object</code>
    * [.filter(condition)](#ap.recursive.filter) ⇒ <code>function</code>
    * [.join(args)](#ap.recursive.join)
    * [.map(callback)](#ap.recursive.map)
    * [.remove(indexes)](#ap.recursive.remove)
    * [.sort(args)](#ap.recursive.sort)
    * [.swap(args)](#ap.recursive.swap)

<a name="ap.recursive.filter"></a>

#### recursive.filter(condition) ⇒ <code>function</code>
Recursive filter arrays

**Kind**: static method of [<code>recursive</code>](#ap.recursive)  
**See**: [Filter action](ARRAY_ACTIONS.md#filter)  

| Param | Type | Description |
| --- | --- | --- |
| condition | <code>function</code> | Filter condition |

**Example**  
```js
import filter from 'apop/ap/recursive/filter';
filter(filterCondition)(deepData);
// => {b:1, deep: {h:true, moreDeep: {m: false}}}
```
**Example**  
```js
import clear from 'apop/op/clear';
apRecursive(filter(filterCondition))(deepData);
// => {b:1, deep: {h:true, moreDeep: {m: false}}}

* @example
ap.recursive(op.filter(filterCondition))(deepData);
// => {b:1, deep: {h:true, moreDeep: {m: false}}}

 
```
**Example**  
```js
import clear from 'apop/op/clear';
 ap.recursive(filter(filterCondition))(deepData);
// => {b:1, deep: {h:true, moreDeep: {m: false}}}
```
<a name="ap.recursive.join"></a>

#### recursive.join(args)
Test

**Kind**: static method of [<code>recursive</code>](#ap.recursive)  

| Param |
| --- |
| args | 

<a name="ap.recursive.map"></a>

#### recursive.map(callback)
Test

**Kind**: static method of [<code>recursive</code>](#ap.recursive)  

| Param |
| --- |
| callback | 

<a name="ap.recursive.remove"></a>

#### recursive.remove(indexes)
Test

**Kind**: static method of [<code>recursive</code>](#ap.recursive)  

| Param |
| --- |
| indexes | 

<a name="ap.recursive.sort"></a>

#### recursive.sort(args)
Test

**Kind**: static method of [<code>recursive</code>](#ap.recursive)  

| Param |
| --- |
| args | 

<a name="ap.recursive.swap"></a>

#### recursive.swap(args)
Test

**Kind**: static method of [<code>recursive</code>](#ap.recursive)  

| Param |
| --- |
| args | 

<a name="ap.filter"></a>

### ap.filter(args)
Test

**Kind**: static method of [<code>ap</code>](#ap)  

| Param |
| --- |
| args | 

<a name="ap.join"></a>

### ap.join(args)
Test

**Kind**: static method of [<code>ap</code>](#ap)  

| Param |
| --- |
| args | 

<a name="ap.map"></a>

### ap.map(args)
Test

**Kind**: static method of [<code>ap</code>](#ap)  

| Param |
| --- |
| args | 

<a name="ap.remove"></a>

### ap.remove(args)
Test

**Kind**: static method of [<code>ap</code>](#ap)  

| Param |
| --- |
| args | 

<a name="ap.sort"></a>

### ap.sort(args)
Test

**Kind**: static method of [<code>ap</code>](#ap)  

| Param |
| --- |
| args | 

<a name="ap.swap"></a>

### ap.swap(args)
Test

**Kind**: static method of [<code>ap</code>](#ap)  

| Param |
| --- |
| args | 

