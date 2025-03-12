<script setup lang="ts">
import { useUserPinia } from '~/stores/user'
import { storeToRefs } from "pinia";
import { onMounted, ref, onBeforeMount } from "vue";
// 用tm代替t，因为tm是响应式的而且可以解析对象
const { locale, setLocale, tm } = useI18n()
const userStore = useUserPinia()
const { token, rating_five } = storeToRefs(userStore);


/**
 * 屏幕尺寸
 */
const screenSize = ref({ width: 0, height: 0 });

/**
 * 图片是否加载完成
 */
const home_image1_load = ref(false)

/**
 * 获取组元素组件的宽度
 */
const getGroupWidth: any = computed(() => {
  if (screenSize.value.width > 1470) {
    return 1440;
  } else if (screenSize.value.width > 1008) {
    return 1000;
  } else {
    return 560;
  }
})

/**
 * 响应式i18n
 */
const image_icons = computed(() => {
  return tm("shop.body.choose.shopIcons");
})

const style_images = computed(() => {
  return tm("shop.body.choose.shopList")
})
const qualityIcons = computed(() => {
  return tm("shop.body.qualityIcons")
})
const buyers = computed(() => {
  return tm("shop.body.buyer")
})
const populars = computed(() => {
  return tm("shop.body.popular")
})
const brandIcons = computed(() => {
  return tm("shop.body.brandIcons")
})
const photo_images = computed(() => {
  return tm("shop.body.photos")
})

// 更新屏幕尺寸的方法
const updateScreenSize = () => {
  screenSize.value = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  // console.log("屏幕尺寸", screenSize.value.width)
};

onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
  // 初始化屏幕尺寸
  updateScreenSize();
})

// 组件卸载时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});

/**
 * 图片加载完成回调
 * @param val 图片地址
 */
const image_load = (val: any) => {
  // console.log("Image load successfully")
  home_image1_load.value = true;
}

</script>

