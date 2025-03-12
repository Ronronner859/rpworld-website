<!--两个沙发展示组件-->
<template>
  <v-sheet color="transparent" class="py-16 d-md-flex justify-md-space-evenly">
    <div v-for="item in Items" :key="item.id" class="">
      <v-card color="transparent"
              class="d-flex justify-center"
              flat>
        <div>
          <div class="d-flex justify-center ">
            <div class="pb-4 ">
              <v-img cover class="rounded-full" width="80" :src="item.imageUrl"/>
            </div>
          </div>
          <div class=" sm:w-[350px] w-[280px] pb-8">
            <p class="text-center text-base  text-[#413e3a] leading-normal">
              {{ item.text }}
            </p>
            <h1 class="text-center font-semibold leading-normal py-4"> {{ item.title }}</h1>
            <div class="d-flex justify-center">
              <v-rating
                  v-model="rating_five"
                  size="default"
                  readonly
                  half-increments
                  active-color="#bf9b81"
                  color="#C1C1C1"
                  density="compact"
              ></v-rating>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {storeToRefs} from "pinia";

const userStore = useUserPinia()
const {rating_five} = storeToRefs(userStore);

interface sofa {
  id: number;
  imageUrl: string;
  title: string;
  text: string;
}

const props = defineProps<{
  Items?: sofa[]
}>()

</script>

<style scoped>

</style>e>