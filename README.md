# [rmk](http://tuchk4.github.io/rmk/)

[![build status](https://img.shields.io/travis/tuchk4/rmk/master.svg?style=flat-square)](https://travis-ci.org/tuchk4/rmk)
[![rmk version](https://img.shields.io/npm/v/rmk.svg?style=flat-square)](https://www.npmjs.com/package/rmk)
## rmk
The main idea of rmk is flow transformation data. 

## Installation
```
npm install --save rmk
```


## Actions
* [clear](docs/ACTIONS.md#rmk.clear) Clear object fields from: null, undefined, empty array, empty string, empty object
* [rename](docs/ACTIONS.md#rmk.rename) Rename keys in object by config.
* [update](docs/ACTIONS.md#rmk.update) Update keys in object by config.
* [toCamelCase](docs/ACTIONS.md#rmk.toCamelCase) Rename all keys camelCase.
* [toSnakeCase](docs/ACTIONS.md#rmk.toSnakeCase) Rename all keys snake_case.

Actions: clear, toSnakeCase, toCamelCase use without config

## Custom actions 
You can use custom actions:
```js
let data = {num: 1};
let formula = rmk(
    (state) => {
        state.num++;
        return state;
    },
    (state) => {
        state.num *= 3;
        return state;
    }
);
formula(data);
// => {num: 6}
```

## Single flow
Single parse  object or array of objects:
```js
rmk(    
    rmk.update(config),
    rmk(config),
    rmk.clear(),
    rmk.toSnakeCase(),
    rmk.toCamelCase()
)(data)
```
  
## Shortcuts
Use single shortcuts: 
```js
  rmk.update(config)(params);
  rmk.rename(config)(params);
  rmk.clear()(params);
  rmk.toSnakeCase()(params);
  rmk.toCamelCase()(params); 
``` 
  
## Recursive flow
Recursive parse objects:
```js 
rmk.recursive(
    rmk.update(config),
    rmk(config),
    rmk.clear(),
    rmk.toSnakeCase(),
    rmk.toCamelCase()
)(data)
```

## Recursive shortcuts
Use recursive shortcuts: 
```js
  rmk.recursive.update(config)(params);
  rmk.recursive.rename(config)(params);
  rmk.recursive.clear()(params);
  rmk.recursive.toSnakeCase()(params);
  rmk.recursive.toCamelCase()(params);
``` 

## The gist
Convert array of objects to snake_case and remove fields with undefined and null.

```js
import rmk from 'rmk';
let params = [{ 
    id:1, 
    firstName:'Billy',
    year: undefined,
    deepKey: {
      id:2,
      firstName: 'John',
      deepYear: null
    }
}];
  
// Use single flow.
rmk(rmk.toSnakeCase(), rmk.clear())(params);
// => {id:1, first_name:'Billy', deep_key: { id:2, firstName: 'John', deepYear: null }
  
// Use single shortcut.
let singleStep1 = rmk.toSnakeCase()(params);
let singleStep2 = rmk.clear()(singleStep1);
//  => {id:1, first_name:'Billy', deep_key: { id:2, firstName: 'John', deepYear: null }
  
// Use recursive flow
rmk.recursive(rmk.toSnakeCase(), rmk.clear())(params);
//  => {id:1, first_name:'Billy', deep_key: { id:2, first_name: 'John' }
  
// Use recursive shortcut.
let recusriveStep1 = rmk.recursive.toSnakeCase()(params);
let recusriveStep2 = rmk.recursive.clear()(recusriveStep1);
//  => {id:1, first_name:'Billy', deep_key: { id:2, first_name: 'John' }
```

### [Contributing](docs/CONTRIBUTING.md)
Project is open for new ideas and features:
- New actions
- New experiments
- Support Map, Set
- Support async usage
- Support Immutable.js