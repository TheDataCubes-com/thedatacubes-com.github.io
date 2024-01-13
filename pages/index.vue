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
    <p v-html="currentSlide.description" />
  </div>
</template>

<script setup>
import pageData from "data/main";

const slides = ref(pageData?.slides || []);
const slideIndex = ref(0);

const currentSlide = computed(() => slides.value[slideIndex.value]);
</script>

<style>
.main__title {
    width: 60vw;
    transform: translateX(100px);
}
.main__subTitle {
    width: 34vw;
}
</style>
