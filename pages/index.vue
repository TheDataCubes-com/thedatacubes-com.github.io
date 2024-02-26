<template>
  <Banner :static="true" :staticBreak="768" staticType="relative">
    <template v-slot:slot--title>
      <img
        ref="titleSlide"
        :src="`/svg/${currentSlide}.svg`"
        :alt="`mainSlide_${slideIndex}`"
        class="banner__img"
      />
      <!-- <svg class="banner__img">
        <use :xlink:href="'#' + currentSlide" />
      </svg> -->
    </template>
    <template v-slot:slot--secondary>
      <p
        v-for="(text, index) in bannerText"
        :key="index"
        v-html="text"
        class="banner__text"
      />
    </template>
  </Banner>
  <ClientOnly>
    <CommonCustomSwiper
      swiperId="index-trsuted"
      :items="trustedBy"
      :autoplay="true"
      :solo="true"
      class="index__swiper"
    >
      <template #item="itemProps">
        <div
          :style="`background-image: url(${itemProps.slide});`"
          class="partner__slide"
        />
      </template>
    </CommonCustomSwiper>
  </CLientOnly>
  <MainWhyUs />
  <MainServices />
</template>

<script setup>
const slides = (["keep-it-simple", "about-time"]);

const bannerText = ([
  "We transform data chaos into profitable insights, organizing and refining messy, siloed data into actionable intelligence that your Business team can easily work with. Our goal is to make you successful by helping you monetize every aspect of your data.",
  "Our comprehensive range of services includes Master Data Management, Customer&nbsp360, AI & Data Management strategy, each tailored to meet your unique business needs."
]);

const slideIndex = ref(1);
const titleSlide = ref(null);
const swiper = ref(null);

const trustedBy = ref([
  "/images/boa-logo.png",
  "/images/sonos-logo.png",
  "/images/bm-logo.png",
  "/images/pm-logo.svg",
  "/images/mattel-logo.png",
  "/images/svb-logo.png",
]);

const currentSlide = computed(() => slides[slideIndex.value % 2]);

const changeSlide = () => {
  if (slideIndex.value === 3) clearInterval(swiper.value);
  var className = "imgTransition";
  titleSlide.value?.classList.add(className);
  slideIndex.value += 1;
  setTimeout(() => titleSlide.value?.classList.remove(className), 100);
};

onMounted(() => {
  setTimeout(() => {
    changeSlide();
    swiper.value = setInterval(changeSlide, 7000);
  }, 6000);
});
onBeforeUnmount(() => swiper.value && clearInterval(swiper.value));
</script>

<style>
.banner__img {
    position: absolute;
    width: 55%;
    left: 0;
    transition: left 1s ease, opacity 1s ease;
}
.imgTransition {
    left: calc(100vh * 2);
    opacity: 0;
    transition: inital;
}
.index__swiper {
    margin: 0 auto;
    max-width: 1920px;
}
.partner__slide {
    place-self: center;
    width: 200px;
    height: 80px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
.banner__text {
    width: 100%;
    font-size: 24px;
    line-height: 1.7;
    font-weight: 300;
    max-width: 820px;
    color: white;
}
@media (max-height: 960px) {
    .banner__text {
        font-size: 20px;
    }
}
@media (max-height: 880px) {
    .banner__text {
        font-size: 18px;
    }
}
@media (max-width: 1659.99px) {
    .banner__text {
        font-size: 18px;
    }
}
@media (max-width: 1439.99px) {
    .banner__text {
        font-size: 16px;
    }
}
@media (max-width: 767.99px) {
    .banner__img {
        width: 100%;
    }
}
@media (max-width: 574.99px) {
    .banner__text {
        font-size: 14px;
    }
}
</style>
