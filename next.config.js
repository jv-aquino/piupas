const withImages = require('next-images');
const { createIncrementalProgram } = require('typescript');

module.exports = {
    webpack(config) {
        withImages();
        config.module.rules.push({
            test: /.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'encrypted-tbn0.gstatic.com',
              port: '',
              pathname: '/images',
            },
          ],
        unoptimized: true,
    },
    output: 'export',
    distDir: 'out',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    trailingSlash: true,
};
