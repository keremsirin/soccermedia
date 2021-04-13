<template>
  <div class="home">
    <h1>Home</h1>
    <CostumText tag="p" size="xsmall">Selam</CostumText>
    <IconHome />
    <router-view />
  </div>
</template>

<script>
import CostumText from '@/components/CostumText'
import IconHome from '@/components/icons/home.svg'

export default {
  name: 'Home',
  components: {
    CostumText,
    IconHome
  }
}
</script>

<style scoped></style>
