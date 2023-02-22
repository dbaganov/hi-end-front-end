import webpack from "webpack";
import {BuildOptions} from "../types/config";

export default function svgLoader(options: BuildOptions): webpack.RuleSetRule {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
}
