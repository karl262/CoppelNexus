module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            '~assets': './assets',
          },
        },
      ],
      'react-native-reanimated/plugin', //siempre al final para evitar problemas de importaciones
    ],
  };
};
