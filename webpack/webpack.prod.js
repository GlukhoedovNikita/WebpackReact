import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserJSPlugin from 'terser-webpack-plugin'

export default {
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader]
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            chunkFilename: 'chunk.[contenthash].css',
            filename: 'bundle.[contenthash].css',
        })
    ],

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin()],
    },
}