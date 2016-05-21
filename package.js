Package.describe({
  summary: 'Use Coffee React to compile CJSX.',
  version: '5.0.0',
  name: 'literalsands:coffee-react',
  git: 'https://github.com/literalsands/meteor-coffee-react'
});
Package.registerBuildPlugin({
  name: 'compileCJSX',
  use: [
    'caching-compiler@1.0.4',
    'ecmascript@0.4.3'
  ],
  sources: ['compile-cjsx.js'],
  npmDependencies: {
    "source-map": "0.5.3",
    "coffee-react": "5.0.0"
  }
});
Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});
