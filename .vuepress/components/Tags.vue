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
      if (this.$localePath.indexOf("en") > -1) {
        return this.$site.pages
          .filter(
            x =>
              x.path.startsWith("/en/blog/") &&
              !x.frontmatter.blog_index &&
              this.hasTagRelated(x)
          )
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          );
      }
      return this.$site.pages
        .filter(
          x =>
            x.path.startsWith("/blog/") &&
            !x.frontmatter.blog_index &&
            this.hasTagRelated(x)
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  },
  methods: {
    hasTagRelated(x) {
      let result = false;
      let type = this.type;
      if (x.frontmatter.tags !== undefined) {
        x.frontmatter.tags.forEach(tag => {
          if (!result) {
            result = tag.toLowerCase() === type.toLowerCase();
          }
        });
      }
      return result;
    }
  }
};
</script>
<style scoped>
</style>
