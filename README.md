# apop

For transformation data. Replaces recursive nested constructions to flow functions

[![](https://camo.githubusercontent.com/157b586ed353291083e5d91d2b37ef3735a7f9db/68747470733a2f2f696d672e736869656c64732e696f2f7472617669732f747563686b342f6f702f6d61737465722e7376673f7374796c653d666c61742d737175617265 "build status")](https://travis-ci.org/tuchk4/op)[![](https://camo.githubusercontent.com/4d911e4516874c7dc859899a766e9bdcb7dd9a9a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6f702e7376673f7374796c653d666c61742d737175617265 "op version")](https://www.npmjs.com/package/op)

## The main idea

* `Array Parse`\(**ap**\) - apply flow actions to array.
* `Object Parse`\(**op**\) - apply flow actions to object.

## Installation

```
npm install --save apop
```

## Imports

```js
import ap from 'apop/ap';
import op from 'apop/op';
```

## Object Parse Actions:

* [Clear object](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/OBJECT_ACTION.md#clear)

  ```js
  op.clear()({a:1, b:null, c: [], d: undefined, g:""})    
  // => {a: 1}
  ```

* [Rename keys in object by config](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/OBJECT_ACTIONS.md#rename)

  ```
  op
  .
  rename
  ({name
  :
  "
  first_name
  "
  })({first_name
  :
  "
  foo
  "
  })

  //
   =
  >
   {name: "foo"}
  ```

* [Update keys in object by config](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/OBJECT_ACTIONS.md#update)

  ```
  op
  .
  update
  ({

  first_name
  :
  state
  =
  >
  state
  .
  first_name
  +
  '
   bar
  '

      })({first_name
  :
  "
  foo
  "
  })

  //
   =
  >
   {first_name: "foo bar"
  ```

* [Rename all keys camelCase](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/OBJECT_ACTIONS.md#toCamelCase)

  ```
  op
  .
  toCamelCase
  ()({first_name
  :
  "
  foo
  "
  })

  //
   =
  >
   {firstName: "foo"}
  ```

* [Rename all keys snake\_case](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/OBJECT_ACTIONS.md#toSnakeCase)

  ```
  op
  .
  toSnakeCase
  ()({firstName
  :
  "
  foo
  "
  })

  //
   =
  >
   {first_name: "foo"}
  ```

* [Parse entries](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/OBJECT_ACTIONS.md#each)

      op
      .
      each
      ((
      key
      , 
      value
      ) 
      =
      >
       {

      return
       {key
      :
      `
      _
      ${
      key
      }
      `
      , value
      :
      `
      #
      ${
      value
      }
      `
      }
          })({first_name
      :
      "
      foo
      "
      })

      //
       =
      >
       {_first_name: "#foo bar"}

## Array Parse Actions:

* [Filter Array](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/ARRAY_ACTIONS.md#filter)

  ```
  ap
  .
  filter
  (
  i
  =
  >
   i 
  >
  2
  )([
  1
  , 
  2
  , 
  3
  , 
  4
  , 
  5
  ])

  //
   =
  >
   [3, 4, 5]
  ```

* [Join Array](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/ARRAY_ACTIONS.md#join)

  ```
  ap
  .
  join
  (
  '
  #
  '
  )([
  1
  , 
  2
  , 
  3
  , 
  4
  , 
  5
  ])

  //
   =
  >
   "3#4#5"
  ```

* [Map Array](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/ARRAY_ACTIONS.md#map)

  ```
  ap
  .
  map
  ((
  i
  =
  >
   i 
  +
  1
  ))([
  1
  , 
  2
  , 
  3
  , 
  4
  , 
  5
  ])

  //
   =
  >
   [2, 3, 4, 5, 6]
  ```

* [Remove from Array](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/ARRAY_ACTIONS.md#remove)

  ```
  ap
  .
  remove
  (
  2
  , 
  3
  )([
  1
  , 
  2
  , 
  3
  , 
  4
  , 
  5
  ])

  //
   =
  >
   [1, 2, 5]
  ```

* [Sort Array](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/ARRAY_ACTIONS.md#sort)

  ```
  ap
  .
  sort
  ((
  a
  , 
  b
  ) 
  =
  >
   a 
  -
   b)([
  5
  , 
  1
  , 
  3
  , 
  2
  , 
  4
  ])

  //
   =
  >
   [1, 2, 3, 4, 5]
  ```

* [Swap array](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/ARRAY_ACTIONS.md#swap)

  ```
  ap
  .
  swap
  (
  2
  ,
  3
  )([
  1
  , 
  2
  , 
  3
  , 
  4
  , 
  5
  ])

  //
   =
  >
   [1, 2, 4, 3, 5]
  ```

## Parse Array of Objects

* `ap`
  is function for parse array.
* `op`
  is function for parse object.

Example:

```
import
op
from
'
apop/op
'
;

import
ap
from
'
apop/ap
'
;

import
moment
from
'
moment
'
;


const
formula
=
ap
(

op
.
toCamelCase
(),

op
.
rename
({
    id
:
'
value
'
,

createdDate
:
state
=
>
 {

if
 (
state
.
createdDate
){

return
moment
(
new
Date
(
state
.
createdDate
)).
format
(
'
yyyy-mm-dd
'
);
      } 
else
 {

return
'
Unknown
'
;
      }
    }
  })
);


formula
([
  {value
:
1
, name
:
"
foo
"
, created_date
:
'
2017-07-20T13:53:24.225Z
'
},
  {value
:
2
, name
:
"
bar
"
, created_date
:
null
},
  {value
:
3
, name
:
"
baz
"
, created_date
:
'
2017-07-22T13:53:24.225Z
'
}
])

//
 =
>
 [
//
    {id: 1, name: "foo", createdDate: '2017-07-20'},
//
    {id: 2, name: "bar", createdDate: 'Unknown'},
//
    {id: 3, name: "baz", createdDate: '2017-07-22'}
//
  ]
```

## Parse Deep Array and Objects

For apply action to Deep Objects use`op/recursive`. Example:

```
import
op
from
'
op
'
;


op
.
recursive
(

op
.
toCamelCase
(),

op
.
rename
({

'
id
'
:
'
value
'

    })
)({
  value
:
1
,
  deep_data
:
 {
    value
:
2
,
    more_deep_data
:
 {
      value
:
3

    }
  }
})

//
 =
>
 {
//
        id: 1,
//
        deepData: {
//
         id: 2,
//
          moreDeepData: {
//
            id: 3
//
          }
//
        }
//
      }
```

For apply actions to Deep arrays use`ap/recursive`. Example:

```
import
op
from
'
op
'
;


op
.
recursive
(

op
.
sort
(),

op
.
remove
(
2
),

op
.
join
(
'
#
'
),
)([
5
, 
2
, 
1
, 
4
, 
3
, [
8
, 
7
, 
6
, 
10
, 
9
, [
14
, 
12
, 
13
, 
11
, 
15
]]])

//
 =
>
 ["1#2#4#5", ["6#7#9#10", ["11#12#14#15"]]]
```

### [Contributing](https://github.com/tuchk4/rmk/blob/m.bugai/v2.4.0/docs/CONTRIBUTING.md)

Project is open for new ideas and features:

* New actions
* New experiments
* Support Map, Set
* Support async usage
* Support Immutable.js



