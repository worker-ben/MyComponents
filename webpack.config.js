const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    button : path.resolve(__dirname, './src/component/button/index.js'),
    input : path.resolve(__dirname, './src/component/input/index.js'),
    modal : path.resolve(__dirname, './src/component/modal/index.js'),
    select : path.resolve(__dirname, './src/component/select/index.js'),
    tooltip : path.resolve(__dirname, './src/component/tooltip/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './lib/'),
    filename: '[name].js',
    library: "myComponents", // 库的全局变量，作为一个库，肯定需要一个全局变量来访问里面的属性，总不能都挂在window上
    libraryExport: "default",
    libraryTarget: "umd", // 库引入的方式
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: "babel-loader"
    },]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};


