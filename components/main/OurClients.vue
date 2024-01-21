<template>
<section class="ourClients">
  <div class="ourClients__inner">
    <h2>What Our Clients Say</h2>
    <div class="ourClients__cardsWrap">
      <div class="ourClients__card">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <span>Sam Smith</span>
        </div>
      </div>
      <div class="ourClients__card">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <span>Sam Smith</span>
        </div>
      </div>
      <div class="ourClients__card">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <span>Sam Smith</span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

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
    margin: -20px;
    width: 100%;
}
.ourClients__card {
    width: 33%;
    padding: 20px;
}
.ourClients__card>div {
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
}
</style>
