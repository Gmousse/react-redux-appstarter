const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            sourceMap: false,
            mangle: false,
        }),
    ],
    module: {
        loaders: [{
            test: /\.json$/,
            loaders: ['json'],
        }, {
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            loaders: [
                'babel',
            ],
        }, {
            test: /\.css$/,
            loaders: ['style', 'css'],
        }, {
            test: /\.(ico|jpe?g|png|gif)$/,
            loaders: ['file?name=[path][name].[ext]&context=./src'],
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loaders: ['file?name=[path][name].[ext]&context=./src'],
        }, {
            test: /\.(html|txt)$/,
            loaders: ['file?name=[path][name].[ext]&context=./src'],
        }],
    },
};
