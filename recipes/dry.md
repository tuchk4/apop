## Don’t repeat yourself

You can create one transform function for repeat usage. For example for receive data from API.

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
// => {
//  firstName: "petya", 
//  lastName: "ivanov", 
//  createdDate: new Date('2017-07-20T13:53:24.225Z', 
//  fullName: "petya ivanov"
// }

formula({first_name: "katya", last_name: "petrova", created_date: '2017-07-21T14:51:23.215Z'});
// => {
//  firstName: "katya", 
//  lastName: "petrova", 
//  createdDate: new Date('2017-07-21T14:51:23.215Z', 
//  fullName: "katya petrova"
// }

formula({first_name: "kolya", last_name: "sidorov", created_date: '2017-07-22T11:57:14.725Z'});
// => {
//  firstName: "kolya", 
//  lastName: "sidorov", 
//  createdDate: new Date('2017-07-22T11:57:14.725Z', 
//  fullName: "kolya sidorov"
// }
```



