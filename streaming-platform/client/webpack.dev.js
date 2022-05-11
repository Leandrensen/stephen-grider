const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"development"`,
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    // Takes CSS imports and adds them to the HTML document
                    'style-loader',
                    // Knows how to deal with CSS imports
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'src')],
        historyApiFallback: true,
        hot: true,
        host: 'localhost',
        port: 9069,
        watchContentBase: true,
        allowedHosts: ['reactcrud.pm'],
    },
});
