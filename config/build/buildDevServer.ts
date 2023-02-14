import webpackDevServer from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): webpackDevServer.Configuration {
    return {
        hot: true,
        open: true,
        port: options.port,
        historyApiFallback: true,
    };
}
