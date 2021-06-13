export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aspire',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './node_modules/element-ui/packages/theme-chalk/src/index.scss',
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAYMtzUtr3QbGk0vjdNDGNlk973j7PV8x0',
          authDomain: 'aspire-53e52.firebaseapp.com',
          projectId: 'aspire-53e52',
          storageBucket: 'aspire-53e52.appspot.com',
          messagingSenderId: '218654494759',
          appId: '1:218654494759:web:347ac45b05b9889a2cbe02',
          measurementId: 'G-GTXQ30DS0Z'
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
          },
          firestore: true,
          storage: true,
          database: true,
        }
      }
    ]
  ],
  auth: {
    // Options
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'data.token',
  //         global: true,
  //         // required: true,
  //         // type: 'Bearer'
  //       },
  //       user: {
  //         property: 'data',
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: '/login', method: 'post' },
  //         logout: { url: '/logout', method: 'post' },
  //         user: { url: '/me', method: 'get' }
  //       }
  //     }
  //   }
  // },
  // axios: {
  //   baseURL: 'http://127.0.0.1:3333/api'
  // },
  // router: {
  //   middleware: ['auth']
  // },
  
}
