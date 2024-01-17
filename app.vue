<template>
  <Header />
  <main class="pageLayout">
    <NuxtPage />
  </main>
  <Footer />
  <Background />
  <DynamicButton
    v-if="isButton"
    link="/get-consultation"
    text="Set up a Free Consultation"
    :isIcon="true"
    class="consultButton"
  />
</template>

<script setup>
import pkg from 'lodash';
const { throttle } = pkg;

const route = useRoute();

const appWidth = ref(1440);
const scroll = ref(0);

const isButton = computed(() => {
  var { name } = route;
  return name !== "login" && name !== "get-consultation";
});

const setAppWidth = throttle(({ target }) => appWidth.value = target.innerWidth, 200);
const handleScroll = throttle(() => scroll.value = window.scrollY, 200);

provide('appWidth', appWidth);
provide("scroll", scroll);

onMounted(() => {
  appWidth.value = window.innerWidth;
  scroll.value = window.scrollY;
  window.addEventListener('resize', setAppWidth);
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', setAppWidth);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.pageLayout {
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.consultButton {
    position: absolute;
    top: calc(100vh - 13%);
    right: 80px;
    z-index: 20;
}
</style>
