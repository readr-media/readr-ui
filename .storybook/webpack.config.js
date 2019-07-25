module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.styl(us)?$/,
    use: ['vue-style-loader', 'css-loader', 'stylus-loader']
  })

  return config
}
