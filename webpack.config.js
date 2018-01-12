module.exports = {
  entry: './main.js',
  output: {
    filename: './js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ],
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            options: {
                includePaths: ["absolute/path/a", "absolute/path/b"]
            }
        }]
    }]
}
};



