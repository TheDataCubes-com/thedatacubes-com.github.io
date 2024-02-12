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

<style>
.banner {
    height: 100vh;
    position: relative;
    height: calc(100vh - 149px);
}
.banner__title {
    width: 100%;
    top: 50px;
    position: absolute;
    left: 100px;
    opacity: 1;
    color: white;
}
.banner__secondary {
    position: absolute;
    top: calc(100vh * 0.4);
    display: flex;
    flex-direction: column;
    gap: 60px;
    max-width: 990px;
    width: 100%;
}
@media (max-height: 960px) {
    .banner__secondary {
        gap: 20px;
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
}
@media (max-width: 1023.99px) {
    .banner__title {
        left: 0;
        padding: 0 20px;
    }
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
    }
}
</style>
