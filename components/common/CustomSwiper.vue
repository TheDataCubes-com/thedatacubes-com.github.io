<template>
  <div class="swiperWrap">
    <div class="swiperCaption">
      <p class="captionItem">
        <span :style="`color:${props.solo ? '#b2b5bb' : 'var(--mainYellow)'};`" class="caption--highlight">TRUSTED BY</span>
        <span v-if="!props.solo" class="caption--tale">Fortune 500 companies and leading startups alike.</span>
      </p>
    </div>
    <div class="swiper customSwiper">
      <div class="swiper-wrapper">
        <div
          v-for="(slide, index) in props.items"
          class="swiper-slide customSlide"
        ><slot name="item" :slide="slide" :index="index" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swiper from "swiper";
import "swiper/css/bundle";
import { Autoplay } from 'swiper/modules';


const props = defineProps({
  items: { type: Array, default: [] },
  maxPerView: { type: Number, default: 4 },
  bgColor: { type: String, default: "white" },
  solo: { type: Boolean, default: false }
});

onMounted(() => {
  setTimeout(() => {
   new Swiper('.swiper', {
    modules: [Autoplay],
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    spaceBetween: 20,
    slidesPerView: props.maxPerView,
    slidesPerGroup: 1,
    speed: 60000,
   });
  }, 100);
});
</script>

<style>
.swiperWrap {
    width: 100%;
    position: relative;
}
.swiperWrap:before, .swiperWrap:after {
    position: absolute;
    top: 0;
    content: '';
    width: 20px;
    height: 100%;
    z-index: 10;
}
.swiperWrap:before{
    left: 0;
    background: linear-gradient(90deg, white 25%, hsla(0,0%,100%,0))
}
.swiperWrap:after {
   right: 0;
   background: linear-gradient(270deg, white 25%, hsla(0,0%,100%,0));
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
.swiperCaption {
    z-index: 2;
    position: absolute;
    width: 100%;
    top: -44px;
}
.captionItem {
    position: relative;
    margin: 0 auto;
    max-width: var(--maxWidth);
    padding: 0 100px;
}
.captionItem > span {
    color: white;
    font-weight: 600;
    font-size: 14px;
}
.caption--highlight {
    position: relative;
    display: inline-block;
    margin-right: 8px;
}
.swiperCaption span:first-of-type:before {
    content: "";
    height: 36px;
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
.swiperCaption > p:before {
    content: none;
    color: white;
}
@media (max-width: 1659.99px) {
    .captionItem {
        padding: 0 80px;
    }
}
@media (max-width: 1439.99px) {
    .captionItem {
        padding: 0 60px;
    }
}
@media (max-width: 1023.99px) {
    .captionItem {
        padding: 0 40px;
    }
}
</style>
