## To Camel Case 
[[source]({{book.rep}}/actions/object/toCamelCase.js)]

> Converts Object keys to camelCase.
> ### Arguments
> 
> None
> 
> ### Returns
> 
> (Function): Returns Function that return new camelCased Object.

### Examples: 
{% codetabs name="Simple", type="js" -%} 
let op = require('apop/op');
op.toCamelCase()({id: 1, firstName: 'Stephen', last_name: 'Nelson', deep: {firstName: 'Mike', last_name: 'Nelson'})
// => {id: 1, firstName: 'Stephen', lastName: 'Nelson', deep: {firstName: 'Mike', last_name: 'Nelson'}

{%- language name="Action", type="js" -%}
let toCamelCase = require('apop/op/toCamelCase');
toCamelCase()({id: 1, firstName: 'Stephen', last_name: 'Nelson', deep: {firstName: 'Mike', last_name: 'Nelson'})
// => {id: 1, firstName: 'Stephen', lastName: 'Nelson', deep: {firstName: 'Mike', last_name: 'Nelson'}

{%- language name="Recursive", type="js" -%}
let op = require('apop/op');
op.recursive(op.toCamelCase())({id: 1, firstName: 'Stephen', last_name: 'Nelson', deep: {firstName: 'Mike', last_name: 'Nelson'})
// => {id: 1, firstName: 'Stephen', lastName: 'Nelson', deep: {firstName: 'Mike', lastName: 'Nelson'}

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


