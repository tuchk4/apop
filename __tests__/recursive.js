import rmk from 'rmk';
import rmkActions from 'rmk/actions';
import mock from '../__mock__/recusrive';
import isArray from 'lodash/isArray';

describe('recursive', () => {

  it('object recursive', () => {
    let formula = rmk(
      rmkActions.recursive(
        [
          rmkActions.toCamelCase(),
          rmkActions.update({
            arrayKeyStr: (localState) =>  (isArray(localState.arrayKey)) ?  localState.arrayKey.join(',') : null
          }),
          rmkActions.rename({
            arrayKeyStr: 'renamedStr'
          }),
          rmkActions.clear()
        ]
      )
    );
    let result = formula(mock.recursiveBefore);
    expect(result).toEqual(mock.recursiveAfter);
  });
});