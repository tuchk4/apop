import resolve from 'rollup-plugin-node-resolve';

const npmConfig = {
  jsnext: true,
  main: true,
  browser: true,
};

export default {
  entry: 'lib/index.js',
  format: 'umd',
  sourceMap: true,
  moduleName: 'rmk',
  dest: 'dist/rmk.js',
  plugins: [resolve(npmConfig)],
};
