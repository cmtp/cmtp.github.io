<template>
    <img :src="$withBase('/images/posts/' + url)" :alt="alt">
</template>
<script>
export default {
    props: [
        'url',
        'alt'
    ]
}
</script>
