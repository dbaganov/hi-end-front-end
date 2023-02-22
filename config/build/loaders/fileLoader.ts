import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {BuildOptions} from "../types/config";

export default function fileLoader(options: BuildOptions): webpack.RuleSetRule {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
                        auto: (resourcePath: string) => resourcePath.endsWith('.module.scss'),
                    }
                }
            },
            'sass-loader',
        ],
    };
}
