<template>
<section class="mainServices">
  <div class="mainServices__inner">
    <h2>Services</h2>
    <p>ABC connect MDM and Data Management</p>

  </div>
  <blockquote class="main__quote">
    <div class="quote__inner">
      <i>Data that sit unused are no different from data that were never collected in the first place.</i>
      <span>Doug Fisher</span>
    </div>
  </blockquote>
</section>
</template>

<script setup>
</script>

<style>
.mainServices {
    border-top: 1px solid;
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.mainServices__inner {
    max-width: var(--maxWidth);
    width: 100%;
    place-self: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 80px 80px;
}
.mainServices__inner > h2 {
    font-size: 60px;
    margin-bottom: 20px;
    place-self: center;
}
@media (max-width: 1439.99px) {
    .mainServices__inner {
        gap: 20px;
    }
}
</style>
