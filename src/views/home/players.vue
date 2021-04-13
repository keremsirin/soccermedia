<template>
  <div class="home">
    <h1>Players</h1>
    <CostumText tag="p" size="xsmall">Selam</CostumText>
    <IconHome />

    <div id="nav">
      <router-link to="/players/posts">Posts</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import CostumText from '@/components/CostumText'
import IconHome from '@/components/icons/home.svg'

export default {
  name: 'Players',
  components: {
    CostumText,
    IconHome
  }
}
</script>

<style scoped></style>
