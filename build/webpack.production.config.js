/**
 * Created by Eden on 2017/9/18.
 */
'use strict';
var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: false,
    stats: {
        colors: true,
        reasons: false
    },
    entry: './src/index',
    output: {
        path: path.resolve('public'),
        publicPath: '/public/',
        //chunkFilename: '[id].chunk.js',
        filename: 'bundle.js',
        library: "d",
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'DEBUG': false
            }
        }),
        new UglifyJSPlugin()
    ],
    module: {
        rules: [
            {test: /\.css$/, use: [{loader: 'style-loader/useable'}, {loader: 'css-loader'}]},
            {test: /\.jsx?$/, use: {loader: 'babel-loader'}},
            {test: /\.js?$/, use: {loader: 'babel-loader'}}
        ]
    }
};









