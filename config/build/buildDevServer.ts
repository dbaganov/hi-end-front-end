import {BuildOptions} from "./types/config";
import webpackDevServer from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): webpackDevServer.Configuration {
    return {
        hot: true,
        open: true,
        port: options.port,
        historyApiFallback: true,
    };
}
