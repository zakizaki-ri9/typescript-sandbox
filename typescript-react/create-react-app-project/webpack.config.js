const path = require('path')

// resolve: 絶対パスの生成
const outputPath = path.resolve(__dirname, 'public')
console.log(`outputPath: ${outputPath}`)

module.exports = {
  entry: './src/index.js',
  output: {
    path: this.output,
    filename: 'bundle.js'
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './src/index.html',
  //     filename: './index.html'
  //   })
  // ],
  devtool: 'eval-source-map'
}
