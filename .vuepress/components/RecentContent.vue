<template>
    <div>
        <div v-for="post in recentFiles">
            <h2>
                <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
            </h2>
            
            <p>{{ post.frontmatter.description }}</p>

            <p><router-link :to="post.path">Read more</router-link></p>
        </div>
        <!-- <ul>
            <li v-for="post in recentFiles">
                <a :href="post.path">{{post.title}}</a>
            </li>
        </ul> -->
    </div>    
</template>
<script>
export default {
    props: [
        'language'
    ],
	data() {
		return {};
	}, 
	computed:{
		recentFiles() {
			let files = this.$site.pages.filter(p => {
                if( this.language === 'es')
				    return p.path.indexOf('/es/blog/') >= 0 && p.title !== 'Blog';
                return p.path.indexOf('/blog/') >= 0 && p.path.indexOf('/es/') < 0 && p.title !== 'Blog';
			}).sort((a,b) => {
				let aDate = new Date(a.frontmatter.published).getTime();
				let bDate = new Date(b.frontmatter.published).getTime();
				let diff = aDate - bDate;
				if(diff < 0) return -1;
				if(diff > 0) return 1;
				return 0;
			}).slice(0,5);
			return files;
		}
	}
}
</script>
<style>
</style>
