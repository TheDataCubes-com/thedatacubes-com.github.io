<template>
  <blockquote class="quote">
    <div class="quote__inner">
      <div v-if="props.phrase">{{props.quote}}</div>
      <p v-else>{{props.quote}}</p>
      <span>{{props.sign}}</span>
    </div>
  </blockquote>
</template>

<script setup>
const props = defineProps({
  quote: { type: String, default: "" },
  phrase: { type: Boolean,default: false },
  sign: { type: String, default: "" }
});
</script>

<style>
.quote {
    margin-top: auto;
    width: 100%;
    display: flex;
    place-content: center;
}
.quote__inner {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 75%;
    width: fit-content;
}
.quote__inner>p:before {
    content: "“";
    font-family: 'Times New Roman', Times, serif;
    position: absolute;
    color: var(--darkPurple);
    font-size: 60px !important;
    top: 0;
    transform: translate(-30px, -40px);
}
.quote__inner>p, .quote__inner>div {
    font-weight: 600;
    position: relative;
    color: white;
    font-size: 24px;
    font-style: italic;
    color: var(--darkPurple);
}
.quote__inner>span {
    place-self: flex-end;
    color: var(--darkPurple);
    font-weight: 500;
    font-size: 18px;
}
@media (max-width: 767.99px) {
    .quote__inner>p, .quote__inner>div {
        font-size: 18px;
        text-align: center;
    }
    .quote__inner>p:before {
        font-size: 40px !important;
        transform: translate(-20px, -30px);
    }
    .quote__inner>span  {
       font-size: 16px;
    }
}
</style>
