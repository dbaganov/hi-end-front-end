import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";
import {BuildEnv} from "./config/build/types/config";

export default (env: BuildEnv) => {
    const mode = env.mode || "development";
    const isDev = mode === "development";
    const port = env.port || 3000;

    console.log(`Building in ${mode} mode...`);

    return buildWebpackConfig({
        isDev,
        mode,
        port,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
        },
    });
}
