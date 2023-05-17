const HOSTNAME = "https://claire.dhenin.net";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Claire Dhénin - Développeuse web Free-lance',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Diplômée de la formation IG2I du groupe Centrale Lille, je suis développeuse web (back et front) depuis 2017, en free-lance depuis 2021. Je suis en télé-travail depuis Ornon (Isère) et je suis mobile ponctuellement sur Grenoble, Lyon et alentours.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#53230a' },
      { name: 'og:url', content: HOSTNAME },
      { name: 'og:title', content: 'Claire Dhénin - Développeuse web Free-lance' },
      { name: 'og:description', content: 'Diplômée de la formation IG2I du groupe Centrale Lille, je suis développeuse web (back et front) depuis 2017, en free-lance depuis 2021. Je suis en télé-travail depuis Ornon (Isère) et je suis mobile ponctuellement sur Grenoble, Lyon et alentours.' },
      { name: 'og:image', content: `${HOSTNAME}/og-image.png` },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'fr_FR' },
      { "http-equiv": 'Content-Security-Policy', content: "default-src 'self'; script-src 'self' 'sha256-yX/iyX7D+2AX+qF0YUk4EXLqu5fIbl/NS5QXjj9BX4M=';" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'canonical', href: HOSTNAME },
      { rel: 'preload', as: "image", href: '/assets/background/1900.webp', imagesrcset:"/assets/background/600.webp 500w, /assets/background/1200.webp 1200w, /assets/background/1900.webp 1900w", imagesizes: "100vw" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/image',
  ],

  styleResources: {
    // Order is important before variables and mixins are used in the others files and should be loaded first
    scss: [
      './assets/style/fonts.scss',
      './assets/style/variables.scss',
      './assets/style/layout.scss',
      './assets/style/effects.scss',
      './assets/style/elements.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxt/image', '@nuxtjs/robots', '@nuxtjs/sitemap'],

  sitemap: {
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    hostname: HOSTNAME,
    defaults: {
      changefreq: 'yearly',
      priority: 0.8,
      lastmod: new Date(),
    },
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: `${HOSTNAME}/sitemap.xml`,
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },

  optimization: {
    splitChunks: {
      maxSize: 300000
    }
  },
  image: {
    provider: 'static',
  }
}
