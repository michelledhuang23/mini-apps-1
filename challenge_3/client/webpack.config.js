const path = require('path');

module.exports = {
  entry: './app.jsx',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};