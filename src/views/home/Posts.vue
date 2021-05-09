<template>
  <div class="home">
    <h1>Posts</h1>
    <!-- <CostumText tag="p" size="xsmall">Selam</CostumText> -->
    <div v-for="tweet in tweets.statuses" :key="tweet.id">
      {{ tweet.text }}
    </div>
    <div></div>
  </div>
</template>

<script>
// import CostumText from '@/components/CostumText'
import tweetService from '@/services/tweetService'
import axios from 'axios'

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
  created() {
    axios.get(
      'http://localhost:8081/twittername/' +
        String(this.$store.state.twitterName)
    )
  },
  async mounted() {
    try {
      this.tweets = await tweetService.getTweets()
    } catch (err) {
      this.error = err.message
      console.log(this.error)
    }
  }
}
</script>

<style lang="postcss" scoped></style>
