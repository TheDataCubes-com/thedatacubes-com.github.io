<template>
  <section
    :style="`padding-bottom:${props.padBottom}px;`"
    :class="['titleLine', {'title--noBg': noBg}]"
  >
    <component
      :is="props.heading"
      :style="[
      ]"
      class="titleLine__title"
    >{{props.title}}</component>
  </section>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  heading: { type: String, default: "h1" },
  padBottom: { type: Number, default: 260 },
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
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    max-width: 1260px;
    width: 100%;
    padding: 0 20px;
}
@media (max-width: 1023.99px) {
    .titleLine__title {
        font-size: 36px;
    }
}
@media (max-width: 574.99px) {
    .titleLine__title {
        font-size: 28px;
    }
}
</style>
