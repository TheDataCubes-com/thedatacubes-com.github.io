<template>
  <ClientOnly>
    <div class="captcha">
      <div class="captcha__box">
        <div
          v-for="({type, item}, index) in generated"
          :key="index"
          class="captcha__item"
        >
          <span v-if="type === 'sign'">{{item}}</span>
          <img
            v-if="type === 'cpt'"
            :src="`/images/cpt/${item}.png`"
          >
        </div>
      </div>
      <input type="text" class="captcha__input" />
    </div>
  </ClientOnly>
</template>

<script setup>
const cptMap = ref({
  "cpt-1": 8,
  "cpt-2": 3,
  "cpt-3": 5,
  "cpt-4": 2,
  "cpt-5": 6,
  "cpt-6": 0,
  "cpt-7": 1,
  "cpt-8": 4,
  "cpt-9": 7,
  "cpt-10": 9
});
const cpts = ref([
   "cpt-1",
   "cpt-2",
   "cpt-3",
   "cpt-4",
   "cpt-5",
   "cpt-6",
   "cpt-7",
   "cpt-8",
   "cpt-9",
   "cpt-10",
]);
const signs = ref(["*", "+", "-"]);
const generated = ref([]);

const generate = () => {
  var amount = Math.floor(Math.random() * 2) ? 3 : 2;
  for (var i = 0; i < amount + (amount - 1); i++) {
    var items = (i % 2) ? signs.value : cpts.value;
    generated.value.push({
      type: (i % 2) ? "sign" : "cpt",
      item: items[Math.floor(Math.random() * items.length)]
    });
  }
}
const validate = () => {

}

onBeforeMount(() => generate());
</script>

<style>
.captcha {
    display: flex;
    gap: 12px;
}
.captcha__box {
    display: flex;
    gap: 8px;
}
.captcha__box:after {
    content: "=";
    font: 14px;
    color: white;
}
.captcha__item span {
    color: white;
    font-size: 14px;
}
.captcha__item img {
    width: 24px;
    height: 24px;
}
.captcha__input {
    color: black;
    border: none;
    width: 100%;
    border-radius: 12px;
    font-size: 14px;
    outline-color: var(--mainPurple);
    max-width: 40px;
}
</style>
