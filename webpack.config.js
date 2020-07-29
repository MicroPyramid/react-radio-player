var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const {resolve} = require("path")

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/js',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        // Uncomment lines below for cache invalidation correctly
        // cache: true,
        // cacheKeys(defaultCacheKeys) {
        //   delete defaultCacheKeys['uglify-js'];
        //
        //   return Object.assign(
        //     {},
        //     defaultCacheKeys,
        //     { 'uglify-js': require('uglify-js/package.json').version },
        //   );
        // },
        minify(file, sourceMap) {
          // https://github.com/mishoo/UglifyJS2#minify-options
          const uglifyJsOptions = {
            /* your `uglify-js` package options */
          };

          if (sourceMap) {
            uglifyJsOptions.sourceMap = {
              content: sourceMap,
            };
          }

          return require('terser').minify(file, uglifyJsOptions);
        },
      }),
    ],
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-react', '@babel/preset-env'],
        plugins: [
            "@babel/plugin-proposal-class-properties"
        ]
      }
    },
    {
      test: /\.css$/,  
      include: /node_modules/,  
      loaders: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            limit: 8192,
            name: '../images/[hash].[ext]'
          }
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}