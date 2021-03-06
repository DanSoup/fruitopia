const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname , 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
      rules: [
          {test: /\.(js)$/, use:'babel-loader'},
          {test: /\.css$/, use:['style-loader', 'css-loader']},
          {test: /\.(png|jpe?g|gif)$/i, use:['file-loader']}
      ]
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
      new HtmlWebpackPlugin ({
          template: 'src/index.html'
      })
  ]
}