<template>
  <v-app>
    <!-- 主图-->
    <v-sheet class="banner-container">
      <img src="~/assets/imgs/banner.jpg" alt="banner" class="banner-image" @load="image_load">
    </v-sheet>

    <!--  grocery shopping to hailing taxis, businesses across industries—healthcare, education, banking, and e-commerce—are shifting toward flexible and tailored solutions that meet the unique needs of customers. The manufacturing industry is no exception. On-demand manufacturing is a transformative approach that caters to the modern manufacturing demand for speed, flexibility, and precision. By enabling faster production cycles and unparalleled customization, on-demand manufacturing has become the go-to solution for turning innovative ideas into tangible results. -->
    <v-sheet class="grocery-shopping-container">
      <div class="grocery-shopping">
        {{ $t('rp-center-text.title') }}
      </div>
    </v-sheet>

    <!-- company introduction-->
    <v-sheet class="company-intro">
      <div class="container mx-auto px-0">
        <div class="intro-content">
          <!-- Text Content -->
          <div class="intro-text">
            <p class="intro-paragraph">
              {{ $t('rp-center-text.subtitle') }}
            </p>

            <ul class="industry-list">
              <!-- Medical Devices -->
              <li class="industry-item">
                <span>
                  <span class="industry-title">{{ $t('rp-center-text.medical_devices') }}</span>
                  {{ $t('rp-center-text.medical_devices_text') }}
                </span>
              </li>

              <!-- Scientific Instruments -->
              <li class="industry-item">
                <span>
                  <span class="industry-title">{{ $t('rp-center-text.scientific_instruments') }}</span>
                  {{ $t('rp-center-text.scientific_instruments_text') }}
                </span>
              </li>

              <!-- Automotive -->
              <li class="industry-item">
                <span>
                  <span class="industry-title">{{ $t('rp-center-text.automotive') }}</span>
                  {{ $t('rp-center-text.automotive_text') }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Single Right Image -->
          <div class="intro-image">
            <img src="~/assets/imgs/img-04.png" alt="Manufacturing Process" class="main-image">
          </div>
        </div>
      </div>
    </v-sheet>

    <!--  标题：Fabrication à la demande vs. fabrication traditionnelle -->
    <v-sheet class="fabrication-title">
      <div class="container mx-auto">
        <div class="title">
          {{ $t('rp-center-text.title_fabrication') }}
        </div>
      </div>
    </v-sheet>

    <v-sheet class="grocery-shopping-container">
      <div class="grocery-shopping">
        {{ $t('rp-center-text.title_fabrication_text') }}
      </div>
    </v-sheet>

    <!-- Why We Love On-Demand Manufacturing -->
    <v-sheet class="on-demand-manufacturing">
      <div class="container mx-auto">
        <div class="title font-bold">
          {{ $t('rp-center-text.on_demand_manufacturing') }}
        </div>
      </div>
    </v-sheet>

    <!-- On-demand manufacturing is a game-changer for businesses, combining speed, flexibility, and cost-efficiency in ways traditional methods cannot. Here's why it matters: -->
    <v-sheet class="on-demand-manufacturing-text">
      <div class="grocery-shopping">
        {{ $t('rp-center-text.on_demand_manufacturing_text') }}
      </div>
    </v-sheet>

    <!-- manufacturing-box -->
    <v-sheet class="manufacturing-box py-12">
      <div class="container mx-auto px-4">
        <div class="manufacturing-grid">
          <!-- 1. Flexibility and Personalization -->
          <div class="manufacturing-item">
            <div class="item-header">
              <h3 class="item-title">1. Flexibility and Personalization</h3>
            </div>
            <div class="item-content">
              <div class="text-content">
                <p class="mb-4">
                  On-demand manufacturing enables businesses to produce exactly what is needed, precisely when it's needed. This is especially beneficial for:
                </p>
                <ul class="benefit-list">
                  <li>Prototyping and product testing</li>
                  <li>Low-volume production runs</li>
                  <li>Highly customized or specialty parts</li>
                </ul>
                <p class="mt-4">
                  For instance, in the medical sector—where precision and personalization are critical—on-demand manufacturing allows for the rapid production of tailored components for advanced medical devices.
                </p>
              </div>
              <div class="image-content">
                <img src="~/assets/imgs/img-03.jpg" alt="Manufacturing Process" class="feature-image">
              </div>
            </div>
          </div>

          <!-- 2. Faster Turnaround Times -->
          <div class="manufacturing-item">
            <div class="item-header">
              <h3 class="item-title">2. Faster Turnaround Times</h3>
            </div>
            <div class="item-content">
              <p class="mb-4">
                Time waits for no one, especially in industries where innovation drives competition. On-demand manufacturing's streamlined workflows and advanced technologies slash production timelines, enabling businesses to move from design to delivery in record time.
              </p>
              <p>
                This rapid turnaround can be extremely beneficial for industries like automotive and consumer electronics, where staying ahead of trends can make or break a product's success. The ability to quickly iterate and refine designs ensures companies remain at the forefront of their markets.
              </p>
            </div>
          </div>

          <!-- 3. Cost Efficiency & Resource Optimization -->
          <div class="manufacturing-item">
            <div class="item-header">
              <h3 class="item-title">3. Cost Efficiency & Resource Optimization</h3>
            </div>
            <div class="item-content">
              <p class="mb-4">
                Traditional manufacturing relies on bulk production, leading to higher costs, excess inventory, and logistical inefficiencies. On-demand manufacturing eliminates these issues by:
              </p>
              <ul class="benefit-list">
                <li>Producing only what is required, reducing waste</li>
                <li>Lowering storage and inventory costs</li>
                <li>Allowing smaller businesses to access high-quality manufacturing without massive investments</li>
              </ul>
            </div>
          </div>

          <!-- 4. Innovation at Its Core -->
          <div class="manufacturing-item">
            <div class="item-header">
              <h3 class="item-title">4. Innovation at Its Core</h3>
            </div>
            <div class="item-content">
              <div class="text-content">
                <p class="mb-4">
                  With lower production barriers, startups, inventors, and established businesses can experiment with new ideas and iterate rapidly. Recent years have shown how on-demand manufacturing drives groundbreaking advancements, such as:
                </p>
                <ul class="benefit-list">
                  <li>Pandemic-related innovations – Rapid prototyping of ventilators and protective gear</li>
                  <li>Next-gen scientific instruments – Agile development of cutting-edge laboratory equipment</li>
                  <li>Smart home technology – Fast-tracking new devices for modern living</li>
                </ul>
              </div>
              <div class="image-content">
                <img src="~/assets/imgs/img-02.jpg" alt="Innovation Process" class="feature-image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-sheet>

  </v-app>

</template>

<style scoped lang="scss">


.grocery-shopping-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
}

