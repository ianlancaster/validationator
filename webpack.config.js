module.exports = {
  entry: './src/validateFunc.js',
  output: {
    filename: 'validateFunc.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [require('@babel/plugin-proposal-object-rest-spread')]
          }
        }
      }
    ]
  }
}
