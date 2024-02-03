<template>
  <NuxtLink
    v-if="link"
    :to="link"
    class="dynamicButton__item"
    :class="isInline ? 'dynamicButtonInline' : 'dynamicButton'"
  >
    {{text}}
    <svg v-if="isIcon" viewBox="0 0 28.77 28.77" class="dynamicButton__icon">
      <circle
        cx="14.39"
        cy="14.39"
        r="14.39"
        transform="rotate(-22.88 14.399 14.385)"
        class="dynamicButton__iconCircle"
      />
      <path d="m12.31 20.68 5.45-6.29-5.45-6.3" class="dynamicButton__iconArrow"/>
    </svg>
  </NuxtLink>
  <button
    v-else
    type="button"
    :class="isInline ? 'dynamicButtonInline' : 'dynamicButton'"
  >
    {{text}}
    <svg v-if="isIcon" viewBox="0 0 28.77 28.77" class="dynamicButton__icon">
      <circle
        cx="14.39"
        cy="14.39"
        r="14.39"
        transform="rotate(-22.88 14.399 14.385)"
        class="dynamicButton__iconCircle"
      />
      <path d="m12.31 20.68 5.45-6.29-5.45-6.3" class="dynamicButton__iconArrow"/>
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
    font-size: 28px;
    font-weight: 400;
    color: black;
    cursor: pointer;
    transition: color 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 28px;
    border-radius: 20px;
    width: fit-content;
    border: none;
    place-content: center;
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
.dynamicButton {
    padding: 18px 30px;
    background-color: rgb(255, 255, 255, 0.6);
}
.dynamicButtonInline {
    padding: 4px 12px;
    font-size: 24px;
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
@media (max-width: 1659.99px) {
    .dynamicButton {
        font-size: 24px;
        padding: 16px 24px;
        gap: 20px;
    }
    .dynamicButtonInline {
        font-size: 22px
    }
}
@media (max-width: 1439.99px) {
    .dynamicButton {
        padding: 12px 20px;
        font-size: 20px;
    }
    .dynamicButtonInline {
        font-size: 20px
    }
}
@media (max-width: 1279.99px) {
    .dynamicButton {
        padding: 12px 20px;
        font-size: 18px;
    }
    .dynamicButtonInline {
        font-size: 18px
    }
}
@media (max-width: 1023.99px) {
    .dynamicButtonInline {
        font-size: 18px;
    }
    .dynamicButton {
        font-size: 16px;
        padding: 10px 16px;
        gap: 16px;
    }
}
@media (max-width: 767.99px) {
    .dynamicButton {
        font-size: 14px;
        gap: 12px;
    }
}
@media (max-width: 574.99px) {
    .dynamicButtonInline {
        font-size: 16px;
    }
}
</style>
