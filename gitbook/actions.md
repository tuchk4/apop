### Array Actions Examples:
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


### Object Actions Examples: 
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