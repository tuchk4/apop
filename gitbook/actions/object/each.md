## Each 
[[source]({{book.rep}}/actions/object/each.js)]

> Parse object. Return (new key and new value) for (each key and each value).
> ### Arguments
> 
> config(Object): {oldKey: newKey}
>
> config(Object): {oldKey: state => 'newKey'}
> 
> ### Returns
> 
> (Function): Returns Function that return new each parsed Object.

### Examples: 
{% codetabs name="Simple", type="js" -%} 
let op = require('apop/op');
op.each((key, value) => {
     if ( Number.isInteger(value)){
        return{key: key + '_', value: value * 2}
      } else {
        return {key, value};
      }
})({a:1, b: 2, c: 3, d: 4, deep: {e: 5, f:6});
// => {a_: 2, b_: 4, c_: 6, d_: 8, deep: {e: 5, f:6}}

{%- language name="Action", type="js" -%}
let each = require('apop/op/each');
each((key, value) => {
     if ( Number.isInteger(value)){
        return{key: key + '_', value: value * 2}
      } else {
        return {key, value};
      }
})({a:1, b: 2, c: 3, d: 4, deep: {e: 5, f:6}});
// => {a_: 2, b_: 4, c_: 6, d_: 8, deep: {e: 5, f:6}}

{%- language name="Recursive", type="js" -%}
let op = require('apop/op');
op.recursive(op.each((key, value) => {
     if ( Number.isInteger(value)){
        return{key: key + '_', value: value * 2}
      } else {
        return {key, value};
      }
}))({a:1, b: 2, c: 3, d: 4, deep: {e: 5, f:6}});
// => {a_: 2, b_: 4, c_: 6, d_: 8, deep: {e_: 10, f_: 12}}

{%- endcodetabs %}

## Interactive Example:

{% runkit %}
let ap = require('apop/ap');
ap.recursive(ap.each((key, value) => {
   if ( Number.isInteger(value)){
     return{key: key + '_', value: value * 2}
   } else {
     return {key, value};
   }
   
}))({a:1, b: 2, c: 3, d: 4, deep: {e: 5, f:6}});
// => {a_: 2, b_: 4, c_: 6, d_: 8, deep: {e_: 10, f_: 12}}

{% endrunkit %}



