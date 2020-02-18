<template>
  <div class="blog-list">
    <div v-for="post in posts" class="blog-item">
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
.blog-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.blog-item {
  width: 100%;
}
/* large desktop */
@media screen and (min-width: 900px) {
.blog-item {
  width: 30%;
}
}
/* tablet */
@media (max-width: 899px) and (min-width: 600px) {
  .blog-item {
    width: 45%;
  }
}
</style>
