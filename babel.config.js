module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          'alias': {
            '@utils': './src/utils',
            '@state': './src/state',
            '@modules': './src/modules'
          }
        }
      ]
    ],
  };
};
