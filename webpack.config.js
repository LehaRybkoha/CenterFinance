const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const json = require('./src/requests.json');

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
                test: /\.jsx|js$/,
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
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules")
        }
    },
  plugins: [
    new CopyPlugin([
      { from: './src/views/react.jsx', to: 'react.jsx' },
    ]),
  ],
};