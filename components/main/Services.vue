<template>
  <section class="mainServices">
    <h2>Services</h2>
    <div class="mainServices__inner">
      <p class="mainServices__text">It is evident that despite advances in new technologies, data remains a massive untapped resource in many organizations, necessitating a solid Data Management Strategy before investing in new tools.<br/><br/>We have focused exclusively on Data Management Strategy and MDM for over 20 years. Our business-centric approach ensures that your data initiative delivers clear value. Whether you’re just getting started, expanding, or realigning your data journey, you can count on us for success.</p>
      <div class="mainServices__cardWrapper">
        <div
          v-for="({ text, link, title}, index) in cards"
          :key="index"
          class="mainServices__card"
        ><CommonCard :title="title" :text="text" :link="link" /></div>
      </div>
      <p class="mainServices__text">Each TheDataCubes engagement is tailored to address specific client requirements. We proactively transfer knowledge and skills leading to client self-sufficiency during every project.</p>
    </div>
    <CommonQuote
      quote="Data that sit unused are no different from data that were never collected in the first place."
      sign="Doug Fisher"
      class="mainServices__quote"
    />
  </section>
</template>

<script setup>
const cards = ref([
  {
    title: "Data Management and AI Strategy Consulting",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    link: { name: "Read more", path: "/services/data-management" }
  },
  {
    title: "Master Data Management and Entity Resolution Consulting",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    link: { name: "Read more", path: "/services/mdm" }
  },
  {
    title: "Executive Services",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    link: { name: "Read more", path: "/services/executive-services" }
  },
]);
</script>

<style>
.mainServices {
    position: relative;
    display: flex;
    flex-direction: column;
}
.mainServices__inner {
    max-width: var(--maxWidth);
    width: 100%;
    place-self: center;
    display: flex;
    flex-direction: column;
    padding: 40px 80px;
}
.mainServices > h2 {
    margin: 20px;
    width: 100%;
    background-color: var(--darkPurple);
    color: white;
    padding: 40px 0;
    font-size: 32px;
    place-self: center;
}
.mainServices__cardWrapper {
    margin: 60px -12px 20px;
    display: flex;
    flex-wrap: wrap;
}
.mainServices__card {
    width: 33.3%;
    padding: 12px;
}
.mainServices__text {
    font-size: 18px;
    max-width: 85%;
    place-self: center;
}
.mainServices__quote {
    margin-bottom: 40px;
}
/* @media (max-width: 1439.99px) {
    .mainServices__inner {
        padding: 40px 60px;
    }
}
@media (max-width: 1023.99px) {
    .mainServices__inner {
        padding: 40px;
    }
    .mainServices__cardWrapper {
        margin: 0;
        flex-direction: column;
        gap: 20px;
    }
    .mainServices__card {
        width: 75%;
        padding: 0;
    }
    .mainServices__card:nth-of-type(even) {
        place-self: flex-end;
    }
}
@media (max-width: 767.99px) {
   .mainServices__card {
       width: 85%;
   }
}
@media (max-width: 573.99px) {
    .mainServices__inner {
        padding: 40px 20px;
    }
    .mainServices__card {
        width: 100%
    }
} */
</style>
