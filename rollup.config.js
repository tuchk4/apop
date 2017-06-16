import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-minify';

const npmConfig = {
  jsnext: true,
  main: true,
  browser: true,
};

export default {
  entry: 'lib/index.js',
  format: 'iife',
  sourceMap: 'inline',
  moduleName: 'rmk',
  dest: 'dist/rmk.js',
  plugins: [
    resolve(npmConfig),
    commonjs(),
    babel(),
    minify({ iife: 'dist/rmk.min.js' }),
  ],
};
