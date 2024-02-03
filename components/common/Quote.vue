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
    background-color: #4e20c6;
    padding: 80px 40px 80px;
    display: flex;
    place-content: center;
}
.quote__inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 75%;
    width: fit-content;
}
.quote__inner>p:before {
    content: "“";
    font-family: 'Times New Roman', Times, serif;
    position: absolute;
    color: #cc90ff;
    font-size: 100px !important;
    top: 0;
    transform: translateY(-60px);
}
.quote__inner>p {
    position: relative;
    color: white;
    font-size: 32px;
    font-style: italic;
}
.quote__inner>span {
    place-self: flex-end;
    color: #cc90ff;
    font-weight: 500;
    font-size: 18px;
}
</style>
