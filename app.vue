<template>
  <Header />
  <main class="pageLayout">
    <NuxtPage />
  </main>
  <DynamicButton
    v-if="isButton"
    link="/get-consultation"
    text="Set up a Free Consultation"
    :isIcon="true"
    class="consultButton"
  />
  <Background />
</template>

<script setup>
import pkg from 'lodash';
const { throttle } = pkg;

const route = useRoute();

const isButton = computed(() => {
  var { name } = route;
  return name !== "login" && name !== "get-consultation";
});

const appWidth = ref(1440);
const scroll = ref(0);

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
    max-width: var(--maxWidth);
    width: 100%;
    padding: 0 40px;
    place-self: center;
    flex-grow: 10;
    display: flex;
    flex-direction: column;
}
.consultButton {
    position: absolute;
    bottom: 20%;
    right: 80px;
    z-index: 10;
}
</style>
