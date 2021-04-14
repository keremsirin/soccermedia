<template>
  <header class="Header">
    <Container>
      <router-link class="Header-logo" to="/">
        <Ball />
        <div class="Header-logo-text">SoccerMedia</div>
        <Ball />
      </router-link>
      <!-- <router-link to="/">About</router-link> -->
    </Container>
  </header>
</template>

<script>
import Ball from '@/components/icons/ball.svg'
import Container from '@/components/Container.vue'

export default {
  name: 'Header',
  components: {
    Ball,
    Container
  }
}
</script>

<style lang="postcss" scoped>
.Header {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 90;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: linear-gradient(
    90deg,
    rgba(16, 172, 132, 1) 0%,
    rgba(64, 64, 122, 1) 100%
  );
  &-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    &-text {
      font-size: 1.6rem;
      user-select: none;
      font-family: 'Press Start 2P', cursive;
      color: white;
      padding-left: 10px;
      padding-right: 6px;
      /* margin-top: 2px; */
      text-shadow: -1px 3px 0px rgb(162, 162, 162);
    }
  }
}
</style>
