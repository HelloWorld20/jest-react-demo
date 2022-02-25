const fs = require('fs');
const path = require('path');

function resolve(p) {
  return path.resolve(__dirname, p);
}

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: '[name]_[hash].js',
    path: resolve('../dist')
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}