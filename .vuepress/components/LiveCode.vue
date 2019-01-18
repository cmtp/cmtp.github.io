<template>
  <div class="LiveCode">
    <iframe :src="url" frameborder="0"></iframe>
  </div>
</template>
<script>
export default {
    props: [
        'url'
    ]
};
</script>
<style scoped>
.LiveCode {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
.LiveCode iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
