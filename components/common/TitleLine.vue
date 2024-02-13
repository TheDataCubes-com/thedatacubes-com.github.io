<template>
  <section class="titleLine">
    <component
      :is="props.heading"
      :style="props.centered ? 'text-align: center;' : ''"
      class="titleLine__title"
    >{{props.title}}</component>
  </section>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  heading: { type: String, default: "h1" },
  centered: { type: Boolean, default: false }
});
</script>

<style>
.titleLine {
    background-color: #eedcf9;
    width: 100%;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
}
.titleLine__title {
    place-self: center;
    color: var(--darkPurple);
    font-size: 32px;
    font-weight: 600;
    text-align: left;
    max-width: var(--maxWidth);
    width: 100%;
    padding: 0 100px;
}
</style>
