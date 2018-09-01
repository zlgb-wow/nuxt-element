module.exports = {
  //新增proxy示例   https://www.npmjs.com/package/@nuxtjs/proxy
  modules: [
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api', { target: 'http://server.ainiugu666.com',pathRewrite:{'^/api' : '' } }
    ]
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-element',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#409EFF' },

  css: [
  'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
  plugins: [
    '@/plugins/element-ui',
    {
      src: '~/plugins/ajax',
      ssr: false
    },
    {
      src: '~/plugins/gloableMixin',
      ssr: true
    }
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios', 'qs'],
    loaders: [{
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: "url-loader",
      query: {
        limit: 10000,
        name: 'img/[name].[hash].[ext]'
      }
    }],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

