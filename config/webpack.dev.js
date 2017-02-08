var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var webpack = require('webpack');
const API_URL = process.env.API_URL = 'http://localhost:9200/'; //ES

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:3000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
          'API_URL': JSON.stringify(API_URL)
        }),
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
