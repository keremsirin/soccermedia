<template>
  <div class="Players">
    <CostumText class="Players-title" tag="h1">Oyuncular</CostumText>
    <div class="Players-search">
      <input type="text" v-model="search" placeholder="Futbolcu ara.." />
      <label>Futbolcu ara:</label>
    </div>
    <div class="Players-inner">
      <router-link
        @click.native="
          setTwitterName(players.twitterName)
          first()
          second()
        "
        :to="{ name: 'Posts', params: { playerName: players.playerPathName } }"
        class="Players-inner-wrapper"
        v-for="players in filteredList"
        v-bind:key="players.playerId"
        v-show="players.isSocial"
      >
        <div class="Players-inner-cards">
          <div class="Players-inner-images">
            <img :src="players.profilePhoto" height="120px" alt="" />
          </div>
          <CostumText tag="strong" lang="tr" class="Players-inner-cards-text">
            {{ players.name }}
          </CostumText>
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CostumText from '@/components/CostumText'
import axios from 'axios'
import tweetService from '@/services/tweetService'

export default {
  name: 'Players',
  components: {
    CostumText
  },
  data() {
    return {
      search: ''
    }
  },
  created() {
    document.getElementById('scroll').scrollIntoView()
    this.$store.state.twitterName = null
    axios.get(
      'http://localhost:8081/twittername/' + this.$store.state.twitterName
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
  computed: {
    ...mapState(['teams']),

    filteredList() {
      return this.teams[this.$store.state.teamId - 1].players.filter((player) =>
        player.name.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  methods: {
    ...mapActions(['updateTwitterName']),
    setTwitterName(name) {
      this.updateTwitterName(name)
    },
    first() {
      axios.get(
        'http://localhost:8081/twittername/' + this.$store.state.twitterName
      )
    },
    async second() {
      try {
        this.tweets = await tweetService.getTweets()
      } catch (err) {
        this.error = err.message
        console.log(this.error)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.Players {
  height: auto;
  margin-top: 40px;
  padding-top: 40px;
  &-title {
    text-align: center;
    padding-bottom: 40px;
    font-size: 2.4rem;
  }
  &-search {
    position: relative;
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    label {
      position: absolute;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
      top: 12px;
      left: 0;
      right: 136px;
      text-align: center;
      z-index: -1;
      transition: 0.15s all ease-in-out;
    }
    input {
      padding: 10px 24px;
      width: 240px;
      color: rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(0, 0, 0, 0.12);
      transition: 0.15s all ease-in-out;
      background: white;
      border-radius: 10px;
      &:focus {
        outline: none;
        transform: scale(1.05);
        & + label {
          font-size: 10px;
          transform: translateY(-28px) translateX(-30px);
        }
      }
      &::-webkit-input-placeholder {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 100;
        text-align: left;
      }
    }
  }
  &-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    height: auto;
    margin-bottom: 40px;
    justify-items: center;
    min-height: calc(100vh - 140px);
    @media (--m) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2em;
    }
    @media (--t) {
      grid-gap: 4.5em;
    }
    &-wrapper {
      box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
        rgba(0, 0, 0, 0.117647) 0px 1px 8px;
      width: 160px;
      height: 160px;
      transition: 0.15s all ease-in-out;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      &:hover {
        transform: scale(1.1);
      }
      @media (--m) {
        width: 220px;
        height: 220px;
      }
      @media (--t) {
        width: 260px;
        height: 260px;
      }
    }
    &-images {
      width: 120px;
      height: 120px;
      img {
        transform: scale(0.5);
        @media (--m) {
          transform: scale(0.85);
        }
        @media (--t) {
          transform: scale(1);
        }
      }
    }
    &-cards {
      text-decoration: none;
      padding: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: -16px;
      @media (--m) {
        margin-top: 0;
      }
      &-svg {
        transform: scale(0.5);
        @media (--m) {
          transform: scale(0.85);
        }
        @media (--t) {
          transform: scale(1);
        }
      }
      &-text {
        padding-top: 0;
        height: 50px;
        text-transform: uppercase;
        font-size: 12px;
        margin-top: -16px;
        @media (--m) {
          margin-top: 0;
          font-size: 14.5px;
        }
        @media (--t) {
          font-size: 17px;
          padding-top: 20px;
        }
      }
    }
  }
}
</style>
