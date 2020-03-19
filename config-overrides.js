const { override, fixBabelImports, addBabelPlugin, addWebpackAlias } = require('customize-cra')
const path = require('path');

const resolve = dir => {
  return path.join(__dirname, dir);
}

module.exports = override(
  // antd按需加载，不需要每个页面都引入"antd/dist/antd.css"了
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addBabelPlugin('react-hot-loader/babel'),
  // 配置路径别名
  addWebpackAlias({
    '@': resolve('src'),
    '@cp': resolve('src/components'),
    '@img': resolve('src/images'),
    '@action': resolve('src/store/actions'),
    'react-dom':  process.env.NODE_ENV === 'production' ? 'react-dom' : '@hot-loader/react-dom'
  })
)