<template>
  <section class="mainServices">
    <CommonTitleLine
      heading="h2"
      title="Services"
      :centered="true"
      :padBottom="40"
      :noBg="true"
      :size="42"
    />
    <CommonQuote
      quote="Data that sit unused are no different from data that were never collected in the first place."
      sign="Doug Fisher"
    />
    <div class="mainServices__inner">
      <p class="mainServices__text">It is evident that despite advances in new technologies, data remains a massive untapped resource in many organizations, necessitating a solid Data Management Strategy before investing in new tools.<br/><br/>We have focused exclusively on Data Management Strategy and MDM for over 20 years. Our business-centric approach ensures that your data initiative delivers clear value. Whether you’re just getting started, expanding, or realigning your data journey, you can count on us for success.</p>
      <CommonMediaCards class="mainServices__cards"/>
      <p class="mainServices__text">
        Each of our engagements is tailored to address specific client requirements. We proactively transfer knowledge and skills leading to client self-sufficiency during every project.
        <NuxtLink to="/free-consultation">Talk To Us</NuxtLink>
      </p>
    </div>
  </section>
</template>

<style>
.mainServices {
    position: relative;
    display: flex;
    flex-direction: column;
}
.mainServices__inner {
    width: 100%;
    place-self: center;
    display: flex;
    flex-direction: column;
    padding: 40px 0px;
}
.mainServices__card {
    width: 33.3%;
    padding: 12px;
}
.mainServices__text {
    max-width: 1260px;
    padding: 0 100px;
    font-size: 18px;
    place-self: center;
}
.mainServices__text > a {
    color: var(--darkPurple);
    font-weight: 500;
    text-decoration: underline;
    transition: color 0.3s ease;
}
.mainServices__cards {
    margin-bottom: 40px;
}
@media (hover:hover) {
    .mainServices__text > a:hover {
        color: var(--mainYellow);
    }
}
</style>
