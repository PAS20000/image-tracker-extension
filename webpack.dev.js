const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

const InsertHtmlPlugin = (chunks) => {
  return chunks.map(chunk => new HtmlPlugin({
      title : `Image Tracker | ${chunk.charAt(0).toUpperCase() + str.slice(1)}`,
      filename : `${chunk}.html`,
      chunks : [chunk]
  }))
}

module.exports = {
  mode : 'development',
  entry: {
    popup : path.resolve('./src/extension/popup/index.tsx'),
    options : path.resolve('./src/extension/options/index.tsx'),
  },
  devtool : 'cheap-module-source-map',
  module : {
    rules : [
      {
        test : /\.tsx?$/,
        use : 'ts-loader',
        exclude : /node_modules/,
      },
      {
        test : /\.(png|svg|jpg|jpeg|gif)$/i,
        type : 'assets/resource',
        use : 'asset/resource'
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns : [
        { 
          from : path.resolve('./src/static'), 
          to : path.resolve('dist') 
        }
      ],
    }),
    ...InsertHtmlPlugin([
      'popup',
      'options'
    ])
  ],
  resolve : {
    extensions : ['.tsx', '.ts', '.js'],
  },
  output : {
    filename : '[name].js',
    path : path.resolve(__dirname, './dist'),
  },
  optimization: {
    splitChunks : {
      chunks : 'all'
    }
  },
};