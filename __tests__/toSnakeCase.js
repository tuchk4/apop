import rmk from '~';
import rmkActions from '~/actions';

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
    let formula = rmk(rmkActions.toSnakeCase());
    let result = formula(dataBeforeClean);
    expect(result).toEqual(dataAfterClean);
  });
});
