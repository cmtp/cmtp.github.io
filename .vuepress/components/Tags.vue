<template>
  <div>
    <div v-for="post in posts">
      <Card :post="post"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  },
  computed: {
    posts() {
      if (this.$localePath.indexOf("en")) {
          let content = this.relatedContent();
        return content
          .filter(
            x => x.path.startsWith("/en/blog/") && !x.frontmatter.blog_index
          )
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          );
      }
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  },
  methods: {
    relatedContent() {
      if (this.$localePath.indexOf("en")) {
        return this.$site.pages
          .filter(x => {
            x.frontmatter.tags.filter(i => i === this.tag);
          });
      }
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  }
};
</script>
<style scoped>
</style>
