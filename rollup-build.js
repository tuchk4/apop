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
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel(
      babelrc({
        comments: false,
        addExternalHelpersPlugin: false,
        config: babelConfig,
        exclude: 'node_modules/**',
      })
    ),
  ],
};

function build(config) {
  config.entry = config.entry || `./src/${config.moduleName}.js`;
  config.dest = config.dest || `./${config.moduleName}.js`;
  config.destMin = config.destMin || `./${config.moduleName}.min.js`;
  config.banner = config.banner
    ? `// https://github.com/tuchk4/rmk/blob/master/docs/${config.banner}`
    : '';

  rollup({
    entry: config.entry,
    plugins: config.plugins,
  }).then(bundle => {
    bundle.write({
      format: config.format,
      banner: config.banner,
      moduleName: config.moduleName,
      dest: config.dest,
    });
    console.log(`build ${config.dest}`);
  });

  rollup({
    entry: config.entry,
    plugins: [
      ...rollUpConfig.plugins,
      uglify(
        {
          compress: false,
          mangle: true,
          sourceMap: { url: 'inline' },
        },
        minify
      ),
    ],
  }).then(bundle => {
    bundle.write({
      format: config.format,
      banner: config.banner,
      moduleName: config.moduleName,
      dest: config.destMin,
    });
    console.log(`build ${config.destMin}`);
  });
}

build({
  ...rollUpConfig,
  moduleName: 'op',
  entry: './src/op/index.js',
  dest: `./op.js`,
  destMin: `./op.min.js`,
});
build({
  ...rollUpConfig,
  moduleName: 'op',
  entry: './src/op/recursive/index.js',
  dest: `./recursive/op.js`,
  destMin: `./recursive/op.min.js`,
});

const opActions = ['each', 'toCamelCase', 'toSnakeCase', 'rename', 'update'];

for (let opAction of opActions) {
  build({
    ...rollUpConfig,
    moduleName: opAction,
    banner: `ACTIONS.md#${opAction}`,
    entry: `./src/op/actions/${opAction}.js`,
    dest: `./${opAction}.js`,
    destMin: `./${opAction}.min.js`,
  });
  build({
    ...rollUpConfig,
    moduleName: opAction,
    banner: `ACTIONS.md#${opAction}`,
    entry: `./src/op/recursive/actions/${opAction}.js`,
    dest: `./recursive/${opAction}.js`,
    destMin: `./recursive/${opAction}.min.js`,
  });
}
build({
  ...rollUpConfig,
  moduleName: 'ap',
  entry: './src/ap/index.js',
  dest: `./ap.js`,
  destMin: `./ap.min.js`,
});
build({
  ...rollUpConfig,
  moduleName: 'ap',
  entry: './src/ap/recursive/index.js',
  dest: `./recursive/ap.js`,
  destMin: `./recursive/ap.min.js`,
});
const apActions = ['filter', 'join', 'map', 'remove', 'sort', 'splice', 'swap'];
for (let apAction of apActions) {
  build({
    ...rollUpConfig,
    moduleName: apAction,
    entry: `./src/ap/actions/${apAction}.js`,
    dest: `./${apAction}.js`,
    destMin: `./${apAction}.min.js`,
  });
  build({
    ...rollUpConfig,
    moduleName: apAction,
    entry: `./src/ap/recursive/actions/${apAction}.js`,
    dest: `./recursive/${apAction}.js`,
    destMin: `./recursive/${apAction}.min.js`,
  });
}

build({
  ...rollUpConfig,
  moduleName: 'apop',
  entry: './src/apop/index.js',
  dest: `./apop.js`,
  destMin: `./apop.min.js`,
});
