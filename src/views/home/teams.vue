<template>
  <div class="home">
    <h1>Teams</h1>
    <CostumText tag="p" size="xsmall">Selam</CostumText>
    <IconHome />

    <div id="nav"><router-link to="/players">Players</router-link></div>

    <router-view />
  </div>
</template>

<script>
import CostumText from '@/components/CostumText'
import IconHome from '@/components/icons/home.svg'

export default {
  name: 'Teams',
  components: {
    CostumText,
    IconHome
  }
}
</script>

<style scoped></style>
