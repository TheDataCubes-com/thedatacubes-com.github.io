<template>
  <div class="main">
    <h1 v-html="currentSlide.title" class="main__title"/>
    <h2 v-html="currentSlide.subTitle" class="main__subTitle" />
    <p v-html="currentSlide.text" class="main__text" />
    <DynamicButton
      :isLink="true"
      :text="pageData.buttonText"
      class="main__button"
    />
  </div>
</template>

<script setup>
import pageData from "data/main";

const slides = ref(pageData?.slides || []);
const slideIndex = ref(0);

const currentSlide = computed(() => slides.value[slideIndex.value]);
</script>


<style>
.main {
    width: 100%;
    height: 700px;
    padding: 120px 0;
    position: relative;
}
.main__title {
    font-size: 160px;
    transform: translateX(100px);
    line-height: 0.5;
    opacity: 0.3;
}
.main__subTitle {
    font-size: 92px;
    width: fit-content;
}
.main__text {
    width: fit-content;
    font-size: 28px;
    font-weight: 300;
    margin: 120px 0;
}
.main__button {
    position: absolute;
    bottom: 0px;
    right: 0px;
}
</style>
