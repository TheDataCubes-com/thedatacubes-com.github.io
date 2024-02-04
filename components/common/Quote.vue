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
    padding: 80px 40px;
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
@media (max-width: 1023.99px) {
    .quote {
        padding: 60px 40px;
    }
    .quote__inner {
        max-width: 100%;
    }
    .quote__inner>p {
        font-size: 28px;
    }
    .quote__inner>span {
        font-size: 16px;
    }
    .quote__inner>p:before {
        font-size: 80px !important;
        transform: translateY(-50px);
    }
}
@media (max-width: 767.99px) {
    .quote {
        padding: 40px;
    }
    .quote__inner>p {
        font-size: 24px;
    }
    .quote__inner>span {
        font-size: 14px;
    }
    .quote__inner>p:before {
        font-size: 60px !important;
        transform: translateY(-40px);
    }
}
@media (max-width: 767.99px) {
    .quote {
        padding: 40px 20px;
    }
    .quote__inner>p {
        font-size: 20px;
    }
    .quote__inner>p:before {
        font-size: 40px !important;
        transform: translateY(-30px);
    }
}
</style>
