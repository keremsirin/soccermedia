<template>
  <div class="app">
    <Header />
    <main class="Main">
      <Container>
        <router-view />
      </Container>
    </main>
  </div>
</template>

<style></style>

<script>
import Header from '@/components/Header'
import Container from '@/components/Container'

export default {
  name: 'App',
  components: {
    Header,
    Container
  }
}
</script>

<style lang="postcss" scoped>
.Main {
  padding-top: 20px;
  @media (--t) {
    padding-top: 40px;
  }
}
</style>
