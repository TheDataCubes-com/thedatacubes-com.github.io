<template>
  <blockquote class="quote">
    <div class="quote__inner">
      <p>{{quote}}</p>
      <span>{{props.sign}}</span>
    </div>
  </blockquote>
</template>

<script setup>
const props = defineProps({
  quote: { type: String, default: "" },
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
    color: #63087d;
    font-size: 60px !important;
    top: 0;
    transform: translate(-30px, -40px);
}
.quote__inner>p {
    font-weight: 400;
    position: relative;
    color: white;
    font-size: 20px;
    font-style: italic;
    color: var(--darkPurple);
}
.quote__inner>span {
    place-self: flex-end;
    color: #63087d;
    font-weight: 500;
    font-size: 18px;
}
</style>
