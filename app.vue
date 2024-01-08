<template>
  <Header />
  <main class="pageLayout">
    <NuxtPage />
  </main>
  <DynamicButton
    :isLink="true"
    text="Set up a Free Consultation"
    class="consultButton"
  />
  <Background />
</template>

<script setup>
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
