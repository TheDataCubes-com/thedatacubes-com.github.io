<template>
  <article class="main whyPage">
    <h1>{{pageData.title}}</h1>
    <div v-html="pageData.text" class="whyPage__content"/>
  </article>
</template>

<script setup>
import pages from "data/pages";
const route = useRoute();

const pageData = computed(() => pages[route.name]);
</script>

<style>
.whyPage__content {
    width: 100%;
    font-size: 24px;
    line-height: 1.3;
    font-weight: 300;
    margin: 50px 0;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.whyPage__content h2 {
    font-size: 42px;
}
.whyPage__content p {
    font-size: 24px;
}
</style>
