<template>
  <div class="swiperWrap">
    <span v-if="props.trusted" class="main__trusted">TRUSTED BY</span>
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
  </div>
</template>

<script setup>
const props = defineProps({
  items: { type: Array, default: [] },
  maxPerView: { type: Number, default: 4 },
  bgColor: { type: String, default: "white" },
  trusted: { type: Boolean, default: false },
});
</script>

<style>
.swiperWrap {
    width: 100%;
    position: relative;
}
.customSwiper {
    width: 100%;
    padding: 20px 0;
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
.main__trusted {
    z-index: 2;
    position: absolute;
    left: 140px;
    top: -30px;
    color: #b2b5bb;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
}
.main__trusted:before {
   content: "";
   height: 28px;
   width: 50%;
   border-right: 2px dashed #b2b5bb;
   border-left: 2px dashed #b2b5bb;
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translate(-50%, 100%);
   opacity: 0.5;
   z-index: 2;
}
</style>
