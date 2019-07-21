const path = require("path");
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/js/index.js"
    },
    
    output: {
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve("babel-loader"),
                    query: {
                        presets: [

                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            },
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules")
        }
    },
//   plugins: [
//     new CopyPlugin([
//       { from: './src/blocks/modules/search/import.js', to: './search' },
//       { from: './src/blocks/modules/search/search.js', to: './search' },
//       { from: './src/blocks/modules/search/inner.js', to: './search' },
//       { from: './src/blocks/modules/search/data.js', to: './search' },
//     ]),
//   ],
};