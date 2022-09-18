const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');

module.exports = {
  entry: './src/index.js', 
  output: { 
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js' 
  }, 
  module: { 
    rules: [{ 
      test: /\.css$/, 
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [postcssPresetEnv()],
            },
          },
        }
      ]
    }, { 
      test: /\.js$/, 
      exclude: /node_modules/, 
      use: { 
        loader: 'babel-loader', 
        options: { 
          presets: [ '@babel/preset-env' ] 
        } 
      } 
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    }, {
      test: /\.html$/i,
      loader: "html-loader",
    }] 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ]
};
