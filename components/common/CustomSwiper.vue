<template>
  <div :class="['swiperWrap', {'wrap--fade': !props.noWrap}]">
    <div v-if="!props.noCap" class="swiperCaption">
      <p class="captionItem">
        <span class="caption--highlight">TRUSTED BY</span>
        <span v-if="!props.solo" class="caption--tale">Fortune 500 companies and leading startups alike.</span>
      </p>
    </div>
    <div :id="props.swiperId" class="swiper customSwiper">
      <div class="swiper-wrapper">
        <div
          v-for="(slide, index) in props.items"
          class="swiper-slide customSlide"
        ><slot name="item" :slide="slide" :index="index" /></div>
      </div>
    </div>
    <div v-if="props.navigation" class="swiperNavigation">
      <svg
        @click="slideDec"
        :class="[
          'swiper--nav',
          'nav--dec',
          {'nav--disabled': navDisabled === 'dec'}
        ]"
      ><use xlink:href="#arrow" /></svg>
      <svg
        @click="slideInc"
        :class="[
          'swiper--nav',
          'nav--inc',
          {'nav--disabled': navDisabled === 'inc'}
        ]"
      ><use xlink:href="#arrow" /></svg>
    </div>
  </div>
</template>

<script setup>
import Swiper from "swiper";
import { Autoplay } from 'swiper/modules';
import "swiper/css/bundle";

const props = defineProps({
  swiperId: { type: String, required: true },
  items: { type: Array, default: [] },
  breakPoints: { type: Object, default: null },
  solo: { type: Boolean, default: false },
  noCap: { type: Boolean, default: false },
  noWrap: { type: Boolean, default: false },
  autoplay: { type: Boolean, default: false },
  vertical: { type: Boolean, default: false },
  pagination: { type: Boolean, default: false },
  navigation: { type: Boolean, default: false },
  delay: { type: Number, default: 0 },
});
const emit = defineEmits(["slideChange"]);

const swiper = ref(null);
const slideIndex = ref(0);

const navDisabled = computed(() => {
  switch (slideIndex.value) {
    case 0: return "dec";
    case props.items.length - 1: return "inc";
    default: return
  }
});

const slideDec = () => swiper.value.slidePrev();
const slideInc = () => swiper.value.slideNext();
const getBreakPoints = (custom) => {
  var defaults = {
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 20000,
    },
    475: {
      spaceBetween: 20,
      slidesPerView: 2,
      slidesPerGroup: 1,
      speed: 30000,
    },
    575: {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 1,
      speed: 40000,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 4,
      slidesPerGroup: 1,
      speed: 60000,
    },
  }
  return custom || defaults;
}

onMounted(() => {
  setTimeout(() => {
    swiper.value = new Swiper("#" + props.swiperId, {
    modules: props.autoplay ? [Autoplay] : [],
    direction: props.vertical ? "vertical" : "horizontal",
    autoplay: props.autoplay
     ? {
       delay: props.delay,
       disableOnInteraction: false
     }
     : false,
    breakpoints: getBreakPoints(props.breakPoints),
    on: {
      slideChange: ({realIndex}) => {
        slideIndex.value = realIndex;
        emit("slideChange", realIndex)
      }
    }
   });
  }, 100);
});
</script>

<style>
.swiperWrap {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}
.wrap--fade:before, .wrap--fade:after {
    position: absolute;
    top: 0;
    content: '';
    width: 20px;
    height: 100%;
    z-index: 10;
}
.wrap--fade:before{
    left: 0;
    background: linear-gradient(90deg, white 25%, hsla(0,0%,100%,0))
}
.wrap--fade:after {
   right: 0;
   background: linear-gradient(270deg, white 25%, hsla(0,0%,100%,0));
}
.customSwiper {
    width: 100%;
    padding: 20px 0 !important;
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
    color: var(--mainYellow) !important;
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
.swiperNavigation {
    position: relative;
    place-self: center;
}
.swiper--nav {
    border-radius: 12px;
    width: 40px;
    height: 40px;
    fill: var(--darkPurple);
    cursor: pointer;
    transition: background-color 0.3s ease, fill 0.3s ease;
}
.nav--dec {
    rotate: 180deg;
}
.nav--disabled {
   fill: grey;
   pointer-events: none;
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
@media (hover:hover) {
    .swiper--nav:hover {
        background-color: var(--darkPurple);
        fill: white;
    }
}
</style>
