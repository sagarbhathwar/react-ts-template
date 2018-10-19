var path = require("path");
var webpack = require("webpack");

var config = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    entry: [
        path.resolve(__dirname, "src/index")
    ],
    target: "web",
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "main.js"
    },
    devServer: {
        contentBase: "./src"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, "src/"),
                loader: ["source-map-loader"],
                resolve: {
                    extensions: [".js", ".jsx"]
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                include: path.resolve(__dirname, "src/"),
                resolve: {
                    extensions: [".ts", ".tsx"]
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {}
                    }
                ]
            },
            {
                test: /(\.css)/,
                loaders: ["style-loader", "css-loader"]
            }

        ]
    }
};

module.exports = config;