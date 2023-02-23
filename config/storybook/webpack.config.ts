import webpack from 'webpack';
import path from 'path';
import { BuildOptions, BuildPaths } from '../build/types/config';
import cssLoader from '../build/loaders/cssLoader';
import svgLoader from '../build/loaders/svgLoader';
import buildDefinePlugin from '../build/plugins/buildDefinePlugin';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        output: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };
    const options: BuildOptions = {
        isDev: true,
        mode: 'development',
        paths
    };

    // eslint-disable-next-line no-param-reassign
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(cssLoader(options));
    config.module.rules.push(svgLoader(options));
    config.plugins.push(buildDefinePlugin(options));

    return config;
};
