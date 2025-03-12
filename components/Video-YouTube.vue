<!--油管播放插件-->
<template>
  <div>
    <iframe title="vimeo-player" :src="props.videoUrl" :width="props.width" :height="props.height"
            frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";

const props = defineProps({
  videoUrl: String,
  width: String,
  height: String,
})

onMounted(() => {
  console.log("width", props.width)
})
</script>

<style scoped>

</style>