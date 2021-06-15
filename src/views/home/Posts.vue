<template>
  <div class="Posts">
    <CostumText class="Posts-title" tag="h1">Paylaşımlar</CostumText>
    <div class="Posts-container">
      <Twitter />
      <!-- <Instagram /> -->
    </div>
  </div>
</template>

<script>
import CostumText from '@/components/CostumText'
import Twitter from '@/components/Twitter'
// import Instagram from '@/components/Instagram'

export default {
  name: 'Posts',
  components: {
    CostumText,
    Twitter
    // Instagram
  },
  data() {
    return {}
  },
  updated() {
    document.getElementById('scroll').scrollIntoView()
  }
}
</script>

<style lang="postcss" scoped>
.Posts {
  margin-top: 40px;
  padding-top: 40px;
  min-height: calc(100vh - 40px);

  &-title {
    text-align: center;
    padding-bottom: 40px;
    font-size: 2.4rem;
  }

  &-container {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 600px;
    /* grid-template-columns: 1fr 1fr; */
    /* grid-gap: 28px; */
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
