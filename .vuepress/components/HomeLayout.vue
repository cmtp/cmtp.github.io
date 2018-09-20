<template>
    <div>
        <div class="banner">
            <img :src="$withBase('/banner.jpg')" alt="banner">
        </div>
        <div class="page">
            <Content />
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.banner {
    max-width: 100%;
    margin: auto;
    
}
</style>
