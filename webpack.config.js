// webpack.config.js
const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    stats: 'minimal',
    devtool: 'nosources-source-map',
    performance: {
        hints: false,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
    },
};
