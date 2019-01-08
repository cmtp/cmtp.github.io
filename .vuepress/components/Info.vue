<template>
    <div>
        <a :href="path">Christian Tola</a> <span>{{date}}</span>
        <Badge :text="tag" v-for="tag,key in tags" :key="key"/>
    </div>    
</template>
<script>
import moment from "moment";

export default {
    computed: {
        path() {
            return this.$localePath + 'about/';
        },
        tags() {
            return this.$page.frontmatter.tags;
        },
        date() {
            return (this.$localePath.indexOf('en') === -1 ? 'Fecha: ' : 'Date: ') + this.$page.frontmatter.date;
        }
    }
}
</script>
<style scoped>

</style>
