import rmk from '../lib';
import rmkActions from '../lib/actions';

export const before1 = {id:1, name: "abc", createDate: "01.01.1970", "isActive": false};
export const after1 = {id:1, name: "abc"};

export const beforeArray1 = [
  {id:1, name: "abc", createDate: "01.01.1970", "isActive": false},
  {id:2, name: "bca", createDate: "01.01.1971", "isActive": true}
];
export const afterArray1 = [
  {id:1, name: "abc"},
  {id:2, name: "bca"}
];
export const before2 = {key:"bbb", value: "abc", createDate: "01.01.1970", "isActive": false};
export const after2 = {id:"bbb", name: "abc"};

export const beforeArray2 = [
  {key:1, value: "abc", createDate: "01.01.1970", "isActive": false},
  {key:2, value: "bca", createDate: "01.01.1971", "isActive": true}
];
export const afterArray2 = [
  {id:1, name: "abc"},
  {id:2, name: "bca"}
];
export const before3 = {key:"bbb", value: "abc", createDate: "01.01.1970", "isActive": false};
export const after3 = {id:"bbb", name: "abc", isEmptyDate: false};

export const beforeArray3 = [
  {key: "bbb", value: "abc", createDate: "01.01.1970", "isActive": false},
  {key: "ccc", value: "bca", "isActive": true}
];
export const afterArray3 = [
  {id: "bbb", name: "abc", "isEmptyDate": false},
  {id: "ccc", name: "bca", "isEmptyDate": true}
];

describe('Pick action', () => {
  it('Data as object, config as array', () => {
    const formula = rmk(rmkActions.pick(['id', 'name']));
    const result = formula(before1);
    expect(result).toEqual(after1);
  });

  it('Data as array,  config as array', () => {
    const formula = rmk(rmkActions.pick(['id', 'name']));
    const result = formula(beforeArray1);
    expect(result).toEqual(afterArray1);
  });

  it('Data as object, config as object', () => {
    const formula = rmk(
      rmkActions.pick({
        id: 'key',
        name: 'value',
      })
    );
    const result = formula(before2);
    expect(result).toEqual(after2);
  });

  it('Data as array, config as object', () => {
    const formula = rmk(
      rmkActions.pick({
        id: 'key',
        name: 'value',
      })
    );
    const result = formula(beforeArray2);
    expect(result).toEqual(afterArray2);
  });

  it('Data as object, config as object with calculate', () => {
    const formula = rmk(
      rmkActions.pick({
        id: 'key',
        name: 'value',
        isEmptyDate: localState => localState.createDate.length === 0,
      })
    );
    const result = formula(before3);
    expect(result).toEqual(after3);
  });

  it('Data as array, config as object with calculate', () => {
    const formula = rmk(
      rmkActions.pick({
        id: 'key',
        name: 'value',
        isEmptyDate: localState => !localState.createDate,
      })
    );
    const result = formula(beforeArray3);
    expect(result).toEqual(afterArray3);
  });
});
