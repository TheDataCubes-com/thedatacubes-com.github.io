<template>
  <a :href="link" class="icon__mail">
    <svg><use xlink:href="#mail" /></svg>
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
