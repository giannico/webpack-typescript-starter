const webpackMerge = require('webpack-merge');

module.exports = (env) => {
  console.log(env);

  if (!env || !env.env) {
    throw new Error('You must pass an --env.env flag into your build!');
  }

  const commonConfig = require(`./build-utils/webpack.common`)(env);
  const envConfig = require(`./build-utils/webpack.${env.env}`)(env);

  return webpackMerge(commonConfig, envConfig);
}
