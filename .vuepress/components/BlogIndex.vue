<template>
  <div>
    <div v-for="post in posts">
      <Card :post="post"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["language"],
  computed: {
    posts() {
      if (this.language === "en") {
        return this.$site.pages
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
  }
};
</script>
<style scoped>
</style>
