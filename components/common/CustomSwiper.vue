<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :slidesPerView="props.maxPerView"
    :simulateTouch="false"
    :loop="true"
    spaceBetween="20"
    :speed="40000"
    :freeMode="true"
    :free-mode-sticky="true"
    :autoplay="{
      delay: 0,
      disableOnInteraction: false,
    }"
    :style="`background-color: ${props.bgColor};`"
    class="customSwiper"
  >
    <SwiperSlide
      v-for="(slide, index)
      in props.items"
      :key="index"
      class="customSlide"
    ><slot name="item" :slide="slide" :index="index" /></SwiperSlide>
  </Swiper>
</template>

<script setup>
const props = defineProps({
  items: { type: Array, default: [] },
  maxPerView: { type: Number, default: 4 },
  bgColor: { type: String, default: "white" }
});
</script>

<style>
.customSwiper {
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: space-evenly;
}
.customSwiper .swiper-slide {
    transition-timing-function: linear !important;
}
.customSlide {
    display: flex;
    flex-direction: column;
}
</style>
