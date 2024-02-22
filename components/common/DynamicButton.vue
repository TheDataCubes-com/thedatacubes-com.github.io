<template>
  <NuxtLink
    v-if="link"
    :to="link"
    class="dynamicButton__item"
    :class="isInline ? 'dynamicButtonInline' : 'dynamicButton'"
  >
    {{text}}
    <svg v-if="isIcon" class="dynamicButton__icon">
      <use xlink:href="#arrow-button" />
    </svg>
  </NuxtLink>
  <button
    v-else
    type="button"
    :class="isInline ? 'dynamicButtonInline' : 'dynamicButton'"
  >
    {{text}}
    <svg v-if="isIcon" class="dynamicButton__icon">
      <use xlink:href="#arrow-button" />
    </svg>
  </button>
</template>

<script setup>
const props = defineProps({
  link: { type: String, default: "" },
  text: { type: String, default: "" },
  isIcon: { type: Boolean, default: false },
  isInline: { type: Boolean, default: false }
});
</script>

<style>
.dynamicButton, .dynamicButtonInline {
    font-size: 24px;
    font-weight: 400;
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 20px;
    width: fit-content;
    border: none;
    place-content: center;
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
.dynamicButton {
    padding: 8px 24px;
    background-color: rgb(255, 255, 255, 0.6);
}
.dynamicButtonInline {
    padding: 4px 12px;
    font-size: 18px;
    color: white;
    border: 2px solid white;
}
.item--button {
    border: none;
    background: none;
}
.dynamicButton__icon {
    width: 28px;
    height: 28px;

}
@media (hover:hover) {
    .dynamicButton:hover {
        background-color: var(--mainYellow);
    }
    .dynamicButtonInline:hover {
        background-color: var(--mainYellow);
        border-color: var(--mainYellow);
        color: black;
    }
}
@media (max-width: 1439.99px) {
    .dynamicButton {
        font-size: 20px;
    }
}
@media (max-width: 1279.99px) {
    .dynamicButton {
        font-size: 18px;
    }
}
@media (max-width: 1023.99px) {
    .dynamicButton {
        font-size: 16px;
    }
}
@media (max-width: 767.99px) {
    .dynamicButton, .dynamicButtonInline {
        font-size: 14px;
    }
}
</style>
