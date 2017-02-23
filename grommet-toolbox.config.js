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
  webpack: {
    loaders: [
      { test: /\.json$/, loader: 'json' }
    ],
    devServer: {
      proxy: {
        "/dataget": {
          target: "https://geapmuat2.run.aws-jp01-pr.ice.predix.io/web",
          secure: false,
          changeOrigin: true,
          ignorePath: true
        }
      }
    },
    devtool: 'cheap-source-map'
  }
};
