<template>
<section class="ourClients">
  <div class="ourClients__inner">
    <h2>What Our Clients Say</h2>
    <div class="ourClients__cardsWrap">
      <div v-for="({company, text}, index) in cards" class="ourClients__card">
        <div :key="index">
          <p>{{text}}</p>
          <span>@ {{company}}</span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
const cards = ref([
  { company: "Bank of America", text: "" },
  { company: "PennyMac Loan Services, LLC", text: "" },
  { company: "Bold Metrics", text: "" },
  { company: "Sonos", text: "" },
  { company: "Silicon Valley Bank", text: "" },
  { company: "IBM", text: "" },
]);
</script>

<style>
.cards {
    max-width: var(--maxWidth);
    place-self: center;
    padding: 80px 20px 100px;
    width: 100%;
    min-height: 100vh;
}
.cards__wrap {
    display: flex;
    gap: 40px;
    justify-content: space-between;
}
.card__item {
    border: 1px solid white;
    height: 200px;
    width: 200px;
}
.ourClients {
    background-color: #baa0c775;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.ourClients__inner {
    max-width: var(--maxWidth);
    width: 100%;
    place-self: center;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 80px 80px;
}
.ourClients__inner > h2 {
    font-size: 60px;
    place-self: center;
}
.ourClients__cardsWrap {
    display: flex;
    flex-wrap: wrap;
    margin: -20px;
    width: 100%;
}
.ourClients__card {
    width: 33%;
    padding: 20px;
}
.ourClients__card>div {
    min-height: 180px;
    background-color: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    gap: 40px;
}
.ourClients__card span {
    font-size: 16px;
    font-weight: 500;
    place-self: flex-end;
    margin-top: auto;
}
</style>
