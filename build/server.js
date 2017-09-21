/**
 * Created by Eden on 2017/9/18.
 */
'use strict';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var open = require('open');
const compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    filename: "index.js",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    headers: {"X-Custom-Header": "yes"},
    stats: {colors: true}
});

server.listen(8018, function (err, result) {
    if (err)console.log(err);
    open('http://localhost:8018');
});