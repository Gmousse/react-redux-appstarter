const autoprefixer = require('autoprefixer');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader',
            },
        ],
    },
    postcss: [autoprefixer({browsers: ['last 2 versions']})],
};
