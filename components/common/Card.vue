<template>
  <article class="card">
    <h3 class="card__title">{{props.title}}</h3>
    <div v-html="text" class="card__text"/>
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
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px 20px;
    border-radius: 12px;
    background-color: var(--softPink);
}
.card__title {
    text-align: center;
    font-size: 20px;
    min-height: 48px;
}
.card__text {
    margin: 8px 0;
}
.card__text * {
    font-size: 16px;
}
.card__text > ul {
    list-style: disc inside;
}
.card__text > ul > li {
    text-align: left;
}
.card__link {
    margin-top: auto;
    font-weight: 400;
    font-size: 16px;
    padding: 8px 12px;
    background-color: var(--mainYellow);
    color: var(--darkPurple);
    border-radius: 12px;
    width: fit-content;
    place-self: center;
    transition: background-color 0.3s ease, color 0.3s ease;
}
@media (hover:hover) {
    .card__link:hover {
        background-color: var(--darkPurple);
        color: white;
    }
}
</style>
