<a name="utils"></a>

## utils : <code>object</code>
**Kind**: global namespace  

* [utils](#utils) : <code>object</code>
    * [.exports.decode(origin)](#utils.exports.decode) ⇒ <code>Object</code>
    * [.exports.encode(origin)](#utils.exports.encode) ⇒ <code>Map</code>
    * [.parseArray(origin, actions)](#utils.parseArray) ⇒ <code>Array</code>
    * [.parseObject(origin, actions)](#utils.parseObject) ⇒ <code>Object</code>
    * [.reduce(origin, actions)](#utils.reduce) ⇒ <code>Object</code> &#124; <code>Array</code>

<a name="utils.exports.decode"></a>

### utils.exports.decode(origin) ⇒ <code>Object</code>
Convert Map to Object

**Kind**: static method of <code>[utils](#utils)</code>  
**Returns**: <code>Object</code> - Transformed array of object by actions  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>Map</code> | Origin array |

<a name="utils.exports.encode"></a>

### utils.exports.encode(origin) ⇒ <code>Map</code>
Convert Object to Map

**Kind**: static method of <code>[utils](#utils)</code>  
**Returns**: <code>Map</code> - Transformed array of object by actions  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>Object</code> | Origin array |

<a name="utils.parseArray"></a>

### utils.parseArray(origin, actions) ⇒ <code>Array</code>
Parse array elements

**Kind**: static method of <code>[utils](#utils)</code>  
**Returns**: <code>Array</code> - Transformed array of object by actions  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>Array</code> | Origin array |
| actions | <code>Array</code> | Array of transform actions |

<a name="utils.parseObject"></a>

### utils.parseObject(origin, actions) ⇒ <code>Object</code>
Parse object fields

**Kind**: static method of <code>[utils](#utils)</code>  
**Returns**: <code>Object</code> - Transformed object by actions  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>Object</code> | Origin object |
| actions | <code>Array</code> | Array of transform actions |

<a name="utils.reduce"></a>

### utils.reduce(origin, actions) ⇒ <code>Object</code> &#124; <code>Array</code>
Parse object or array

**Kind**: static method of <code>[utils](#utils)</code>  
**Returns**: <code>Object</code> &#124; <code>Array</code> - Transformed object or array by actions  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>Object</code> &#124; <code>Array</code> | Origin object or array |
| actions | <code>Array</code> | Array of transform actions |

