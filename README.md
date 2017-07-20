# apop
For transformation data. Replaces recursive nested constructions to flow functions

[![build status](https://img.shields.io/travis/tuchk4/op/master.svg?style=flat-square)](https://travis-ci.org/tuchk4/op)
[![op version](https://img.shields.io/npm/v/op.svg?style=flat-square)](https://www.npmjs.com/package/op)

## The main idea
* `Array Parse`(**ap**) - apply flow actions to array.
* `Object Parse`(**op**) - apply flow actions to object.

## Installation
```
npm install --save apop
```
## Imports
```
import ap from 'apop/ap';
import op from 'apop/op';
```

## Object Parse Actions:
* [Clear object](docs/OBJECT_ACTION.md#clear)
    ```js
        op.clear()({a:1, b: null, c: [], d: undefined, g: ""})
        // => {a: 1}
    ```

* [Rename keys in object by config](docs/OBJECT_ACTIONS.md#rename)
    ```js
        op.rename({name: "first_name"})({first_name:"foo"})
        // => {name: "foo"}
    ```

* [Update keys in object by config](docs/OBJECT_ACTIONS.md#update)
    ```js
        op.update({
           first_name: state => state.first_name + ' bar'
        })({first_name:"foo"})
        // => {first_name: "foo bar"
    ```

* [Rename all keys camelCase](docs/OBJECT_ACTIONS.md#toCamelCase)
    ```js
        op.toCamelCase()({first_name:"foo"})
      // => {firstName: "foo"}
    ```

* [Rename all keys snake_case](docs/OBJECT_ACTIONS.md#toSnakeCase)
    ```js
        op.toSnakeCase()({firstName:"foo"})
        // => {first_name: "foo"}
    ```

* [Parse entries](docs/OBJECT_ACTIONS.md#each)
    ```js
        op.each((key, value) => {
          return {key: `_${key}`, value: `#${value}`}
        })({first_name:"foo"})
      // => {_first_name: "#foo bar"}
    ```

## Array Parse Actions:
* [Filter Array](docs/ARRAY_ACTIONS.md#filter) 
    ```js
        ap.filter(i => i > 2)([1, 2, 3, 4, 5])
        // => [3, 4, 5]
    ```
* [Join Array](docs/ARRAY_ACTIONS.md#join) 
    ```js
        ap.join('#')([1, 2, 3, 4, 5])
        // => "3#4#5"
    ```

* [Map Array](docs/ARRAY_ACTIONS.md#map)
    ```js
        ap.map((i => i + 1))([1, 2, 3, 4, 5])
        // => [2, 3, 4, 5, 6]
    ```

* [Remove from Array](docs/ARRAY_ACTIONS.md#remove)
    ```js
        ap.remove(2, 3)([1, 2, 3, 4, 5])
        // => [1, 2, 5]
    ```

* [Sort Array](docs/ARRAY_ACTIONS.md#sort) 
    ```js
        ap.sort((a, b) => a - b)([5, 1, 3, 2, 4])
        // => [1, 2, 3, 4, 5]
    ```

* [Swap array](docs/ARRAY_ACTIONS.md#swap) 
    ```js
        ap.swap(2,3)([1, 2, 3, 4, 5])
        // => [1, 2, 4, 3, 5]
    ```

## Don’t repeat yourself
You can create one transform function for repeat usage. For example for receive data from API.


Example:
```js
import op from 'apop/op';

let formula = op(
    op.toCamelCase(),
    op.update({
       'createdDate': state => new Date(state.createdDate),
       'fullName': state => `${state.firstName} ${state.lastName}`
    }),
);

formula({first_name: "petya", last_name: "ivanov", created_date: '2017-07-20T13:53:24.225Z'});
//{firstName: "petya", lastName: "ivanov", createdDate: new Date('2017-07-20T13:53:24.225Z', fullName: "petya ivanov")}

formula({first_name: "katya", last_name: "petrova", created_date: '2017-07-21T14:51:23.215Z'});
//{firstName: "katya", lastName: "petrova", createdDate: new Date('2017-07-21T14:51:23.215Z', fullName: "katya petrova")}

formula({first_name: "kolya", last_name: "sidorov", created_date: '2017-07-22T11:57:14.725Z'});
//{firstName: "kolya", lastName: "sidorov", createdDate: new Date('2017-07-22T11:57:14.725Z', fullName: "kolya sidorov")}
```


## Parse Array of Objects with `ap` and `op`
* `ap` is function for parse array.
* `op` is function for parse object.

Example:
```js
import op from 'apop/op';
import ap from 'apop/ap';
import moment from 'moment';

const formula = ap(
  op.toCamelCase(),
  op.rename({
    id: 'value',
    createdDate: state => {
      if (state.createdDate){
        return moment(new Date(state.createdDate)).format('yyyy-mm-dd');
      } else {
        return 'Unknown';
      }
    }
  })
);

formula([
  {value: 1, name: "foo", created_date: '2017-07-20T13:53:24.225Z'},
  {value: 2, name: "bar", created_date: null},
  {value: 3, name: "baz", created_date: '2017-07-22T13:53:24.225Z'}
])
// => [
//    {id: 1, name: "foo", createdDate: '2017-07-20'},
//    {id: 2, name: "bar", createdDate: 'Unknown'},
//    {id: 3, name: "baz", createdDate: '2017-07-22'}
//  ]
```
  
## Parse Deep Objects
For Parse Deep Objects use `op/recursive` for deep parse objects and `ap/recursive` for deep parse arrays.

Example:
```js
import op from 'op';

op.recursive(
    op.toCamelCase(),
    op.rename({
      'id': 'value'
    })
)({
  value: 1,
  deep_data: {
    value: 2,
    more_deep_data: {
      value: 3
    }
  }
})
// => {
//        id: 1,
//        deepData: {
//         id: 2,
//          moreDeepData: {
//            id: 3
//          }
//        }
//      }
```
## Parse Deep Arrays
Example:
```js
import op from 'op';

op.recursive(
    op.sort(),
    op.remove(2),
    op.join('#'),
)([5, 2, 1, 4, 3, [8, 7, 6, 10, 9, [14, 12, 13, 11, 15]]])
// => ["1#2#4#5", ["6#7#9#10", ["11#12#14#15"]]]
```

### [Contributing](docs/CONTRIBUTING.md)
Project is open for new ideas and features:
- New actions
- New experiments
- Support Map, Set
- Support async usage
- Support Immutable.js