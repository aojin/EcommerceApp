module.exports = function (api) {
  api.cache(true);

  const isDevelopment = process.env.NODE_ENV === 'development';
  console.log('Babel environment:', process.env.NODE_ENV);
  console.log('Is Development:', isDevelopment);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      isDevelopment && 'react-refresh/babel',
    ].filter(Boolean),
  };
};
