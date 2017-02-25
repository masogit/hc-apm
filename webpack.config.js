module.exports = {
  context: __dirname,
  entry: {
    js: "./src/js/index.js",
    scss: "./src/scss/index.scss",
    html: "./src/index.html"
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
      { test: /\.(css|scss)$/, use: 'sass-loader' },
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.jsx$/, use: 'jsx-loader' },
      { test: /\.json$/, use: 'json-loader' }
    ]
  }
};
