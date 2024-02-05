<template>
  <div class="textWrap">
    <div
      ref="description"
      :style="`width: ${descriptionWidth}%; font-size: ${fontSize}px;`"
      v-html="description"
      :class="[
        'textWrap__description',
        {'textWrap__description--gradient': moreContent},
      ]"
    />
    <div v-if="isToggle">
      <div
        @click="showContent"
        class="textWrap__moreContent"
      >{{ toggleBtn ? 'Cкрыть' : 'Читать полностью' }}</div>
    </div>
  </div>
</template>

<script script>
const props = defineProps({
  isStatic: { type: Boolean, default: false },
  description: { type: String, default: '' },
  descriptionWidth: { type: Number, default: 100 },
  maxHeight: { type: Number, default: 100 },
  fontSize: { type: String, default: '14' },
  gradientBlue: { type: Boolean, default: false },
  moreButtonIsLink: { type: Boolean, default: false },
  moreButtonLink: { type: [String, Object], default: '' },
  isToggle: { type: Boolean, default: true },
  target: { type: String, default: '_blank' },
  isStaticMoreButton: { type: Boolean, default: false },
});
//   data() {
//     return {
//       moreContent: false,
//       toggleBtn: false,
//       showBtn: false,
//     }
//   },
//   mounted() {
//     if (!this.isStatic) this.setMaxHeight();
//   },
//   computed: {
//     ...mapGetters({
//       getPrint: 'app/getPrint',
//       isMobile: 'app/isMobile',
//     })
//   },
//   methods: {
//     showContent() {
//       const description = this.$refs.description;
//       description.style.height = 'auto';
//       this.toggleBtn = !this.toggleBtn;
//       this.moreContent = !this.moreContent
//       if (this.moreContent) {
//         description.style.height = `${this.maxHeight}px`;
//       }
//     },
//     setMaxHeight() {
//       const description = this.$refs.description;
//       if (description.clientHeight > this.maxHeight) {
//         description.style.height = `${this.maxHeight}px`;
//         this.moreContent = true;
//         this.showBtn = true;
//       }
//     }
//   },
//   watch: {
//     getPrint(value) { if (value) this.showContent(); },
//   }
// }
</script>

<style>
.textWrap__description {
  position: relative;
  color: var(--gray02);
  font-family: var(--fontRegular);
  font-size: 16px;
  line-height: 1.6;
  overflow: hidden;
  white-space: pre-wrap;
  word-break: break-word;
}
.textWrap__description--gradient {
  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 25px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--blue03) 100%);
  }
}
.textWrap__moreContent {
  text-decoration: none;
  display: inline-block;
  margin: 12px 0 0 0;
  text-decoration: none;
  color: var(--brand);
  font-family: var(--fontRegular);
  line-height: 1.5;
  cursor: pointer;
  user-select: none;
  transition: color 0.3s ease;
  &:hover {
    color: var(--blue02);
  }
}
@media (hover:hover) {

}
</style>
