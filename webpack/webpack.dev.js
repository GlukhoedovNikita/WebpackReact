import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"

export default {

    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                ]
            }
        ]
    },

    plugins: [
        new ReactRefreshWebpackPlugin(),
    ],

    devServer: {
        // open: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
        static: {
            publicPath: '/'
        }
    }
}