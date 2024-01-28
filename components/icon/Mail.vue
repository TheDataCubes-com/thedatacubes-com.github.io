<template>
  <a :href="link" class="icon__mail">
    <svg viewBox="5 4 54 54" xmlns="http://www.w3.org/2000/svg">
      <rect x="7.1" y="9.65" width="49.8" height="44.71" rx="2.5"/>
      <polyline points="7.88 9.65 33.04 31.62 56.15 10.37"/>
    </svg>
  </a>
</template>

<script setup>
const props = defineProps({
  link: { type: String, default: "" }
});
</script>

<style>
.icon__mail {
    width: 24px;
    height: 24px;
    transition: opacity 0.7s ease;
}
.icon__mail > svg {
    stroke-width: 5;
    stroke: white;
    fill: none;
    width: 24px;
    height: 24px;
}
@media (hover:hover) {
    .icon__mail:hover {
        opacity: 0.7;
    }
}
</style>
