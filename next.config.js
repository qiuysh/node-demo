const withcss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withPlugins = require('next-compose-plugins');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

if(typeof require !== 'undefined'){
  require.extensions['.css']=file=>{}
}
 
module.exports = withPlugins([withLess, withcss], {
  distDir: 'dist',  // 构建目录
  generateEtags: false, // 禁止 etag 生成
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  // cssModules: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/ 
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })

      // config.plugins.push(
      //   new FilterWarningsPlugin({
      //       exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      //   })
      // )
    }
    return config
  },
})