<template>
  <section
    :style="`padding-bottom:${props.padBottom}px;`"
    :class="['titleLine', {'title--noBg': noBg}]"
  >
    <component
      :is="props.heading"
      :style="[
        props.centered ? 'text-align: center;' : '',
        props.size ? `font-size: ${props.size}px` : ''
      ]"
      class="titleLine__title"
    >{{props.title}}</component>
  </section>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  heading: { type: String, default: "h1" },
  centered: { type: Boolean, default: false },
  padBottom: { type: Number, default: 260 },
  size: { type: Number, default: null },
  noBg: { type: Boolean, default: false }
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
.title--noBg {
    background-color: unset;
}
.titleLine__title {
    place-self: center;
    color: var(--darkPurple);
    font-size: 32px;
    font-weight: 600;
    text-align: left;
    max-width: 1260px;
    width: 100%;
    padding: 0 100px;
}
</style>
