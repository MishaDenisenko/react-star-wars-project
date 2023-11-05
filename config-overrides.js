const path = require("path");

module.exports = {
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@constants': path.resolve(__dirname, 'src/constants/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@hoc-helpers': path.resolve(__dirname, 'src/hoc-helpers/'),
            '@services': path.resolve(__dirname, 'src/services/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
        }
    }
}