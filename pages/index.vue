<template>
  <section class="main banner">
    <h1 ref="titleSlide" class="banner__title">
      <svg class="banner__img">
        <use :xlink:href="currentSlide" />
      </svg>
    </h1>
    <p v-html="bannerText" class="banner__text" />
    <CommonDynamicButton
      link="/contact/form"
      text="Set up a Free Consultation"
      :isIcon="true"
      class="banner__button"
    />
  </section>
  <ClientOnly>
    <CommonCustomSwiper
      swiperId="index-trsuted"
      :items="trustedBy"
      :autoplay="true"
      :loop="true"
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
const slides = (["#keep-it-simple", "#about-time"]);

const bannerText = ref("We transform data chaos into profitable insights, organizing and refining messy, siloed data into actionable intelligence that your Business team can easily work with. Our goal is to make you successful by helping you monetize every aspect of your data.<br/><br/>Our comprehensive range of services includes Master Data Management, Customer&nbsp360, AI & Data Management strategy, each tailored to meet your unique business needs.");

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
.banner {
    height: 100vh;
    position: relative;
    height: calc(100vh - 149px);
    padding: 80px 40px;
    overflow: hidden;
}
.banner__title, .banner__text {
    position: absolute;
    width: 100%;
}
.banner__title {
    opacity: 1;
    color: white;
    width: 55%;
    transform: translateX(0);
    position: absolute;
    transition: transform 1s ease, opacity 1s ease;
}
.imgTransition {
    transform: translateX(100vw);
    opacity: 0;
    transition: inital;
}
.banner__button {
    position: absolute;
    bottom: 25%;
    right: 0px;
    z-index: 20;
    line-height: 1;
    font-size: 18px;
    padding: 6px 16px;
    transform: translateX(-30%);
}
.banner__button > svg {
   width: 20px;
   height: 20px;
}
.banner__img {
    width: 100%;
    height: 250px;
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
    top: calc(100vh * 0.4);
    width: 100%;
    font-size: 24px;
    line-height: 1.7;
    font-weight: 300;
    max-width: 900px;
    color: white;
}
@media (max-height: 1020px) {
    .banner__text {
        font-size: 20px;
        top: calc(100vh * 0.44);
    }
}
@media (max-height: 880px) {
    .banner__text {
        font-size: 18px;
        max-width: 1040px;
    }
}
@media (max-height: 760px) {
    .banner {
        padding: 40px;
    }
}
@media (max-width: 1659.99px) {
    .banner {
        height: calc(100vh - 113px);
    }
    .banner__text {
        font-size: 18px;
        max-width: 860px;
    }
}
@media (max-width: 1439.99px) {
    .banner__text {
        font-size: 16px;
        max-width: 740px;
    }
    .banner {
        height: calc(100vh - 103px);
    }
}
@media (max-width: 1279.99px) {
    .banner__img {
        height: 200px;
    }
    .banner {
        height: calc(100vh - 89px);
    }
}
@media (max-width: 1023.99px) {
    .banner__button {
        position: static;
        top: initial;
        place-self: center;
        transform: initial;
    }
    .banner__title, .banner__text {
        max-width: 100%;
        width: 100%;
        position: relative;
        top: initial;
    }
    .banner {
        gap: 40px;
        padding: 60px 40px;
    }
    .banner__img {
        stroke-width: 2;
    }
}
@media (max-width: 767.99px) {
    .banner {
        padding: 40px;
    }
}
@media (max-width: 574.99px) {
    .banner {
        padding: 40px 20px;
        gap: 20px;
    }
    .banner__img {
       height: 140px;
    }
}
@media (max-width: 374.99px) {
    .banner__img {
       height: 100px;
    }
    .banner {
        padding: 20px;
    }
}
</style>
