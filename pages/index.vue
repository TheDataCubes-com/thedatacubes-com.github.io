<template>
  <section class="main banner">
    <h1>
      <img
        :src="currentSlide.title.image"
        :alt="currentSlide.title.text"
        class="main__title">
    </h1>
    <h2>
      <img
      :src="currentSlide.subTitle.image"
      :alt="currentSlide.subTitle.text"
      class="main__subTitle">
    </h2>
    <section class="banner__text">
      <p v-for="paragraph in bannerText">{{paragraph}}</p>
    </section>
  </section>
  <section id="why-us" class="whyUs">
    <div class="background__item background backgorund--section">
      <div class="background__item background__lines"/>
    </div>
    <div class="whyUs__inner">
      <h2>{{whyUs.title}}</h2>
      <div
        v-for="({title, text}, index) in whyUs.points"
        :key="index"
        :class="[
          'whyUs__points',
          {'points--even': index % 2}
        ]"
      >
        <h3>{{title}}</h3>
        <p>{{text}}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { slides, bannerText, whyUs } from "data/main";

const slideIndex = ref(0);

const currentSlide = computed(() => slides[slideIndex.value]);
</script>

<style>
.banner {
    height: calc(100vh - 149px);
}
.main__title {
    width: 60vw;
    transform: translateX(100px);
}
.main__subTitle {
    width: 34vw;
}
.banner__text {
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 70%;
    width: 100%;
}
.banner__text > p {
    width: 100%;
    font-size: 24px;
    line-height: 1.5;
    font-weight: 300;
}
.whyUs {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.whyUs__inner {
    max-width: var(--maxWidth);
    place-self: center;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 80px 80px;
}
.whyUs__inner > h2 {
    font-size: 60px;
    margin-bottom: 20px;
}
.whyUs__points {
    display:flex;
    flex-direction: column;
    gap: 20px;
    max-width: 60%;
    width: 100%;
}
.whyUs__points > h3 {
    font-size: 32px;
}
.whyUs__points > p {
    font-size: 24px;
}
.points--even {
    transform: translateX(50%);
}
.backgorund--section {
    z-index: -1;
    height: 100%;
}

@media (max-width: 1023.99px) {
    .main__title {
        width: calc(100% - 40px);
        transform: translateX(40px);
    }
    .main__subTitle {
        width: 70%;
    }
}
</style>
