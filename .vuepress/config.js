module.exports = {
    // base: 'cmtp.github.io',
    title: 'My Site ',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' }
        ]
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': '/img'
            }
        }
    }
}