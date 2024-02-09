<template>
  <div class="background__item background">
    <div class="background__item background__lines"/>
    <BgCircleTop  class="background__circle circle--top"/>
    <BgCircleBot  class="background__circle circle--bot"/>
    <BgDotsBot class="background__dotsBot"/>
    <BgDotsSide class="backgorund__dotsSide" />
    <BgCurveLineToLeft  class="background__curveLineLeft" />
    <BgCurveLineToRight class="backgound__curveLineRight" />
    <BgDotsLine class="dotsLine--1" />
    <BgDotsLine class="dotsLine--2"/>
    <BgAngles class="background__angles" />
    <span class="main__trusted">TRUSTED BY</span>
  </div>
</template>

<style>
.main__trusted {
    position: absolute;
    top: calc(100vh - 5.5%);
    left: 280px;
    z-index: 1;
    color: #b2b5bb;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
}
.main__trusted:before {
   content: "";
   height: 80px;
   width: 50%;
   border-right: 2px dashed #b2b5bb;
   border-left: 2px dashed #b2b5bb;
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translate(-50%, 100%);
   opacity: 0.5;
   z-index: 2;
}
.background__item {
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
.background {
    overflow: hidden;
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-image: url("/svg/background.svg");
    background-size: cover;
    z-index: 0;
}
.background--static {
    background-color: #170247;
    background-image: none;
}
.background__lines {
    width: 100%;
    height: 100%;
    background-image: url("/svg/vertical-lines.svg");
    background-size: cover;
    opacity: 0.2;
    z-index: 1;
    top: 0;
    left: 0;
}
.background__circle {
    position: absolute;
    width: 55%;
    height: 100vh;
}
.circle--top {
    left: 0;
}
.circle--bot {
    right: 0;
}
.background__dotsBot {
    position: absolute;
    width: 673px;
    height: 406px;
    left: calc(50% - (673px / 2));
    top: calc(100vh - 16%);
}
.backgorund__dotsSide {
    position: absolute;
    height: 673px;
    width: 406px;
    top: calc(50% - (673px / 2));
    left: calc(0px - 246px);
}
.background__curveLineLeft {
    position: absolute;
    right: -24px;
    top: calc(100vh - 65%);
    width: 54%;
}
.backgound__curveLineRight {
    top: calc(100vh - 13%);
    position: absolute;
    left: 0;
    width: 49%;
}
.dotsLine--1 {
    top: calc(100vh - 5%);
    position: absolute;
    width: 7vw;
    left: 78px;
}
.dotsLine--2 {
    position: absolute;
    width: 7vw;
    right: 46px;
    top: calc(100vh * 0.25);
}
.background__angles {
    position: absolute;
    width: 41%;
    top: 45%;
    left: 50%;
    opacity: 0.2;
}
@media (max-height: 639.99px) {
    .background__curveLineLeft {
        display: none;
    }
}
@media (max-width: 1279.99px) {
    .background__dotsBot {
        width: 50%;
        left: 25%;
        bottom: -203px;
    }
    .backgorund__dotsSide {
        height: 50%;
        top: 25%;
    }
}
@media (max-width: 1023.99px) {
    .background__curveLineLeft {
        top: calc(100vh * 0.30);
    }
    .dotsLine--2 {
        width: 10vw;
    }
}
@media (max-width: 767.99px) {
    .background__curveLineLeft, .dotsLine--1,
    .dotsLine--2, .backgound__curveLineRight {
        display: none;
    }
    .background__circle {
        width: 85%;
    }
    .circle--top {
        top: -20%;
    }
    .circle--bot {
        bottom: -20%;
    }
    .background__angles {
        width: 100%;
    }
}
</style>
