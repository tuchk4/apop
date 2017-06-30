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
  console.log('make', config.dest);
}

(async function() {
  await make({
    ...rollUpConfig,
    moduleName: 'rmk',
    entry: './lib/index.js',
    dest: `./dist/rmk.js`,
  });
  await make({
    ...rollUpConfig,
    moduleName: 'rmk',
    entry: './lib/index.js',
    dest: `./dist/rmk.min.js`,
    plugins: [...rollUpConfig.plugins, uglify({}, minify)],
  });
  await make({
    ...rollUpConfig,
    moduleName: 'clear',
    entry: './lib/actions/clear/index.module.js',
    dest: `./clear.js`,
  });
  await make({
    ...rollUpConfig,
    moduleName: 'each ',
    entry: './lib/actions/each/index.module.js',
    dest: `./each.js`,
  });
  await make({
    ...rollUpConfig,
    moduleName: 'toCamelCase',
    entry: './lib/actions/toCamelCase/index.module.js',
    dest: `./toCamelCase.js`,
  });
  await make({
    ...rollUpConfig,
    moduleName: 'toSnakeCase',
    entry: './lib/actions/toSnakeCase/index.module.js',
    dest: `./toSnakeCase.js`,
  });
  await make({
    ...rollUpConfig,
    moduleName: 'rename',
    entry: './lib/actions/rename/index.module.js',
    dest: `./rename.js`,
  });
  await make({
    ...rollUpConfig,
    moduleName: 'update',
    entry: './lib/actions/update/index.module.js',
    dest: `./update.js`,
  });
})();
