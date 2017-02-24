export default {
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
  devServerProxy: {
    "/dataget": {
      target: "http://localhost:9000/sites",
      // target: "https://geapmuat2.run.aws-jp01-pr.ice.predix.io/web/dataget",
      secure: false
    }
  },
  webpack: {
    loaders: [
      { test: /\.json$/, loader: 'json' }
    ],
    devtool: 'cheap-source-map'
  }
};
