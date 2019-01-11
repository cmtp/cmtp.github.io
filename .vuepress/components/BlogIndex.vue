<template>
<div>
    <div v-for="post in posts">
        <h2>
            <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
        </h2>
        <span>{{ date(post) }}</span>
        <p>{{ post.frontmatter.description }}</p>

        <p><router-link :to="post.path">{{ readMoreText }}</router-link></p>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'language'
    ],
    computed: {
        posts() {
            if (this.language === 'en') {
                return this.$site.pages
                .filter(x => x.path.startsWith('/en/blog/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
            }
            return this.$site.pages
                .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        },
        readMoreText() {
            if (this.language === 'en') {
                return 'Read more'
            }
            return 'Leer más'
        }
    },
    methods: {
        date: function (post) {
            let date = new Date(post.frontmatter.date).toLocaleDateString(this.$lang, {month: 'long', year: 'numeric', day: 'numeric'});
            return date;
        }
    }
}
</script>