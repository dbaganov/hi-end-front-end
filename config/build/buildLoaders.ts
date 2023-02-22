import webpack from "webpack";
import {BuildOptions} from "./types/config";
import tsLoader from "./loaders/tsLoader";
import cssLoader from "./loaders/cssLoader";
import svgLoader from "./loaders/svgLoader";
import fileLoader from "./loaders/fileLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    return [
        tsLoader(options),
        cssLoader(options),
        svgLoader(options),
        fileLoader(options),
    ];
}
