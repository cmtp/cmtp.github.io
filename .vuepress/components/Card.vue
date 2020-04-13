<template>
  <div class="card">
    <div class="card-img">
      <!-- img -->
      <router-link :to="post.path">
        <img :src="$withBase('/images/banners/BannerTemplate' + post.frontmatter.type + '.jpg')" :alt="post.frontmatter.type">
      </router-link>
    </div>
    <div class="card-title">
      <h3>
        <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
      </h3>
    </div>
    
    <div class="card-resume">
      <small>{{ date(post) }}</small>
      <!-- description -->
      <p class="truncate">
        <router-link :to="post.path">{{ post.frontmatter.description }}</router-link></p>
      <!-- read more -->
      <p>
        <router-link :to="post.path">{{ readMoreText }}</router-link>
      </p>
    </div>
    <div class="card-footer">
      <!-- links -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {}
  },
  computed: {
    readMoreText() {
      if (this.$localePath.indexOf("en") > -1) {
        return "Read more";
      }
      return "Leer más";
    }
  },
  methods: {
    date: function(post) {
      let d = new Date(this.$page.frontmatter.date)
      d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
      let date = d.toLocaleDateString(
        this.$lang,
        { month: "long", year: "numeric", day: "numeric" }
      );
      return date;
    }
  }
};
</script>
<style scoped>
@media screen and (max-width: 450px) {
  .card {
    grid-template-areas: "header" "logo" "resume" "footer" !important;
    grid-template-columns: 1fr !important;
    text-align: center;
  }
  .card-resume {
    margin-left: 0 !important;
  }
}
.card {
  /* display: grid; */
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "header header" "logo resume" "footer footer";
  /* box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.2); */
  transition: 0.3s;
  margin-bottom: 15px;
}
.card:hover {
  /* box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); */
}
.card-title {
  grid-area: header;
}
.card-img {
  grid-area: logo;
}
.card-resume {
  grid-area: resume;
}
.card-footer {
  grid-area: footer;
}
.truncate {
  text-align: justify;
  --lh: 1.4rem;
  line-height: var(--lh);
  --max-lines: 3;
   position: relative;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  padding-right: 1rem; /* space for ellipsis */
}
.truncate::before {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0;
}
.truncate a {
  color: #2c3e50;
}
h3 {
  margin: 0;
}
</style>
