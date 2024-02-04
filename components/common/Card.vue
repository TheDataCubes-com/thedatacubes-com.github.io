<template>
  <article class="card">
    <h3 class="card__title">{{props.title}}</h3>
    <p class="card__text">{{props.text}}</p>
    <NuxtLink
      v-if="link"
      :to="props.link.path"
      class="card__link"
    >{{props.link.name}}</NuxtLink>
  </article>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  text: { type: String, default: "" },
  link: { type: Object, default: null },
});
</script>

<style>
.card {
    height: 100%;
    border: 2px solid #4e20c6;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 12px 20px;
    border-radius: 12px;
}
.card__title {
    font-size: 20px;
}
.card__text {
    font-size: 16px;
    margin-bottom: 12px;
}
.card__link {
    margin-top: auto;
    font-weight: 400;
    font-size: 16px;
    padding: 8px 12px;
    background-color: #4e20c6;
    border-radius: 12px;
    width: fit-content;
    color: white;
    place-self: flex-end;
    transition: background-color 0.3s ease, color 0.3s ease;
}
@media (hover:hover) {
    .card__link:hover {
        background-color: var(--mainYellow);
        color: var(--darkPurple);
    }
}
</style>
