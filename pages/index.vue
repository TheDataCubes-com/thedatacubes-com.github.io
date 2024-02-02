<template>
  <section class="main banner">
    <h1 ref="textSlide" class="main__title">
      <img :src="currentSlide" :alt="`mainSlide_${slideIndex}`">
    </h1>
    <section class="banner__text">
      <p v-for="paragraph in bannerText">{{paragraph}}</p>
    </section>
  </section>
  <MainWhyUs />
</template>

<script setup>
const slides = ([ "/svg/keep-it-simple.svg", "/svg/about-time.svg" ]);

const bannerText = ([
  "We transform data chaos into profitable insights, organizing and refining messy, siloed data into actionable intelligence that your Business team can easily work with. Our goal is to make you successful by helping you monetize every aspect of your data.",
  "Our comprehensive range of services includes Master Data Management, Customer 360, AI & Data Management strategy, each tailored to meet your unique business needs."
]);

const slideIndex = ref(1);
const textSlide = ref(null);
const swiper = ref(null);

const currentSlide = computed(() => slides[slideIndex.value]);

const changeSlide = () => {
  var className = "textTransition";
  textSlide.value?.classList.add(className);
  slideIndex.value ^= 1;
  setTimeout(() => textSlide.value?.classList.remove(className), 100);
};

onMounted(() => {
  setTimeout(() => {
    // changeSlide();
    // swiper.value = setInterval(changeSlide, 4000);
  }, 3000);
});
onBeforeUnmount(() => swiper.value && clearInterval(swiper.value));
</script>

<style>
.banner {
    height: calc(100vh - 149px);
    position: relative;
}
.main__title {
    top: 50px;
    position: absolute;
    width: 60vw;
    left: 100px;
    opacity: 1;
    transition: left 1s ease, opacity 1s ease;
}
.main__title img {
    width: 100%;
}
.textTransition {
    left: calc(100vh * 2);
    opacity: 0;
    transition: inital;
}
.banner__text {
    position: absolute;
    top: calc(100vh * 0.4);
    display: flex;
    flex-direction: column;
    gap: 60px;
    max-width: 990px;
    width: 100%;
}
.banner__text > p {
    width: 100%;
    font-size: 24px;
    line-height: 1.7;
    font-weight: 300;
    color: white;
}
@media (max-height: 960px) {
    .banner__text {
        gap: 20px;
    }
    .banner__text > p {
        font-size: 20px;
    }
    .main__title {
        width: 55%;
    }
}
@media (max-height: 800px) {
    .banner__text > p {
        font-size: 18px;
    }
    .banner__text {
        gap: 12px;
        max-width: 1040px;
    }
}
@media (max-width: 1659.99px) {
    .main__title {
        width: 60%;
    }
    .banner__text {
        max-width: 860px;
        gap: 20px;
    }
    .banner__text >p {
        font-size: 18px;
    }
}
@media (max-width: 1439.99px) {
    .banner__text {
        max-width: 740px;
    }
    .banner__text > p {
        font-size: 16px;
    }
}
@media (max-width: 1023.99px) {
    .main__title {
        left: 0;
        width: 80vw;
        padding: 0 20px;
    }
    .banner__text {
        max-width: calc(100% - 40px * 2);
    }
}
@media (max-width: 767.99px) {
    .main__title {
        width: 100vw;
    }
    .banner__text {
        top: calc(100vh * 0.35);
    }
}
@media (max-width: 574.99px) {
    .banner__text {
        top: calc(100vh * 0.25);
    }
    .banner__text>p {
        font-size: 14px;
    }
}
</style>
