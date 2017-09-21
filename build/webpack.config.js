/**
 * Created by Eden on 2017/9/18.
 */
'use strict';
var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool:'source-map',
    entry: './src/index',
    output: {
        // path:path.join(__direname,'public'),
        path: path.resolve('public'),
        publicPath: '/public/',
        filename: "bundle.js"
    },
    module: {
        rules: [
            // {test: /\.css$/, use: [{loader: 'style-loader/useable'}, {loader: 'css-loader'}]},
            // {test: /\.jsx?$/, use: {loader: 'babel-loader'}},
            // {test: /\.js?$/, use: {loader: 'babel-loader'}}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};