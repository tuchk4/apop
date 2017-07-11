const fs = require('fs');
const exec = require('child_process').execSync;
const c = require('chalk');

const fixedLeft = (s, l, p = ' ') => String(s + Array(l).join(p)).slice(0, l);
const fixedRight = (s, l, p = ' ') => String(Array(l).join(p) + s).slice(-l);

const showColorExplain = () => {
  console.log('');
  console.log('-----');
  console.log(
    [c.red('missing'), c.green('installed'), c.yellow('not used')].join(' ')
  );
  console.log('');
  console.log('');
};

// ---------- EXTARCT PARAMS ---------------------------------------------------

let scriptArguments = process.argv.slice(2);
let shortcuts = '';

for (let arg of scriptArguments) {
  if (/^-[^-]/.test(arg)) {
    shortcuts += arg.slice(1);
  }
}

shortcuts = shortcuts.split('');

const possibleArguments = {
  useCachedResults: {
    key: '--cache',
    shortcut: 'c',
    description: 'Use cached data insted of collct new',
  },
  onceRequiredDependencies: {
    key: '--once-required',
    shortcut: 'o',
    description: 'Show once required dependencies',
  },
  byPackage: {
    key: '--by-package',
    shortcut: 'p',
    description: 'Show where each package is required',
  },
  overview: {
    key: '--overview',
    shortcut: 'w',
    description: 'Show all packages dependencies',
  },
  help: {
    key: '--help',
    shortcut: 'h',
    description: 'Show help',
  },
};

let options = {};

for (let argName of Object.keys(possibleArguments)) {
  let hasArg =
    scriptArguments.includes(possibleArguments[argName].key) ||
    shortcuts.includes(possibleArguments[argName].shortcut);

  options[argName] = hasArg;
}

if (options.help) {
  let keys = Object.keys(possibleArguments);

  for (let key of keys) {
    let formattedKey = String(
      '  ' + possibleArguments[key].key + Array(30).join(' ')
    ).slice(0, 20);
    console.log(formattedKey, possibleArguments[key].description);
  }

  process.exit(1);
}

// =============================================================================

const getPackagesList = () =>
  new Promise(resolve => {
    fs.readdir('./packages', (err, packages) => resolve(packages));
  });

let flow = getPackagesList();

if (!options.useCachedResults) {
  flow = flow.then(packages => {
    console.log('COLLECTING:');

    let pipe = [];
    exec(`echo "" > ./api_dependencies.txt`);

    for (let pack of packages) {
      pipe.push(
        Promise.resolve()
          .then(() => {
            exec(
              `echo "-------------------\n${pack}\n" >> ./api_dependencies.txt`
            );
            console.log(' - ', pack);

            exec(
              `npm-check --no-color --no-emoji packages/${pack} >> ./api_dependencies.txt`
            );
            exec(`echo "\n" >> ./api_dependencies.txt`);
          })
          .catch(err => {})
      );
    }

    return Promise.all(pipe);
  });
}

flow = flow.then(() => {
  return new Promise(resolve => {
    fs.readFile('./api_dependencies.txt', (err, content) => {
      let byPackage = `${content}`.split('-------------------');
      let tree = {};

      for (let pack of byPackage) {
        let byString = pack.split('\n');
        byString.shift();
        let packageName = byString.shift();
        let result = {};

        byString.pop();
        byString.pop();

        let keyMapping = {
          'NEW VER!': 'installed',
          'MINOR UP': 'installed',
          'MAJOR UP': 'installed',
          'NOTUSED?': 'notused',
          'MISSING!': 'missing',
        };

        for (let string of byString) {
          if (!!string[0] && string[0] !== ' ') {
            let pack = string.split(/\s{2,}/);

            let key = keyMapping[pack[1]];

            if (!result[key]) {
              result[key] = [];
            }

            if (pack[0] !== packageName) {
              result[key].push(pack[0]);
            }
          }
        }
        tree[packageName] = result;
      }

      return resolve(tree);
    });
  });
});

// by packages
if (options.onceRequiredDependencies) {
  flow.then(tree => {
    console.log('');
    console.log('SHOW ONCE REQUIRED PACKAGES:');
    let copyTree = Object.assign({}, tree);

    let packages = Object.keys(copyTree);
    let deps = {};

    for (let pack of packages) {
      let dependencies = copyTree[pack].missing || [];

      for (let d of dependencies) {
        deps[d] = deps[d] || [];
        deps[d].push(pack);
      }
    }

    let packs = Object.keys(deps);

    for (let pack of packs) {
      if (deps[pack].length === 1) {
        console.log(
          fixedLeft(pack, 20) +
            c.gray('required by') +
            fixedRight(deps[pack][0], 10)
        );
        console.log(fixedLeft('', 42, '-'));
      }
    }

    return tree;
  });
}

if (options.byPackage) {
  flow.then(tree => {
    console.log('PACKAGES DEPENDENCIES:');
    let copyTree = Object.assign({}, tree);

    let packages = Object.keys(copyTree);
    let deps = {};

    for (let pack of packages) {
      const installed = copyTree[pack].installed || [];
      const missing = copyTree[pack].missing || [];
      let dependencies = [...installed, ...missing];

      for (let d of dependencies) {
        deps[d] = deps[d] || [];
        const coloredPack = (installed.includes(d) ? c.green : c.red)(pack);

        deps[d].push(coloredPack);
      }
    }

    let keys = Object.keys(deps);

    for (let key of keys) {
      console.log('');
      console.log(`PACKAGE ${key} IS REQUIERD IN`);

      for (let pack of deps[key]) {
        console.log(` - ${pack}`);
      }
    }

    showColorExplain();

    return tree;
  });
}

if (options.overview) {
  flow.then(tree => {
    console.log('PACKAGES OVERVIEW:');

    let copyTree = Object.assign({}, tree);
    let packages = Object.keys(copyTree);
    let deps = {};

    for (let pack of packages) {
      console.log('');
      console.log(`PACK: ${pack}`);

      const dependencies = [
        ...((copyTree[pack].installed || []).map(color => c.green(color))),
        ...((copyTree[pack].missing || []).map(color => c.red(color))),
        ...((copyTree[pack].notused || []).map(color => c.yellow(color))),
      ];

      for (let d of dependencies) {
        console.log(` - ${d}`);
      }
    }

    showColorExplain();

    return tree;
  });
}
