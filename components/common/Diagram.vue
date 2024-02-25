<template>
  <div class="diagram">
    <CommonLogo :noLines="true" class="diagram__logo"/>
  </div>
</template>

<style>
.diagram {
    background-image: url("/images/diagram.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    font-size: 40px;
    width: 12em;
    height: 10em;
}
.diagram__logo {
    position: absolute;
    pointer-events: none;
    top: 50%;
    left: 50%;
    transform: translate(-64%, -26%);
    max-width: 20%;
    width: 100%;
}
@media (max-width: 1439.99px) {
    .diagram {
        font-size: 32px;
    }
}
@media (max-width: 1267.99px) {
    .diagram {
        font-size: 28px;
    }
}
@media (max-width: 1023.99px) {
   .diagram {
       font-size: 20px;
   }
}
</style>
