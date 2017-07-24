## Filter 
[[source](../../../src/actions/array/filter.js)]

> Adapter native [`Array.filter`](https://www.w3schools.com/jsref/jsref_filter.asp) for apop
> ### Arguments
> 
> condition (Function): function(currentValue, index, arr)
> 
> ### Returns
> 
> (Function): Returns Function that return new filtered Array.

### Examples: 
{% codetabs name="AP", type="js" -%} 
let ap = require('apop/ap');
ap.filter(i => i > 2)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [3, 4, 5]

{%- language name="Action", type="js" -%}
let filter = require('apop/ap/filter');
filter(i => i > 2)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [3, 4, 5]

{%- language name="Recursive", type="js" -%}
let recursive = require('apop/ap/recursive');
recursive.filter(i => i > 2 && i < 8)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [3, 4, 5, [7, 8]]

{%- language name="Recursive Action", type="js" -%}
let filter = require('apop/ap/recursive/filter');
filter(i => i > 2 && i < 8)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [3, 4, 5, [7, 8]]

{%- endcodetabs %}

## Interactive Example:

{% runkit %}
let ap = require('apop/ap');
let formula = ap(
    ap.filter(currentValue => currentValue < 4), // => [3, 2, 1]
    ap.sort((a, b) => a - b) // => [1, 2, 3]
);

formula([5, 4, 3, 2, 1])
// => [1, 2, 3]
{% endrunkit %}



