const fs = require('fs');
const util = require('util');
let dependencies = {};
let localPackages = [];

const getPackagesList = () =>
  new Promise(resolve => {
    fs.readdir('./packages', (err, packages) => {
      let packList = packages.filter(pack => pack[0] !== '.');
      localPackages = packList;
      return resolve(packList);
    });
  });

const getPackageDependencies = pack =>
  new Promise(resolve => {
    fs.readFile(`./packages/${pack}/package.json`, (err, content) => {
      let jsonContent = JSON.parse(content);
      let dependenciesList = [];

      if (jsonContent.dependencies) {
        dependenciesList = Object.keys(jsonContent.dependencies);
      }

      return resolve({
        pack,
        dependencies: dependenciesList,
      });
    });
  });

const collectDependencies = packages => {
  let dependencies = {};
  let dependenciesPromise = packages.map(getPackageDependencies);

  return Promise.all(dependenciesPromise)
    .then(dependenciesList => {
      return dependenciesList.reduce(
        (result, current) =>
          Object.assign(result, {
            [current.pack]: current.dependencies,
          }),
        {}
      );
    })
    .catch(err => {
      console.log('ERR: collectDependencies');
      console.log(err);
    });
};

const getApiDependenciesTreeByKey = (dependencies, rootkey) => {
  let circleDep = [];
  const maxDepth = localPackages.length;

  const updateDependenciesFlow = (key, flow, depth) => {
    if (depth === maxDepth) {
      return;
    }

    let newFlow = [...flow, key];

    if (key === rootkey) {
      circleDep.push(newFlow);
      return;
    } else {
      for (let dep of dependencies[key]) {
        if (localPackages.includes(dep)) {
          updateDependenciesFlow(dep, newFlow, depth + 1);
        }
      }
    }
  };

  for (let a of dependencies[rootkey]) {
    if (localPackages.includes(a)) {
      updateDependenciesFlow(a, [rootkey], 0);
    }
  }

  return circleDep.filter(dep => {
    let depsCount = {};

    for (let d of dep) {
      if (d !== rootkey) {
        depsCount[d] = !depsCount[d] ? 1 : depsCount[d] + 1;
      }
    }

    hasInternalCrossDeps = false;

    for (let count of Object.values(depsCount)) {
      if (count > 1) {
        hasInternalCrossDeps = true;
        break;
      }
    }

    return !hasInternalCrossDeps;
  });
};

getPackagesList()
  .then(collectDependencies)
  .then(dependencies => {
    let packages = Object.keys(dependencies);
    let totalDeps = 0;
    for (let pack of packages) {
      let circleDependencies = getApiDependenciesTreeByKey(dependencies, pack);

      if (circleDependencies.length) {
        console.log('==================');
        console.log(`\x1b[44m\x1b[37m  PACKAGE:  ${pack}    \x1b[0m`);
        console.log('------------------');
        for (let dep of circleDependencies) {
          totalDeps++;
          console.log('- ', dep.join(' -> '));
        }
        console.log('');
      }
    }
    let exitcode = undefined;

    if (totalDeps === 0) {
      console.log(`\x1b[32mYeeeeey! No circle depedencies found\x1b[0m`);
    } else {
      console.log('_________________');
      console.log('Total circle dependencies: ', `\x1b[31m${totalDeps}\x1b[0m`);

      exitcode = 1;
    }

    process.exit(exitcode);
  })
  .catch(err => {
    console.log('ERR: ');
    console.log(err);
  });
