import webpack from "webpack";
import {BuildOptions} from "../types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default function buildHtmlWebpackPlugin(options: BuildOptions): webpack.WebpackPluginInstance {
    return new HtmlWebpackPlugin({
        template: options.paths.html
    });
}
