# Object Actions:
* [clear](basics/object/clear.md)
* [rename](basics/object/rename.md)
* [update](basics/object/update.md)
* [each](basics/object/each.md)
* [toCamelCase](basics/object/toCamelCase.md)
* [toSnakeCase](basics/object/toSnakeCase.md)

### Examples: 
{% codetabs name="Clear", type="js" -%} 
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
{%- language name="Rename", type="js" -%}
let op = require('apop/op');
op.rename({year: 'fullYear'})({year: 2001, deep: {year: 2002}})
// => {fullYear: 2001, deep: {fullYear: 2002}}]

{%- language name="Update", type="js" -%}
let op = require('apop/op');
op.update({year: 1970})({firstName: 'Alex', child: {firstName: 'John', year: 2002}})
// => {year: 1970, firstName: 'Alex', child: {firstName: 'John', year: 2002}}

{%- language name="Each", type="js" -%}
let op = require('apop/op');
op.each((key, value) => {
     if ( Number.isInteger(value)){
        return{key: key + '_', value: value * 2}
      } else {
        return {key, value};
      }
})({a:1, b: 2, c: 3, d: 4, deep: {e: 5, f:6});
// => {a_: 2, b_: 4, c_: 6, d_: 8, deep: {e: 5, f:6}}

{%- language name="toCamelCase", type="js" -%}
let op = require('apop/op');
op.recursive.toCamelCase()({id: 1, firstName: 'Stephen', last_name: 'Nelson', deep: {firstName: 'Mike', last_name: 'Nelson'})
// => {id: 1, firstName: 'Stephen', lastName: 'Nelson', deep: {firstName: 'Mike', lastName: 'Nelson'}

{%- language name="toSnakeCase", type="js" -%}
let op = require('apop/op');
op.recursive.toSnakeCase()({id: 1, firstName: 'Stephen', last_name: 'Nelson', deep: {firstName: 'Mike', last_name: 'Nelson'})
// => {id: 1, first_name: 'Stephen', last_name: 'Nelson', deep: {first_name: 'Mike', last_name: 'Nelson'}

{%- endcodetabs %}


## Interactive Example:

{% runkit %}
let ap = require('apop/ap');

{% endrunkit %}