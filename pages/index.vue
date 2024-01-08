<template>
  <div class="main">
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
    <p v-html="currentSlide.description" class="main__text" />
  </div>
</template>

<script setup>
import pageData from "data/main";

const slides = ref(pageData?.slides || []);
const slideIndex = ref(1);

const currentSlide = computed(() => slides.value[slideIndex.value]);
</script>


<style>
.main {
    width: 100%;
    height: 700px;
    padding: 86px 60px;
    position: relative;
}
.main__title {
    width: 60vw;
    transform: translateX(100px);
}
.main__subTitle {
    width: 34vw;
}
.main__text {
    width: fit-content;
    font-size: 28px;
    font-weight: 300;
    margin: 80px 0;
}
</style>
