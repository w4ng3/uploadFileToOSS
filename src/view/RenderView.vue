<template>
  <AnchoredHeading :level="1">如果在冬夜</AnchoredHeading>
  <AnchoredHeading :level="2">一个旅人</AnchoredHeading>
  <AnchoredHeading :level="3">走在马尔堡市郊外</AnchoredHeading>
  <AnchoredHeading :level="4">从陡壁的悬崖上探出身躯</AnchoredHeading>
  <AnchoredHeading :level="5">向着黑黢黢的下边观看</AnchoredHeading>
  <hr>
  <Bar />
  <Jsxtest />
  <hr>
  <JsxComp />

</template>
<script setup lang="jsx">
import AnchoredHeading from '../components/AnchoredHeading';
import { h } from 'vue';
import JsxComp from '../components/JsxComp'
import vueSvg from '../assets/vue.svg'
const Bar = () => h(AnchoredHeading, { level: 1 },
  [h('span', 'Hello'), '-world!']
)
const Jsxtest = (<>
  {/* 一张图片 */}
  <img src={vueSvg} alt="Vue logo" />
</>)
</script>
<style lang="scss">
</style>