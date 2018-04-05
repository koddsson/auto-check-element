import babel from 'rollup-plugin-babel'

const pkg = require('./package.json')

export default {
  input: 'src/index.js',
  output: {
    file: pkg['main'],
    format: 'umd'
  },
  plugins: [
    babel({
      plugins: ['transform-custom-element-classes'],
      presets: ['es2015-rollup']
    })
  ]
}
