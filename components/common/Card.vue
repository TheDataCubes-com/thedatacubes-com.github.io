<template>
  <NuxtLink :to="props.link.path" class="card">
    <h3 class="card__title">{{props.title}}</h3>
    <div v-html="text" class="card__text"/>
    <span class="card__link">{{props.link.name}}</span>
  </NuxtLink>
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
    padding: 40px 20px;
    gap: 12px;
    border-radius: 12px;
    cursor: pointer;
    background-color: white;
}
.card__title {
    text-align: center;
    font-size: 20px;
    min-height: 70px;
    color: var(--darkPurple);
}
.card__text {
    margin: 8px 0;
}
.card__text * {
    font-size: 16px;
}
.card__text > ul {
    list-style: disc;
    padding-left: 20px;
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
    .card:hover .card__link {
        background-color: var(--mainYellow);
        color: white;
    }
}
@media (max-width: 1439.99px) {
    .card {
        padding: 20px;
    }
    .card__title {
        min-height: initial;
    }
}
@media (max-width: 767.99px) {
    .card__title {
        font-size: 18px;
    }
    .card__text {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        place-content: center;
    }
    .card__text * {
        font-size: 14px;
    }
    .card__link {
        font-size: 14px;
    }
}
</style>
