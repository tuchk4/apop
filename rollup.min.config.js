import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { minify } from 'uglify-es';

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
  dest: 'dist/rmk.min.js',
  plugins: [
    resolve(npmConfig),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify({}, minify),
  ],
};
