<template>
  <article class="main">
    <h1>{{pageData.title}}</h1>
    <p>
      {{pageData.text}}
      <ul class="services__links">
        <li v-for="({name, link}) in linkSet">
          <NuxtLink :to="route.path + link">{{name}}</NuxtLink>
        </li>
      </ul>
    </p>
  </article>
</template>

<script setup>
import pages from "../../app_data/pages.js";
import links from "data/header";

const route = useRoute();

const pageData = computed(() => pages[route.name]);
const linkSet = computed(() => {
  var { children } = links.find(({ link }) => link == route.path);
  return children;
});
</script>

<style>
.services__links {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: inside ;
}
</style>
