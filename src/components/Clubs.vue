<template>
  <component :is="teamID" role="img" />
</template>

<script>
const icons = {
  1: require('@/assets/teams/1.svg'),
  2: require('@/assets/teams/2.svg'),
  3: require('@/assets/teams/3.svg'),
  4: require('@/assets/teams/4.svg'),
  5: require('@/assets/teams/5.svg'),
  6: require('@/assets/teams/6.svg'),
  7: require('@/assets/teams/7.svg'),
  8: require('@/assets/teams/8.svg'),
  9: require('@/assets/teams/9.svg'),
  10: require('@/assets/teams/10.svg'),
  11: require('@/assets/teams/11.svg'),
  12: require('@/assets/teams/12.svg'),
  13: require('@/assets/teams/13.svg'),
  14: require('@/assets/teams/14.svg'),
  15: require('@/assets/teams/15.svg'),
  16: require('@/assets/teams/16.svg'),
  17: require('@/assets/teams/17.svg'),
  18: require('@/assets/teams/18.svg'),
  19: require('@/assets/teams/19.svg'),
  20: require('@/assets/teams/20.svg'),
  21: require('@/assets/teams/21.svg')
}

export default {
  props: {
    name: {
      type: Number,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      }
    }
  },
  computed: {
    teamID() {
      return icons[this.name]
    }
  }
}
</script>
