var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'app/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/'
  },
  resolve: {
    root: [
      path.join(__dirname, 'app'),
      path.join(__dirname, 'public'),
      path.join(__dirname, 'templates')
    ],
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'stage-1', 'react']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'stage-1', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(otf|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Redux Seed',
      favicon: 'public/favicon.ico',
      filename: 'index.html',
      template: 'index.tmpl.html',
      inject: 'body',
      hash: true
    })
    /*
    new webpack.DefinePlugin({'process.env.NODE_ENV': ''production''}),
    new ExtractTextPlugin('style.css', {allChunks: false}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {screw_ie8: true, keep_fnames: true, warnings: false},
      mangle: {screw_ie8: true, keep_fnames: true}
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
    */
  ]
}

// https://github.com/unicorn-standard/starter-kit/blob/master/webpack.config.js
