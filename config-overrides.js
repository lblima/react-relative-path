const { injectBabelPlugin } = require('react-app-rewired');

const rootImportConfig = [
    "root-import",
    {
        rootPathPrefix: "~",
        rootPathSuffix: "src"
    }
];

module.exports = config => injectBabelPlugin(rootImportConfig, config);