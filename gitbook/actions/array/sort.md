## Sort 
[[source]({{book.rep}}/src/actions/array/sort.js)]

> Adapter native [`Array.sort`](https://www.w3schools.com/jsref/jsref_sort.asp) for apop
> ### Arguments
> 
> condition(Function): function(ElementA, ElementB)
> 
> ### Returns
> 
> (Function): Returns Function that return new sorted Array.

### Examples: 
{% codetabs name="Simple", type="js" -%} 
let ap = require('apop/ap');
ap.sort((a, b) => a - b)([5, 2, 1, 4, 3, [8, 7, 6, 10, 9]])
// => [1, 2, 3, 4, 5, [8, 7, 6, 10, 9]]
 

{%- language name="Action", type="js" -%}
let sort = require('apop/ap/sort');
sort((a, b) => a - b)([5, 2, 1, 4, 3, [8, 7, 6, 10, 9]])
// => [1, 2, 3, 4, 5, [8, 7, 6, 10, 9]]

{%- language name="Recursive", type="js" -%}
let ap = require('apop/ap');
ap.recursive(ap.sort((a, b) => a - b))([5, 2, 1, 4, 3, [8, 7, 6, 10, 9]])
// => [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]


{%- endcodetabs %}

## Interactive Example:

{% runkit %}
let ap = require('apop/ap');
let formula = ap(
    ap.swap(3,4), // => [5, 4, 3, 1, 2]
    ap.swap(1,2), // => [5, 3, 4, 1, 2]
    ap.sort((a, b) => a - b) // => [1, 2, 3, 4, 5]
);

formula([5, 4, 3, 2, 1])
// => [1, 2, 3, 4, 5]
{% endrunkit %}



