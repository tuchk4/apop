#  Shortcuts

Let's say your receive from API dirty response and need processing response. You receive array of objects, need filter array and transform objects.

For short declaration apop, you can not pass the action `ap.map` when you use op actions.

{% runkit %}
let op = require('apop/op');
let ap = require('apop/ap');


let formula1 = ap(
    ap.filter(state => state.id > 3),
    ap.map(
        op.toCamelCase(),
        op.update({
            date: state => new Date(state.date)
        })
    )
);

let formula2 = ap(
    ap.filter(state => state.id > 3),
    op.toCamelCase(),
    op.update({
        date: state => new Date(state.date)
    })
);
let data = [
   {id: 1, first_name: 'petya', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'},
   {id: 2, first_name: 'venya', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'},
   {id: 3, first_name: 'katya', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'},
   {id: 4, first_name: 'ivan', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'},
   {id: 5, first_name: 'mark', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
];
let result1 = formula1(data);
let result2 = formula2(data);

JSON.stringify(result1) === JSON.stringify(result2);

{% endrunkit %}