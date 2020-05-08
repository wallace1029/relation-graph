module.exports = {
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '关系图谱',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  css: {
    extract: false
  },
  devServer: {
    proxy: {
      // CHD 认证模块
      '^/chd': {
        target: 'http://119.3.200.75:8010',
        changOrigin: true,
        bypass: function (req) {
          if (req.headers.accept.indexOf('html') !== -1) return '/index.html'
        }
      }
    }
  },

}