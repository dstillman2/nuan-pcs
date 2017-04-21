const webpack = require('webpack');
const path = require('path');

const filename = 'bundle.js';

module.exports = {
  entry: './views/render.jsx',

  output: {
    path: path.join(__dirname, 'dist'),
    filename,
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   })
  // ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
