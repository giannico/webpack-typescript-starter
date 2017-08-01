const commonPaths = require('./common-paths');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

////////////////////

module.exports = (env) => {
  const config = {
    entry: commonPaths.entryFile,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [{
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: commonPaths.outputFile,
      path: commonPaths.outputPath
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin()
    ]
  };

  return config;
}
