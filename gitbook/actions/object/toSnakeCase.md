## To Snake Case 
[[source]({{book.rep}}/actions/object/toSnakeCase.js)]

> Converts Object keys to snake_case.
> ### Arguments
> 
> None
> 
> ### Returns
> 
> (Function): Returns Function that return new snake_cased Object.

### Examples: 
{% codetabs name="Simple", type="js" -%} 
let op = require('apop/op');
op.toSnakeCase()({id: 1, firstName: 'Stephen', last_name: 'Nelson', deep: {firstName: 'Mike', last_name: 'Nelson'})
// => {id: 1, first_name: 'Stephen', last_name: 'Nelson', deep: {firstName: 'Mike', last_name: 'Nelson'}

{%- language name="Action", type="js" -%}
let toSnakeCase = require('apop/op/toSnakeCase');
toSnakeCase()({id: 1, firstName: 'Stephen', last_name: 'Nelson', deep: {firstName: 'Mike', last_name: 'Nelson'})
// => {id: 1, first_name: 'Stephen', last_name: 'Nelson', deep: {firstName: 'Mike', last_name: 'Nelson'}

{%- language name="Recursive", type="js" -%}
let op = require('apop/op');
op.recursive(op.toSnakeCase())({id: 1, firstName: 'Stephen', last_name: 'Nelson', deep: {firstName: 'Mike', last_name: 'Nelson'})
// => {id: 1, first_name: 'Stephen', last_name: 'Nelson', deep: {first_name: 'Mike', last_name: 'Nelson'}

{%- endcodetabs %}

## Interactive Example:

{% runkit %}
let op = require('apop/op');
let formula = op(
    op.rename({
        year: localState => localState.year.toString().length === 4 ? 'fullYear' : 'shortYear',
    }),
    op.toSnakeCase()
);
let data = {
    firstName: "Alex",
    lastName: "Bro",
    year: 1970
}
formula(data)
// => {
//     first_name: "Alex",
//     full_year: 1970,
//     last_name: "Bro"
// }
{% endrunkit %}


