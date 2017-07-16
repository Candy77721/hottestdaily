var path = require('path')
var webpack = require('webpack')
// var autoprefixer = require('autoprefixer')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './static/dist'),
    publicPath: 'static/dist/',
    filename: 'build.js'
    // chunkFilename: '[id].build.js?[chunkhash]'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            // 'stylus': 'vue-style-loader!css-loader!stylus-loader!autoprefixer-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          },
          // other vue-loader options go here
          postcss: [require('autoprefixer')()]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader?config=stylusOther'
      }
      // ,
      // {
      //   test: /\.(styl|css)$/,
      //   loader: 'style-loader!css-loader!autoprefixer-loader'
      // }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  // postcss: [
  //   autoprefixer({
  //     browsers: ['>0%']
  //   })
  // ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      axios: 'axios',
      echarts: 'echarts'
    })
    // ,
    // new webpack.LoaderOptionsPlugin({
    //   // test: /\.xxx$/, // may apply this only for some modules
    //   options: {
    //     postcss: autoprefixer({
    //       browsers: ['>0%']
    //     })
    //   }
    // })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
