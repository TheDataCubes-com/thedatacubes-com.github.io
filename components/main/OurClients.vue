<template>
  <section v-if="shown" class="ourClients">
    <CommonTitleLine
      title="What Our Clients Say"
      heading="h2"
      :padBottom="40"
      :noBg="true"
    />
    <div class="ourClients__inner">
      <div class="ourClients__cardsWrap">
        <div
          v-for="({name, position, text, logo, company}, index) in filteredClients"
          :key="index"
          class="ourClients__card"
        >
          <div>
          <!-- <CommonTextWrap :text="text" class="ourClients__text"/> -->
          <p v-html="text" class="ourClients__text"/>
            <div class="ourClients__signature">
              <span v-html="name"/>
              <span v-html="position"/>
              <span v-html="company"/>
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
const dontShowOn = ["login"];

const props = defineProps({
  filter: { type: String, default: "" }
});

const cards = ref([
  {
    text: "Rouzanna is a highly knowledgeable and motivated leader who excels in all aspects of data modeling and management. As part of our team, she was a key player in designing and building out the database design and model for a complex Operational Data Store that sourced data from dozens of systems in the mortgage space, integrating that into a common data model and provisioned it to 100+ downstream systems.<br/><br/>She has a high degree of integrity, and her decision-making ability made her one of the most impactful members in a large size of a highly technical data management team. She is a pleasure to work with and I wish the best for her in all her future endeavors!",
    name: "Dilip Raja",
    position: "Senior Vice President, Global Technology",
    logo: {width: "60px", path: "/images/boa-logo.png"},
    sector: "banking",
    company: "Bank&nbspof&nbspAmerica"
  },
  {
    text: "Rouzanna was a great partner in scaling our lead generation processes and marketing campaigns for customer retention. Her ability to understand complex business challenges and convert them into technical solutions stands out. This skill significantly contributed to the success of our projects at PennyMac.<br/><br/>She led the development of a Master Data Management (MDM) solution and Customer&nbsp360, designing and constructing it from scratch as a scalable and configurable system. This effort has significantly improved the efficiency of our marketing campaigns and boosted our customer retention metrics.<br/><br/>Rouzanna combines technical implementation expertise with a unique ability to grasp and present concepts and solutions. This blend of skills brings significant value to both technology and business groups.",
    name: "Sharad Varadarajan",
    position: "SVP, Portfolio Risk Management",
    logo: {width: "140px", path: "/images/pm-logo.svg"},
    sector: "banking",
    company: "PennyMac Loan Services, LLC"
  },
  {
    text: "Rouzanna, the founder of TheDataCubes team, is an exceptionally talented expert in all things data, who really takes the time to learn the unique and different challenges of each project she takes on. At Bold Metrics, Rouzanna quickly became part of the team, she took the time to learn all facets of the problems we were trying to solve and the impact it would make on our clients. While Rouzanna is without a doubt an expert in the Data Management world, she's also incredibly savvy when it comes to building and managing teams, and truly bringing out the best in people.<br/><br/>While there are a lot of ways that Rouzanna made a major impact, I think her ability to take a step back and dive deep into problems, architecting solutions tailored to our specific use-case is what makes her so effective. There are plenty of experts in the world, what makes Rouzanna so unique and different is her ability to augment her techniques and approach in ways that I would only expect from someone who had been with us for years.<br/><br/>I can confidently say Rouzanna was able to completely transform our data strategy, while teaching our whole team how to think about data architecture in an entirely new way. It's an honor to know that from here forward we have a truly world class data backbone designed by someone who cared about us, our clients, and of course - our data!",
    name: "Morgan Linton",
    position: "Co-founder & CTO",
    logo: {width: "40px", path: "/images/bm-logoSign.png"},
    sector: "data",
    company: "Bold&nbspMetrics&nbspInc."
  },
  {
    text: "I have been working closely with Rouzanna at SVB and have consistently been impressed with her exceptional strategic skills and expertise in Master Data Management (MDM), particularly with near real time use cases leveraging Reltio and batch processing using Informatica.<br/><br/>Her in-depth knowledge and hands-on experience with MDM solutions helps to navigate complex data landscapes seamlessly and derive maximum value from the data platforms. Rouzanna has consistently demonstrated the ability to align MDM strategies with broader business goals. Her strategic mindset ensures that MDM initiatives not only meet technical requirements but also contribute to the overall success and growth of the organization resulting in improved data accuracy, streamlined processes, and enhanced decision-making capabilities.<br/><br/>Rouzanna has a track record of successfully implementing MDM solutions and excels in fostering collaboration among cross-functional teams. I am impressed by her leadership style which encourages open communication, knowledge sharing, and a collective commitment to achieving MDM objectives.",
    name: "Raj Chayapathi",
    position: "Principal Enterprise Architect",
    logo: { width: "80px", path: "/images/svb-logo.png"},
    sector: "banking",
    company: "Silicon&nbspValley&nbspBank"
 },
 {
   text: "I had the opportunity to work alongside Rouzanna at Bank of America, where we collaborated on various initiatives in Enterprise Data Integration, Big Data, AI, and Machine Learning. Additionally, we jointly developed the Enterprise Data Strategy for the Consumer Banking sector, with a focus on its Digital Transformation.<br/><br/>She excels in strategic consulting and the delivery of Enterprise Data Management and MDM solutions, particularly within the Financial Services sector. Her standout ability lies in translating complex business problems into successful technical solutions, a skill that significantly contributed to the success of our projects at Bank of America.<br/><br/>A final comment about Rouzanna is her rare combination of technical expertise, enterprise implementation, and the ability to capture and present concepts, solutions, and implementations in architecture models, something we don't often see these days.",
   name: "Patrick Ikhifa",
   position: "Distinguished Client Architect, FINS",
   logo: {width: "60px", path: "/images/boa-logo.png"},
   sector: "banking",
   company: "Bank&nbspof&nbspAmerica"
 },
 {
   text: "The data architecture that TheDataCubes team designed for us was well thought out, flexible, and scalable for our needs. Designed from the ground up to specifically fit our use-case, this solution enabled our business to have quick self-service insights into our data, and we were able to fast-track our application to deliver ahead of time.<br/><br/>The bonus was a super performant data warehouse we’ll use for years to come.<br/><br/>Thank you!",
   name: "Joe LaChance",
   position: "Vice President, Engineering",
   logo: { width: "40px", path: "/images/bm-logoSign.png"},
   sector: "data",
   company: "Bold&nbspMetrics&nbspInc."
 },
 // { position: "Sonos", text: "", logo: {} },
]);

