## sort 
[[source](../../../src/actions/array/sort.js)]

> Adapter native [`Array.sort`](https://www.w3schools.com/jsref/jsref_sort.asp) for apop
> ### Arguments
> 
> condition (Function): function(a, b)
> 
> ### Returns
> 
> (Function): Returns Function that return new sorted Array.

### Examples: 
{% codetabs name="AP", type="js" -%} 
let ap = require('apop/ap');
ap.sort((a, b) => a - b)([5, 2, 1, 4, 3, [8, 7, 6, 10, 9, [14, 12, 13, 11, 15]]])
// => [1, 2, 3, 4, 5, [8, 7, 6, 10, 9, [14, 12, 13, 11, 15]]]
 

{%- language name="Action", type="js" -%}
let sort = require('apop/ap/sort');
sort((a, b) => a - b)([5, 2, 1, 4, 3, [8, 7, 6, 10, 9, [14, 12, 13, 11, 15]]])
// => [1, 2, 3, 4, 5, [8, 7, 6, 10, 9, [14, 12, 13, 11, 15]]]

{%- language name="Recursive", type="js" -%}
let recursive = require('apop/ap/recursive');
recursive.sort((a, b) => a - b)([5, 2, 1, 4, 3, [8, 7, 6, 10, 9, [14, 12, 13, 11, 15]]])
// => [1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]]]

{%- language name="Recursive Action", type="js" -%}
let sort = require('apop/ap/recursive/sort');
sort((a, b) => a - b)([5, 2, 1, 4, 3, [8, 7, 6, 10, 9, [14, 12, 13, 11, 15]]])
// => [1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]]]

{%- endcodetabs %}

## Interactive Example:

{% runkit %}
let ap = require('apop/ap');
let formula = ap(
    ap.swap(3,4), //[5, 4, 3, 1, 2]
    ap.swap(1,2), ////[5, 3, 4, 1, 2]
    ap.sort((a, b) => a - b) // => [1, 2, 3, 4, 5]
);

formula([5, 4, 3, 2, 1])
// => [1, 2, 3, 4, 5]
{% endrunkit %}



