module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        assets: '@/assets',
        pages: '@/pages'
      }
    }
  }
}
