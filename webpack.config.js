const path = require ('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {

    path: path.resolve(__dirname, 'dist'),
    filename: `bundle.js`
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
  },

  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ], filter(_Boolean){},

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          Options: {
            plugins: [
            isDevelopment && require.resolve('react-refresh/babel')
          ], filter (Boolean)
          }
        }
      },
      {
        test: /\scss$/,
        exclude: /node_modules/,
        use: ['babel-loaders', 'style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