const route = useRoute();

const shown = computed(() => {
  var { name } = route;
  return name === "index";
  return !dontShowOn.includes(name);
});
const filteredClients = computed(() => {
  if (!props.filter) return cards.value;
  return cards.value.filter(({ sector }) => sector === props.filter);
});
</script>

<style>
.ourClients {
    background-color: var(--softPink);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.ourClients__inner {
    width: 100%;
    place-self: center;
    display: flex;
    flex-direction: column;
    padding: 40px;
}
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
.ourClients__cardsWrap {
    place-items: center;
    place-self: center;
    display: flex;
    flex-wrap: wrap;
    margin: -12px;
    width: 100%;
}
.ourClients__card {
    width: 33.3%;
    padding: 12px;
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
    min-height: 360px;
}
.ourClients__signature {
    display: flex;
    flex-direction: column;
    position: relative;
}
.ourClients__signature span {
    font-size: 14px;
    font-weight: 500;
    place-self: flex-end;
    margin-top: auto;
    text-align: right;
}
.ourClient__image {
    margin-top: 12px;
    place-self: flex-end;
    width: 100%;
}
@media (max-width: 1279.99px) {
    .ourClients__card {
        width: 50%;
    }
}
@media (max-width: 1023.99px) {
   .ourClients__inner {
       padding: 40px 20px;
   }
}
@media (max-width: 767.99px) {
    .ourClients__inner {
        padding: 20px;
    }
    .ourClients__card {
        padding: 0;
        margin-bottom: 12px;
    }
    .ourClients__card>div {
        padding: 20px;
    }
    .ourClients__card {
        width: 100%;
    }
    .ourClients__text {
        min-height: initial;
    }
}
</style>
