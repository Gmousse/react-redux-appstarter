const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
        './src/index.js',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/public/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
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
            loader: 'style-loader!css-loader!postcss-loader',
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
    postcss: [autoprefixer({
        browsers: ['last 2 versions'],
    })],
};
