import isArray from 'lodash/isArray';

import rmk from '../lib';
import rmkActions from '../lib/actions';
import mock from '../__mock__/recusrive';

/* eslint no-confusing-arrow: "error"*/
/* eslint-env es6*/
describe('Recursive action', () => {
  it('Object recursive', () => {
    const formula = rmk(
      rmkActions.recursive(
        [
          rmkActions.toCamelCase(),
          rmkActions.update({
            arrayKeyStr: localState => ((isArray(localState.arrayKey)) ? localState.arrayKey.join(',') : null),
          }),
          rmkActions.rename({
            arrayKeyStr: 'renamedStr',
          }),
          rmkActions.clear(),
        ],
      ),
    );
    const result = formula(mock.recursiveBefore);
    expect(result).toEqual(mock.recursiveAfter);
  });
});
