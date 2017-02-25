const server = require('./conf/server');
const base = (server && server.base) ? server.base : '';
const dataget = base + '/dataget';

const config = {
  copyAssets: [
    'src/index.html',
    {
      asset: 'src/img/**',
      dist: 'dist/img/'
    }
  ],
  jsAssets: ['src/js/**/*.js'],
  mainJs: 'src/js/index.js',
  mainScss: 'src/scss/index.scss',
  devServerPort: 9001,
  devServerProxy: {},
  webpack: {
    loaders: [
      { test: /\.json$/, loader: 'json' }
    ],
    devtool: 'cheap-source-map'
  }
};

config.devServerProxy[dataget] = {
  target: "http://localhost:9000",
  // target: "https://geapmuat2.run.aws-jp01-pr.ice.predix.io/web",
  secure: false
};

export default config;
