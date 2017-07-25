# apop

Apop - god of darkness. We suggest taking it for your own selfish purposes for transformation data.
Replace recursive nested constructions to flow transformations functions.

![Image of Apop](https://image.ibb.co/mRs5zk/166.jpg)


[![build status](https://img.shields.io/travis/tuchk4/apop/master.svg?style=flat-square)](https://travis-ci.org/tuchk4/apop)
[![apop version](https://img.shields.io/npm/v/apop.svg?style=flat-square)](https://www.npmjs.com/package/apop)

## The main idea
Apop construct with ap and op parties.
* [`ap`](actions/array)\(**Array Parse**\) - apply flow actions to array.
* [`op`](actions/object)\(**Object Parse**\) - apply flow actions to object.

## Installation

{% codetabs name="npm", type="Shell" -%} 
npm install --save apop

{%- language name="yarn", type="Shell" -%}
yarn add apop

{%- endcodetabs %}

## Imports

{% codetabs name="ES6", type="js" -%} 
import ap from 'apop/ap';
import op from 'apop/op';

// equal to import {ap, op} from 'apop';

{%- language name="ES5", type="js" -%}

const ap = require('apop/ap');
const op = require('apop/op');

// equal to const {ap, op} = require('apop');

{%- language name="Browser", type="html" -%}
<script src="https://unpkg.com/apop/op"></script>
<script src="https://unpkg.com/apop/ap"></script>
// equal to <script src="https://unpkg.com/apop"></script> <script>const {op, ap} = window.apop;</script>

{%- endcodetabs %}

## Contributing

Project is open for new ideas and features:

* New actions
* New experiments
* Support Map, Set
* Support async usage
* Support Immutable.js
