<!--本组件用于展示横幅图片组件，用法如下-->
<!--
<banner-image HeadImage="" SubImage=""/>
HeadImage是主图(一定要有)
SubImage是附图（可以没有）,SubImage是在屏幕小于等于md（768px）下显示的，目的是为了自适应屏幕。因为小屏幕显示大图会缩小。
注意：
1、如果要link属性，可直接在父组件引入的时候这样写： <banner-image link HeadImage=""/>
2、图片最高max-height为1080，如果超过这个值可能会不匹配。
-->
<script setup lang="ts">
import {onMounted, ref,defineProps} from "vue";

const {locale, setLocale} = useI18n()

const pro = defineProps({
  /**
   * 大尺寸图片（不可为空）
   */
  HeadImage: {
    type: String,
    required: true
  },
  /**
   * 小尺寸图片
   */
  SubImage: {
    type: String,
    required: false
  }
})
/**
 * 屏幕尺寸
 */
const screenSize = ref({width: 0, height: 0});
/**
 * 图片加载是否完成
 */
const imageLoad = ref(false)

/**
 * 获取适当的图片（自适应）
 */
const getImage: any = computed(() => {
  if(pro.SubImage===undefined){
    return pro.HeadImage
  }
  if (screenSize.value.width <= 768) {
    return pro.SubImage;
  } else {
    return pro.HeadImage;
  }
})
// 更新屏幕尺寸的方法
const updateScreenSize = () => {
  screenSize.value = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  // console.log("屏幕尺寸", screenSize.value.width)
};

/**
 * 图片加载完成回调
 * @param val 图片地址
 */
const image_load = (val: any) => {
  // console.log("Image load successfully")
  imageLoad.value = true;
}
onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
  // 初始化屏幕尺寸
  updateScreenSize();
})
// 组件卸载时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});

</script>

<template>
  <v-card flat elevation="0" class="rounded-0">
    <v-img
        cover
        max-height="1080"
        @load="image_load"
        :src="getImage"/>
    <v-skeleton-loader v-if="!imageLoad" height="760">
    </v-skeleton-loader>
  </v-card>
</template>

<style scoped>

</style>