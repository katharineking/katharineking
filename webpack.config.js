const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/about.html', to: 'about.html' },
        { from: './src/404.html', to: '404.html' },
        { from: './src/assets/images', to: 'assets/images' } // Ensure images are copied to the output directory

      ]
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    compress: true,
    port: 8000,
    open: true
  },
  mode: 'development'
};