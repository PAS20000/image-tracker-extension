const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

const InsertHtmlPlugin = (chunks) => {
  return chunks.map(chunk => new HtmlPlugin({
      title : `Image Tracker | ${chunk.charAt(0).toUpperCase() + chunk.slice(1)}`,
      filename : `${chunk}.html`,
      chunks : [chunk]
  }))
}

module.exports = {
  entry: {
    popup : path.resolve('./src/Extension/Popup/index.tsx'),
    options : path.resolve('./src/Extension/Options/index.tsx'),
    background : path.resolve('./src/Extension/Background/index.ts'),
    content : path.resolve('./src/Extension/Content/index.ts')
  },
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
          from : path.resolve('./src/Static'), 
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