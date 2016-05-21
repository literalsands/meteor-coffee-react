Package.describe({
  summary: 'Use Coffee React to compile CJSX.',
  version: '5.0.0',
  name: 'literalsands:coffee-react'
});
Package.registerBuildPlugin({
  name: 'compileCJSX',
  use: ['caching-compiler', 'ecmascript'],
  sources: ['compile-cjsx.js'],
  npmDependencies: {
    "source-map": "0.5.3",
    "coffee-react": "5.0.0"
  }
});
Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});
