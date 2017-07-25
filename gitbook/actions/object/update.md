## Update 
[[source]({{book.rep}}/actions/object/update.js)]

> Update Object Keys
> ### Arguments
> 
> config(Object): {key: value}
>
> config(Object): {key: state => newValue}
> 
> ### Returns
> 
> (Function): Returns Function that return new updated Object.

### Examples: 
{% codetabs name="Simple", type="js" -%} 
let op = require('apop/op');
op.update({year: 1970})({firstName: 'Alex', child: {firstName: 'John', year: 2002}})
// => {year: 1970, firstName: 'Alex', child: {firstName: 'John', year: 2002}}

{%- language name="Action", type="js" -%}
let update = require('apop/op/update');
update({year: 1970})({firstName: 'Alex', child: {firstName: 'John', year: 2002}})
// => {year: 1970, firstName: 'Alex', child: {firstName: 'John', year: 2002}}

{%- language name="Recursive", type="js" -%}
let op = require('apop/op');
op.recursive(op.update({year: 1970}))({firstName: 'Alex', child: {firstName: 'John', year: 2002}})
// => {year: 1970, firstName: 'Alex', child: {firstName: 'John', year: 1970}}


{%- endcodetabs %}

## Interactive Example:

{% runkit %}
let op = require('apop/op');
let formula = op(
    op.toCamelCase(),
    op.update({
        year: localState => localState.birthDate.getFullYear(),
        month: localState => localState.birthDate.getMonth(),
        day: localState => localState.birthDate.getDate(),
    }),
);
let data = {
    first_name: "Alex",
    birth_date: new Date(Date.UTC(1970, 11, 3)),
}
formula(data)
// => {
//     birthDate: new Date(Date.UTC(1970, 11, 3)),
//     day: 3
//     firstName: "Alex",
//     month: 11,
//     year: 1970,

// }
{% endrunkit %}



