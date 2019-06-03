import pkg from './package';

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    '~/node_modules/flag-icon-css/css/flag-icon.min.css',
    /* Import Simple Line Icons Set */
    '~/node_modules/simple-line-icons/css/simple-line-icons.css',
    /* Import Core SCSS */
    '@/assets/scss/style.scss',
    /* Import Custom CSS */
    '@/assets/css/main.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/plugins.js', '~/plugins/fontawesome.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-simple-line-icons',
    'nuxt-fontawesome',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
