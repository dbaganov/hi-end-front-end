import webpack from "webpack";
import {BuildOptions} from "../types/config";

export default function buildDefinePlugin(options: BuildOptions): webpack.WebpackPluginInstance {
    return new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(options.isDev)
    });
}
