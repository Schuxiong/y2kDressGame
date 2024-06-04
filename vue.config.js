const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/y2kDressGame/'  // 替换 <REPO> 为你的仓库名称
    : '/'
})
