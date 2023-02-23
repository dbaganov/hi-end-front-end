import webpack from "webpack";
import {BuildOptions} from "../types/config";

export default function fileLoader(options: BuildOptions): webpack.RuleSetRule {
    return {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            }
        ]
    };
}
