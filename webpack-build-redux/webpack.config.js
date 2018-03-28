var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//export sass to css
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, ""),
  entry: {
    main: './main.js',
    vendor: ['jquery']
  },
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ["env", "react"],
          // presets: ['es2015', 'react'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.js(x)?$/,
        loader: 'webpack-px-to-rem',
        query: {
          basePx: 16,
          min: 1,
          floatWidth: 3 //numero de caracter depois do ponto
        }
      }
    ]
  },
  output: {
    path: __dirname + "",
    filename: "./js/bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true
      },
      filename: 'index.html',
      template: __dirname + '/template/main.html'
    }),
    new ExtractTextPlugin('css/bundle.css'), //exporta o css gerado pelo sass
    new webpack.ProvidePlugin({
      '$': 'jquery/dist/jquery.js',
      'jQuery': 'jquery/dist/jquery.js'
    }), //importa a biblioteca jquery para o projeto
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.bundle.js' //separar biblioteca de terceiros (ex: jquery)
    })
  ],
};
