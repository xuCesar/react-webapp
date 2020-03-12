const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path');

const resolve = dir => {
  return path.join(__dirname, dir);
}

module.exports = override(
  // antd按需加载，不需要每个页面都引入"antd/dist/antd.css"了
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  // 配置路径别名
  addWebpackAlias({
    '@': resolve('src'),
    '@cp': resolve('src/components'),
    '@img': resolve('src/images')
  })
)