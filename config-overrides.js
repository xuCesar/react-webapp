// const { override, fixBabelImports } = require('customize-cra')

// module.exports = function override(config, env) {
//   console.log('override')
//   return config
// }

// module.exports = override(
//   fixBabelImports('import', {
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     style: 'css'
//   })
// )

// const {injectBabelPlugin} = require('react-app-rewired');
// const rewireLess = require('react-app-rewire-less');
// const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');

module.exports = function override(config, env) {
    config.resolve.alias['@src'] = resolve('src')
    config.resolve.alias['@cp'] = resolve('src/components')
    config.resolve.alias['@images'] = resolve('src/components')
    //do stuff with the webpack config...
    // config = rewireLess(config, env);
    // config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);
    //config = injectBabelPlugin(['transform-decorators-legacy'], config);
    //config = injectBabelPlugin(['transform-decorators'], config);
    // const modifyVars = {
    //     '@primary-color': '#00B7D8',
    //     '@error-color': '#faad14',
    // };
    // config = rewireLess.withLoaderOptions({modifyVars: modifyVars})(config, env);
    // config = rewireReactHotLoader(config, env);
    return config;
};

function resolve(dir) {
    return path.join(__dirname, dir);
}