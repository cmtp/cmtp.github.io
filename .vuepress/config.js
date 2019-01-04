module.exports = {
    // base: 'cmtp.github.io',
    themeConfig: {
        locales: {
            '/': {
                title: 'Mi sitio',
                // text for the language dropdown
                selectText: 'Idiomas',
                // label for this locale in the language dropdown
                label: 'Español',
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
                    { text: 'Inicio', link: '/' },
                    { text: 'Blog', link: '/blog/' },
                    { text: 'Sobre mi', link: '/about/' }
                ],
                //   sidebar: {
                //     '/': [/* ... */],
                //     '/nested/': [/* ... */]
                //   }
            },
            '/en/': {
                title: 'My Syte',
                selectText: 'Languages',
                label: 'English',
                //   editLinkText: '在 GitHub 上编辑此页',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Blog', link: '/en/blog/' },
                    { text: 'About', link: '/en/about/' }
                ],
                algolia: {},
                //   sidebar: {
                //     '/zh/': [/* ... */],
                //     '/zh/nested/': [/* ... */]
                //   }
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@images': '/img'
            }
        }
    },
    locales: {
        // Label for this locale in the language dropdown
        // label: 'English',
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'es-ES', // this will be set as the lang attribute on <html>
            title: `christiantola.dev`,
            description: `Blog de Christian hecho en Vue`
        },
        '/en/': {
            lang: 'en-US',
            title: 'christiantola.dev',
            description: `Vue-powered Christian's Blog`
        }
    }
}