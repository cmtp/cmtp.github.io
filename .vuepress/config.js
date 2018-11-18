module.exports = {
    base: 'cmtp.github.io',
    themeConfig: {
        locales: {
            '/': {
                title: 'My Site ',
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'English',
                // text for the edit-on-github link
                //   editLinkText: 'Edit this page on GitHub',
                // config for Service Worker 
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                // algolia docsearch options for current locale
                algolia: {},
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Blog', link: '/blog/' }
                ],
                //   sidebar: {
                //     '/': [/* ... */],
                //     '/nested/': [/* ... */]
                //   }
            },
            '/es/': {
                title: 'Mi Sitio ',
                selectText: 'Idiomas',
                label: 'Español',
                //   editLinkText: '在 GitHub 上编辑此页',
                serviceWorker: {
                    updatePopup: {
                        message: "Nuevo contenido esta disponible.",
                        buttonText: "Recargar"
                    }
                },
                nav: [
                    { text: 'Inicio', link: '/es/' },
                    { text: 'Blog', link: '/es/blog/' }
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
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: `Christian's Blog`,
            description: `Vue-powered Christian's Blog`
        },
        '/es/': {
            lang: 'es-ES',
            title: 'Blog de Christian',
            description: 'Blog de Christian hecho en Vue'
        }
    }
}