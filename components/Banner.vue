<template>
  <section class="main banner">
    <h1 class="banner__title">
      <slot name="slot--title"/>
    </h1>
    <section class="banner__secondary">
      <slot name="slot--secondary" />
    </section>
  </section>
</template>

<script setup>
const props = defineProps({
  static: { type: Boolean, default: false }
});

const appWidth = inject("appWidth");
const position = ref("absolute");

const setPosition = (width) => {
  if (!props.static) return;
  position.value = width < 1024 ? "static" : "absolute";
}
onBeforeMount(() => setPosition(appWidth.value));
watch(appWidth, setPosition)
</script>

<style>
.banner {
    height: 100vh;
    position: relative;
    height: calc(100vh - 149px);
}
.banner__title, .banner__secondary {
    position: v-bind(position);
    width: 100%;
}
.banner__title {
    top: 50px;
    opacity: 1;
    color: white;
}
.banner__secondary {
    top: calc(100vh * 0.4);
    display: flex;
    flex-direction: column;
    gap: 30px;
}
@media (max-height: 960px) {
    .banner__secondary {
        top: calc(100vh * 0.44);
    }
}
@media (max-height: 800px) {
    .banner__secondary {
        gap: 12px;
        max-width: 1040px;
    }
}
@media (max-width: 1659.99px) {
    .banner {
        height: calc(100vh - 113px);
    }
    .banner__secondary {
        max-width: 860px;
        gap: 20px;
    }
}
@media (max-width: 1439.99px) {
    .banner {
        height: calc(100vh - 103px);
    }
    .banner__secondary {
        max-width: 740px;
    }
}
@media (max-width: 1279.99px) {
    .banner {
        height: calc(100vh - 89px);
    }
    .banner__secondary {
        max-width: 520px;
    }
}
@media (max-width: 1023.99px) {
    .banner__secondary {
        max-width: calc(100% - 40px * 2);
    }
}
@media (max-width: 767.99px) {
    .banner__title {
        width: 100%;
    }
    .banner__secondary {
        top: calc(100vh * 0.35);
    }
}
@media (max-width: 574.99px) {
    .banner__secondary {
        top: calc(100vh * 0.25);
        max-width: 100%;
    }
}
</style>
