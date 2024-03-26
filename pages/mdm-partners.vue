<template>
  <section class="partners__banner">
    <h1 class="partners__title">
      We help MDM, ER, and Identity&nbspResolution solution providers
      <CommonCustomSwiper
        swiperId="banner-titile"
        :vertical="true"
        :noCap="true"
        :noWrap="true"
        :autoplay="true"
        :items="titleStatements"
        :break-points="{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            speed: 1500,
            loop: true
          }
        }"
        :delay="2000"
        class="partners__bannerSlider"
      >
        <template #item="itemProps">
          <span class="partners__titleSlide">{{itemProps.slide}}</span>
        </template>
      </CommonCustomSwiper>
    </h1>
    <CommonDiagram class="partners__diagram"/>
    <p class="partners__bannerText">
      We translate complex business problems into successful technical solutions for your customers.
      <CommonDynamicButton
        link="/contact/form"
        text="Work With Us"
        :isIcon="false"
        class="partners__bannerButton"
      />
    </p>
  </section>
  <CommonCustomSwiper
    swiperId="trusted"
    :autoplay="true"
    :items="trustedBy"
    class="partners__slider"
  >
    <template #item="itemProps">
      <div
        :style="`background-image: url(${itemProps.slide});`"
        class="partner__slide"
      />
    </template>
  </CommonCustomSwiper>
  <CommonTitleLine heading="h2" title="Services" />
  <div class="partners__info">
    <PartnersInfoSection />
  </div>
</template>

<script setup>
const titleStatements = ref([
  "win in the market",
  "drive revenue faster",
  '"land and expand"',
]);
const trustedBy = ref([
  "/images/boa-logo.png",
  "/images/sonos-logo.png",
  "/images/bm-logo.png",
  "/images/pm-logo.svg",
  "/images/mattel-logo.png",
  "/images/svb-logo.png",
  "/images/boa-logo.png",
  "/images/sonos-logo.png",
  "/images/bm-logo.png",
  "/images/pm-logo.svg",
  "/images/mattel-logo.png",
  "/images/svb-logo.png",
]);
</script>

<style>
.partners__banner {
    height: calc(100vh - 149px);
    max-width: var(--maxWidth);
    width: 100%;
    padding: 120px 40px;
    position: relative;
    margin: 0 auto;
}
.partners__bannerSlider {
    height: 73px;
}
.partners__bannerSlider .customSwiper {
    height: 100%;
    padding: 0px !important;
}
.partners__bannerSlider .customSlide {
    place-content: center !important;
}
.partners__titleSlide {
    font-size: 60px;
    font-weight: 900;
    color: var(--mainYellow);
}
.partners__info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 0 20px;
}
.partners__diagram {
    position: absolute;
    top: calc(100vh * 0.1);
    right: 12%;
}
.partners__title {
    max-width: 60%;
    text-align: left;
    font-weight: 500;
    left: 0;
    font-size: 60px;
    color: white;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
}
.partners__bannerText {
    width: 100%;
    max-width: 55%;
    color: white;
    font-size: 24px;
    line-height: 1.7;
    font-weight: 300;
}
.partners__bannerButton {
    line-height: 1;
    margin-top: 40px;
    font-size: 18px;
    padding: 6px 16px;
}
.partners__slider {
    margin: 0 auto;
    max-width: 1920px;
}
.partners__subTitle {
    font-size: 44px;
    font-weight: 600;
    color: var(--darkPurple);
    place-self: center;
    background-color: #eedcf9;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 260px;
}
.expand {
    max-height: 500vh;
}
.partner__slide {
    place-self: center;
    width: 200px;
    height: 50px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
@media (max-width: 1659.99px) {
    .partners__title, .partners__titleSlide {
       font-size: 52px;
    }
    .partners__bannerSlider {
        height: 63px;
    }
    .partners__banner {
        height: calc(100vh - 113px);
        padding: 80px 40px;
    }
    .partners__bannerText {
        font-size: 18px;
    }
}
@media (max-width: 1439.99px) {
    .partners__bannerButton {
        padding: 2px 12px;
        font-size: 16px;
    }
    .partners__banner {
        height: calc(100vh - 103px);
    }
    .partners__bannerText {
        font-size: 16px;
    }
}
@media (max-width: 1279.99px) {
    .partners__banner {
        height: calc(100vh - 89px);
    }
    .partners__bannerSlider {
        height: 49px;
    }
    .partners__titleSlide {
        font-size: 40px;
    }
    .partners__title {
        font-size: 40px;
        max-width: 50%;
    }
}
@media (max-width: 1023.99px) {
    .partners__bannerSlider {
        height: 39px;
    }
    .partners__titleSlide {
        font-size: 32px;
    }
    .partners__title {
        position: static;
        text-align: left;
        max-width: 100%;
        display: inline-block;
        margin-bottom: 20px;
        font-size: 32px;
    }
    .partners__bannerText {
        max-width: 100%;
    }
    .partners__diagram {
        position: relative;
        top: initial;
        right: initial;
        margin: 0 auto;
        margin-bottom: 40px;
    }
    .partners__bannerButton {
        margin-top: 20px;
    }
}
@media (max-height: 960px) {
    .partners__title {
        margin-bottom: 60px;
        font-size: 52px;
    }
    .partners__titleSlide {
        font-size: 52px;
    }
    .partners__bannerSlider {
        height: 63px;
    }
    .partners__bannerButton {
        margin-top: 20px;
    }
}
@media (max-height: 740px) {
    .partners__title {
        margin-bottom: 40px;
        font-size: 40px;
    }
    .partners__bannerSlider {
        height: 49px;
    }
    .partners__titleSlide {
        font-size: 40px;
    }
    .partners__banner {
        padding: 40px;
    }
}
@media (max-height: 570px) {
   .partners__diagram  {
     display: none;
   }
}
@media (max-width: 767.99px) {
    .partners__banner {
        padding: 40px;
    }
    .partners__bannerSlider {
        height: 34px;
    }
    .partners__title, .partners__titleSlide {
        font-size: 28px;
        text-align: center;
    }
    .partners__diagram {
        margin: 0 auto 20px;
    }
    .partners__bannerButton {
        display: inline-block;
        margin-top: 0;
        padding: 0px 8px;
        font-weight: 300;
    }
}
@media (max-width: 574.99px) {
    .partners__banner {
       padding: 40px 20px;
    }
}
@media (max-width: 374.99px) {
    .partners__banner {
       padding: 20px;
    }
    .partners__bannerSlider {
        height: 29px;
    }
    .partners__title, .partners__titleSlide {
        font-size: 24px;
    }
    .partners__diagram {
        font-size: 14px;
    }
}
</style>
