<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CostumText',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'normal',
      validator: function (value) {
        return (
          ['large', 'normal', 'small', 'xsamll', 'xxsmall'].indexOf(value) !==
          -1
        )
      }
    }
  }
}
</script>

<style scoped>
.large {
  font-size: 16px;
}
.normal {
}
.small {
  font-size: 13px;
}
.xsmall {
  font-size: 12px;
}
.xxsmall {
  font-size: 11px;
}
</style>
