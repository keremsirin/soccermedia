<template>
  <div class="Home">
    <div class="Home-showcase">
      <div class="Home-showcase-left">
        <p id="desktop" class="Home-showcase-left-title">
          Sen de olan biteni kaçırmaktan sıkıldın mı?
        </p>
        <CostumText tag="h3"
          >SoccerMedia senin için futbol kulüplerinin ve futbolcuların
          paylaşımlarını aynı platforma taşıdı.</CostumText
        >
        <CostumText tag="h3"
          >Gündemden uzak kalma devri sona erdi! Artık taraftarı olduğun kulübün
          ve futbolcularının sosyal medya paylaşımlarını
          kaçırmayacaksın.</CostumText
        >
        <button
          @click="scrollToBottom"
          type="button"
          class="Home-showcase-left-btn"
        >
          <ArrowBottom class="Home-showcase-left-btn-arrow" />
          Hemen Başla
          <ArrowBottom class="Home-showcase-left-btn-arrow" />
        </button>
      </div>
      <div class="Home-showcase-right">
        <p id="mobile" class="Home-showcase-left-title">
          Sen de olan biteni kaçırmaktan sıkıldın mı?
        </p>
        <Gameboy class="Home-showcase-right-gameboy" width="400" height="400" />
      </div>
    </div>
    <div ref="scroll"></div>
    <router-view />
  </div>
</template>

<script>
import CostumText from '@/components/CostumText'
import Gameboy from '@/components/icons/gameboy.svg'
import ArrowBottom from '@/components/icons/arrow-bottom.svg'

export default {
  name: 'Home',
  components: {
    CostumText,
    Gameboy,
    ArrowBottom
  },
  methods: {
    scrollToBottom() {
      const el = this.$refs.scroll
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.Home {
  &-showcase {
    display: flex;
    flex-direction: column-reverse;
    @media (--m) {
      flex-direction: row;
    }
    &-left {
      padding-right: 0;
      padding-top: 20px;
      margin-top: auto;
      margin-bottom: auto;
      #desktop {
        display: none;
      }
      @media (--s) {
        padding-top: 32px;
      }
      @media (--m) {
        #desktop {
          display: inherit;
        }
        padding-top: 0;
        padding-right: 48px;
      }
      &-title {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        padding-bottom: 20px;
        color: #333;
        @media (--s) {
          font-size: 2.4rem;
        }
        @media (--m) {
          padding-bottom: 20px;
          text-align: left;
          font-size: 2.6rem;
        }
        @media (--t) {
          text-align: left;
          padding-bottom: 38px;
          font-size: 2.7rem;
        }
      }
      h3 {
        font-weight: normal;
        text-align: center;
        @media (--m) {
          text-align: left;
        }
      }
      &-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 32px;
        padding-left: 24px;
        padding-right: 24px;
        height: 44px;
        background-color: var(--pc);
        color: white;
        font-weight: bold;
        border-radius: 10px;
        transition: 0.3s;
        font-size: 16px;
        user-select: none;
        @media (--s) {
          margin-top: 40px;
        }
        @media (--m) {
          margin-top: 48px;
        }
        &-arrow {
          margin-left: 4px;
          margin-right: 4px;
          transition: 0.3s;
        }
        &:hover {
          background-color: var(--sc);
          .Home-showcase-left-btn-arrow {
            transform: rotateX(360deg);
          }
        }
      }
    }
    &-right {
      display: inherit;
      margin-left: 0;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      @media (--m) {
        margin-left: auto;
        justify-content: center;
        #mobile {
          display: none;
        }
      }
      &-gameboy {
        width: 280px;
        height: 280px;
        @media (--s) {
          width: 328px;
          height: 328px;
        }
        @media (--m) {
          width: 340px;
          height: 340px;
        }
        @media (--t) {
          width: 400px;
          height: 400px;
        }
      }
    }
  }
}
</style>
