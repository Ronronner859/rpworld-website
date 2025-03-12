<!--YouTube播放器-->
<template>
  <v-overlay v-model="overlay" class="d-flex justify-center align-center">
    <!--接入youtobe的视频 -->
    <v-sheet>
      <video-youtube :video-url="VideoUrl" width="1500" height="800"/>
    </v-sheet>
  </v-overlay>
</template>

<script setup lang="ts">
import {onMounted, ref,defineProps} from "vue";

const {locale, setLocale} = useI18n()

const pro = defineProps({
  /**
   * 大尺寸图片（不可为空）
   */
  overlay: {
    type: boolean,
    required: true
  },
  /**
   * 小尺寸图片
   */
  VideoUrl: {
    type: String,
    required: false
  }
})
</script>

<style scoped>

</style>