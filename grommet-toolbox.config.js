import path from 'path';

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
    devServer: {
      proxy: {
        "/dataget": {
          target: "https://geapmuat2.run.aws-jp01-pr.ice.predix.io/web/dataget"
        }
      }
    },
    devtool: 'cheap-source-map'
  }
};
