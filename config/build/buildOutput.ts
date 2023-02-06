import webpack from "webpack";

export function buildOutput(path: string): webpack.Configuration['output'] {
    return {
        filename: '[name].[contenthash].js',
        path,
        //clean: true,
    };
}
