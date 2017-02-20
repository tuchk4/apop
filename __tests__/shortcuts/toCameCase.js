import shortcuts from '../../lib/shortcuts/index';

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
    let result = shortcuts.toCamelCase(dataBeforeClean);
    expect(result).toEqual(dataAfterClean);
  });
})
