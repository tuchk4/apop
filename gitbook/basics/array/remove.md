## Remove
[[source](../../../src/actions/array/remove.js)]

> Remove by indexes from Array
> ### Arguments
> 
> indexes (...Numbers)
> 
> ### Returns
> 
> (Function): Returns Function that remove indexes from array


### Examples: 
{% codetabs name="AP", type="js" -%} 
import ap from 'apop/ap';
ap.remove(2, 3)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [1, 2, 5, [6, 7, 8, 9, 10]]

{%- language name="Action", type="js" -%}
import remove from 'apop/ap/remove'
remove(i => i + 1)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [1, 2, 5, [6, 7, 8, 9, 10]]

{%- language name="Recursive", type="js" -%}
import recursive from 'apop/ap/recursive'
recursive.remove(i => i + 1)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [1, 2, 5, [6, 7, 10]]

{%- language name="Recursive Action", type="js" -%}
import remove from 'apop/ap/recursive/remove'
remove(i => i + 1)([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => [1, 2, 5, [6, 7, 10]]
{%- endcodetabs %}


## Interactive Example:

{% runkit %}
let ap = require('apop/ap');
let formula = ap(
    ap.filter(currentValue => currentValue > 2), // => [5, 4, 3, 6, 7, 8, 9, 10]
    ap.sort((a, b) => a - b), // => [3, 4, 5, 6, 7, 8, 9, 10]
    ap.remove(2, 3, 4) // => [3, 4, 5, 9, 10]
);

formula([5, 4, 3, 2, 1, 6, 7, 8, 9, 10])
// => [3, 4, 5, 9, 10]
{% endrunkit %}


