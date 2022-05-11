const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    // Embeds images into bundle.js if short size, or puts it on a separate file if large size
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name].[hash].[ext]',
                        },
                    },
                    // Compresses large size images
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            pngquant: {
                                quality: '80-90',
                                speed: 1,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: 'images/[name].[hash].[ext]',
                    },
                },
            },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: { minimize: true },
                },
            },
        ],
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 chunks: 'all',
    //                 name: 'vendor',
    //             },
    //         },
    //     },
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),

        new MomentLocalesPlugin({
            localesToKeep: ['es', 'es-us'],
        }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/styles/images/png-icons'),
                glob: '*.png',
            },
            target: {
                image: path.resolve(__dirname, 'src/styles/images/sprite.png'),
                css: path.resolve(__dirname, 'src/styles/images/sprite.scss'),
            },
            apiOptions: {
                cssImageRef: '../styles/images/sprite.png',
                generateSpriteName: (fullPathToSourceFile) => {
                    const { name } = path.parse(fullPathToSourceFile);
                    return `sprite-${name}`;
                },
            },
        }),
    ],
};
