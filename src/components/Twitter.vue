<template>
  <div class="Tweets">
    <div class="Tweets-inner" v-for="tweet in tweets" :key="tweet.id">
      <div class="Tweets-inner-top">
        <a
          :href="`https://twitter.com/${tweet.user.screen_name}`"
          target="_blank"
        >
          <img
            class="Tweets-inner-top-pp"
            :src="tweet.user.profile_image_url_https"
            alt=""
          />
        </a>
        <div class="Tweets-inner-top-names">
          <CostumText
            tag="a"
            size="normal"
            :href="`https://twitter.com/${tweet.user.screen_name}`"
            target="_blank"
            class="Tweets-inner-top-names-user"
            >{{ tweet.user.name }}</CostumText
          >
          <CostumText
            tag="a"
            size="medium"
            :href="`https://twitter.com/${tweet.user.screen_name}`"
            target="_blank"
            class="Tweets-inner-top-names-screen"
            >@{{ tweet.user.screen_name }}</CostumText
          >
        </div>
        <CostumText tag="a" size="medium" class="Tweets-inner-top-date">
          {{
            formatDistanceToNowStrict(new Date(tweet.created_at), {
              locale: trLocale
            })
          }}
        </CostumText>
      </div>

      <div class="Tweets-inner-mid">
        {{ tweet.text }}
      </div>

      <div class="Tweets-inner-bot">
        <TwitterLike class="Tweets-inner-bot-fav" />
        {{ tweet.favorite_count }}
        <TwitterRetweet class="Tweets-inner-bot-rt" />
        {{ tweet.retweet_count }}
      </div>
    </div>
  </div>
</template>

<script>
import CostumText from '@/components/CostumText'
import TwitterLike from '@/components/icons/twitter-like.svg'
import TwitterRetweet from '@/components/icons/twitter-retweet.svg'
import tweetService from '@/services/tweetService'
import axios from 'axios'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import trLocale from 'date-fns/locale/tr'

export default {
  name: 'Tweets',
  components: {
    CostumText,
    TwitterLike,
    TwitterRetweet
  },
  data() {
    return {
      tweets: [],
      error: '',
      trLocale: trLocale
    }
  },
  async mounted() {
    await axios.post(window.location.origin + '/api/tweets/twittername', {
      userName: this.$store.state.twitterName
    })
    await axios.post(window.location.origin + '/api/tweets/twittername', {
      userName: this.$store.state.twitterName
    })
    try {
      this.tweets = await tweetService.getTweets()
    } catch (err) {
      this.error = err.message
      console.log(this.error)
    }
  },
  updated() {
    document.getElementById('scroll').scrollIntoView()
  },
  methods: {
    formatDistanceToNowStrict
  }
}
</script>

<style lang="postcss" scoped>
.Tweets {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  &-inner {
    display: inherit;
    flex-direction: column;
    padding: 40px;
    margin-bottom: 28px;
    /* background-color: rgba(250, 250, 250, 1); */
    border-radius: 10px;
    border: 4px solid var(--pc);

    &-top {
      display: inherit;
      &-pp {
        height: 48px;
        width: 48px;
        border-radius: 100%;
      }
      &-names {
        display: inherit;
        flex-direction: column;
        padding-top: 4px;
        padding-left: 10px;
        &-user {
          font-weight: 700;
        }
        &-screen {
          color: rgba(0, 0, 0, 0.7);
        }
      }
      &-date {
        margin-left: auto;
        padding-top: 4px;
        color: rgba(0, 0, 0, 0.7);
      }
    }
    &-mid {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    &-bot {
      display: inherit;
      &-fav {
        margin-right: 2px;
      }
      &-rt {
        margin-left: 18px;
        margin-right: 2px;
      }
    }

    .like {
      display: flex;
      flex-direction: row;
    }
    .twitter-fav {
      margin-left: 2px;
      margin-right: 18px;
    }
    .twitter-rt {
      margin-left: 2px;
    }
  }
}
</style>
