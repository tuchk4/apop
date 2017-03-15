import isArray from 'lodash/isArray';

import rmk from '../lib';
import rmkActions from '../lib/actions';
import mock from '../__mock__/recusrive';

const VERSIONS = {
  V1: 'v1',
  V2: 'v2',
};

function versionLinkFn(url, isLink) {
  let version;
  if (url && isLink) {
    version = url.startsWith(`/${VERSIONS.V2}`) ? VERSIONS.V2 : VERSIONS.V1;
  }
  return version;
}

function normalizeUrl(url, version) {
  return (version === VERSIONS.V2) ? url.replace(`/${VERSIONS.V2}`, '') : url;
}
function normalizeName(name, version) {
  return (version === VERSIONS.V1) ? `${name} old` : name;
}

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
        ], 3,
      ),
    );
    const result = formula(mock.recursiveBefore);

    expect(result).toEqual(mock.recursiveAfter);
  });

  it('Menu', () => {
    const transformMainMenu = rmk(
      rmkActions.recursive([
        rmkActions.clear(),
        rmkActions.toCamelCase(),
        rmkActions.rename({
          children: 'nodes',
        }),
      ], 8),
      rmkActions.recursive([
        rmkActions.update({
          isCategory: localState => Object.prototype.hasOwnProperty.call(localState, 'nodes'),
          isLink: localState => !Object.prototype.hasOwnProperty.call(localState, 'nodes'),
        }),
      ], 8),
      rmkActions.recursive([
        rmkActions.update({
          version: localState => versionLinkFn(localState.url, localState.isLink),
        }),
      ], 8),
      rmkActions.recursive([
        rmkActions.update({
          url: localState => normalizeUrl(localState.url, localState.version),
          name: localState => normalizeName(localState.name, localState.version),
          isOpen: (localState) => {
            let isOpen = null;
            if (localState.isCategory) {
              isOpen = false;
            }
            return isOpen;
          },
        }),
        rmkActions.clear(),
      ], 8),
    );
    const result = transformMainMenu(mock.recursiveMenuBefore);

    expect(result).toEqual(mock.recursiveMenuAfter);
  });
});
