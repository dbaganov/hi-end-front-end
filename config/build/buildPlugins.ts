import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import buildDefinePlugin from "./plugins/buildDefinePlugin";
import {BuildOptions} from "./types/config";
import buildHtmlWebpackPlugin from "./plugins/buildHtmlWebpackPlugin";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const progressPlugin = new webpack.ProgressPlugin();
    const htmlWebpackPlugin = buildHtmlWebpackPlugin(options);
    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[id].[contenthash].css",
    });
    const definePlugin = buildDefinePlugin(options);
    const hotModuleReplacementPlugin = new ReactRefreshPlugin();
    const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({ openAnalyzer: false });

    const plugins = [
        progressPlugin,
        htmlWebpackPlugin,
        miniCssExtractPlugin,
        definePlugin,
    ];

    if (options.isDev) {
        plugins.push(hotModuleReplacementPlugin);
        plugins.push(bundleAnalyzerPlugin);
    }

    return plugins;
}
