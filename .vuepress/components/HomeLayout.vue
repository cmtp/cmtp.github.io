<template>
    <div>
        <div class="banner">
            <img :src="$withBase('/banner.jpeg')" alt="banner" class="img-responsive" />
        </div>
        <div>
          
        </div>
        <div class="page">
            <Content />
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.content.custom {
    max-width: 740px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
}
.banner {
  max-width: 100%;
  margin: auto;
  text-align: center;
}
.img-responsive {
    width: 100%;
    height: auto;
    margin: auto;
  }
@media (min-width: 841px) and (max-width: 1024px) {
  .img-responsive {
    width: 100%;
    height: auto;
    margin: auto;
  }
}
@media only screen and (min-width: 1024px) {
  .img-responsive {
    max-width: 1024px;
    width: 1024px;
    height: auto;
    margin: auto;
  }
}
</style>
