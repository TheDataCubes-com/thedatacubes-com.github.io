<template>
  <div class="dynamicButton">
    <NuxtLink
      v-if="link"
      v-bind="link"
      class="dynamicButton__item"
    >{{text}}</NuxtLink>
    <button
      v-else
      type="button"
      @click="handleClick"
      class="dynamicButton__item item--button"
    >{{text}}</button>
    <svg viewBox="0 0 28.77 28.77" class="dynamicButton__icon">
      <circle
        cx="14.39"
        cy="14.39"
        r="14.39"
        transform="rotate(-22.88 14.399 14.385)"
        class="dynamicButton__iconCircle"
      />
      <path d="m12.31 20.68 5.45-6.29-5.45-6.3" class="dynamicButton__iconArrow"/>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  link: { type: Object, default: null },
  text: { type: String, default: "" },
  isIcon: { type: Boolean, defaul: false }
});
</script>

<style>
.dynamicButton {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 28px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255, 0.6);
    width: fit-content;
    padding: 18px 30px;
    transition: background-color 0.3s ease;
}
.dynamicButton__item {
    font-size: 28px;
    font-weight: 400;
    color: black;
    cursor: pointer;
    transition: color 0.3 ease;
}
.item--button {
    border: none;
    background: none;
}
.dynamicButton__icon {
    width: 28px;
    height: 28px;
}
.dynamicButton__iconCircle {
    opacity:.43;
    stroke-width:0;
    transition: fill 0.3s ease, opacity 0.3s ease;
}
.dynamicButton__iconArrow {
    fill:none;
    stroke:#fff;
    stroke-linejoin:round;
    stroke-width:3px;
}
.dynamicButton:hover {
    background-color: white;
}
.dynamicButton:hover .dynamicButton__iconCircle {
    fill: var(--mainPurple);
    opacity: 0.8;
}
.dynamicButton:hover .dynamicButton__item {
    color: var(--mainPurple);
}
</style>
