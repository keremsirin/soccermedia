<template>
  <div class="home">
    <h1>Posts</h1>
    <CostumText tag="p" size="xsmall">Selam</CostumText>
    <IconHome />
  </div>
</template>

<script>
import CostumText from '@/components/CostumText'
import IconHome from '@/components/icons/home.svg'

export default {
  name: 'Posts',
  components: {
    CostumText,
    IconHome
  }
}
</script>

<style scoped></style>
