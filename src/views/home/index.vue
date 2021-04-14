<template>
  <div class="Home">
    <!-- <CostumText tag="p" size="xsmall">Selam</CostumText> -->
    <div class="Home-showcase">
      <div class="Home-showcase-left">
        <p>Sen de olan biteni kaçırmaktan sıkıldın mı?</p>
        <CostumText tag="h3"
          >SoccerMedia senin için futbol kulüplerinin ve futbolcuların
          paylaşımlarını aynı platforma taşıdı.</CostumText
        >
        <CostumText tag="h3"
          >Gündemden uzak kalma devri sona erdi! Artık taraftarı olduğun kulübün
          ve futbolcularının sosyal medya paylaşımlarını
          kaçırmayacaksın.</CostumText
        >
        <ButtonPrimary class="Home-showcase-left-btn">
          <ArrowBottom class="Home-showcase-left-btn-arrow" />
          Hemen Başla
          <ArrowBottom class="Home-showcase-left-btn-arrow" />
        </ButtonPrimary>
      </div>
      <div class="Home-showcase-right">
        <Gameboy width="400" height="400" />
      </div>
    </div>
    <!-- <IconHome /> -->
    <router-view />
  </div>
</template>

<script>
import CostumText from '@/components/CostumText'
import ButtonPrimary from '@/components/ButtonPrimary'
// import IconHome from '@/components/icons/home.svg'
import Gameboy from '@/components/icons/gameboy.svg'
import ArrowBottom from '@/components/icons/arrow-bottom.svg'

export default {
  name: 'Home',
  components: {
    // IconHome
    CostumText,
    Gameboy,
    ButtonPrimary,
    ArrowBottom
  }
}
</script>

<style lang="postcss" scoped>
.Home {
  &-showcase {
    display: flex;
    /* background-color: red; */
    /* padding-divottom: 200px; */
    &-left {
      /* background-color: blue; */
      padding-right: 48px;
      p {
        font-size: 40px;
        font-weight: bold;
        padding-bottom: 36px;
      }
      h3 {
        font-weight: normal;
      }
      &-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 48px;
        &-arrow {
          margin-left: 4px;
          margin-right: 4px;
          transition: 0.3s;
        }
        &:hover {
          .Home-showcase-left-btn-arrow {
            transform: rotateX(360deg);
          }
        }
      }
    }
    &-right {
      display: inherit;
      width: auto;
      margin-left: auto;
      justify-content: flex-end;
    }
  }
}
</style>
