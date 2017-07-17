<a name="op"></a>

## op : <code>object</code>
**Kind**: global namespace  

* [op](#op) : <code>object</code>
    * [.recursive](#op.recursive) : <code>object</code>
        * [.clear(config)](#op.recursive.clear) ⇒ <code>function</code>
        * [.each(args)](#op.recursive.each)
        * [.rename(args)](#op.recursive.rename)
        * [.toCamelCase(args)](#op.recursive.toCamelCase)
        * [.toSnakeCase(args)](#op.recursive.toSnakeCase)
        * [.update(args)](#op.recursive.update)
    * [.clear(args)](#op.clear)
    * [.each(args)](#op.each)
    * [.rename(args)](#op.rename)
    * [.toCamelCase(args)](#op.toCamelCase)
    * [.toSnakeCase(args)](#op.toSnakeCase)
    * [.update(args)](#op.update)

<a name="op.recursive"></a>

### op.recursive : <code>object</code>
**Kind**: static namespace of [<code>op</code>](#op)  

* [.recursive](#op.recursive) : <code>object</code>
    * [.clear(config)](#op.recursive.clear) ⇒ <code>function</code>
    * [.each(args)](#op.recursive.each)
    * [.rename(args)](#op.recursive.rename)
    * [.toCamelCase(args)](#op.recursive.toCamelCase)
    * [.toSnakeCase(args)](#op.recursive.toSnakeCase)
    * [.update(args)](#op.recursive.update)

<a name="op.recursive.clear"></a>

#### recursive.clear(config) ⇒ <code>function</code>
Recursive clear

**Kind**: static method of [<code>recursive</code>](#op.recursive)  

| Param |
| --- |
| config | 

**Example**  
```js
// Variable to usages:

import recursiveClear from 'op/recursive/clear';
import recursive from 'op/recursive';
import clear from 'op/clear';
import op from 'op';

let data = {
 a: "",
 b : 1:
 c: null,
 d: undefined,
   deep: {
     g: null,
     h: true,
     moreDeep: {k: "", m:false}
   }
 };

recursiveClear()(data)
// => {b:1, deep: {h:true, moreDeep: {m: false}}}

recursive(recursive.clear())(data)
// => {b:1, deep: {h:true, moreDeep: {m: false}}}

recursive(op.clear())
// => {b:1, deep: {h:true, moreDeep: {m: false}}}

recursive(clear())(data)
// => {b:1, deep: {h:true, moreDeep: {m: false}}}
```
<a name="op.recursive.each"></a>

#### recursive.each(args)
Test

**Kind**: static method of [<code>recursive</code>](#op.recursive)  

| Param |
| --- |
| args | 

<a name="op.recursive.rename"></a>

#### recursive.rename(args)
Test

**Kind**: static method of [<code>recursive</code>](#op.recursive)  

| Param |
| --- |
| args | 

<a name="op.recursive.toCamelCase"></a>

#### recursive.toCamelCase(args)
Test

**Kind**: static method of [<code>recursive</code>](#op.recursive)  

| Param |
| --- |
| args | 

<a name="op.recursive.toSnakeCase"></a>

#### recursive.toSnakeCase(args)
Test

**Kind**: static method of [<code>recursive</code>](#op.recursive)  

| Param |
| --- |
| args | 

<a name="op.recursive.update"></a>

#### recursive.update(args)
Test

**Kind**: static method of [<code>recursive</code>](#op.recursive)  

| Param |
| --- |
| args | 

<a name="op.clear"></a>

### op.clear(args)
Test

**Kind**: static method of [<code>op</code>](#op)  

| Param |
| --- |
| args | 

**Example**  
```js
import op from 'op';
import clear from 'op/clear';
```
<a name="op.each"></a>

### op.each(args)
Test

**Kind**: static method of [<code>op</code>](#op)  

| Param |
| --- |
| args | 

<a name="op.rename"></a>

### op.rename(args)
Test

**Kind**: static method of [<code>op</code>](#op)  

| Param |
| --- |
| args | 

<a name="op.toCamelCase"></a>

### op.toCamelCase(args)
Test

**Kind**: static method of [<code>op</code>](#op)  

| Param |
| --- |
| args | 

<a name="op.toSnakeCase"></a>

### op.toSnakeCase(args)
Test

**Kind**: static method of [<code>op</code>](#op)  

| Param |
| --- |
| args | 

<a name="op.update"></a>

### op.update(args)
Test

**Kind**: static method of [<code>op</code>](#op)  

| Param |
| --- |
| args | 

