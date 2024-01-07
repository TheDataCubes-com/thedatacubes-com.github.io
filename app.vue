<template>
  <Header />
  <main class="pageLayout">
    <NuxtPage />
  </main>
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
</style>
