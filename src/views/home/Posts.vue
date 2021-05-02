<template>
  <div class="home">
    <h1>Posts</h1>
    <!-- <CostumText tag="p" size="xsmall">Selam</CostumText> -->
    <div v-for="tweet in tweets.statuses" v-bind:key="tweet.id">
      {{ tweet.text }}
    </div>
    <div></div>
  </div>
</template>

<script>
// import CostumText from '@/components/CostumText'
import tweetService from '@/services/tweetService'

export default {
  name: 'Posts',
  components: {
    // CostumText,
  },
  data() {
    return {
      tweets: [],
      error: ''
    }
  },
  async created() {
    try {
      this.tweets = await tweetService.getTweets()
    } catch (err) {
      this.error = err.message
      console.log(this.error)
    }
  }
}
</script>

<style scoped></style>
