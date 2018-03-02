const webpackMerge = require('webpack-merge');

const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');

// 'env' will contain the environment variable from 'scripts'
// section in 'package.json'.
// console.log(env); => { env: 'dev' }
module.exports = env => {

  // We use 'buildValidations' to check for the 'env' flag
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  // Select which Webpack configuration to use; development
  // or production
  // console.log(env.env); => dev
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);

  // 'webpack-merge' will combine our shared configurations, the
  // environment specific configurations and any addons we are
  // including
  const mergedConfig = webpackMerge(
    commonConfig,
    envConfig
  );

  // Then return the final configuration for Webpack
  return mergedConfig;
};
