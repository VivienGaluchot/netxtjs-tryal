const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
    /** @type {import('next').NextConfig} */
    let config = {};
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        config = {
            ...config,
            reactStrictMode: true,
            webpack: (config, context) => {
                config.watchOptions = {
                    poll: 1000,
                    aggregateTimeout: 300
                }
                return config
            }
        };
    }
    if (process.env.BASE_PATH != "") {
        config = {
            ...config,
            basePath: process.env.BASE_PATH,
        };
    }
    return config;
}