/* eslint-disable @typescript-eslint/no-var-requires */
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = async function (env, argv) {
  env.mode = env.mode || 'development';
  console.log('Webpack Environment:', env);

  const config = await createExpoWebpackConfigAsync(env, argv);
  config.resolve.alias['react-native$'] = 'react-native-web';

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.mode),
    }),
  );

  if (env.mode === 'development') {
    console.log('Running in development mode');
    config.devServer = {
      ...config.devServer,
      hot: true,
      onBeforeSetupMiddleware(devServer) {
        if (!devServer) {
          throw new Error('webpack-dev-server is not defined');
        }
        devServer.middlewares.use((req, res, next) => {
          console.log('Webpack Dev Server middleware');
          next();
        });
      },
    };

    config.module.rules.push({
      test: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [require.resolve('react-refresh/babel')],
          },
        },
      ],
    });

    config.plugins.push(new ReactRefreshWebpackPlugin());
  } else {
    console.log('Running in production mode');
  }

  return config;
};
