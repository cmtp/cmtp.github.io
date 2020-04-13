<template>
  <div class="container">
    <div>
      <div>
        <a :href="path">Christian Tola</a>
        <Badge :text="tag" v-for="tag,key in tags" :key="key"/>
      </div>
      <span>{{date}}</span>
    </div>
    <div>
      <SocialButtons/>
    </div>
  </div>
</template>
<script>
import moment, { weekdays } from "moment";

export default {
  computed: {
    path() {
      return this.$localePath + "about/";
    },
    tags() {
      return this.$page.frontmatter.tags;
    },
    date() {
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
.container {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  margin-bottom: 10px;
}
.container > div {
  margin-right: 10px;
}
</style>
