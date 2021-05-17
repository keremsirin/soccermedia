<template>
  <div class="Posts">
    <CostumText class="Posts-title" tag="h1">Paylaşımlar</CostumText>

    <div class="Posts-container">
      <div class="Posts-container-tweets">
        <div
          class="Posts-container-tweets-inner"
          v-for="tweet in tweets"
          :key="tweet.id"
        >
          <span>
            <img
              class="twitter-img"
              :src="tweet.user.profile_image_url_https"
              alt=""
            />
            <div class="twitter-names">
              <span>
                <CostumText tag="a" class="twitter-user-name">
                  {{ tweet.user.name }}
                </CostumText>
              </span>
              <CostumText tag="a" class="twitter-screen-name"
                >@{{ tweet.user.screen_name }}</CostumText
              >
            </div>
            <CostumText class="twitter-date">
              {{
                formatDistanceToNowStrict(new Date(tweet.created_at), {
                  locale: trLocale
                })
              }}
            </CostumText>
          </span>

          <div class="twitter-text">
            {{ tweet.text }}
          </div>
          <span>
            <div class="like">
              <TwitterLike />
              <div class="twitter-fav">
                {{ tweet.favorite_count }}
              </div>
            </div>
            <TwitterRetweet />
            <div class="twitter-rt">
              {{ tweet.retweet_count }}
            </div>
          </span>
          <!-- <br /> -->
          <!-- {{ tweet.user.profile_image_url_https }} -->
        </div>
      </div>
      <!-- <div class="Posts-container-insta">
        <div class="Posts-container-insta-inner">
          <div class="insta-top">
            <img
              class="insta-user-img"
              src="../../assets/uc-profile.jpeg"
              alt=""
            />
            <CostumText class="insta-user-name">cakirugurcan61</CostumText>
          </div>
          <img class="insta-post-img" src="../../assets/uc-1.jpeg" alt="" />
          <div class="insta-context">
            <CostumText class="insta-user-name2">cakirugurcan61</CostumText>
            <CostumText>✈️</CostumText>
          </div>
          <div class="insta-bot">
            <CostumText class="insta-like-count">61.127 </CostumText>
            <CostumText class="insta-like-text">kişi beğendi</CostumText>
            <CostumText size="xxsmall" class="insta-bot-date"
              >3 GÜN ÖNCE</CostumText
            >
          </div>
        </div>
        <div class="Posts-container-insta-inner">
          <div class="insta-top">
            <img
              class="insta-user-img"
              src="../../assets/uc-profile.jpeg"
              alt=""
            />
            <CostumText class="insta-user-name">cakirugurcan61</CostumText>
          </div>
          <img class="insta-post-img" src="../../assets/uc-2.jpeg" alt="" />
          <div class="insta-context">
            <CostumText class="insta-user-name2">cakirugurcan61</CostumText>
            <CostumText
              >Tüm takım arkadaşlarımın emeğine sağlık. Abdüş kardeşimi güzel
              golü dolayısıyla ayrıca kutluyorum. ❤️💙 #Trabzonspor</CostumText
            >
          </div>
          <div class="insta-bot">
            <CostumText class="insta-like-count">62.932 </CostumText>
            <CostumText class="insta-like-text">kişi beğendi</CostumText>
            <CostumText size="xxsmall" class="insta-bot-date"
              >4 GÜN ÖNCE</CostumText
            >
          </div>
        </div>
        <div class="Posts-container-insta-inner">
          <div class="insta-top">
            <img
              class="insta-user-img"
              src="../../assets/uc-profile.jpeg"
              alt=""
            />
            <CostumText class="insta-user-name">cakirugurcan61</CostumText>
          </div>
          <img class="insta-post-img" src="../../assets/uc-3.jpeg" alt="" />
          <div class="insta-context">
            <CostumText class="insta-user-name2">cakirugurcan61</CostumText>
            <CostumText
              >İyi mücadeleyle kazanmak önemliydi. Oynayan, oynamayan tüm
              arkadaşlarımı kutluyorum. Aynı konsantrasyonla devam 💪🏻❤️💙
              #Trabzonspor</CostumText
            >
          </div>
          <div class="insta-bot">
            <CostumText class="insta-like-count">73.413 </CostumText>
            <CostumText class="insta-like-text">kişi beğendi</CostumText>
            <CostumText size="xxsmall" class="insta-bot-date"
              >24 NİSAN</CostumText
            >
          </div>
        </div>
        <div class="Posts-container-insta-inner">
          <div class="insta-top">
            <img
              class="insta-user-img"
              src="../../assets/uc-profile.jpeg"
              alt=""
            />
            <CostumText class="insta-user-name">cakirugurcan61</CostumText>
          </div>
          <img class="insta-post-img" src="../../assets/uc-4.jpeg" alt="" />
          <div class="insta-context">
            <CostumText class="insta-user-name2">cakirugurcan61</CostumText>
            <CostumText
              >Hak ettiğimiz galibiyete ulaşamadığımız bir maç oynadık. Böyle
              bir oyunla 1 puana razı olmak üzüntü verici. Son maçın son
              dakikasına kadar kazanmak için mücadele etmeye devam edeceğiz.
              #Trabzonspor</CostumText
            >
          </div>
          <div class="insta-bot">
            <CostumText class="insta-like-count">61.570 </CostumText>
            <CostumText class="insta-like-text">kişi beğendi</CostumText>
            <CostumText size="xxsmall" class="insta-bot-date"
              >21 NİSAN</CostumText
            >
          </div>
        </div>
        <div class="Posts-container-insta-inner">
          <div class="insta-top">
            <img
              class="insta-user-img"
              src="../../assets/uc-profile.jpeg"
              alt=""
            />
            <CostumText class="insta-user-name">cakirugurcan61</CostumText>
          </div>
          <img class="insta-post-img" src="../../assets/uc-5.jpeg" alt="" />
          <div class="insta-context">
            <CostumText class="insta-user-name2">cakirugurcan61</CostumText>
            <CostumText></CostumText>
          </div>
          <div class="insta-bot">
            <CostumText class="insta-like-count">72.378 </CostumText>
            <CostumText class="insta-like-text">kişi beğendi</CostumText>
            <CostumText size="xxsmall" class="insta-bot-date"
              >17 NİSAN</CostumText
            >
          </div>
        </div>
      </div> -->
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
  name: 'Posts',
  components: {
    CostumText,
    TwitterLike,
    TwitterRetweet
  },
  data() {
    return {
      tweets: [],
      error: '',
      date: null,
      trLocale: trLocale
    }
  },
  beforeCreate() {
    axios.get(
      'https://soccer-media.herokuapp.com/api/twittername/' +
        this.$store.state.twitterName

      // 'http://localhost:8081/api/twittername/' + this.$store.state.twitterName

      // window.location.origin +
      //   '/api/twittername/' +
      //   this.$store.state.twitterName
    )
  },
  created() {
    axios.get(
      'https://soccer-media.herokuapp.com/api/twittername/' +
        this.$store.state.twitterName

      // 'http://localhost:8081/api/twittername/' + this.$store.state.twitterName

      // window.location.origin +
      //   '/api/twittername/' +
      //   this.$store.state.twitterName
    )
  },
  async mounted() {
    try {
      this.tweets = await tweetService.getTweets()
    } catch (err) {
      this.error = err.message
      console.log(this.error)
    }
  },
  methods: {
    formatDistanceToNowStrict
  }
}
</script>

<style lang="postcss" scoped>
.Posts {
  margin-top: 40px;
  padding-top: 40px;

  &-title {
    text-align: center;
    padding-bottom: 40px;
    font-size: 2.4rem;
  }
  &-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 28px;
    /* justify-content: center; */

    &-tweets {
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

        span {
          display: inherit;
          flex-direction: row;
        }
        .twitter-img {
          height: 48px;
          width: 48px;
          border-radius: 100%;
          /* transform: scale(0.1); */
        }
        .twitter-names {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 4px;
          padding-left: 10px;
        }
        .twitter-user-name {
          font-weight: bold;
        }
        .twitter-screen-name {
          font-size: 14px;
          color: rgba(000, 000, 000, 0.7);
        }
        .twitter-date {
          margin-left: auto;
          padding-top: 4px;
          font-size: 14px;
          color: rgba(000, 000, 000, 0.7);
        }
        .twitter-text {
          margin-top: 20px;
          margin-bottom: 20px;
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
    &-insta {
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
  }
}
</style>
