## Clear 
[[source]({{book.rep}}/actions/object/clear.js)]

> Clear Object from [], {}, "", null, undefined
> ### Arguments
>
> config(Object)(optional): { emptyArray: true, emptyObject: true, emptyString: true, nullValue: true, undefinedValue: true}
> 
> ### Returns
> 
> (Function): Returns Function that return new cleared Object.

### Examples: 
{% codetabs name="Simple", type="js" -%} 
let op = require('apop/op');

let data = {
    phrase: 'Universal 6th generation portal',
    date: new Date(Date.UTC(2001, 1, 1)),
    0: 0,
    1: 1,
    '-1': -1,
    emptyStr: '',
    null: null,
    undefined,
    nullArray: [null],
    undefinedArray: [undefined]
}
op.clear()(data)
// => {
//        phrase: 'Universal 6th generation portal',
//        date: new Date(Date.UTC(2001, 1, 1)),
//        0: 0,
//        1: 1,
//        '-1': -1
// }
{%- language name="Action", type="js" -%}
let clear = require('apop/op/clear');
let data = {
    phrase: 'Universal 6th generation portal',
    date: new Date(Date.UTC(2001, 1, 1)),
    0: 0,
    1: 1,
    '-1': -1,
    emptyStr: '',
    null: null,
    undefined,
    nullArray: [null],
    undefinedArray: [undefined]
}
clear()(data)
// => {
//        phrase: 'Universal 6th generation portal',
//        date: new Date(Date.UTC(2001, 1, 1)),
//        0: 0,
//        1: 1,
//        '-1': -1
// }

{%- language name="Recursive", type="js" -%}
let op = require('apop/op');
let data = {
    phrase: 'Universal 6th generation portal',
    date: new Date(Date.UTC(2001, 1, 1)),
    0: 0,
    1: 1,
    '-1': -1,
    emptyStr: '',
    null: null,
    undefined,
    nullArray: [null],
    undefinedArray: [undefined]
}
op.recursive(op.clear())(data)
// => {
//        phrase: 'Universal 6th generation portal',
//        date: new Date(Date.UTC(2001, 1, 1)),
//        0: 0,
//        1: 1,
//        '-1': -1
// }

{%- endcodetabs %}

## Interactive Example:

{% runkit %}
let op = require('apop/op');
let formula = op(
    op.clear(),
    op.toCamelCase()
);
let data = {
    first_phrase: 'Universal 6th generation portal',
    first_date: new Date(Date.UTC(2001, 1, 1)),
    0: 0,
    1: 1,
    '-1': -1,
    emptyStr: '',
    null: null,
    undefined,
    nullArray: [null],
    undefinedArray: [undefined],
    
}
formula(data)
// => {
//        0: 0,
//        1: 1,
//        '-1': -1,
//        firstPhrase: 'Universal 6th generation portal',
//        firstDate: new Date(Date.UTC(2001, 1, 1))
// }
{% endrunkit %}



