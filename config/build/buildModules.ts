import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {BuildOptions} from "./types/config";

export function buildModules(options: BuildOptions): webpack.ModuleOptions {
    const rules = buildLoaders(options);

    return {
        rules
    };
}
