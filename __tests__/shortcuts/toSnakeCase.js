import shortcuts from '../../lib/shortcuts/index';

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
    let result = shortcuts.toSnakeCase(dataBeforeClean);
    expect(result).toEqual(dataAfterClean);
  });
});
