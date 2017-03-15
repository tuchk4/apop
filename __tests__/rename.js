import rmk from '../lib';
import rmkActions from '../lib/actions';

export const before = {
  year: 2001,
};

export const after = {
  fullYear: 2001,
};

describe('Rename Action', () => {
  it('Field function object', () => {
    const formula = rmk(
      rmkActions.rename({
        year: localState =>
          localState.year.toString().length === 4 ? 'fullYear' : 'year',
      })
    );
    const result = formula(before);
    expect(result).toEqual(after);
  });

  it('Field static object', () => {
    const formula = rmk(
      rmkActions.rename({
        year: 'fullYear',
      })
    );
    const result = formula(before);
    expect(result).toEqual(after);
  });

  it('Field function array', () => {
    const formula = rmk(
      rmkActions.rename({
        year: localState =>
          localState.year.toString().length === 4 ? 'fullYear' : 'year',
      })
    );
    const result = formula([before]);
    expect(result).toEqual([after]);
  });

  it('Field static array', () => {
    const formula = rmk(
      rmkActions.rename({
        year: 'fullYear',
      })
    );
    const result = formula([before]);
    expect(result).toEqual([after]);
  });
});
