import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teams: [
      {
        id: 1,
        title: 'Atakaş Hatayspor',
        pathName: 'atakas-hatayspor'
      },
      {
        id: 2,
        title: 'Aytemiz Alanyaspor',
        pathName: 'aytemiz-alanyaspor'
      },
      {
        id: 3,
        title: 'Beşiktaş A.Ş.',
        pathName: 'besiktas'
      },
      {
        id: 4,
        title: 'Büyükşehir Belediye Erzurumspor',
        pathName: 'buyuksehir-belediye-erzurumspor'
      },
      {
        id: 5,
        title: 'Çaykur Rizespor A.Ş.',
        pathName: 'caykur-rizespor'
      },
      {
        id: 6,
        title: 'Demir Grup Sivasspor',
        pathName: 'demir-grup-sivasspor'
      },
      {
        id: 7,
        title: 'Fatih Karagümrük A.Ş.',
        pathName: 'fatih-karagumruk'
      },
      {
        title: 'Fenerbahçe A.Ş.',
        pathName: 'fenerbahce',
        id: 8
      },
      {
        id: 9,
        title: 'Fraport-Tav Antalyaspor',
        pathName: 'fraport-tav-antalyaspor'
      },
      {
        id: 10,
        title: 'Galatasaray A.Ş.',
        pathName: 'galatasaray'
      },
      {
        id: 11,
        title: 'Gaziantep Futbol Kulübü A.Ş.',
        pathName: 'gaziantep-futbol-kulubu'
      },
      {
        id: 12,
        title: 'Gençlerbirliği',
        pathName: 'genclerbirligi'
      },
      {
        id: 13,
        title: 'Göztepe A.Ş.',
        pathName: 'goztepe'
      },
      {
        id: 14,
        title: 'Helenex Yeni Malatyaspor',
        pathName: 'helenex-yeni-malatyaspor'
      },
      {
        id: 15,
        title: 'Hes Kablo Kayserispor',
        pathName: 'hes-kablo-kayserispor'
      },
      {
        id: 16,
        title: 'İttifak Holding Konyaspor',
        pathName: 'ittifak-holding-konyaspor'
      },
      {
        id: 17,
        title: 'Kasımpaşa A.Ş.',
        pathName: 'kasimpasa'
      },
      {
        id: 18,
        title: 'Medipol Başakşehir FK',
        pathName: 'medipol-basaksehir-fk'
      },
      {
        id: 19,
        title: 'Mke Ankaragücü',
        pathName: 'mke-ankaragucu'
      },
      {
        id: 20,
        title: 'Trabzonspor A.Ş.',
        pathName: 'trabzonspor'
      },
      {
        id: 21,
        title: 'Yukatel Denizlispor',
        pathName: 'yukatel-denizlispor'
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