.grocery-shopping {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 16px;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 12px;
  }
}

/* 确保图片在移动端也能自适应 */
img {
  max-width: 100%;
  height: auto;
}

/* 容器响应式布局 */
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
}

/* 响应式间距 */
.pt-8 {
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
}

.pb-10 {
  @media (max-width: 768px) {
    padding-bottom: 2.5rem;
  }
}

/* 响应式文本大小 */
.text-2xl {
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
}

.text-3xl {
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
}

/* 响应式间距调整 */
.gap-8 {
  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
}

/* 移动端文本对齐 */
@media (max-width: 768px) {
  .text-center-mobile {
    text-align: center;
  }

  .flex-col-mobile {
    flex-direction: column;
  }

  .w-full-mobile {
    width: 100%;
  }
}

// company introduction
.company-intro {
  background-color: #ffffff;
  color: #333333;
}

.container {
  max-width: 1100px;
  // margin: 0 auto;
  padding: 0;
}

.intro-content {
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 991px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
}

.intro-text {
  flex: 1;
}

.intro-paragraph {
  font-size: 1rem;
  color: #413E3A;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.intro-image {
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 991px) {
    order: -1; // Show image first on mobile
    width: 100%;
  }
}

.main-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: contain;

  @media (min-width: 992px) {
    max-width: none;
  }
}

.industry-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.industry-item {
  display: flex;
  position: relative;
  padding-left: 1.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 1rem;
  }

  &:before {
    content: "•";
    color: #3B82F6;
    font-weight: bold;
    position: absolute;
    left: 0;

    @media (max-width: 768px) {
      top: 0.25rem;
    }
  }
}

.industry-title {
  font-weight: bold;
  color: #0396f7;
  min-width: 160px;
  text-decoration: underline;

  @media (max-width: 768px) {
    display: block;
    padding: 0 16px;
  }
}

// 标题：Fabrication à la demande vs. fabrication traditionnelle
.fabrication-title {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0 0 0;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
}

.manufacturing-box {
  background-color: #ffffff;
}

.manufacturing-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.manufacturing-item {
  .item-header {
    margin-bottom: 1.5rem;
  }

  .item-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
  }

  .item-content {
    display: flex;
    gap: 2rem;
    align-items: flex-start;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .text-content {
    flex: 1;
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }

  .image-content {
    flex: 1;
    
    @media (max-width: 768px) {
      width: 100%;
      order: -1;
    }
  }

  .feature-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
}

.benefit-list {
  list-style: none;
  padding-left: 1.5rem;
  margin: 1rem 0;

  li {
    position: relative;
    margin-bottom: 0.5rem;
    
    &:before {
      content: "•";
      color: #3B82F6;
      position: absolute;
      left: -1.5rem;
      font-weight: bold;
    }
  }
}

@media (max-width: 768px) {
  .manufacturing-box {
    padding: 2rem 1rem;
  }

  .manufacturing-grid {
    gap: 2rem;
  }

  .manufacturing-item {
    .item-header {
      margin-bottom: 1rem;
    }

    .item-title {
      font-size: 1.125rem;
    }

    .item-content {
      gap: 1rem;
    }
  }
}
</style>