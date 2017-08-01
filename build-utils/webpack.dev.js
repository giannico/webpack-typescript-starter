const commonPaths = require('./common-paths');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = (env) => {
  const plugins = [];

  plugins.push(
    new WebpackShellPlugin({
      onBuildEnd: [`nodemon ${commonPaths.fullOutputPath} --watch ${commonPaths.outputPath}`]
    })
  );

  const config = {
    devtool: 'eval:source-map',
    plugins: plugins
  };

  return config;
}
