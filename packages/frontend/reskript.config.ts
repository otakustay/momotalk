import {configure} from '@reskript/settings';

export default configure(
    'webpack',
    {
        // https://reskript.dev/docs/settings/feature-matrix
        featureMatrix: {
            stable: {},
            dev: {},
        },
        // https://reskript.dev/docs/settings/build
        build: {
            appTitle: 'Momotalk',
            style: {
                modules: false,
            },
        },
        // https://reskript.dev/docs/settings/dev-server
        devServer: {
            port: 8788,
            apiPrefixes: ['/api'],
            defaultProxyDomain: 'example.com',
        },
    }
);
