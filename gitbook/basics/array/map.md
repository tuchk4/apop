## Map
[[source](../../../src/actions/array/map.js)]

> Adapter native [`Array.map`](https://www.w3schools.com/jsref/jsref_map.asp) for apop
> ### Arguments
> 
> condition (Function): function(currentValue, index, arr)
> 
> ### Returns
> 
> (Function): Returns Function that return new mapped Array.


### Examples: 
{% codetabs name="AP", type="js" -%} 
import ap from 'apop/ap';
ap.map(i => i + 1)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]]])
// => [2, 3, 4, 5, 6, "6,7,8,9,10,11,12,13,14,151" ]

{%- language name="Action", type="js" -%}
import map from 'apop/ap/map'
map(i => i + 1)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]]])
// => [2, 3, 4, 5, 6, "6,7,8,9,10,11,12,13,14,151" ]

{%- language name="Recursive", type="js" -%}
import recursive from 'apop/ap/recursive'
recursive.map(i => i + 1)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]]])
// => [2, 3, 4, 5, 6, [7, 8, 9, 10, 11, [12, 13, 14, 15, 16]]]

{%- language name="Recursive Action", type="js" -%}
import map from 'apop/ap/recursive/map'
map(i => i + 1)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10, [11, 12, 13, 14, 15]]])
// => [2, 3, 4, 5, 6, [7, 8, 9, 10, 11, [12, 13, 14, 15, 16]]]
{%- endcodetabs %}


## Interactive Example:

{% runkit %}
let ap = require('apop/ap');
let formula = ap(
    ap.filter(currentValue => currentValue < 4), // => [3, 2, 1]
    ap.sort((a, b) => a - b), // => [1, 2, 3]
    ap.map(currentValue => {id: currentValue}) // => [{id:1}, {id:2}, {id:3}]
);

formula([5, 4, 3, 2, 1])
// => [{id:1}, {id:2}, {id:3}]
{% endrunkit %}


