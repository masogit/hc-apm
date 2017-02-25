module.exports = {
  context: __dirname,
  entry: {
    js: "./src/js/index.js",
    scss: "./src/scss/index.scss"
  },

  output: {
    path: __dirname + "/dist",
    filename: "index.js"
  },
  module: {
    // preLoaders: [
    //     //Eslint loader
    //   { test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader"}
    // ],
    rules: [
      // { test: /\.html$/, use: '' },
      { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /\.json$/, use: 'json-loader' }
    ]
  }
};
