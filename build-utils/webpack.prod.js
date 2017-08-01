const webpack = require('webpack');

module.exports = (env) => {
  const sourceMap = 'source-map';

  const plugins = [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: sourceMap
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ];

  const config = {
    devtool: sourceMap,
    plugins
  };

  return config;
}
