import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(templatePath: string): webpack.WebpackPluginInstance[] {
    const progressPlugin = new webpack.ProgressPlugin();
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: templatePath
    });
    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[id].[contenthash].css",
    });

    return [
        progressPlugin,
        htmlWebpackPlugin,
        miniCssExtractPlugin,
    ];
}
