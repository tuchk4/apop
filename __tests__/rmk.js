import rmk from '../packages/rmk/src/rmk';
import rmkArray from '../packages/rmkArray/src/rmkArray';


var beforeArray = [];
for(let i = 15; i < 30; i++){
  beforeArray.push({
    index: i,
    date: `${new Date(Date.UTC(2001, 11, i))}`
  });
}
for(let i = 1; i <= 12; i++){
  beforeArray.push({
    index: i,
    date: `${new Date(Date.UTC(2001, i, 3))}`
  });
}

it('First Global Test', () => {
  const objectFormula = rmk(
    rmk.rename({'index': 'id'}),
    rmk.update({
      sort: (state) => (state.id * 3) + (state.id * 2) + state.id,
      case_detect: true
    }),
    rmk.recursive.toCamelCase()
  );
  const arrayFormula = rmkArray(
    rmkArray.swap(3, 4),
    rmkArray.swap(5, 6),
    rmkArray.swap(4, 5),
    rmkArray.removeElements(beforeArray[0], beforeArray[1]),
    rmkArray.filter(item => item.index % 2),
    rmkArray.remove(4,5,6,7),
    rmkArray.map(rmk.rename({'date':'birth_date'})),
    rmkArray.map(objectFormula),
    rmkArray.sort('sort', 'desc'),
  );

  const result = arrayFormula(beforeArray);

  expect(result).toMatchSnapshot();
});