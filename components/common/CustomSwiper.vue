<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :slidesPerView="4"
    :simulateTouch="false"
    :loop="true"
    style="width: 100%;"
    spaceBetween="20"
    speed="50000"
    :freeMode="true"
    :free-mode-sticky="true"
    :autoplay="{
      delay: 0,
      disableOnInteraction: false,
    }"
    class="customSwiper"
  >
    <SwiperSlide v-for="slide in [0,1,2,3,4,5,6, 7]" :key="slide"
    :style="`background-color: ${['black', 'white', 'yellow', 'grey', 'purple', 'blue', 'red', 'green'][slide]};`">
      <strong>{{ slide }}</strong>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
</script>

<style>
.customSwiper .swiper-slide {
    transition-timing-function: linear !important;
}
</style>
