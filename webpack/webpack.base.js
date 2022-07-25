import HtmlWebpackPlugin from 'html-webpack-plugin'

import { isDev, mode } from './utils/env.js'
import { pathResolve } from './utils/pathResolve.js'

export default {
    mode: mode,
    entry: pathResolve('src/index.jsx'),
    output: {
        path: pathResolve('dist'),
        filename: isDev ? '[name].js' : '[name].[contenthash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },

            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: [
                    'css-loader',
                    'sass-loader',
                ]
            },

            {
                test: /\.(jpg|png|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.svg/,
                type: 'asset/inline',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: pathResolve('public/index.html')
        })
    ],

    devtool: 'inline-source-map',
    resolve: {
        alias: {
            '@components': pathResolve('src/components/'),
            '@pages': pathResolve('src/pages/'),
            '@hooks': pathResolve('src/hooks/'),
            '@assets': pathResolve('src/assets/'),
            '@redux': pathResolve('src/redux/'),
            '@styles': pathResolve('src/styles/'),
            '@constants': pathResolve('src/constans/'),
            '@services': pathResolve('src/services/'),
            '@utils': pathResolve('src/utils/'),
        },
        extensions: ['.js', '.jsx']
    }
}