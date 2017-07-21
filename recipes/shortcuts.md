#  Shortcuts

Let's say your receive from API dirty response and need processing response. You receive array of objects, need filter array and transform objects.

```js
import ap from 'apop/ap';
import op from 'apop/ap';

let formula = ap(
    ap.filter(state => state.id > 3),
    ap.map(
        op.toCamelCase(),
        op.update({
            date: state => new Date(state.date)
        })
    )
)

formila([
    {id: 1, first_name: 'petya', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'},
    {id: 2, first_name: 'venya', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
    {id: 3, first_name: 'katya', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
    {id: 4, first_name: 'ivan', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
    {id: 5, first_name: 'mark', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
])
// => [
// {id: 3, firstName: 'katya', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
// {id: 4, firstName: 'ivan', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
// {id: 5, firstName: 'mark', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
//]

```

You can use object action direct in ap without ap.map. Map apply automatic for op actions in use ap

```js
import ap from 'apop/ap';
import op from 'apop/ap';

let formula = ap(
    ap.filter(state => state.id > 3),
    op.toCamelCase(),
    op.update({
        date: state => new Date(state.date)
    })
)

formila([
    {id: 1, first_name: 'petya', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'},
    {id: 2, first_name: 'venya', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
    {id: 3, first_name: 'katya', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
    {id: 4, first_name: 'ivan', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
    {id: 5, first_name: 'mark', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
])
// => [
// {id: 3, firstName: 'katya', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
// {id: 4, firstName: 'ivan', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
// {id: 5, firstName: 'mark', date: 'Fri Jul 21 2017 10:31:17 GMT+0300 (EEST)'}
//]

```



