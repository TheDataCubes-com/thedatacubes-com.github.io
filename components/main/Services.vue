<template>
  <section class="mainServices">
    <CommonTitleLine heading="h2" title="Services" :centered="true" :padBottom="40"/>
    <CommonQuote
      quote="Data that sit unused are no different from data that were never collected in the first place."
      sign="Doug Fisher"
      class="mainServices__quote"
    />
    <div class="mainServices__inner">
      <p class="mainServices__text">It is evident that despite advances in new technologies, data remains a massive untapped resource in many organizations, necessitating a solid Data Management Strategy before investing in new tools.<br/><br/>We have focused exclusively on Data Management Strategy and MDM for over 20 years. Our business-centric approach ensures that your data initiative delivers clear value. Whether you’re just getting started, expanding, or realigning your data journey, you can count on us for success.</p>
      <button @click="() => v = !v" class="b">toggle variant</button>
      <div v-if="v" class="wr">
        <img src="/images/cube.png" alt="" />
        <div class="cwr">
          <div v-for="c in cards" class="c">
            <h4>{{c.title}}</h4>
            <div v-html="c.text"/>
            <button class="b">Read more</button>
          </div>
        </div>
      </div>
      <div v-else class="mainServices__cardWrapper">
        <div
          v-for="({ text, link, title}, index) in cards"
          :key="index"
          class="mainServices__card"
        ><CommonCard :title="title" :text="text" :link="link" /></div>
      </div>
      <p class="mainServices__text">Each TheDataCubes engagement is tailored to address specific client requirements. We proactively transfer knowledge and skills leading to client self-sufficiency during every project.</p>
    </div>
  </section>
</template>

<script setup>
const v = ref(false);
const cards = ref([
  {
    title: "Executive Services",
    text: "<ul style='display: flex; flex-direction: column; gap: 8px;'><li>Fractional Chief Data Officer (CDO)</li><li>Personalized Education & Literacy</li><li>Advisory & Mentorship</li><li>Assessment & Screening of data professionals</li></ul>",
    link: { name: "Read more", path: "/services/executive-services" }
  },
  {
    title: "Data Management and AI Strategy Consulting",
    text: "<p>We assess your data needs from a Business perspective and create a data strategy to enable practical, self-service data-driven solutions to various business challenges.</p>",
    link: { name: "Read more", path: "/services/data-management" }
  },
  {
    title: "Master Data Management and Entity Resolution Consulting",
    text: "<p>We help your Business to make better decisions faster about getting Customer 360 views, and more.<br/><br/>We offer MDM product evaluations that best fit your use case, along with strategy and implementation recommendations.</p>",
    link: { name: "Read more", path: "/services/mdm" }
  },
]);
</script>

<style>
.wr {
   display: flex;
   place-items: center;
   width: 100%;
   padding: 40px;
   gap: 40px;
}
.wr img {
   max-width: 720px;
   max-height: 580px;
   width: 100%;
}
.cwr {
    max-width: 560px;
    width: 100%;
    height: 100%;
    display: grid;
    column-gap: 20px;
    row-gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "c1 ."
        "c1 c3"
        "c2 c3"
        "c2 .";
}
.c {
    width: 100%;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0px 10px 15px var(--darkPurple);
}
.c:nth-of-type(1) {
    grid-area: c1;
}
.c:nth-of-type(2) {
    grid-area: c2;
}
.c:nth-of-type(3) {
    grid-area: c3;
    transform: translateY(-16%);
}
.b {
    border: none;
    margin-top: auto;
    font-weight: 400;
    font-size: 16px;
    padding: 8px 12px;
    background-color: var(--darkPurple);
    color: white;
    border-radius: 12px;
    width: fit-content;
    place-self: center;
    transition: background-color 0.3s ease, color 0.3s ease;
}
.b:hover {
    background-color: var(--mainYellow);
    color: var(--darkPurple);
    cursor:pointer;
}
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
.mainServices__cardWrapper {
    max-width: var(--maxCardWidth);
    place-self: center;
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
    margin-top: 40px;
}
@media (max-width: 1439.99px) {
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
.mainServices__title {
    margin: 0;
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
}
</style>
