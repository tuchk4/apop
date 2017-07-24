## Join
[[source](../../../src/actions/array/join.js)]

> Adapter native [`Array.join`](https://www.w3schools.com/jsref/jsref_join.asp) for apop
> ### Arguments
> 
> separator (String): ", "
> 
> ### Returns
> 
> (Function): Returns Function that return joined Array.

### Examples: 
{% codetabs name="AP", type="js" -%} 
import ap from 'apop/ap';
ap.join("#")([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => "1#2#3#4#5#6,7,8,9,10"

{%- language name="Action", type="js" -%}
import join from 'apop/ap/join'
join("#")([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => "1#2#3#4#5#6,7,8,9,10"

{%- language name="Recursive", type="js" -%}
import recursive from 'apop/ap/recursive'
recursive.join("#")([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => ["1#2#3#4#5", ["6#7#8#9#10"]]

{%- language name="Recursive Action", type="js" -%}
import join from 'apop/ap/recursive/join'
join("#")([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => ["1#2#3#4#5", ["6#7#8#9#10"]]

{%- endcodetabs %}


## Interactive Example:

{% runkit %}
let ap = require('apop/ap');
let formula = ap(
    ap.filter(currentValue => currentValue < 4), // => [3, 2, 1]
    ap.sort((a, b) => a - b), // => [1, 2, 3]
    ap.join('#')  // => "1#2#3"
);

formula([5, 4, 3, 2, 1])
{% endrunkit %}



