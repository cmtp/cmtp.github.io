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
@media (min-width: 640px) and (max-width: 840px) {
    
}
@media (min-width: 841px) and (max-width: 1024px) {
    
}
</style>
