<template>
  <section class="titleLine">
    <div class="titleLine__inner">
      <div class="titleLine__titleWrap">
        <component :is="props.heading" class="titleLine__title">{{props.title}}</component>
          <div
            v-if="props.description"
            v-html="props.description"
            class="titleLine__description"
          />
      </div>
      <div class="titleLine__additional">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  heading: { type: String, default: "h1" },
  description: { type: String, default: "" },
});
</script>

<style>
.titleLine {
    margin: 20px 0;
    width: 100%;
    background-color: var(--darkPurple);
    padding: 40px 60px;
    display: flex;
    place-content: center;
}
.titleLine__inner {
    display: flex;
    gap: 40px;
    max-width: var(--maxContentWidth);
}
.titleLine__titleWrap {
    display: flex;
    flex-direction: column;
}
.titleLine__title {
    color: white;
    width: fit-content;
    font-size: 32px;
    text-align: left;
    display: flex;
    place-items: center;
    flex-grow: 1;
}
.titleLine__description {
    color: white;
    font-size: 20px;
}
.titleLine__additional {
    display: flex;
    flex-grow: 1;
    place-content: center;
}
</style>
