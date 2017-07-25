## Rename 
[[source]({{book.rep}}/actions/object/rename.js)]

> Rename Object Keys
> ### Arguments
> 
> config(Object): {oldKey: newKey}
>
> config(Object): {oldKey: state => 'newKey'}
> 
> ### Returns
> 
> (Function): Returns Function that return new renamed Object.

### Examples: 
{% codetabs name="Simple", type="js" -%} 
let op = require('apop/op');
op.rename({year: 'fullYear'})({year: 2001, deep: {year: 2002}})
// => {fullYear: 2001, deep: {year: 2002}}

{%- language name="Action", type="js" -%}
let rename = require('apop/op/rename');
rename({year: 'fullYear'})({year: 2001, deep: {year: 2002}})
// => {fullYear: 2001, deep: {year: 2002}}

{%- language name="Recursive", type="js" -%}
let op = require('apop/op');
op.recursive(op.rename({year: 'fullYear'}))({year: 2001, deep: {year: 2002}})
// => {fullYear: 2001, deep: {fullYear: 2002}}


{%- endcodetabs %}

## Interactive Example:

{% runkit %}
let op = require('apop/op');
let formula = op(
    op.rename({
        year: localState => localState.year.toString().length === 4 ? 'fullYear' : 'shortYear',
    }),
    op.toCamelCase()
);
let data = {
    first_name: "Alex",
    last_name: "Bro",
    year: 1970
}
formula(data)
// => {
//     firstName: "Alex",
//     fullYear: 1970,
//     lastName: "Bro"
// }
{% endrunkit %}



