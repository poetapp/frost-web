const path = require('path')
const assert = require('assert')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const validEnvironments = [
  'development',
  'testing',
  'qa',
  'production',
]
const environment = process.env.POET_ENV || 'development'

assert(validEnvironments.includes(environment), `Invalid value for POET_ENV: ${environment}. Valid values are: ${validEnvironments}`)

const production = environment === 'production'
const qa = environment === 'qa'
const development = environment === 'development'
const testing = environment === 'testing'
const configurationPath = `./env/${environment}.json`

console.log("POET_ENV: ", environment)
console.log("Configuration Path: ", configurationPath)

const vendor = [
  'history',
  'isomorphic-fetch',
  'moment',
  'react',
  'react-dom',
  'react-router',
  'react-redux',
  'redux',
  'redux-saga',
];

const extractor = new ExtractTextPlugin("styles.css")

function getPlugins(environment) {
  const plugins = [
    new CircularDependencyPlugin({
      onStart({ compilation }) {
        console.log('start detecting webpack modules cycles');
      },
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: false,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    }),
    extractor,
    new HtmlWebpackPlugin({ title: 'Poet App', template: 'src/index.html' }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(environment),
        FROST_API_URL: JSON.stringify(process.env.FROST_API_URL),
      }
    }),
    new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'), // See Note 1 at the bottom
  ]

  const developmentPlugins = [
    new webpack.HotModuleReplacementPlugin(),
  ]

  const nonDevelopmentPlugins = [
    new CopyWebpackPlugin([
      {
        from: './_redirects',
        to: './_redirects',
        toType: "file",
      },
      {
        from: './_headers',
        to: './_headers',
        toType: "file",
      }
    ])
  ]

  const environmentSpecificPlugins = environment === 'development'
    ? developmentPlugins
    : nonDevelopmentPlugins

  return [
    ...plugins,
    ...environmentSpecificPlugins,
  ]
}

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/bootstrap.ts',
      './src/index.tsx',
      // ...(development ? ['webpack-hot-middleware/client'] : [])
      ...(development ? [`webpack-dev-server/client?http://localhost:${process.env.PORT_WEBPACK_SERVER || 4000}`, 'webpack/hot/dev-server' ]: [])
    ],
    vendor,
  },

  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: "/"
  },

  devtool: production || testing || qa ? '' : 'eval',

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json', '.css', '.scss'],
    alias: {
      Configuration: path.resolve(configurationPath)
    },
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, use: production
        ? ['babel-loader', 'awesome-typescript-loader']
        : ['react-hot-loader/webpack', 'babel-loader', 'awesome-typescript-loader'],
        exclude: [/\.stories.tsx?$/, /\.test.ts$/]
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, "./src/components/styles")],
              sourceMap: true,
            }
          },
        ]
      },
      { test: /\.svg$/, use: 'file-loader' },
      { test: /\.ico$/, use: 'file-loader?name=[name].[ext]' },
    ],
  },

  plugins: getPlugins(environment),
}

/*
Notes

1.
As suggested by https://github.com/andris9/encoding/blob/c1e3c5f5e10d47bdfcfece14a73ab14cdc9bc361/lib/encoding.js#L5 to avoid WebPack warnings.
See https://github.com/webpack/webpack/issues/196 and https://github.com/andris9/encoding/issues/16#issuecomment-192161073.
The underlying issue probably is poet-js using node-fetch rather than isomorphic-fetch.

 */
