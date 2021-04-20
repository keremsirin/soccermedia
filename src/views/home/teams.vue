<template>
  <div class="Teams">
    <CostumText class="Teams-title" tag="h1">Kulüpler</CostumText>

    <div class="Teams-search">
      <input type="text" v-model="search" placeholder="Kulüp ara.." />
      <label>Kulüp ara:</label>
    </div>

    <div class="Teams-inner">
      <router-link
        v-bind:to="post.link"
        class="Teams-inner-wrapper"
        v-for="post in filteredList"
        v-bind:key="post.title"
      >
        <div class="Teams-inner-cards">
          <Clubs class="Teams-inner-cards-svg" v-bind:name="post.id" />
          <CostumText tag="strong" lang="tr" class="Teams-inner-cards-text">
            {{ post.title }}
          </CostumText>
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import CostumText from '@/components/CostumText'
import Clubs from '@/components/Clubs.vue'
// import Team1 from '@/components/teams/1.svg'

export default {
  name: 'Teams',
  components: {
    CostumText,
    Clubs
    // Team1
  },
  data() {
    return {
      search: '',
      postList: [
        {
          id: 1,
          title: 'Atakaş Hatayspor',
          link: 'players'
        },
        {
          id: 2,
          title: 'Aytemiz Alanyaspor',
          link: 'players'
        },
        {
          id: 3,
          title: 'Beşiktaş A.Ş.',
          link: 'players'
        },
        {
          id: 4,
          title: 'Büyükşehir Belediye Erzurumspor',
          link: 'players'
        },
        {
          id: 5,
          title: 'Çaykur Rizespor A.Ş.',
          link: 'players'
        },
        {
          id: 6,
          title: 'Demir Grup Sivasspor',
          link: 'players'
        },
        {
          id: 7,
          title: 'Fatih Karagümrük A.Ş.',
          link: 'players'
        },
        {
          title: 'Fenerbahçe A.Ş.',
          link: 'players',
          id: 8
        },
        {
          id: 9,
          title: 'Fraport-Tav Antalyaspor',
          link: 'players'
        },
        {
          id: 10,
          title: 'Galatasaray A.Ş.',
          link: 'players'
        },
        {
          id: 11,
          title: 'Gaziantep Futbol Kulübü A.Ş.',
          link: 'players'
        },
        {
          id: 12,
          title: 'Gençlerbirliği',
          link: 'players'
        },
        {
          id: 13,
          title: 'Göztepe A.Ş.',
          link: 'players'
        },
        {
          id: 14,
          title: 'Helenex Yeni Malatyaspor',
          link: 'players'
        },
        {
          id: 15,
          title: 'Hes Kablo Kayserispor',
          link: 'players'
        },
        {
          id: 16,
          title: 'İttifak Holding Konyaspor',
          link: 'players'
        },
        {
          id: 17,
          title: 'Kasımpaşa A.Ş.',
          link: 'players'
        },
        {
          id: 18,
          title: 'Medipol Başakşehir FK',
          link: 'players'
        },
        {
          id: 19,
          title: 'Mke Ankaragücü',
          link: 'players'
        },
        {
          id: 20,
          title: 'Trabzonspor A.Ş.',
          link: 'players'
        },
        {
          id: 21,
          title: 'Yukatel Denizlispor',
          link: 'players'
        }
      ]
    }
  },
  computed: {
    filteredList() {
      return this.postList.filter((post) => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {}
}
</script>

<style lang="postcss" scoped>
.Teams {
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
      /* margin: 12px auto; */
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
