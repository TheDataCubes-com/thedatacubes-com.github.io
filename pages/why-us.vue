<template>
  <article class="main whyPage">
    <h1>{{pageData.title}}</h1>
    <p v-html="pageData.text" />
  </article>
</template>

<script setup>
import pages from "data/pages";
const route = useRoute();

const pageData = computed(() => pages[route.name]);
</script>

<style>
.whyPage > p {
    max-width: 100%;
}
</style>
