import { isDev } from "./webpack/utils/env.js";

export default {
    presets: [
        '@babel/preset-env',
        ["@babel/preset-react", {runtime: "automatic"}],    
    ],
    plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                regenerator: true
            },
            isDev && 'react-refresh/babel'
        ].filter(Boolean)
    ]
}