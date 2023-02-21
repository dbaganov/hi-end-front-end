import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

export function buildPlugins(templatePath: string, isDev: boolean): webpack.WebpackPluginInstance[] {
    const progressPlugin = new webpack.ProgressPlugin();
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: templatePath
    });
    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[id].[contenthash].css",
    });
    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev)
    });
    const hotModuleReplacementPlugin = new ReactRefreshPlugin();
    const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({ openAnalyzer: false });

    return [
        progressPlugin,
        htmlWebpackPlugin,
        miniCssExtractPlugin,
        definePlugin,
        hotModuleReplacementPlugin,
        bundleAnalyzerPlugin
    ];
}
