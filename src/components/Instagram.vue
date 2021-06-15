<template>
  <div class="Insta">
    <div class="Insta-inner" v-for="post in posts" :key="post">
      <div class="Insta-inner-top">
        <img class="insta-user-img" src="../assets/logo.png" alt="" />
        <CostumText class="insta-user-name">{{ post.full_name }}</CostumText>
      </div>
      <div class="Insta-inner-mid">
        <img class="insta-post-img" src="../assets/logo.png" alt="" />
      </div>
      <div class="Insta-inner-bot">
        <CostumText class="insta-user-name2">cakirugurcan61</CostumText>
        <CostumText>✈️</CostumText>

        <CostumText class="insta-like-count">61.127 </CostumText>
        <CostumText class="insta-like-text">kişi beğendi</CostumText>
        <CostumText size="xxsmall" class="insta-bot-date"
          >3 GÜN ÖNCE</CostumText
        >
      </div>
    </div>
  </div>
</template>

<script>
import CostumText from '@/components/CostumText'
// import TwitterLike from '@/components/icons/twitter-like.svg'
// import TwitterRetweet from '@/components/icons/twitter-retweet.svg'
import postService from '@/services/postService'
import axios from 'axios'
// import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import trLocale from 'date-fns/locale/tr'

export default {
  name: 'Instagram',
  components: {
    CostumText
    // TwitterLike,
    // TwitterRetweet
  },
  data() {
    return {
      posts: [],
      error: '',
      trLocale: trLocale
    }
  },
  async mounted() {
    await axios.post(window.location.origin + '/api/posts/instagramname', {
      userName: this.$store.state.instagramName
    })
    await axios.post(window.location.origin + '/api/posts/instagramname', {
      userName: this.$store.state.instagramName
    })
    try {
      this.posts = await postService.getPosts()
    } catch (err) {
      this.error = err.message
      console.log(this.error)
    }
  },
  updated() {
    document.getElementById('scroll').scrollIntoView()
  },
  methods: {
    // formatDistanceToNowStrict
  }
}
</script>

<style lang="postcss" scoped>
.Insta {
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  justify-content: flex-start;
  &-inner {
    display: inherit;
    flex-direction: column;
    padding: 40px;
    margin-bottom: 28px;
    /* background-color: rgba(250, 250, 250, 1); */
    border-radius: 10px;
    border: 4px solid var(--sc);
    .insta {
      &-top {
        padding-bottom: 20px;
      }
      &-user-img {
        height: 48px;
        width: 48px;
        border-radius: 100%;
      }
      &-user-name {
        font-weight: 600;
        padding-left: 14px;
      }
      &-context {
        padding-top: 20px;
      }
      &-user-name2 {
        font-weight: 600;
        padding-right: 8px;
      }
      &-post-img {
        border-radius: 10px;
      }
      &-bot {
        padding-top: 10px;
        display: flex;
        &-date {
          align-items: flex-end;
          display: inherit;
          margin-left: auto;
        }
      }
      &-like-count {
        font-weight: 600;
        padding-right: 4px;
      }
    }
  }
}
</style>
