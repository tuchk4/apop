## Swap 
[[source]({{book.rep}}/src/actions/array/swap.js)]

> Swap array by indexes a and b: a to b, b to a
> ES6 Destructuring Assignment Array Matching [a, b] = [b, a];
> ### Arguments
> 
> condition(Function): function(a:Number, b:Number)
> 
> ### Returns
> 
> (Function): Returns Function that return new swapped Array.

### Examples: 
{% codetabs name="Simple", type="js" -%} 
let ap = require('apop/ap');
ap.swap(1, 2)( [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [1, 3, 2, 4, 5, [8, 7, 6, 10, 9]]
 

{%- language name="Action", type="js" -%}
let swap = require('apop/ap/swap');
swap(1, 2)( [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [1, 3, 2, 4, 5, [8, 7, 6, 10, 9]]

{%- language name="Recursive", type="js" -%}
let ap = require('apop/ap');
ap.recursive(ap.swap(1, 2))( [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [1, 3, 2, 4, 5, [6, 8, 7, 9, 10]]


{%- endcodetabs %}

## Interactive Example:

{% runkit %}
let ap = require('apop/ap');
let formula = ap(
    ap.swap(3,4), //[1, 2, 3, 5, 4])
    ap.swap(1,2), //[1, 3, 2, 4, 5])
);

formula([1, 2, 3, 4, 5])
// => [1, 3, 2, 4, 5]
{% endrunkit %}



