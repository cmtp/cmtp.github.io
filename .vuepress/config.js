module.exports = {
  // base: 'cmtp.github.io',
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }
    ],
    [
      "link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Pacifico|Roboto&display=swap"}
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ['link', { rel: "icon", href: "/favicon.ico" }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', { src: "https://www.google.com/recaptcha/api.js?render=6LcCmNEUAAAAABtpW4cic7ehTh_aCpyFQWiiSZQM"}],
    // ['link', {rel: "stylesheet", href: "/node_modules/toastr/build/toastr.min.css" }],
    // ['script', { src: "/node_modules/toastr/build/toastr.min.js" }]
  ],
  ga: 'UA-135140895-1',
  serviceWorker: true,
  themeConfig: {
    locales: {
      "/": {
        title: "ChristianTola",
        // text for the language dropdown
        selectText: "Idiomas",
        // label for this locale in the language dropdown
        label: "Español",
        // text for the edit-on-github link
        //   editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "Nuevo contenido disponible.",
            buttonText: "Recargar"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: "Inicio", link: "/" },
          // { text: "Blog", link: "/blog/" },
          { text: "Sobre mi", link: "/about/" },
          { text: "Contacto", link: "/contact/" }
        ]
        //   sidebar: {
        //     '/': [/* ... */],
        //     '/nested/': [/* ... */]
        //   }
      },
      // '/en/': {
      //     title: 'ChristianTola',
      //     selectText: 'Languages',
      //     label: 'English',
      //     //   editLinkText: '在 GitHub 上编辑此页',
      //     serviceWorker: {
      //         updatePopup: {
      //             message: "New content is available.",
      //             buttonText: "Refresh"
      //         }
      //     },
      //     nav: [
      //         { text: 'Home', link: '/en/' },
      //         // { text: 'Blog', link: '/en/blog/' },
      //         { text: 'About', link: '/en/about/' },
      //         { text: "Contact", link: "/contact/" }

      //     ],
      //     algolia: {},
      //     //   sidebar: {
      //     //     '/zh/': [/* ... */],
      //     //     '/zh/nested/': [/* ... */]
      //     //   }
      // }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@images": "/img"
      }
    }
  },
  locales: {
    // Label for this locale in the language dropdown
    // label: 'English',
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "es-ES", // this will be set as the lang attribute on <html>
      title: 'ChristianTola',
      description: `Blog de Christian hecho en Vue`
    },
    // '/en/': {
    //     lang: 'en-US',
    //     title: 'ChristianTola',
    //     description: `Vue-powered Christian's Blog`
    // }
  }
};
