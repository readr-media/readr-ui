module.exports = {
  css: {
    extract: false
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
