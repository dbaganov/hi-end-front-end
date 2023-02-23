// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildModules } from './buildModules';
import { buildEntry } from './buildEntry';
import { buildOutput } from './buildOutput';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;
    const entry = buildEntry(paths.entry);
    const output = buildOutput(paths.output);
    const plugins = buildPlugins(options);
    const resolve = buildResolvers(options);
    const module = buildModules(options);
    const devtool = options.isDev ? 'inline-source-map' : undefined;
    const devServer = options.isDev ? buildDevServer(options) : undefined;

    return {
        mode,
        entry,
        output,
        plugins,
        resolve,
        module,
        devtool,
        devServer,
    };
}
