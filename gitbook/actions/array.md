# Array Actions:
* [filter](basics/array/filter.md)
* [join](basics/array/join.md)
* [map](basics/array/map.md)
* [remove](basics/array/remove.md)
* [sort](basics/array/sort.md)
* [swap](basics/array/swap.md)

### Examples: 
{% codetabs name="Filter", type="js" -%} 
let ap = require('apop/ap');
ap.recursive.filter(i => i > 2)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [3, 4, 5, [6, 7, 8, 9, 10]]

{%- language name="Join", type="js" -%}
let ap = require('apop/ap');
ap.recursive.join("#")([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => ["1#2#3#4#5", ["6#7#8#9#10"]]

{%- language name="Map", type="js" -%}
let ap = require('apop/ap');
ap.recursive.map(i => i + 1)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [2, 3, 4, 5, 6, [7, 8, 9, 10, 10, 11] ]

{%- language name="Remove", type="js" -%}
let ap = require('apop/ap');
ap.recursive.remove(2, 3)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [1, 2, 5, [6, 7, 10]]

{%- language name="Sort", type="js" -%}
let ap = require('apop/ap');
ap.recursive.sort((a, b) => a - b)([5, 2, 1, 4, 3, [8, 7, 6, 10, 9]])
// => [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]

{%- language name="Swap", type="js" -%}
let ap = require('apop/ap');
ap.recursive.swap(1, 2)( [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [1, 3, 2, 4, 5, [6, 8, 7, 9, 10]]

{%- endcodetabs %}

## Interactive Example:

{% runkit %}
let ap = require('apop/ap');

{% endrunkit %}
