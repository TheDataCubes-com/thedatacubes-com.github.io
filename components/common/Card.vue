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
    padding: 20px;
    gap: 12px;
    border-radius: 12px;
    /* background-color: var(--softPink); */
    box-shadow: 0 4px 8px var(--darkPurple);
    cursor: pointer;
    transition: transform 0.3s ease;
}
.card__title {
    text-align: center;
    font-size: 20px;
    min-height: 48px;
    color: var(--darkPurple);
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
    background-color: var(--darkPurple);
    color: white;
    border-radius: 12px;
    width: fit-content;
    place-self: center;
    transition: background-color 0.3s ease, color 0.3s ease;
}
@media (hover:hover) {
    .card:hover {
        transform: translateY(-15px);
        box-shadow: 0 10px 14px var(--darkPurple);
    }
    .card:hover .card__link {
        background-color: var(--mainYellow);
        color: white;
    }
    /* .card__link:hover {
        background-color: var(--darkPurple);
        color: white;
    } */
}
</style>
