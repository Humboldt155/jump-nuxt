module.exports = {

  generate: {
    routes: [
      '/models/200767',
      '/models/200615'
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jump',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Jump project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */

  plugins: [
    '~plugins/buefy.js',
    '~plugins/font-awesome.js',
    '~plugins/vue-json-excel.js',
    '~plugins/bootstrap-vue.js',
  ],
  loading: { color: '#09d880' },
  /*
  ** Build configuration
  */
  modules: [
    'bootstrap-vue/nuxt',
  ],
  build: {
    vendor: [
      'axios',
      'buefy',
      'bootstrap-vue'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      /* if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      } */
    }
  }
}
