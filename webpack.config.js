var path = require('path');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');
var NODEMODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');

var webpack = require('webpack');
var merge = require('webpack-merge');

var Clean = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var common = {
  entry: {
    bundle: path.resolve(APP_PATH, 'app'),
    vendors: ['react'] // And other vendors
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: DIST_PATH,
    filename: 'bundle.js',
  },
  module: {
    loaders: []
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'DevDay', 
    template: 'app/index.html', // Load a custom template
    inject: 'body' // Inject all scripts into the body
  }), // Generates index.hml in 'output' path
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js') // Generates a vendors.js for external libraries
  ]
};

var deps = [];

if (TARGET === 'development') {
  var config = {
    resolve: {
      alias: {}
    },
    module: {
      loaders: [{
        test: /\.css$/, // Only .css files
        loader: 'style!css', // Run both loaders
        include: [APP_PATH, NODEMODULES_PATH]
      }, {
        test: /\.(js|jsx)?$/,
        loaders: ['react-hot', 'babel?stage=0'],
        include: APP_PATH
      }, { 
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, 
        loader: "file-loader" 
      }, {
        test: /\.scss$/,
        loader: "style!sass",
        include: [APP_PATH, NODEMODULES_PATH]
      }
      ],
      noParse: []
    },
    devtool: 'eval',
    devServer: {
      port:4000,
      inline: true,
      colors: true,
      historyApiFallback: true,
      hot: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }

  deps.forEach(function(dep) {
    var depPath = path.resolve(NODEMODULES_PATH, dep);
    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
  });

  module.exports = merge(common, config);
}

if (TARGET === 'production') {
  var config = {
    module: {
      loaders: [{
        test: /\.css$/, // Only .css files
        loader: 'style!css', // Run both loaders
        include: [APP_PATH, NODEMODULES_PATH]
      }, {
        test: /\.(js|jsx)?$/,
        loaders: ['babel?stage=0'],
        include: APP_PATH
      }, { 
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, 
        loader: "file-loader" 
      }, {
        test: /\.scss$/,
        loader: "style!sass",
        include: [APP_PATH, NODEMODULES_PATH]
      }
      ]
    },
    plugins: [
      new Clean(['dist']),
      new ExtractTextPlugin('styles.css'),
      new webpack.DefinePlugin({
        'process.env': {
          // This affects react lib size
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
      })
    ]
  }

  module.exports = merge(common, config);
}
