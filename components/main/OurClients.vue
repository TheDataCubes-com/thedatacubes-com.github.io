<template>
<section class="ourClients">
  <div class="ourClients__inner">
    <h2>What Our Clients Say</h2>
    <div class="ourClients__cardsWrap">
      <div v-for="({name, position, text, logo}, index) in cards" class="ourClients__card">
        <div :key="index">
          <p v-html="text" class="ourClients__text"/>
          <div class="ourClients__signature">
            <span v-html="name"/>
            <span v-html="position"/>
            <img
              :src="logo.path"
              :style="`max-width: ${logo.width}`"
              alt="clientLogo"
              class="ourClient__image"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
const cards = ref([
  { position: "Bank of America", text: "", logo: {} },
  {
    text: "I had the opportunity to work alongside Rouzanna at Bank of America, where we collaborated on various initiatives in Enterprise Data Integration, Big Data, AI, and Machine Learning. Additionally, we jointly developed the Enterprise Data Strategy for the Consumer Banking sector, with a focus on its Digital Transformation.<br/><br/>She excels in strategic consulting and the delivery of Enterprise Data Management and MDM solutions, particularly within the Financial Services sector. Her standout ability lies in translating complex business problems into successful technical solutions, a skill that significantly contributed to the success of our projects at Bank of America.<br/><br/>A final comment about Rouzanna is her rare combination of technical expertise, enterprise implementation, and the ability to capture and present concepts, solutions, and implementations in architecture models, something we don't often see these days.",
    name: "Patrick Ikhifa",
    position: "Distinguished Client Architect, FINS",
    logo: {width: "80px" , path: "/images/mule-soft.png"},
  },
  { position: "PennyMac Loan Services, LLC", text: "", logo: {} },
  {
    text: "Rouzanna, the founder of TheDataCubes team, is an exceptionally talented expert in all things data, who really takes the time to learn the unique and different challenges of each project she takes on. At Bold Metrics, Rouzanna quickly became part of the team, she took the time to learn all facets of the problems we were trying to solve and the impact it would make on our clients. While Rouzanna is without a doubt an expert in the Data Management world, she's also incredibly savvy when it comes to building and managing teams, and truly bringing out the best in people.<br/><br/>While there are a lot of ways that Rouzanna made a major impact, I think her ability to take a step back and dive deep into problems, architecting solutions tailored to our specific use-case is what makes her so effective. There are plenty of experts in the world, what makes Rouzanna so unique and different is her ability to augment her techniques and approach in ways that I would only expect from someone who had been with us for years.<br/><br/>I can confidently say Rouzanna was able to completely transform our data strategy, while teaching our whole team how to think about data architecture in an entirely new way. It's an honor to know that from here forward we have a truly world class data backbone designed by someone who cared about us, our clients, and of course - our data!",
    name: "Morgan Linton",
    position: "Co-founder & CTO | Bold Metrics Inc.",
    logo: {width: "40px", path: "/images/bm-logo.png"}
  },
  {
    text: "The data architecture that TheDataCubes team designed for us was well thought out, flexible, and scalable for our needs. Designed from the ground up to specifically fit our use-case, this solution enabled our business to have quick self-service insights into our data, and we were able to fast-track our application to deliver ahead of time.<br/><br/>The bonus was a super performant data warehouse we’ll use for years to come.<br/><br/>Thank you!",
    name: "Joe LaChance",
    position: "Vice President, Engineering | Bold Metrics Inc.",
    logo: { width: "40px", path: "/images/bm-logo.png"}
  },
  { position: "Sonos", text: "", logo: {} },
  { position: "Silicon Valley Bank", text: "", logo: {} },
]);
</script>

<style>
.cards {
    max-width: var(--maxWidth);
    place-self: center;
    padding: 80px 0px 100px;
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
    width: 100%;
    place-self: center;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 80px 0px;
}
.ourClients__inner > h2 {
    font-size: 60px;
    place-self: center;
}
.ourClients__cardsWrap {
    place-self: center;
    display: flex;
    flex-wrap: wrap;
    margin: -20px;
    width: 100%;
    padding-left: 20px;
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
    gap: 20px;
}
.ourClients__text {
    font-size: 14px;
}
.ourClients__signature {
    display: flex;
    flex-direction: column;
    position: relative;
}
.ourClients__signature span {
    color: rgb(63, 71, 84);
    font-size: 14px;
    font-weight: 600;
    place-self: flex-end;
    margin-top: auto;
}
.ourClient__image {
    margin-top: 12px;
    place-self: flex-end;
    width: 100%;
}
</style>
