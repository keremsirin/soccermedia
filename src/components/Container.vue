<template>
  <div class="Container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
  components: {}
}
</script>

<style scoped>
.Container {
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
