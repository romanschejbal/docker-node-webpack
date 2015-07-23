var webpack = require('webpack');
var path = require('path');

var port = 8888;
var host = process.env.HOST || 'localhost';

var commonLoaders = [
  {
    test: /\.(js|json)$/,
    loaders: ['react-hot-loader', 'babel-loader?stage=1', 'eslint-loader'],
    exclude: /(node_modules)/
  },
  {
    test: /\.less$/,
    loaders: ['style-loader', 'css-loader', 'less-loader']
  }
];

module.exports = [{
  // The configuration for the client
  name: 'browser',
  devServer: {
    port: port,
    hot: true,
    inline: true
  },
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://' + host + ':' + port,
    'webpack/hot/dev-server',
    './src/client/app'
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
    publicPath: '//' + host + ':' + port + '/'
  },
  module: {
    loaders: commonLoaders
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      BROWSER: true
    })
  ]
},
{
  // The configuration for the server-side
  name: 'server',
  entry: [
    './src/server/index'
  ],
  target: 'node',
  output: {
    filename: './src/server/index.generated.js',
    libraryTarget: 'commonjs2'
  },
  externals: /^[a-z\-0-9]+$/,
  module: {
    loaders: commonLoaders
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.(less|css)$/, 'node-noop'),
    new webpack.DefinePlugin({
      BROWSER: false
    })
  ]
}];