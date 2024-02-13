<template>
  <div>
    <div ref="content" v-html="text" :class="['textWrap', {'textWrap--gradient': wrapped}]"/>
    <div v-if="isWrap">
      <button
        @click="toggle"
        class="textWrap__moreContent"
      >{{ !wrapped ? 'collapse' : 'show all' }}</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: "" },
  maxHeight: { type: Number, default: 200 },
});

const content = ref(null);
const wrapped = ref(0);
const isWrap = ref(false);

const toggle = () => {
  content.value.style.height = 'auto';
  wrapped.value ^= 1;
  if (isWrap.value && wrapped.value) content.value.style.height = `${props.maxHeight}px`;
}
const setMaxHeight = () => {
  if (content.value && content.value.clientHeight > props.maxHeight) {
    content.value.style.height = `${props.maxHeight}px`;
    wrapped.value = 1;
    isWrap.value = true;
  }
}

onMounted(() => {
  setMaxHeight();
})
</script>

<style>
.textWrap {
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.textWrap--gradient:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 25px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 100%);
}
.textWrap__moreContent {
border: none;
background-color: unset;
  cursor: pointer;
}
</style>
