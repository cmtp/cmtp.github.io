<template>
  <div class="recent-posts">
    <div v-for="post in recentFiles" class="post">
      <!-- <h2>
                <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
            </h2>
            <span>{{ date(post) }}</span>
            <p>{{ post.frontmatter.description }}</p>

      <p><router-link :to="post.path">Read more</router-link></p>-->
      <Card :post="post"/>
    </div>
  </div>
</template>
<script>
export default {
  props: ["language"],
  data() {
    return {};
  },
  computed: {
    recentFiles() {
      let files = this.$site.pages
        .filter(p => {
          if (this.language === "en")
            return p.path.indexOf("/en/blog/") >= 0 && p.title !== "Blog";
          return (
            p.path.indexOf("/blog/") >= 0 &&
            p.path.indexOf("/en/") < 0 &&
            p.title !== "Blog"
          );
        })
        .sort((a, b) => {
          let aDate = new Date(a.frontmatter.date).getTime();
          let bDate = new Date(b.frontmatter.date).getTime();
          let diff = aDate - bDate;
          if (diff > 0) return -1;
          if (diff < 0) return 1;
          return 0;
        })
        .slice(0, 5);
      return files;
    }
  },
  methods: {
    date: function(post) {
      let date = new Date(post.frontmatter.date).toLocaleDateString(
        this.$lang,
        { month: "long", year: "numeric", day: "numeric" }
      );
      return date;
    }
  }
};
</script>
<style scoped>
.recent-posts {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
}
.post {
    width: 30%;
  }
</style>
