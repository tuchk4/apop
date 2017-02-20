const rmk = require('@rmk/rmk');
const toSnakeCase = require('../index');

let dataBeforeClean = {
  "id": 1,
  "firstName": "Stephen",
  "lastName": "Nelson"
};
let dataAfterClean = {
  "id": 1,
  "first_name": "Stephen",
  "last_name": "Nelson"
};
describe('toSnakeCase', () => {
  it('Transform to snake_case', () => {
    let formula = rmk(toSnakeCase());
    let result = formula(dataBeforeClean);
    expect(result).toEqual(dataAfterClean);
  });
});
