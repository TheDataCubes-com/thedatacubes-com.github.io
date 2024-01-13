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
  <Background :isSimplified="backgroundSimplified" />
</template>

<script setup>
const route = useRoute();

const isButton = computed(() => {
  var { name } = route;
  return name !== "login" && name !== "get-consultation";
});

const backgroundSimplified = computed(() => {
  var { name } = route;
  return name !== "index" && name !== "login";
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
