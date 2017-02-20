import rmk from '../lib/';
import rmkActions from '../lib/actions';

let dataBeforeClean = {
  "id": 1,
  "first_name": "Stephen",
  "last_name": "Nelson"
};
let dataAfterClean = {
  "id": 1,
  "firstName": "Stephen",
  "lastName": "Nelson"
};
describe('toCamelCase', () => {
  it('transform to camelCase', () => {
    let formula = rmk(rmkActions.toCamelCase());
    let result = formula(dataBeforeClean);
    expect(result).toEqual(dataAfterClean);
  });
})
