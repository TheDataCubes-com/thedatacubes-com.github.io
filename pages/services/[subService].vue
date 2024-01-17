<template>
  <article class="main services">
    <h1>{{pageData.title}}</h1>
    <p v-html="pageData.text"/>
  </article>
</template>

<script setup>
import pages from "../../app_data/pages.js";
const route = useRoute();

const pageData = computed(() => pages[route.params.subService]);
</script>

<style>
.services > p {
    max-width: 100%;
}
</style>
