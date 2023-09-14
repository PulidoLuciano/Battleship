const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = () => {
    return {
        entry: './src/index.js',
        output: {
            filename: "main.js",
            path: path.resolve(__dirname, 'build'),
        }, 
        plugins: [
            new HtmlWebpackPlugin({template: "./src/index.html"})
        ],
        devServer: {
            open: true,
        }
    }
}