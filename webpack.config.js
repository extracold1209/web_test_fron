const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'server'),
    output: {
        path: path.join(__dirname, 'dist', 'server'),
        filename: 'server.bundle.js',
    },
    devtool: 'inline-source-map',
    target: 'node',
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader" }
        ]
    }
}
