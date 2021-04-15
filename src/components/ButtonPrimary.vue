<template>
  <button type="button" class="btn-primary">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.btn-primary {
  padding-left: 44px;
  padding-right: 44px;
  height: 44px;
  background-color: var(--pc);
  color: white;
  font-weight: bold;
  border-radius: 10px;
  transition: 0.3s;
  font-size: 16px;
  user-select: none;

  &:hover {
    background-color: var(--sc);
  }
}
</style>
