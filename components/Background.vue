<template>
  <div class="background__item background">
    <div class="background__item background__lines"/>
    <bgCircleTop class="background__circle circle--top"/>
    <bgCircleBot class="background__circle circle--bot"/>
    <bgDotsBot class="background__dotsBot"/>
    <bgDotsSide class="backgorund__dotsSide" />
    <bgCurveLineToLeft class="background__curveLineLeft" />
    <bgCurveLineToRight class="backgound__curveLineRight"/>
    <bgDotsLine class="dotsLine--1"/>
    <bgDotsLine class="dotsLine--2"/>
    <bgAngles class="background__angles"/>
  </div>
</template>

<style>
.background__item {
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
.background {
    overflow: hidden;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-image: url("assets/svg/background.svg");
    background-size: cover;
    z-index: 0;
}
.background__lines {
    width: 100%;
    height: 100%;
    background-image: url("assets/svg/vertical-lines.svg");
    background-size: cover;
    opacity: 0.2;
    z-index: 1;
    top: 0;
    left: 0;
}
.background__circle {
    position: absolute;
    width: 56%;
    height: 100%;
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
    bottom: calc(0px - 100px);
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
    top: 35%;
    width: 54%;
}
.backgound__curveLineRight {
    position: absolute;
    left: 0;
    top: 87%;
    width: 49%;
}
.dotsLine--1 {
    position: absolute;
    width: 130px;
    left: 78px;
    bottom: 60px;
}
.dotsLine--2 {
    position: absolute;
    width: 130px;
    right: 46px;
    top: 237px;
}
.background__angles {
    position: absolute;
    width: 41%;
    top: 45%;
    left: 50%;
    opacity: 0.4;
}
</style>
