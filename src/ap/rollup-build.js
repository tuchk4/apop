// import { rollup } from 'rollup';
//
// import resolve from 'rollup-plugin-node-resolve';
// import uglify from 'rollup-plugin-uglify';
// import commonjs from 'rollup-plugin-commonjs';
// import babel from 'rollup-plugin-babel';
// import { minify } from 'uglify-es';
// import babelrc from 'babelrc-rollup';
//
// const babelConfig = {
//   presets: [['es2015', { loose: true, modules: false }, 'stage-0']],
//   plugins: ['external-helpers', 'transform-object-rest-spread'],
// };
//
// var rollUpConfig = {
//   format: 'umd',
//   sourceMap: 'inline',
//   plugins: [
//     resolve({
//       jsnext: true,
//       main: true,
//       browser: true,
//     }),
//     commonjs(),
//     babel(
//       babelrc({
//         addExternalHelpersPlugin: false,
//         config: babelConfig,
//         exclude: 'node_modules/**',
//       })
//     ),
//   ],
// };
//
// async function make(config) {
//   let bundle = await rollup({
//     entry: `./src/${config.moduleName}.js`,
//     plugins: config.plugins,
//   });
//
//   await bundle.write({
//     format: config.format,
//     moduleName: config.moduleName,
//     dest: `./${config.moduleName}.js`,
//     sourceMap: config.sourceMap,
//   });
//   await bundle.write({
//     format: config.format,
//     moduleName: config.moduleName,
//     dest: `./${config.moduleName}.min.js`,
//     sourceMap: config.sourceMap,
//     plugins: [...rollUpConfig.plugins, uglify({}, minify)],
//   });
//   console.log(`make ./${config.moduleName}.js and ./${config.moduleName}.min.js`);
// }
//
// (async function() {
//
//   const builds = ['rmkArray','recursive/rmkArray'];
//
//   builds.forEach(async moduleName => await make({...rollUpConfig, moduleName}));
//
// })();
