import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        extensions: ['.tsx', '.ts', '.js'],
        mainFiles: ['index'],
        alias: {}
    }
}

