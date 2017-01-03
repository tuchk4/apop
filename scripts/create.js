const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const { argv } = require('yargs');

if (!argv.name) {
  throw new Error('--name should be defined');
}

const PACKAGE_NAME = argv.name;
const PACKAGE_PATH = path.resolve('packages', PACKAGE_NAME);

if (fs.existsSync(PACKAGE_PATH)) {
  throw new Error(`package "${PACKAGE_NAME}" already exists`);
}

const create = () => {
  fse.mkdirSync(PACKAGE_PATH);

  const TEMPLATES_DIR = path.resolve(__dirname, 'templates');

  const filesToCopy = [
    path.resolve(TEMPLATES_DIR, '.babelrc'),
    path.resolve(TEMPLATES_DIR, 'package.json'),
    path.resolve(TEMPLATES_DIR, '.npmignore'),
    path.resolve(TEMPLATES_DIR, 'README.md'),
    path.resolve(TEMPLATES_DIR, 'lib', 'index.js')
  ];

  for (const file of filesToCopy) {
    const basename = file.replace(TEMPLATES_DIR, '');

    fse.copySync(file, path.join(PACKAGE_PATH, basename));
  }

  const packageFile = path.resolve(PACKAGE_PATH, 'package.json');
  const packageJSON = fse.readJsonSync(packageFile);

  fse.writeJSONSync(packageFile, Object.assign({
    name: `@rmk/${argv.name}`,
  }, packageJSON));
};


try {
  create();
} catch (e) {
  // TODO: rollback - remove createad dir if not exists before
  console.log(e);
}
