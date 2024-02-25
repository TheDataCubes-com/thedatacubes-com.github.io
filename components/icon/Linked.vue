<template>
  <a :href="props.link" target="_blank" class="linked__link">
    <svg><use xlink:href="#linked" /></svg>
  </a>
</template>

<script setup>
const props = defineProps({
  link: { type: String, default: "https://linkedin.com" }
});
</script>

<style>
.linked__link {
    height: 24px;
    width: 24px;
}
.linked__link > svg {
   width: 24px;
   height: 24px;
   fill: white;
   transition: opacity 0.3s ease;
}
@media (hover:hover) {
    .linked__link:hover > svg {
        opacity: 0.7;
    }
}
</style>
