import rmk from '../lib';
import rmkActions from '../lib/actions';


export const before = {
  "date": new Date(2001,11,3),
};
export const after = {
  "date": new Date(2001,11,3),
  "year": 2001,
  "month": 11,
  "day": 3
};

describe('Update action', () => {
  it('Field function object', () => {
    const formula = rmk(
      rmkActions.update({
        year: localState => localState.date.getFullYear(),
        month: localState => localState.date.getMonth(),
        day: localState => localState.date.getDate(),
      })
    );
    const result = formula(before);
    expect(result).toEqual(after);
  });

  it('Field static object', () => {
    const formula = rmk(
      rmkActions.update({
        year: after.year,
        month: after.month,
        day: after.day,
      })
    );
    const result = formula(before);
    expect(result).toEqual(after);
  });

  it('Field function array', () => {
    const formula = rmk(
      rmkActions.update({
        year: localState => localState.date.getFullYear(),
        month: localState => localState.date.getMonth(),
        day: localState => localState.date.getDate(),
      })
    );
    const result = formula([before]);
    expect(result).toEqual([after]);
  });

  it('Field static array', () => {
    const additionalFields = {
      year: 2000,
      month: 1,
      day: 1,
    };
    const formula = rmk(rmkActions.update(additionalFields));
    const result = formula([before]);
    const trueResult = [{ ...after, ...additionalFields }];
    expect(result).toEqual(trueResult);
  });
});
