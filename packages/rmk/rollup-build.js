import { rollup } from 'rollup';

import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { minify } from 'uglify-es';
import babelrc from 'babelrc-rollup';

const babelConfig = {
  presets: [['es2015', { loose: true, modules: false }, 'stage-0']],
  plugins: ['external-helpers', 'transform-object-rest-spread'],
};

var rollUpConfig = {
  format: 'umd',
  sourceMap: 'inline',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel(
      babelrc({
        addExternalHelpersPlugin: false,
        config: babelConfig,
        exclude: 'node_modules/**',
      })
    ),
  ],
};

async function make(config) {
  config.entry = config.entry || `./src/${config.moduleName}.js`;
  config.dest = config.dest || `./${config.moduleName}.js`;
  config.destMin = config.destMin || `./${config.moduleName}.min.js`;

  let bundle = await rollup({
    entry: config.entry,
    plugins: config.plugins,
  });



  await bundle.write({
    format: config.format,
    moduleName: config.moduleName,
    dest: config.dest,
    sourceMap: config.sourceMap,
  });
  await bundle.write({
    format: config.format,
    moduleName: config.moduleName,
    dest: config.destMin,
    sourceMap: config.sourceMap,
    plugins: [...rollUpConfig.plugins, uglify({}, minify)],
  });
  console.log(`make ${config.dest} and ${config.destMin}`);
}

(async function() {

  await make({...rollUpConfig,
    moduleName: 'rmk',
    entry: './src/rmk.js',
    dest: `./index.js`,
    destMin: `./index.min.js`
  });
  await make({...rollUpConfig,
    moduleName: 'rmkRecursive',
    entry: './src/recursive/rmk.js',
    dest: `./recursive/index.js`,
    destMin: `./recursive/index.min.js`
  });

  const actionBundles = [
    'clear', 'each', 'toCamelCase', 'toSnakeCase', 'rename', 'update',
    'recursive/clear', 'recursive/each',
    'recursive/toCamelCase', 'recursive/toSnakeCase',
    'recursive/rename', 'recursive/update'
  ];

  actionBundles.forEach(async moduleName => await make({...rollUpConfig, moduleName}));

})();
