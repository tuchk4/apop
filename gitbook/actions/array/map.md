## Map
[[source]({{book.rep}}/src/actions/array/map.js)]

> Adapter native [`Array.map`](https://www.w3schools.com/jsref/jsref_map.asp) for apop
> ### Arguments
> 
> condition(Function): function(currentValue:element, index:Number, arr:Array)
> 
> ### Returns
> 
> (Function): Returns Function that return new mapped Array.


### Examples: 
{% codetabs name="Simple", type="js" -%} 
let ap = require('apop/ap');
ap.map(i => i + 1)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [2, 3, 4, 5, 6, "6,7,8,9,101" ]

{%- language name="Action", type="js" -%}
let map = require('apop/ap/map');
map(i => i + 1)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [2, 3, 4, 5, 6, "6,7,8,9,101" ]

{%- language name="Recursive", type="js" -%}
let ap = require('apop/ap');
ap.recursive(ap.map(i => i + 1))([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [2, 3, 4, 5, 6, [7, 8, 9, 10, 11]]

{%- endcodetabs %}


## Interactive Example:

{% runkit %}
let ap = require('apop/ap');
let formula = ap(
    ap.filter(currentValue => currentValue < 4), // => [3, 2, 1]
    ap.sort((a, b) => a - b), // => [1, 2, 3]
    ap.map(currentValue => ({id: currentValue})) // => [{id:1}, {id:2}, {id:3}]
);

formula([5, 4, 3, 2, 1])
// => [{id:1}, {id:2}, {id:3}]
{% endrunkit %}


