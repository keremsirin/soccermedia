import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  state: {
    teams: [
      {
        id: 1,
        title: 'Atakaş Hatayspor',
        pathName: 'atakas-hatayspor',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'Hatayspor_FK',
            instagramName: 'hatayspor',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000122_120x120.png'
          },
          {
            playerId: 1,
            name: 'MUNIR MOHAMEDI',
            playerPathName: 'munir-mohamedi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/97925-1614803676.jpeg?lm=1',
            twitterName: 'Munir_Mohand',
            instagramName: 'muny1'
          },
          {
            playerId: 2,
            name: 'Akın Alkan',
            playerPathName: 'akin-alkan',
            isSocial: false,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/252056-1609947483.jpeg?lm=1',
            twitterName: '',
            instagramName: ''
          },
          {
            playerId: 3,
            name: 'Ekrem Kılıçarslan',
            playerPathName: 'ekrem-kilicarslan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/464378-1614803774.jpeg?lm=1',
            twitterName: 'Ekilicarslan17',
            instagramName: 'ekremkilicarslan17'
          },
          {
            playerId: 4,
            name: 'Yavuz Buğra Boyar',
            playerPathName: 'yavuz-bugra-boyar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/616489-1614803825.jpeg?lm=1',
            twitterName: 'Yavuzbugrabyr'
          },
          {
            playerId: 5,
            name: 'Pablo Santos',
            playerPathName: 'pablo-santos',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/265648-1612272185.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'Jean-Claude BIllong',
            playerPathName: 'jean-claude-billong',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/391192-1607775171.jpeg?lm=1',
            twitterName: 'BillongJC'
          },
          {
            playerId: 7,
            name: 'Yusuf Abdioğlu',
            playerPathName: 'yusuf-abdioglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/199938-1609609740.jpeg?lm=1',
            twitterName: 'AbdiogluYusuf' // korumali hesap
          },
          {
            playerId: 8,
            name: 'Soner Örnek',
            playerPathName: 'soner-örnek',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/74643-1609947527.jpeg?lm=1',
            twitterName: 'sonerornek27'
          },
          {
            playerId: 9,
            name: 'Youssouf Koné',
            playerPathName: 'youssouf-kone',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/274484-1613909256.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'Alexandros KatranIs',
            playerPathName: 'alexandros-katranis',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/324341-1608043540.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'Mesut Çaytemel',
            playerPathName: 'mesut-caytemel',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/53543-1607773223.jpeg?lm=1',
            twitterName: 'mesutcaytemel'
          },
          {
            playerId: 12,
            name: 'StrahIl Popov',
            playerPathName: 'strahil-popov',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/87299-1614804264.jpeg?lm=1',
            twitterName: 'StrahilPopov'
          },
          {
            playerId: 13,
            name: 'Burak Çamoğlu',
            playerPathName: 'burak-camoglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/197402-1609264186.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'Isaac Sackey',
            playerPathName: 'isaac-sackey',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/259943-1604343025.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Abdurrahman Canlı',
            playerPathName: 'abdurrahman-canli',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/319679-1604342555.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 16,
            name: 'Adama Traoré',
            playerPathName: 'adama-traore',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/262608-1606311995.jpeg?lm=1',
            twitterName: 'NossTraore'
          },
          {
            playerId: 17,
            name: 'Rayane AabId',
            playerPathName: 'rayane-aabid',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/468244-1614803962.jpeg?lm=1',
            twitterName: 'RayaneAabid'
          },
          {
            playerId: 18,
            name: 'Muhammed Mert',
            playerPathName: 'muhammed-mert',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/183233-1611157373.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 19,
            name: 'Rúben RIbeIro',
            playerPathName: 'ruben-ribeiro',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/52480-1604342725.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 20,
            name: 'Joseph AkomadI',
            playerPathName: 'joseph-akomadi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/619468-1612017846.jpeg?lm=1',
            twitterName: 'akomadi_joseph'
          },
          {
            playerId: 21,
            name: 'Selim Ilgaz',
            playerPathName: 'selim-ilgaz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/205551-1608379892.jpeg?lm=1',
            twitterName: 'selimilgaz95'
          },
          {
            playerId: 22,
            name: 'David AkIntola',
            playerPathName: 'david-akintola',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/353775-1604342842.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 23,
            name: 'Aaron Boupendza',
            playerPathName: 'aaron-boupendza',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/427605-1604342932.jpeg?lm=1',
            twitterName: 'BoupendzaAaron'
          },
          {
            playerId: 24,
            name: 'Mame DIouf',
            playerPathName: 'mame-diouf',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/62049-1614804355.jpeg?lm=1',
            twitterName: 'MameDiouf99'
          },
          {
            playerId: 25,
            name: 'Mohammed Kamara',
            playerPathName: 'mohammed-kamara',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/637273-1614804412.jpeg?lm=1',
            twitterName: 'mkeka10'
          }
        ]
      },
      {
        id: 2,
        title: 'Aytemiz Alanyaspor',
        pathName: 'aytemiz-alanyaspor',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'Alanyaspor',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000050_120x120.png'
          },
          {
            playerId: 1,
            name: 'Carlos Marafona',
            playerPathName: 'carlos-marafona',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/56005-1613784924.png?lm=1',
            twitterName: 'carlos_marafona' // 0 tweet
          },
          {
            playerId: 2,
            name: 'Serkan Kırıntılı',
            playerPathName: 'serkan-kirintili',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/16058-1613784789.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 3,
            name: 'Çağrı Güney',
            playerPathName: 'cagri-guney',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/655903-1613784862.png?lm=1',
            twitterName: 'cagrii31'
          },
          {
            playerId: 4,
            name: 'Steven Caulker',
            playerPathName: 'steven-caulker',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/121280-1567776402.png?lm=1',
            twitterName: 'StevenCaulker44'
          },
          {
            playerId: 5,
            name: 'Fatih Aksoy',
            playerPathName: 'fatih-aksoy',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/338794-1604684237.png?lm=1',
            twitterName: 'aksoyfatih20'
          },
          {
            playerId: 6,
            name: 'GeorgIos Tzavellas',
            playerPathName: 'georgios-tzavellas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/42942-1567776277.png?lm=1',
            twitterName: 'GiwrgosTzave22'
          },
          {
            playerId: 7,
            name: 'Alpay Çelebi',
            playerPathName: 'alpay-celebi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/388188-1604684113.png?lm=1',
            twitterName: 'Alpaycelebi5'
          },
          {
            playerId: 8,
            name: 'FrançoIs Moubandje',
            playerPathName: 'francois-moubandje',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/123021-1603130438.png?lm=1',
            twitterName: 'moubandjef'
          },
          {
            playerId: 9,
            name: 'Ahmet Gülay',
            playerPathName: 'ahmet-gulay',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/655898-1603130093.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'Juanfran',
            playerPathName: 'juanfran',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/64411-1567776585.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'Tayfur Bingöl',
            playerPathName: 'tayfur-bingol',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/184440-1567776871.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'ManolIs SIopIs',
            playerPathName: 'manolis-siopis',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/182688-1567776690.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 13,
            name: 'Ceyhun Gülselam',
            playerPathName: 'ceyhun-gulselam',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/37216-1567776733.png?lm=1',
            twitterName: 'c_gulselam54'
          },
          {
            playerId: 14,
            name: 'Salih Uçan',
            playerPathName: 'salih-ucan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/170838-1567776962.png?lm=1',
            twitterName: 'salihucan48'
          },
          {
            playerId: 15,
            name: 'Berkan Kutlu',
            playerPathName: 'berkan-kutlu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/469787-1604683778.png?lm=1',
            twitterName: 'iamberkankutlu'
          },
          {
            playerId: 16,
            name: 'Hasan Hüseyin Acar',
            playerPathName: 'hasan-huseyin-acar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/285634-1612996631.png?lm=1',
            twitterName: 'HasanAcar94'
          },
          {
            playerId: 17,
            name: 'Umut Güneş',
            playerPathName: 'umut-gunes',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/422203-1567776823.png?lm=1',
            twitterName: 'umutxgunes'
          },
          {
            playerId: 18,
            name: 'Efkan Bekiroğlu',
            playerPathName: 'efkan-bekiroglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/327402-1604683645.png?lm=1',
            twitterName: 'efkaninho23'
          },
          {
            playerId: 19,
            name: 'DavIdson PereIra',
            playerPathName: 'davidson-pereira',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/397090-1604683878.png?lm=1',
            twitterName: 'davidson91_'
          },
          {
            playerId: 20,
            name: 'El MamI Tetah',
            playerPathName: 'el-mami-tetah',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/858650-1613666115.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'Efecan Karaca',
            playerPathName: 'efecan-karaca',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/50655-1567777076.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'DamIan KadzIor',
            playerPathName: 'damian-kadzior',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/199299-1612996568.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 23,
            name: 'Khouma Babacar',
            playerPathName: 'khouma-babacar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/124902-1604683948.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 24,
            name: 'Adam BareIro',
            playerPathName: 'adam-bareiro',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/514120-1603130286.png?lm=1',
            twitterName: 'AdamBareiro09'
          },
          {
            playerId: 25,
            name: 'Mustafa Pektemek',
            playerPathName: 'mustafa-pektemek',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/58602-1579961318.png?lm=1',
            twitterName: 'mpektemek11'
          }
        ]
      },
      {
        id: 3,
        title: 'Beşiktaş A.Ş.',
        pathName: 'besiktas',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'Besiktas',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000148_120x120.png'
          },
          {
            playerId: 1,
            name: 'Ersin Destanoğlu',
            playerPathName: 'ersin-destanoglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/500091-1568210698.JPG?lm=1',
            twitterName: 'ErsinDestanoglu'
          },
          {
            playerId: 2,
            name: 'Utku Yuvakuran',
            playerPathName: 'utku-yuvakuran',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/342995-1568211087.JPG?lm=1',
            twitterName: 'utkuyuvakuran97'
          },
          {
            playerId: 3,
            name: 'Emre Bilgin',
            playerPathName: 'emre-bilgin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/727147-1599247338.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 4,
            name: 'JavI Montero',
            playerPathName: 'javi-montero',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/396333-1599247504.png?lm=1',
            twitterName: 'javimontero14'
          },
          {
            playerId: 5,
            name: 'Domagoj VIda',
            playerPathName: 'domagoj-vida',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/46083-1568211411.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'WelInton Souza',
            playerPathName: 'welinton-souza',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/95152-1567776321.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 7,
            name: 'Serdar Saatçi',
            playerPathName: 'serdar-saatci',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/655899-1607874960.png?lm=1',
            twitterName: 'serdarsaatcii'
          },
          {
            playerId: 8,
            name: 'Rıdvan Yılmaz',
            playerPathName: 'ridvan-yilmaz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/477930-1554888109.JPG?lm=1',
            twitterName: 'ridvan_yilmaz2'
          },
          {
            playerId: 9,
            name: "FabrIce N'Sakala",
            playerPathName: 'fabrice-nsakala',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/86930-1567776494.png?lm=1',
            twitterName: 'NsakalaFabrice'
          },
          {
            playerId: 10,
            name: 'Valentin RosIer',
            playerPathName: 'valentin-rosier',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/441170-1582726215.jpg?lm=1',
            twitterName: 'VRosier19'
          },
          {
            playerId: 11,
            name: 'Bilal Ceylan',
            playerPathName: 'bilal-ceylan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/739885-1604836296.png?lm=1',
            twitterName: 'bilalceylan_19'
          },
          {
            playerId: 12,
            name: 'Josef De Souza',
            playerPathName: 'josef-de-souza',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/73741-1604584712.png?lm=1',
            twitterName: 'souza5'
          },
          {
            playerId: 13,
            name: 'Necip Uysal',
            playerPathName: 'necip-uysal',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/77710-1568212985.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'Dorukhan Toköz',
            playerPathName: 'dorukhan-tokoz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/275935-1568299645.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Oğuzhan Özyakup',
            playerPathName: 'oguzhan-ozyakup',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/77966-1568299821.JPG?lm=1',
            twitterName: 'Ozyakup'
          },
          {
            playerId: 16,
            name: 'AtIba HutchInson',
            playerPathName: 'atiba-hutchinson',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/16101-1568299944.JPG?lm=1',
            twitterName: 'atibahutchinson'
          },
          {
            playerId: 17,
            name: 'Adem LjajIc',
            playerPathName: 'adem-ljajic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/69374-1568213594.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 18,
            name: 'Bernard Mensah',
            playerPathName: 'bernard-mensah',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/324321-1599989148.jpeg?lm=1',
            twitterName: 'oliver_mens'
          },
          {
            playerId: 19,
            name: 'Cyle LarIn',
            playerPathName: 'cyle-larin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/343463-1554051430.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 20,
            name: "Georges-KevIn N'Koudou",
            playerPathName: 'georges-kevin-nkoudou',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/215679-1568300768.JPG?lm=1',
            twitterName: 'gknkoudou'
          },
          {
            playerId: 21,
            name: 'RachId Ghezzal',
            playerPathName: 'rachid-ghezzal',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/118287-1448021528.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'AjdIn HasIc',
            playerPathName: 'ajdin-hasic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/522851-1541490453.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 23,
            name: 'Gökhan Töre',
            playerPathName: 'gokhan-tore',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/82130-1566986330.jpg?lm=1',
            twitterName: 'Gokhan_Tore7'
          },
          {
            playerId: 24,
            name: 'VIncent Aboubakar',
            playerPathName: 'vincent-aboubakar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/147487-1497535916.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 25,
            name: 'Cenk Tosun',
            playerPathName: 'cenk-tosun',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/45671-1515068110.jpg?lm=1',
            twitterName: 'CenkTosun_'
          }
        ]
      },
      {
        id: 4,
        title: 'Büyükşehir Belediye Erzurumspor',
        pathName: 'buyuksehir-belediye-erzurumspor',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'Erzurumspor',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/010491_120x120.png'
          },
          {
            playerId: 1,
            name: 'Jakub SzumskI',
            playerPathName: 'jakub-szumski',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/157848-1612718212.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 2,
            name: 'Göktuğ Bakırbaş',
            playerPathName: 'goktug-bakirbas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/213990-1612718145.png?lm=1',
            twitterName: 'goktugbakirbas1'
          },
          {
            playerId: 3,
            name: 'Kayacan Erdoğan',
            playerPathName: 'kayacan-erdogan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/58825-1604435552.png?lm=1',
            twitterName: 'kayacan_erdogan'
          },
          {
            playerId: 4,
            name: 'Batuhan Ünsal',
            playerPathName: 'batuhan-unsal',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/457522-1604435497.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 5,
            name: 'Adolphe TeIkeu',
            playerPathName: 'adolphe-teikeu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/105362-1604432725.png?lm=1',
            twitterName: 'ATeikeu'
          },
          {
            playerId: 6,
            name: 'Hasan Hatipoğlu',
            playerPathName: 'hasan-hatipoglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/196900-1604435433.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 7,
            name: 'Gökhan Kardeş',
            playerPathName: 'gokhan-kardes',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/256777-1604435342.png?lm=1',
            twitterName: 'gokhankardes3'
          },
          {
            playerId: 8,
            name: 'Léo Schwechlen',
            playerPathName: 'leo-schwechlen',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/60594-1604433512.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 9,
            name: 'Zakarya BergdIch',
            playerPathName: 'zakarya-bergdich',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/149540-1612717843.png?lm=1',
            twitterName: 'BergdichZakarya'
          },
          {
            playerId: 10,
            name: 'Bogdan Butko',
            playerPathName: 'bogdan-butko',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/94922-1612717777.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'Murat Uçar',
            playerPathName: 'murat-ucar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/292545-1604435183.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'Petrus Boumal',
            playerPathName: 'petrus-boumal',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/127074-1604433745.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 13,
            name: 'Johanna Omolo',
            playerPathName: 'johanna-omolo',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/85834-1612717689.png?lm=1',
            twitterName: 'OmoloJohanna'
          },
          {
            playerId: 14,
            name: 'Buğra Çağıran',
            playerPathName: 'bugra-cagiran',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/221267-1612717636.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Osman Çelik',
            playerPathName: 'osman-celik',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/293661-1604433342.png?lm=1',
            twitterName: 'celikkosmann'
          },
          {
            playerId: 16,
            name: 'Cenk Ahmet Alkılıç',
            playerPathName: 'cenk-ahmet-alkilic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/68211-1604435111.png?lm=1',
            twitterName: 'cenkahmet99'
          },
          {
            playerId: 17,
            name: 'GabrIel Obertan',
            playerPathName: 'Gabriel Obertan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/43261-1604434970.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 18,
            name: 'Özgür Sert',
            playerPathName: 'ozgur-sert',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/667526-1618658909.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 19,
            name: 'Arvydas NovIkovas',
            playerPathName: 'arvydas-novikovas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/87444-1603983572.png?lm=1',
            twitterName: 'ArvyNovi'
          },
          {
            playerId: 20,
            name: 'Elba RashanI',
            playerPathName: 'elba-rashani',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/149579-1612716398.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'BrahIm DarrI',
            playerPathName: 'brahim-darri',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/196158-1612716349.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'Emrah Başsan',
            playerPathName: 'emrah-bassan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/177031-1604434880.png?lm=1',
            twitterName: 'emrahbassan'
          },
          {
            playerId: 23,
            name: 'RIcardo Gomes',
            playerPathName: 'ricardo-gomes',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/258835-1604432819.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 24,
            name: 'Oltan Karakullukçu',
            playerPathName: 'oltan-karakullukcu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/171261-1604434829.png?lm=1',
            twitterName: ''
          }
        ]
      },
      {
        id: 5,
        title: 'Çaykur Rizespor A.Ş.',
        pathName: 'caykur-rizespor',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'CRizesporAS',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000189_120x120.png'
          },
          {
            playerId: 1,
            name: 'Gökhan Akkan',
            playerPathName: 'gokhan-akkan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/223025-1604924666.jpeg?lm=1',
            twitterName: 'gokhanakkn'
          },
          {
            playerId: 2,
            name: 'Tarık Çetin',
            playerPathName: 'tarik-cetin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/286170-1566830771.jpg?lm=1',
            twitterName: 'cetintarik1'
          },
          {
            playerId: 3,
            name: 'Zafer Görgen',
            playerPathName: 'zafer-gorgen',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/576566-1566831439.jpg?lm=1',
            twitterName: 'ZaferGrgn_23'
          },
          {
            playerId: 4,
            name: 'YassIne MerIah',
            playerPathName: 'yassine-meriah',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/306330-1585411859.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 5,
            name: 'Emir Dilaver',
            playerPathName: 'emir-dilaver',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/80161-1605122329.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'Montassar TalbI',
            playerPathName: 'montassar-talbi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/496706-1566831542.jpg?lm=1',
            twitterName: 'TalbiMontassar'
          },
          {
            playerId: 7,
            name: 'Selim Ay',
            playerPathName: 'selim-ay',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/157175-1572953135.png?lm=1',
            twitterName: 'ay_selim5'
          },
          {
            playerId: 8,
            name: 'DarIo Melnjak',
            playerPathName: 'dario-melnjak',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/238500-1566831694.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 9,
            name: 'İsmail Köybaşı',
            playerPathName: 'ismail-koybasi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/74641-1583308954.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'Alberk Koç',
            playerPathName: 'alberk-koc',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/374882-1582505289.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'Mykola Morozyuk',
            playerPathName: 'mykola-morozyuk',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/59389-1566831334.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'Murat Sağlam',
            playerPathName: 'murat-saglam',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/339051-1567076639.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 13,
            name: 'FabrícIo BaIano',
            playerPathName: 'fabrício-baiano',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/282513-1572951752.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'Yasin Pehlivan',
            playerPathName: 'yasin-pehlivan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/64016-1605008563.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Godfred Donsah',
            playerPathName: 'godfred-donsah',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/291266-1603573113.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 16,
            name: 'ErIk Sabo',
            playerPathName: 'erik-sabo',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/155597-1604359028.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 17,
            name: 'Damjan DjokovIc',
            playerPathName: 'damjan-djokovic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/143039-1485341709.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 18,
            name: 'Mithat Pala',
            playerPathName: 'mithat-pala',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/703720-1603572795.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 19,
            name: 'Abdullah Durak',
            playerPathName: 'abdullah-durak',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/82713-1566831294.jpg?lm=1',
            twitterName: 'abdullahdurak05'
          },
          {
            playerId: 20,
            name: 'Onur Bulut',
            playerPathName: 'onur-bulut',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/152733-1567776922.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'Fernando BoldrIn',
            playerPathName: 'fernando-boldrin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/144752-1566831496.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'BraIan SamudIo',
            playerPathName: 'braian-samudio',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/520405-1566832915.jpg?lm=1',
            twitterName: 'braiansamu18'
          },
          {
            playerId: 23,
            name: 'Fernando Andrade',
            playerPathName: 'fernando-andrade',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/236537-1566990162.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 24,
            name: 'AmInu Umar',
            playerPathName: 'aminu-umar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/262688-1579457641.jpeg?lm=1',
            twitterName: 'Umar_Aminu50'
          },
          {
            playerId: 25,
            name: 'Konrad MIchalak',
            playerPathName: 'konrad-michalak',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/387160-1611166682.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 26,
            name: 'Tunay Torun',
            playerPathName: 'tunay-torun',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/39247-1582505370.jpeg?lm=1',
            twitterName: 'TunayTorun55'
          },
          {
            playerId: 27,
            name: 'Emir Dede',
            playerPathName: 'emir-dede',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/607253-1583006376.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 28,
            name: 'Loïc Rémy',
            playerPathName: 'loic-remy',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/45121-1603573190.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 29,
            name: 'Alexander Söderlund',
            playerPathName: 'alexander-soderlund',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/87479-1517578109.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 30,
            name: 'MIlan Skoda',
            playerPathName: 'milan-skoda',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/63047-1579457698.jpeg?lm=1',
            twitterName: 'skodak21'
          }
        ]
      },
      {
        id: 6,
        title: 'Demir Grup Sivasspor',
        pathName: 'demir-grup-sivasspor',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'SivassporKulubu',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000073_120x120.png'
          },
          {
            playerId: 1,
            name: 'Mamadou Samassa',
            playerPathName: 'mamadou-samassa',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/72422-1566988608.jpg?lm=1',
            twitterName: 'SamassaMamad30'
          },
          {
            playerId: 2,
            name: 'Ali Şaşal Vural',
            playerPathName: 'ali-sasal-vural',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/157178-1566990215.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 3,
            name: 'Muammer Yıldırım',
            playerPathName: 'muammer-yildirim',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/169927-1566988960.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 4,
            name: 'Aaron AppIndangoyé',
            playerPathName: 'aaron-appindangoye',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/254249-1566990118.jpg?lm=1',
            twitterName: 'AAppindangoye'
          },
          {
            playerId: 5,
            name: 'Samba Camara',
            playerPathName: 'samba-camara',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/291397-1580406617.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'Caner Osmanpaşa',
            playerPathName: 'caner-osmanpasa',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/157993-1566990078.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 7,
            name: 'Uğur Çiftçi',
            playerPathName: 'ugur-ciftci',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/172163-1566988477.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 8,
            name: 'Ziya Erdal',
            playerPathName: 'ziya-erdal',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/170644-1566988388.jpg?lm=1',
            twitterName: 'ugur3333'
          },
          {
            playerId: 9,
            name: 'Ahmet Oğuz',
            playerPathName: 'ahmet-oguz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/291758-1610466189.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'Alaaddin Okumuş',
            playerPathName: 'alaaddin-okumus',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/216608-1588245748.JPG?lm=1',
            twitterName: 'alaaddinokumus'
          },
          {
            playerId: 11,
            name: 'RobIn Yalçın',
            playerPathName: 'robin-yalcin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/124422-1566986921.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'ClaudemIr De Souza',
            playerPathName: 'claudemir-de-souza',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/68275-1580372351.jpeg?lm=1',
            twitterName: 'DSClaudemir'
          },
          {
            playerId: 13,
            name: 'Isaac CofIe',
            playerPathName: 'isaac-cofie',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/99327-1566990031.jpg?lm=1',
            twitterName: '1_general_1'
          },
          {
            playerId: 14,
            name: 'SergIy Rybalka',
            playerPathName: 'sergiy-rybalka',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/81649-1566988755.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Fayçal Fajr',
            playerPathName: 'faycal-fajr',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/174344-1604858790.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 16,
            name: 'Hakan Arslan',
            playerPathName: 'hakan-arslan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/85127-1566989725.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 17,
            name: 'Kerem Atakan Kesgin',
            playerPathName: 'kerem-atakan-kesgin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/361264-1604859049.jpeg?lm=1',
            twitterName: 'Keramatakan20'
          },
          {
            playerId: 18,
            name: 'Max Gradel',
            playerPathName: 'max-gradel',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/28140-1604603057.jpeg?lm=1',
            twitterName: 'maxigr04del'
          },
          {
            playerId: 19,
            name: 'CasImIr NInga',
            playerPathName: 'casimir-ninga',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/392810-1604603101.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 20,
            name: 'Erdoğan Yeşilyurt',
            playerPathName: 'erdogan-yesilyurt',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/158946-1566989879.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'Tyler Boyd',
            playerPathName: 'tyler-boyd',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/203330-1568301181.JPG?lm=1',
            twitterName: 'Tyler__Boyd'
          },
          {
            playerId: 22,
            name: 'Olarenwaju Kayode',
            playerPathName: 'olarenwaju-kayode',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/131694-1604603009.jpeg?lm=1',
            twitterName: 'larrykaz7_boi'
          },
          {
            playerId: 23,
            name: 'Jorge FélIx',
            playerPathName: 'jorge-felix',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/251930-1573680333.jpg?lm=1',
            twitterName: 'JorgeFelix_22'
          },
          {
            playerId: 24,
            name: 'Mustapha Yatabaré',
            playerPathName: 'mustapha-yatabare',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/76386-1566988342.jpg?lm=1',
            twitterName: 'MustYatabare9'
          },
          {
            playerId: 25,
            name: 'Arouna Koné',
            playerPathName: 'arouna-kone',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/8552-1566989605.jpg?lm=1',
            twitterName: 'OfficielArounaK'
          }
        ]
      },
      {
        id: 7,
        title: 'Fatih Karagümrük A.Ş.',
        pathName: 'fatih-karagumruk',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'karagumruk_sk',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000169_120x120.png'
          },
          {
            playerId: 1,
            name: 'Aykut Özer',
            playerPathName: 'aykut-ozer',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/117518-1572862257.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 2,
            name: 'EmIlIano VIvIano',
            playerPathName: 'emiliano-viviano',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/24316-1448966544.jpg?lm=1',
            twitterName: 'EmilianoViviano'
          },
          {
            playerId: 3,
            name: 'Yavuz Aygün',
            playerPathName: 'yavuz-aygun',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/299839-1445261841.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 4,
            name: 'Yavuz Ulaş Genç',
            playerPathName: 'yavuz-ulas-genc',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/667915-1601919571.jpeg?lm=1',
            twitterName: 'yavuzulasgenc'
          },
          {
            playerId: 5,
            name: 'Muzaffer Kablan',
            playerPathName: 'muzaffer-kablan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/321714-1572862338.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'Enzo Roco',
            playerPathName: 'enzo-roco',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/186862-1568213299.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 7,
            name: 'Gastón CampI',
            playerPathName: 'gaston-campi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/292174-1599758025.jpeg?lm=1',
            twitterName: 'gastoncampi'
          },
          {
            playerId: 8,
            name: 'Fatih Kurucuk',
            playerPathName: 'fatih-kurucuk',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/337516-1572862134.jpg?lm=1',
            twitterName: 'FatihKurucuk'
          },
          {
            playerId: 9,
            name: 'ErvIn ZukanovIc',
            playerPathName: 'ervin-zukanovic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/44059-1448964735.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'Jure Balkovec',
            playerPathName: 'jure-balkovec',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/181410-1598866806.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'Alparslan Erdem',
            playerPathName: 'alparslan-erdem',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/42050-1572862471.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'Koray Altınay',
            playerPathName: 'koray-altinay',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/148550-1554742800.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 13,
            name: 'Vegar Eggen Hedenstad',
            playerPathName: 'vegar-eggen-hedenstad',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/73333-1470303572.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'Lucas BIglIa',
            playerPathName: 'lucas-biglia',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/26721-1448467606.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Murat Sarıgül',
            playerPathName: 'murat-sarigul',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/641264-1602457436.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 16,
            name: 'Bora Adam',
            playerPathName: 'bora-adam',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/869934-1618405586.jpeg?lm=1',
            twitterName: 'boraadam61'
          },
          {
            playerId: 17,
            name: 'Andrea BertolaccI',
            playerPathName: 'andrea-bertolacci',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/99227-1474297569.jpg?lm=1',
            twitterName: 'Bertolacci'
          },
          {
            playerId: 18,
            name: 'Efe Tatlı',
            playerPathName: 'efe-tatli',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/696876-1602457312.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 19,
            name: 'Lucas Castro',
            playerPathName: 'lucas-castro',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/105892-1596014735.jpg?lm=1',
            twitterName: 'Patacastro19'
          },
          {
            playerId: 20,
            name: 'Aksel Aktaş',
            playerPathName: 'aksel-aktas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/371147-1575763912.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'FabIo BorInI',
            playerPathName: 'fabio-borini',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/96754-1596108934.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'JImmy Durmaz',
            playerPathName: 'jimmy-durmaz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/80205-1572962916.jpg?lm=1',
            twitterName: 'JimmyDurmaz21'
          },
          {
            playerId: 23,
            name: 'Serhat Ahmetoğlu',
            playerPathName: 'serhat-ahmetoglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/667401-1606351302.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 24,
            name: 'Alassane Ndao',
            playerPathName: 'alassane-ndao',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/569777-1599487446.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 25,
            name: 'YannIs SalIbur',
            playerPathName: 'yannis-salibur',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/79893-1601131593.png?lm=1',
            twitterName: 'YSalibur'
          },
          {
            playerId: 26,
            name: 'JeremaIn Lens',
            playerPathName: 'jeremain-lens',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/38497-1568300883.JPG?lm=1',
            twitterName: 'jeremainlens'
          },
          {
            playerId: 27,
            name: 'Vato Arveladze',
            playerPathName: 'vato-arveladze',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/345195-1562143361.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 28,
            name: 'Kemal AdemI',
            playerPathName: 'kemal-ademi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/333161-1603566082.jpeg?lm=1',
            twitterName: 'KemalAdemi'
          },
          {
            playerId: 29,
            name: 'Artur SobIech',
            playerPathName: 'artur-sobiech',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/75640-1580393763.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 30,
            name: 'Mevlüt Erdinç',
            playerPathName: 'mevlut-erdinc',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/38360-1570618722.JPG?lm=1',
            twitterName: 'meverding9' // gizli hesap
          },
          {
            playerId: 31,
            name: 'Egemen Pehlivan',
            playerPathName: 'egemen-pehlivan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/697067-1604512654.jpeg?lm=1',
            twitterName: ''
          }
        ]
      },
      {
        id: 8,
        title: 'Fenerbahçe A.Ş.',
        pathName: 'fenerbahce',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'Fenerbahce',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000150_120x120.png'
          },
          {
            playerId: 1,
            name: 'Altay Bayındır',
            playerPathName: 'altay-bayindir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/336077-1567075907.JPG?lm=1',
            twitterName: 'AltayBayindir_1'
          },
          {
            playerId: 2,
            name: 'Harun Tekin',
            playerPathName: 'harun-tekin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/85213-1567075858.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 3,
            name: 'Oytun Özdoğan',
            playerPathName: 'oytun-ozdogan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/353860-1592293317.jpeg?lm=1',
            twitterName: 'oytunozdogan13'
          },
          {
            playerId: 4,
            name: 'Marcel TIsserand',
            playerPathName: 'marcel-tisserand',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/170463-1603566731.jpeg?lm=1',
            twitterName: 'TISSERAND32'
          },
          {
            playerId: 5,
            name: 'AttIla SzalaI',
            playerPathName: 'attila-szalai',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/263380-1474883999.jpg?lm=1',
            twitterName: 'SzalaiAttila41'
          },
          {
            playerId: 6,
            name: 'Serdar Aziz',
            playerPathName: 'serdar-aziz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/44996-1603569792.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 7,
            name: 'MaurIcIo Lemos',
            playerPathName: 'mauricio-lemos',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/303140-1603566823.jpeg?lm=1',
            twitterName: 'maulemos3'
          },
          {
            playerId: 8,
            name: 'Sadık Çiftpınar',
            playerPathName: 'sadik-ciftpinar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/176354-1606253157.jpeg?lm=1',
            twitterName: 'sadikcftpnr16'
          },
          {
            playerId: 9,
            name: 'FIlIp Novak',
            playerPathName: 'filip-novak',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/107665-1603567591.png?lm=1',
            twitterName: 'NovakFida'
          },
          {
            playerId: 10,
            name: 'Caner Erkin',
            playerPathName: 'caner-erkin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/39333-1603566217.jpeg?lm=1',
            twitterName: 'CanerErkin'
          },
          {
            playerId: 11,
            name: 'Nazım Sangaré',
            playerPathName: 'nazim-sangare',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/157113-1608902656.jpeg?lm=1',
            twitterName: 'nazimsangare30'
          },
          {
            playerId: 12,
            name: 'Gökhan Gönül',
            playerPathName: 'gokhan-gonul',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/33793-1603567507.jpeg?lm=1',
            twitterName: '_gokhangonul'
          },
          {
            playerId: 13,
            name: 'LuIz Gustavo',
            playerPathName: 'luiz-gustavo',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/10471-1570618782.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'İrfan Can Kahveci',
            playerPathName: 'irfan-can-kahveci',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/216603-1583153806.jpg?lm=1',
            twitterName: 'irfankahveci'
          },
          {
            playerId: 15,
            name: 'Ozan Tufan',
            playerPathName: 'ozan-tufan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/236471-1603565667.jpeg?lm=1',
            twitterName: 'Ozan'
          },
          {
            playerId: 16,
            name: 'José Sosa',
            playerPathName: 'jose-sosa',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/20137-1603567042.jpeg?lm=1',
            twitterName: 'josesosaok'
          },
          {
            playerId: 17,
            name: 'DImItrIos Pelkas',
            playerPathName: 'dimitrios-pelkas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/212832-1603568471.jpeg?lm=1',
            twitterName: 'pelkas'
          },
          {
            playerId: 18,
            name: 'Mesut Özil',
            playerPathName: 'mesut-ozil',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/35664-1483519286.jpg?lm=1',
            twitterName: 'MesutOzil1088'
          },
          {
            playerId: 19,
            name: 'Mert Hakan Yandaş',
            playerPathName: 'mert-hakan-yandas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/306462-1607902168.png?lm=1',
            twitterName: 'MHYandas'
          },
          {
            playerId: 20,
            name: 'Ömer Beyaz',
            playerPathName: 'omer-beyaz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/588020-1598700578.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'Mame ThIam',
            playerPathName: 'mame-thiam',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/163053-1603567808.jpeg?lm=1',
            twitterName: 'Mame27Thiam'
          },
          {
            playerId: 22,
            name: 'DIego PerottI',
            playerPathName: 'diego-perotti',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/54984-1603565967.jpeg?lm=1',
            twitterName: 'D_10Perotti'
          },
          {
            playerId: 23,
            name: 'Ferdi Kadıoğlu',
            playerPathName: 'ferdi-kadioglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/369316-1603565775.jpeg?lm=1',
            twitterName: 'Ferdi_kadioglu'
          },
          {
            playerId: 24,
            name: 'BrIght OsayI-Samuel',
            playerPathName: 'bright-osayi-samuel',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/358948-1611772287.jpeg?lm=1',
            twitterName: 'Bright_097'
          },
          {
            playerId: 25,
            name: 'Sinan Gümüş',
            playerPathName: 'sinan-gumus',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/196524-1603567115.jpeg?lm=1',
            twitterName: 'sinanguemues18'
          },
          {
            playerId: 26,
            name: 'Mbwana Samatta',
            playerPathName: 'mbwana-samatta',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/182201-1603568231.jpeg?lm=1',
            twitterName: 'Samagoal_77'
          },
          {
            playerId: 27,
            name: 'Enner ValencIa',
            playerPathName: 'enner-valencia',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/139503-1603567945.jpeg?lm=1',
            twitterName: 'EnnerValencia14'
          },
          {
            playerId: 28,
            name: 'PapIss Demba CIssé',
            playerPathName: 'papiss-demba-cisse',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/33952-1603566371.jpeg?lm=1',
            twitterName: ''
          }
        ]
      },
      {
        id: 9,
        title: 'Fraport-Tav Antalyaspor',
        pathName: 'fraport-tav-antalyaspor',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'Antalyaspor',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000051_120x120.png'
          },
          {
            playerId: 1,
            name: 'Ruud BoffIn',
            playerPathName: 'ruud-boffin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/31336-1593642657.jpeg?lm=1',
            twitterName: '25_boffin'
          },
          {
            playerId: 2,
            name: 'Ferhat Kaplan',
            playerPathName: 'ferhat-kaplan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/93104-1593642222.jpeg?lm=1',
            twitterName: 'kaleciferhat'
          },
          {
            playerId: 3,
            name: 'Doğukan Özkan',
            playerPathName: 'dogukan-ozkan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/537611-1600812253.png?lm=1',
            twitterName: 'dogukanozkann1'
          },
          {
            playerId: 4,
            name: 'Enes Sancar Şahin',
            playerPathName: 'enes-sancar-sahin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/617875-1593285736.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 5,
            name: 'Naldo PereIra',
            playerPathName: 'naldo-pereira',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/148666-1445431572.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'Veysel Sarı',
            playerPathName: 'veysel-sari',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/88374-1593641896.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 7,
            name: 'Ersan Gülüm',
            playerPathName: 'ersan-gulum',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/44982-1593641773.png?lm=1',
            twitterName: 'GlmErsan'
          },
          {
            playerId: 8,
            name: 'Bahadır Öztürk',
            playerPathName: 'bahadir-ozturk',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/353970-1593641975.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 9,
            name: 'Fedor Kudryashov',
            playerPathName: 'fedor-kudryashov',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/48634-1593641863.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'Eren Albayrak',
            playerPathName: 'eren-albayrak',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/59931-1569851935.png?lm=1',
            twitterName: 'AlbayrakEren'
          },
          {
            playerId: 11,
            name: 'Ali Eren İyican',
            playerPathName: 'ali-eren-iyican',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/554066-1588247644.jpg?lm=1',
            twitterName: 'aliereniyicann'
          },
          {
            playerId: 12,
            name: 'Bünyamin Balcı',
            playerPathName: 'bunyamin-balci',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/620072-1569521504.png?lm=1',
            twitterName: 'BnyaminBalc6'
          },
          {
            playerId: 13,
            name: 'Mert Yılmaz',
            playerPathName: 'mert-yilmaz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/393217-1565011001.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'Ufuk Akyol',
            playerPathName: 'ufuk-akyol',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/241251-1569851589.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Nuri Şahin',
            playerPathName: 'nuri-sahin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/31095-1502448530.jpg?lm=1',
            twitterName: 'nurisahin'
          },
          {
            playerId: 16,
            name: 'Mevlüt Han Ekelik',
            playerPathName: 'mevlut-han-ekelik',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/727082-1600811749.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 17,
            name: 'Hakan Özmert',
            playerPathName: 'hakan-ozmert',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/17465-1614318714.jpeg?lm=1',
            twitterName: 'ozmerthakan'
          },
          {
            playerId: 18,
            name: 'Doğukan Sinik',
            playerPathName: 'dogukan-sinik',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/370833-1545496591.jpeg?lm=1',
            twitterName: 'dogukansinik'
          },
          {
            playerId: 19,
            name: 'Fredy RIberIo',
            playerPathName: 'fredy-riberio',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/87854-1569851848.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 20,
            name: 'AmIlton MInervIno',
            playerPathName: 'amilton-minervino',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/227676-1569851644.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'Jean-Armel Drolé',
            playerPathName: 'jean-armel-drole',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/390667-1615143256.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'Serdar Poyraz',
            playerPathName: 'serdar-poyraz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/795140-1595171992.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 23,
            name: 'Gökdeniz Bayrakdar',
            playerPathName: 'gokdeniz-bayrakdar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/345105-1600811710.png?lm=1',
            twitterName: 'gokdenizz7'
          },
          {
            playerId: 24,
            name: 'Serdar Gürler',
            playerPathName: 'serdar-gurler',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/98512-1584274422.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 25,
            name: 'SIdney Sam',
            playerPathName: 'sidney-sam',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/39102-1531903955.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 26,
            name: 'Omar ImerI',
            playerPathName: 'Omar Imeri',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/535537-1600812116.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 27,
            name: 'Lukas PodolskI',
            playerPathName: 'lukas-podolski',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/15185-1589664978.png?lm=1',
            twitterName: 'Podolski10'
          },
          {
            playerId: 28,
            name: 'Dever OrgIll',
            playerPathName: 'dever-orgill',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/103621-1555243511.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 29,
            name: 'Fehmi Koç',
            playerPathName: 'fehmi-koc',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/630023-1552992793.jpg?lm=1',
            twitterName: 'fehmi_9'
          }
        ]
      },
      {
        id: 10,
        title: 'Galatasaray A.Ş.',
        pathName: 'galatasaray',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'GalatasaraySK',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000162_120x120.png'
          },
          {
            playerId: 1,
            name: 'Fernando Muslera',
            playerPathName: 'fernando-muslera',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/58088-1572949088.jpg?lm=1',
            twitterName: '1_Muslera_25'
          },
          {
            playerId: 2,
            name: 'Okan Kocuk',
            playerPathName: 'okan-kocuk',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/204189-1572949480.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 3,
            name: 'Fatih Öztürk',
            playerPathName: 'fatih-ozturk',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/209574-1607186190.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 4,
            name: 'Marcão TeIxeIra',
            playerPathName: 'marcao-teixeira',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/439022-1572951832.jpg?lm=1',
            twitterName: 'teixeira_marcao'
          },
          {
            playerId: 5,
            name: 'ChrIstIan LuyIndama',
            playerPathName: 'christian-luyindama',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/262793-1572950736.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'Ryan Donk',
            playerPathName: 'ryan-donk',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/38414-1572952086.jpg?lm=1',
            twitterName: 'Ryan_Donk18'
          },
          {
            playerId: 7,
            name: 'ValentIne Ozornwafor',
            playerPathName: 'valentine-ozornwafor',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/647950-1607186391.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 8,
            name: 'Marcelo SaracchI',
            playerPathName: 'marcelo-saracchi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/373916-1608892184.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 9,
            name: 'Ömer Bayram',
            playerPathName: 'omer-bayram',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/117586-1572959849.jpg?lm=1',
            twitterName: 'omerbayram19_'
          },
          {
            playerId: 10,
            name: 'Emre Taşdemir',
            playerPathName: 'emre-tasdemir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/204201-1572952121.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'DeAndre YedlIn',
            playerPathName: 'deandre-yedlin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/255916-1612642870.jpeg?lm=1',
            twitterName: 'yedlinny'
          },
          {
            playerId: 12,
            name: 'Omar ElabdellaouI',
            playerPathName: 'omar-elabdellaoui',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/121404-1609450472.jpeg?lm=1',
            twitterName: 'OmarEla14'
          },
          {
            playerId: 13,
            name: 'MartIn LInnes',
            playerPathName: 'martin-linnes',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/137582-1572951974.jpg?lm=1',
            twitterName: 'M_Linnes'
          },
          {
            playerId: 14,
            name: 'Şener Özbayraklı',
            playerPathName: 'sener-ozbayrakli',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/169873-1572952184.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Taylan Antalyalı',
            playerPathName: 'taylan-antalyali',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/204176-1572001631.jpg?lm=1',
            twitterName: 'Tantalyali48'
          },
          {
            playerId: 16,
            name: 'Gedson Fernandes',
            playerPathName: 'gedson-fernandes',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/337800-1537350780.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 17,
            name: 'Oghenekaro Etebo',
            playerPathName: 'oghenekaro-etebo',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/409106-1610479977.jpeg?lm=1',
            twitterName: 'etebo_karo'
          },
          {
            playerId: 18,
            name: 'Emre Akbaba',
            playerPathName: 'emre-akbaba',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/278654-1572959614.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 19,
            name: 'Henry Onyekuru',
            playerPathName: 'henry-onyekuru',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/380415-1611598682.jpeg?lm=1',
            twitterName: 'henryconyekuru'
          },
          {
            playerId: 20,
            name: 'Ryan Babel',
            playerPathName: 'ryan-babel',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/16135-1572962666.jpg?lm=1',
            twitterName: 'Ryanbabel'
          },
          {
            playerId: 21,
            name: 'Kerem Aktürkoğlu',
            playerPathName: 'kerem-akturkoglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/382528-1612642980.jpeg?lm=1',
            twitterName: 'keremakturkoglu'
          },
          {
            playerId: 22,
            name: 'Arda Turan',
            playerPathName: 'arda-turan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/21369-1515403225.jpg?lm=1',
            twitterName: 'ArdaTuran'
          },
          {
            playerId: 23,
            name: 'Emre Kılınç',
            playerPathName: 'emre-kilinc',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/208848-1566989944.jpg?lm=1',
            twitterName: 'Emreeklnc54'
          },
          {
            playerId: 24,
            name: 'SofIane FeghoulI',
            playerPathName: 'sofiane-feghouli',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/57162-1572962624.jpg?lm=1',
            twitterName: 'sffeghouli'
          },
          {
            playerId: 25,
            name: 'Oğulcan Çağlayan',
            playerPathName: 'ogulcan-caglayan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/248219-1608080207.jpeg?lm=1',
            twitterName: 'CglynOgulcan'
          },
          {
            playerId: 26,
            name: 'Mostafa Mohamed',
            playerPathName: 'mostafa-mohamed',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/462348-1612643085.jpeg?lm=1',
            twitterName: 'mmostafa_11'
          },
          {
            playerId: 27,
            name: 'Radamel Falcao',
            playerPathName: 'radamel-falcao',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/39152-1572000460.jpg?lm=1',
            twitterName: 'FALCAO'
          },
          {
            playerId: 28,
            name: 'Halil Dervişoğlu',
            playerPathName: 'halil-dervisoglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/465606-1562226032.jpg?lm=1',
            twitterName: ''
          }
        ]
      },
      {
        id: 11,
        title: 'Gaziantep Futbol Kulübü A.Ş.',
        pathName: 'gaziantep-futbol-kulubu',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'GaziantepFK',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000251_120x120.png'
          },
          {
            playerId: 1,
            name: 'Günay Güvenç',
            playerPathName: 'gunay-guvenc',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/114422-1601146717.jpeg?lm=1',
            twitterName: 'gnygvc'
          },
          {
            playerId: 2,
            name: 'Çağlar Akbaba',
            playerPathName: 'caglar-akbaba',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/264431-1601146652.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 3,
            name: 'Mustafa Burak Bozan',
            playerPathName: 'mustafa-burak-bozan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/587726-1601146766.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 4,
            name: 'Papy DjIlobodjI',
            playerPathName: 'papy-djilobodji',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/136610-1572959932.jpg?lm=1',
            twitterName: 'papydjilo15'
          },
          {
            playerId: 5,
            name: 'AlIn Tosca',
            playerPathName: 'alin-tosca',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/148004-1572960021.jpg?lm=1',
            twitterName: 'ToscaAlin'
          },
          {
            playerId: 6,
            name: 'RoderIck MIranda',
            playerPathName: 'roderick-miranda',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/87856-1614509316.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 7,
            name: 'Ertuğrul Ersoy',
            playerPathName: 'ertugrul-ersoy',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/251079-1614509283.jpeg?lm=1',
            twitterName: 'ertugrulersoy_4'
          },
          {
            playerId: 8,
            name: 'Jean-Armel Kana-Bıyık',
            playerPathName: 'jean-armel-kana-biyik',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/57404-1572959990.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 9,
            name: 'Ulaş Zengin',
            playerPathName: 'ulas-zengin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/354259-1572960148.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'Güray Vural',
            playerPathName: 'guray-vural',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/52281-1572961569.jpg?lm=1',
            twitterName: '22gry_sym'
          },
          {
            playerId: 11,
            name: 'JúnIor MoraIs',
            playerPathName: 'junior-morais',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/125069-1572960206.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'Oğuz Ceylan',
            playerPathName: 'oguz-ceylan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/139316-1572960437.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 13,
            name: 'Pawel OlkowskI',
            playerPathName: 'pawel-olkowski',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/117469-1572960352.jpg?lm=1',
            twitterName: 'PawelOlkowski'
          },
          {
            playerId: 14,
            name: 'Abdul-AzIz Tetteh',
            playerPathName: 'abdul-aziz-tetteh',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/157003-1572960469.jpg?lm=1',
            twitterName: 'aziz_tetteh'
          },
          {
            playerId: 15,
            name: 'Jefferson NogueIra JúnIor',
            playerPathName: 'jefferson-nogueira-junior',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/252922-1572960505.jpg?lm=1',
            twitterName: 'jeffersonjr_8'
          },
          {
            playerId: 16,
            name: 'Osama RashId',
            playerPathName: 'osama-rashid',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/95429-1614509354.jpeg?lm=1',
            twitterName: 'OsamaRashid92'
          },
          {
            playerId: 17,
            name: 'Amedej VetrIh',
            playerPathName: 'amedej-vetrih',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/121481-1603999699.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 18,
            name: 'ZvonImIr Kozulj',
            playerPathName: 'zvonimir-kozulj',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/194205-1601146422.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 19,
            name: 'André Sousa',
            playerPathName: 'andre-sousa',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/187860-1583005401.jpeg?lm=1',
            twitterName: 'asousa8'
          },
          {
            playerId: 20,
            name: 'Alexandru MaxIm',
            playerPathName: 'alexandru-maxim',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/129513-1583005455.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'Furkan Soyalp',
            playerPathName: 'furkan-soyalp',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/221285-1572961440.jpg?lm=1',
            twitterName: 'furkansoyalp'
          },
          {
            playerId: 22,
            name: 'Blal Başacıkoğlu',
            playerPathName: 'bilal-basacikoglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/224256-1614509238.jpeg?lm=1',
            twitterName: 'Basacikoglu_'
          },
          {
            playerId: 23,
            name: 'Mirza Cihan',
            playerPathName: 'mirza-cihan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/583970-1603999457.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 24,
            name: 'KevIn MIrallas',
            playerPathName: 'kevin-mirallas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/33639-1605139873.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 25,
            name: 'Cenk Şahin',
            playerPathName: 'cenk-sahin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/167042-1601146517.jpeg?lm=1',
            twitterName: 'CenkSahin67'
          },
          {
            playerId: 26,
            name: 'Muhammet Demir',
            playerPathName: 'muhammet-demir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/83560-1605139802.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 27,
            name: 'André De Souza',
            playerPathName: 'andre-de-souza',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/104509-1601146473.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 28,
            name: 'Nouha DIcko',
            playerPathName: 'nouha-dicko',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/173750-1604609577.jpeg?lm=1',
            twitterName: 'DNouha'
          },
          {
            playerId: 29,
            name: 'Kenan Özer',
            playerPathName: 'kenan-ozer',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/38195-1572961830.jpg?lm=1',
            twitterName: ''
          }
        ]
      },
      {
        id: 12,
        title: 'Gençlerbirliği',
        pathName: 'genclerbirligi',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'kirmizikara',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000164_120x120.png'
          },
          {
            playerId: 1,
            name: 'KrIstoffer Nordfeldt',
            playerPathName: 'kristoffer-nordfeldt',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/75890-1580915057.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 2,
            name: 'Übeyd Adıyaman',
            playerPathName: 'ubeyd-adiyaman',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/251070-1572951316.jpg?lm=1',
            twitterName: 'Ubeyd02'
          },
          {
            playerId: 3,
            name: 'Yasin Davuş',
            playerPathName: 'yasin-davus',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/315798-1612376854.jpeg?lm=1',
            twitterName: 'YasinDavus'
          },
          {
            playerId: 4,
            name: 'Atalay Gökçe',
            playerPathName: 'atalay-gökce',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/656206-1616345233.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 5,
            name: 'Arda Kızıldağ',
            playerPathName: 'arda-kizildag',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/532905-1607865073.jpeg?lm=1',
            twitterName: 'ardakizildag4'
          },
          {
            playerId: 6,
            name: 'Zargo Touré',
            playerPathName: 'zargo-toure',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/81663-1605110290.jpeg?lm=1',
            twitterName: 'GozarZargo'
          },
          {
            playerId: 7,
            name: 'DIego Ângelo',
            playerPathName: 'diego-angelo',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/59333-1545499726.jpeg?lm=1',
            twitterName: 'diegoangelo03'
          },
          {
            playerId: 8,
            name: 'Metehan Mert',
            playerPathName: 'metehan-mert',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/59333-1545499726.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 9,
            name: 'Abdullah Şahindere',
            playerPathName: 'abdullah-sahindere',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/655901-1616348009.jpeg?lm=1',
            twitterName: 'sahindere55'
          },
          {
            playerId: 10,
            name: 'Mustafa Akbaş',
            playerPathName: 'mustafa-akbas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/98113-1566986728.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'PIerre-Yves Polomat',
            playerPathName: 'pierre-yves-polomat',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/203764-1572951495.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'İbrahim Pehlivan',
            playerPathName: 'ibrahim-pehlivan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/291760-1607864955.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 13,
            name: 'MattIas Johansson',
            playerPathName: 'mattias-johansson',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/132014-1604846197.jpeg?lm=1',
            twitterName: 'm_johansson2'
          },
          {
            playerId: 14,
            name: 'Ömürcan Artan',
            playerPathName: 'omurcan-artan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/702988-1604390387.jpeg?lm=1',
            twitterName: 'Omurcan27'
          },
          {
            playerId: 15,
            name: 'PIrIs da Motta',
            playerPathName: 'piris-da-motta',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/273033-1616348221.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 16,
            name: 'Soner Dikmen',
            playerPathName: 'soner-dikmen',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/291750-1572951778.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 17,
            name: 'Mustafa Seyhan',
            playerPathName: 'mustafa-seyhan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/391496-1567691187.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 18,
            name: 'DomInIk Furman',
            playerPathName: 'dominik-furman',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/74687-1565701104.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 19,
            name: 'Murat Yıldırım',
            playerPathName: 'murat-yildirim',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/35530-1566986665.jpg?lm=1',
            twitterName: 'iammuratyldrm'
          },
          {
            playerId: 20,
            name: 'Rahmetullah Berişbek',
            playerPathName: 'rahmetullah-berisbek',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/534706-1572951869.jpg?lm=1',
            twitterName: 'Rahmetullah66'
          },
          {
            playerId: 21,
            name: 'Lucas MugnI',
            playerPathName: 'lucas-mugni',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/148231-1612376706.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'Srdjan SpIrIdonovIc',
            playerPathName: 'srdjan-spiridonovic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/124774-1612376790.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 23,
            name: 'Floyd AyIté',
            playerPathName: 'floyd-ayite',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/77974-1572951939.jpg?lm=1',
            twitterName: 'AyiteF'
          },
          {
            playerId: 24,
            name: 'DanIel CandeIas',
            playerPathName: 'daniel-candeias',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/56046-1572952279.jpg?lm=1',
            twitterName: 'Dcandeias11'
          },
          {
            playerId: 25,
            name: 'Sefa Yılmaz',
            playerPathName: 'sefa-yilmaz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/56518-1607864884.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 26,
            name: 'GIovannI SIo',
            playerPathName: 'giovanni-sio',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/76293-1613907051.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 27,
            name: 'Gökhan Altıparmak',
            playerPathName: 'gokhan-altiparmak',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/740515-1604843125.png?lm=1',
            twitterName: 'gokhanaltprmkk'
          },
          {
            playerId: 28,
            name: 'Bogdan Stancu',
            playerPathName: 'bogdan-stancu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/46658-1572952249.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 29,
            name: 'Sandro LIma',
            playerPathName: 'sandro-lima',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/284739-1612376662.jpeg?lm=1',
            twitterName: 'SandroL91'
          },
          {
            playerId: 30,
            name: 'İlker Karakaş',
            playerPathName: 'ilker-karakas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/352721-1572952314.jpg?lm=1',
            twitterName: 'ilkerkarakas41'
          }
        ]
      },
      {
        id: 13,
        title: 'Göztepe A.Ş.',
        pathName: 'goztepe',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'Goztepe',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000269_120x120.png'
          },
          {
            playerId: 1,
            name: 'İrfan Can Eğribayat',
            playerPathName: 'irfan-can-egribayat',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/322873-1608473119.png?lm=1',
            twitterName: 'canegribayat'
          },
          {
            playerId: 2,
            name: 'Balázs MegyerI',
            playerPathName: 'balázs-megyeri',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/98428-1618417106.jpeg?lm=1',
            twitterName: 'megyo42'
          },
          {
            playerId: 3,
            name: 'Arda Özçimen',
            playerPathName: 'arda-ozcimen',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/615430-1612910812.jpeg?lm=1',
            twitterName: 'ArdaOzcimen13'
          },
          {
            playerId: 4,
            name: 'Alpaslan Öztürk',
            playerPathName: 'alpaslan-ozturk',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/138736-1589337293.png?lm=1',
            twitterName: 'Ozturk5Alpaslan'
          },
          {
            playerId: 5,
            name: 'Marko MIhojevIc',
            playerPathName: 'marko-mihojevic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/235646-1619297684.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'Atınç Nukan',
            playerPathName: 'atinc-nukan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/149516-1532352567.jpg?lm=1',
            twitterName: 'atincnukan93'
          },
          {
            playerId: 7,
            name: 'Dzenan BurekovIc',
            playerPathName: 'dzenan-burekovic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/227639-1592155950.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 8,
            name: 'Berkan Emir',
            playerPathName: 'berkan-emir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/241902-1612910585.jpeg?lm=1',
            twitterName: 'EmirBerkan'
          },
          {
            playerId: 9,
            name: 'Murat Paluli',
            playerPathName: 'murat-paluli',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/288858-1589942009.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'Kerim Alıcı',
            playerPathName: 'kerim-alici',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/341646-1572443923.jpg?lm=1',
            twitterName: 'kerimalici'
          },
          {
            playerId: 11,
            name: 'LamIne Gassama',
            playerPathName: 'lamine-gassama',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/60539-1538169216.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'Anderson EsItI',
            playerPathName: 'anderson-esiti',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/245027-1611443240.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 13,
            name: 'Kubilay Sönmez',
            playerPathName: 'kubilay-sonmez',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/160512-1597421292.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'Tolga Topaloğlu',
            playerPathName: 'tolga-topaloglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/507167-1608987274.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Peter Zulj',
            playerPathName: 'peter-zulj',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/128105-1610388892.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 16,
            name: 'Soner Aydoğdu',
            playerPathName: 'soner-aydogdu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/85291-1583155438.jpg?lm=1',
            twitterName: 'soneraydogdu10'
          },
          {
            playerId: 17,
            name: 'ObInna Nwobodo',
            playerPathName: 'obinna-nwobodo',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/364299-1612910926.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 18,
            name: 'Yalçın Kayan',
            playerPathName: 'yalcin-kayan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/605266-1612910735.jpeg?lm=1',
            twitterName: 'YalcinKayan30'
          },
          {
            playerId: 19,
            name: 'Efe Binici',
            playerPathName: 'efe-binici',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/667563-1612910681.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 20,
            name: 'Metin Yıldırım',
            playerPathName: 'metin-yildirim',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/660139-1614319750.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'Zlatko TrIpIc',
            playerPathName: 'zlatko-tripic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/195274-1612910872.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'Beykan Şimşek',
            playerPathName: 'beykan-simsek',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/176341-1609838569.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 23,
            name: 'Batuhan Kırdaroğlu',
            playerPathName: 'batuhan-kirdaroglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/620188-1593822532.jpeg?lm=1',
            twitterName: 'batukirdar_'
          },
          {
            playerId: 24,
            name: 'Yılmaz Basravi',
            playerPathName: 'yilmaz-basravi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/625812-1615775512.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 25,
            name: 'Halil Akbunar',
            playerPathName: 'halil-akbunar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/212229-1599995155.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 26,
            name: 'FoussenI DIabaté',
            playerPathName: 'fousseni-diabate',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/364861-1602167103.png?lm=1',
            twitterName: 'F_Diabate27'
          },
          {
            playerId: 27,
            name: 'Tibet Öniz',
            playerPathName: 'tibet-oniz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/700400-1608987220.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 28,
            name: 'Stefano NapoleonI',
            playerPathName: 'stefano-napoleoni',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/43518-1589940852.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 29,
            name: 'CherIf NdIaye',
            playerPathName: 'cherif-ndiaye',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/480705-1612911023.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 30,
            name: 'AdIs JahovIc',
            playerPathName: 'adis-jahovic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/98536-1616096390.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 31,
            name: 'Brown Ideye',
            playerPathName: 'brown-ideye',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/64308-1488278287.jpg?lm=1',
            twitterName: 'OfficialIdeye'
          }
        ]
      },
      {
        id: 14,
        title: 'Helenex Yeni Malatyaspor',
        pathName: 'helenex-yeni-malatyaspor',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'YMSkulubu',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/011385_120x120.png'
          },
          {
            playerId: 1,
            name: 'Abdulsamed Damlu',
            playerPathName: 'abdulsamed-damlu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/341649-1612444900.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 2,
            name: 'Ertaç Özbir',
            playerPathName: 'ertac-ozbir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/159079-1612445479.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 3,
            name: 'Murat Akşit',
            playerPathName: 'murat-aksit',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/621391-1612445563.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 4,
            name: 'Eray İşcan',
            playerPathName: 'eray-iscan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/88371-1612445759.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 5,
            name: 'Wallace Dos Santos',
            playerPathName: 'wallace-dos-santos',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/225335-1612445094.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'Semih Kaya',
            playerPathName: 'semih-kaya',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/60709-1612445531.jpeg?lm=1',
            twitterName: 'semihkaya_26'
          },
          {
            playerId: 7,
            name: 'Teenage Hadebe',
            playerPathName: 'teenage-hadebe',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/429975-1612445206.jpeg?lm=1',
            twitterName: 'hadebe_teenage'
          },
          {
            playerId: 8,
            name: 'PhIlIp GamelI Awuku',
            playerPathName: 'philip-gameli-awuku',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/860256-1616019072.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 9,
            name: 'ErIc NdIzeye',
            playerPathName: 'eric-ndizeye',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/826377-1616019138.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'KarIm Hafez',
            playerPathName: 'karim-hafez',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/333004-1612445643.jpeg?lm=1',
            twitterName: 'karimhafez23'
          },
          {
            playerId: 11,
            name: 'Bülent Cevahir',
            playerPathName: 'bulent-cevahir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/147518-1612445881.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'Erkan Kaş',
            playerPathName: 'erkan-kas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/165711-1612445612.jpeg?lm=1',
            twitterName: 'erkan_kas'
          },
          {
            playerId: 13,
            name: 'Issam Chebake',
            playerPathName: 'issam-chebake',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/332049-1612445676.jpeg?lm=1',
            twitterName: 'ChebakeIssam'
          },
          {
            playerId: 14,
            name: 'Zeki Yavru',
            playerPathName: 'zeki-yavru',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/98131-1612445718.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'JospIn NshImIrImana',
            playerPathName: 'jospin-nshimirimana',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/649266-1616019194.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 16,
            name: 'AfrIyIe Acquah',
            playerPathName: 'afriyie-acquah',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/145581-1612444957.jpeg?lm=1',
            twitterName: 'AcquahAfriyie20'
          },
          {
            playerId: 17,
            name: 'Ahmed Ildız',
            playerPathName: 'ahmed-ildiz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/226169-1612445312.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 18,
            name: 'Fernando ZuquI',
            playerPathName: 'fernando-zuqui',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/248763-1612444997.jpeg?lm=1',
            twitterName: 'Fer_zuqui'
          },
          {
            playerId: 19,
            name: 'StevIe Mallan',
            playerPathName: 'stevie-mallan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/331089-1616019240.jpeg?lm=1',
            twitterName: 'MallanStephen'
          },
          {
            playerId: 20,
            name: 'Adem Büyük',
            playerPathName: 'adem-buyuk',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/54148-1612445963.jpeg?lm=1',
            twitterName: 'AdemByK21'
          },
          {
            playerId: 21,
            name: 'Moryké Fofana',
            playerPathName: 'moryke-fofana',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/240497-1612445352.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'Mustafa Eskihellaç',
            playerPathName: 'mustafa-eskihellac',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/390379-1612445792.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 23,
            name: 'HaqI Osman',
            playerPathName: 'haqi-osman',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/860255-1616019317.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 24,
            name: 'Aly Malle',
            playerPathName: 'aly-malle',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/398809-1616019359.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 25,
            name: 'Doğukan Emeksiz',
            playerPathName: 'dogukan-emeksiz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/540067-1612445146.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 26,
            name: 'Olcay Şahan',
            playerPathName: 'olcay-sahan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/36200-1612445432.jpeg?lm=1',
            twitterName: 'olcay_sahan10'
          },
          {
            playerId: 27,
            name: 'BenjamIn Tetteh',
            playerPathName: 'benjamin-tetteh',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/306382-1612445254.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 28,
            name: 'Kubilay Kanatsızkuş',
            playerPathName: 'kubilay-kanatsizkus',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/330876-1612445833.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 29,
            name: 'JetmIr TopallI',
            playerPathName: 'jetmir-topalli',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/600222-1612445930.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 30,
            name: 'Umut Bulut',
            playerPathName: 'umut-bulut',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/10143-1612445045.jpeg?lm=1',
            twitterName: 'Bulut9Umut'
          }
        ]
      },
      {
        id: 15,
        title: 'Hes Kablo Kayserispor',
        pathName: 'hes-kablo-kayserispor',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'KayserisporFK',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000071_120x120.png'
          },
          {
            playerId: 1,
            name: 'Doğan Alemdar',
            playerPathName: 'dogan-alemdar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/576033-1616164162.png?lm=1',
            twitterName: 'doganalemdar16'
          },
          {
            playerId: 2,
            name: 'SIlvIu Lung Jr.',
            playerPathName: 'silviu-lung-jr.',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/73731-1616166469.png?lm=1',
            twitterName: 'lung_silviu'
          },
          {
            playerId: 3,
            name: 'İsmail Çipe',
            playerPathName: 'ismail-cipe',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/282460-1616164761.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 4,
            name: 'Abdulkadir Taşdan',
            playerPathName: 'abdulkadir-tasdan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/812658-1601364649.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 5,
            name: 'Nehuén Paz',
            playerPathName: 'nehuen-paz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/284724-1616164801.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'DImItrIos KolovetsIos',
            playerPathName: 'dimitrios-kolovetsios',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/112648-1616164886.png?lm=1',
            twitterName: 'DKolovetsios'
          },
          {
            playerId: 7,
            name: 'Uğur Demirok',
            playerPathName: 'ugur-demirok',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/44977-1538173073.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 8,
            name: 'CrIstIan Sapunaru',
            playerPathName: 'cristian-sapunaru',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/25942-1616165635.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 9,
            name: 'AzIz BehIch',
            playerPathName: 'aziz-behich',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/136834-1616166951.png?lm=1',
            twitterName: 'AzizBehich'
          },
          {
            playerId: 10,
            name: 'Yasir Subaşı',
            playerPathName: 'yasir-subasi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/375719-1616165783.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'Ramazan Civelek',
            playerPathName: 'ramazan-civelek',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/282560-1616165584.png?lm=1',
            twitterName: 'RmznCvlk20'
          },
          {
            playerId: 12,
            name: 'Zoran KvrzIc',
            playerPathName: 'zoran-kvrzic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/159839-1616165365.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 13,
            name: 'MIguel Lopes',
            playerPathName: 'miguel-lopes',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/59248-1616165277.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'Gustavo Campanharo',
            playerPathName: 'gustavo-campanharo',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/103674-1616164476.png?lm=1',
            twitterName: 'gcampanharo'
          },
          {
            playerId: 15,
            name: 'Joseph Attamah',
            playerPathName: 'joseph-attamah',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/263546-1616164843.png?lm=1',
            twitterName: 'AttamahJoseph'
          },
          {
            playerId: 16,
            name: 'Karlo Muhar',
            playerPathName: 'karlo-muhar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/388042-1616167202.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 17,
            name: 'Besard SabovIc',
            playerPathName: 'besard-sabovic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/322077-1616167159.png?lm=1',
            twitterName: 'BSabovic'
          },
          {
            playerId: 18,
            name: 'Emre Demir',
            playerPathName: 'emre-demir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/637669-1616164291.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 19,
            name: 'DanIel AvramovskI',
            playerPathName: 'daniel-avramovski',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/193289-1616164619.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 20,
            name: 'Pedro HenrIque',
            playerPathName: 'pedro-henrique',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/213368-1616164369.png?lm=1',
            twitterName: 'PHKONZEN'
          },
          {
            playerId: 21,
            name: 'Nurettin Korkmaz',
            playerPathName: 'nurettin-korkmaz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/654374-1616164027.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'Aaron Lennon',
            playerPathName: 'aaron-lennon',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/14221-1616164563.png?lm=1',
            twitterName: 'AaronLennon12'
          },
          {
            playerId: 23,
            name: 'Melih Okutan',
            playerPathName: 'melih-okutan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/292773-1616165704.png?lm=1',
            twitterName: 'MelihOkutan7'
          },
          {
            playerId: 24,
            name: 'DenIs AlIbec',
            playerPathName: 'denis-alibec',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/81396-1616164515.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 25,
            name: 'KevIn Luckassen',
            playerPathName: 'kevin-luckassen',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/187290-1616167105.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 26,
            name: 'Anton MaglIca',
            playerPathName: 'anton-maglica',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/113192-1616167245.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 27,
            name: 'İlhan Parlak',
            playerPathName: 'ilhan-parlak',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/37091-1600011597.jpeg?lm=1',
            twitterName: 'ilhanParlak38'
          },
          {
            playerId: 28,
            name: 'Muğdat Çelik',
            playerPathName: 'mugdat-celik',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/67570-1616165206.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 29,
            name: 'Ömer Uzun',
            playerPathName: 'omer-uzun',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/451880-1616165518.png?lm=1',
            twitterName: ''
          }
        ]
      },
      {
        id: 16,
        title: 'İttifak Holding Konyaspor',
        pathName: 'ittifak-holding-konyaspor',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'konyaspor',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000158_120x120.png'
          },
          {
            playerId: 1,
            name: 'IbrahIm ŠehIć',
            playerPathName: 'ibrahim-sehic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/46252-1588243750.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 2,
            name: 'Ozan Can Oruç',
            playerPathName: 'ozan-can-oruc',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/361272-1572953011.png?lm=1',
            twitterName: 'ozancanoruc'
          },
          {
            playerId: 3,
            name: 'Eray Birniçan',
            playerPathName: 'eray-birnican',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/45212-1567776161.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 4,
            name: 'Erten Ersu',
            playerPathName: 'erten-ersu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/203986-1611427450.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 5,
            name: 'Abdülkerim Bardakçı',
            playerPathName: 'abdulkerim-bardakci',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/199316-1472938866.jpg?lm=1',
            twitterName: 'abdulkerimbard1'
          },
          {
            playerId: 6,
            name: 'Adil Demirbağ',
            playerPathName: 'adil-demirbag',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/354173-1540210488.jpg?lm=1',
            twitterName: 'Ademirbag15'
          },
          {
            playerId: 7,
            name: 'Ahmet Çalık',
            playerPathName: 'ahmet-calik',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/182395-1572952223.jpg?lm=1',
            twitterName: 'ahmetycalik5'
          },
          {
            playerId: 8,
            name: 'GuIlherme SItya',
            playerPathName: 'guilherme-sitya',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/217863-1579723288.png?lm=1',
            twitterName: 'GuiSitya'
          },
          {
            playerId: 9,
            name: 'Alper Uludağ',
            playerPathName: 'alper-uludag',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/55524-1572953279.png?lm=1',
            twitterName: 'UludagAlper25'
          },
          {
            playerId: 10,
            name: 'Nejc SkubIc',
            playerPathName: 'nejc-skubic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/91434-1572953382.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'Barış Yardımcı',
            playerPathName: 'baris-yardimci',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/91948-1568850130.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'AmIr HadzIahmetovIc',
            playerPathName: 'amir-hadziahmetovic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/293213-1572953578.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 13,
            name: 'Marko JevtovIc',
            playerPathName: 'marko-jevtovic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/256000-1572953548.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'Oğuz Kağan Güçtekim',
            playerPathName: 'oguz-kagan-guctekin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/352718-1566831648.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Ismaël DIomandé',
            playerPathName: 'ismael-diomande',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/170495-1566832578.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 16,
            name: 'Volkan Fındıklı',
            playerPathName: 'volkan-findikli',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/126417-1572953608.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 17,
            name: 'İzzet Karaboğa',
            playerPathName: 'izzet-karaboga',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/662144-1604240021.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 18,
            name: 'Musa Çağıran',
            playerPathName: 'musa-cagiran',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/90959-1567776775.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 19,
            name: 'İsmail Güven',
            playerPathName: 'ismail-guven',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/209240-1537031085.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 20,
            name: 'Farouk MIya',
            playerPathName: 'farouk-miya',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/339005-1572953766.png?lm=1',
            twitterName: 'FaroukMiya'
          },
          {
            playerId: 21,
            name: 'DenI MIlosevIc',
            playerPathName: 'deni-milosevic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/168163-1572953697.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'Amar RahmanovIc',
            playerPathName: 'amar-rahmanovic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/166086-1570562969.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 23,
            name: 'Emre Pehlivan',
            playerPathName: 'emre-pehlivan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/814750-1604239906.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 24,
            name: 'Zymer BytyqI',
            playerPathName: 'zymer-bytyqi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/213555-1610216234.jpeg?lm=1',
            twitterName: 'ZymerB'
          },
          {
            playerId: 25,
            name: 'Doğan Gölpek',
            playerPathName: 'dogan-golpek',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/524195-1577131079.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 26,
            name: 'Levan ShengelIa',
            playerPathName: 'levan-shengelia',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/329630-1572956985.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 27,
            name: 'Samuel Eduok',
            playerPathName: 'samuel-eduok',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/274802-1611427351.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 28,
            name: 'Jesse SekIdIka',
            playerPathName: 'jesse-sekidika',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/437392-1553627726.png?lm=1',
            twitterName: 'JesseSekidika'
          },
          {
            playerId: 29,
            name: 'Ahmet Karademir',
            playerPathName: 'ahmet-karademir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/727085-1611427270.jpeg?lm=1',
            twitterName: 'Ahmetkrdmr_11'
          },
          {
            playerId: 30,
            name: 'Erdon DacI',
            playerPathName: 'erdon-daci',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/410285-1572957128.png?lm=1',
            twitterName: 'Erdon_daci88'
          },
          {
            playerId: 31,
            name: 'Sokol CIkalleshI',
            playerPathName: 'sokol-cikalleshi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/99047-1533893373.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 32,
            name: 'Artem Kravets',
            playerPathName: 'artem-kravets',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/58405-1605127819.jpeg?lm=1',
            twitterName: ''
          }
        ]
      },
      {
        id: 17,
        title: 'Kasımpaşa A.Ş.',
        pathName: 'kasimpasa',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'kasimpasa',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000038_120x120.png'
          },
          {
            playerId: 1,
            name: 'Ramazan Köse',
            playerPathName: 'ramazan-kose',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/73627-1614809833.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 2,
            name: 'Ertuğrul Taşkıran',
            playerPathName: 'ertugrul-taskiran',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/91945-1614809902.jpeg?lm=1',
            twitterName: 'ErtugrulTSKRN'
          },
          {
            playerId: 3,
            name: 'Erdem Canpolat',
            playerPathName: 'erdem-canpolat',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/521956-1614809968.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 4,
            name: 'DerrIck Luckassen',
            playerPathName: 'derrick-luckassen',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/241457-1614810300.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 5,
            name: 'JulIan JeanvIer',
            playerPathName: 'julian-jeanvier',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/134277-1614810342.jpeg?lm=1',
            twitterName: 'Ju_dpom'
          },
          {
            playerId: 6,
            name: 'Tomas Brecka',
            playerPathName: 'tomas-brecka',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/265879-1614810439.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 7,
            name: 'Dusko TosIc',
            playerPathName: 'dusko-tosic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/17184-1614810495.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 8,
            name: 'Oussama HaddadI',
            playerPathName: 'oussama-haddadi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/191407-1614810140.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 9,
            name: 'Eren Elmalı',
            playerPathName: 'eren-elmali',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/616894-1614810200.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'Çağtay Kurukalıp',
            playerPathName: 'cagtay-kurukalip',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/616886-1614810247.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'Berk Çetin',
            playerPathName: 'berk-cetin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/382759-1579960208.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'Florent Hadergjonaj',
            playerPathName: 'florent-hadergjonaj',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/238809-1614810027.jpeg?lm=1',
            twitterName: 'FloHadergjonaj'
          },
          {
            playerId: 13,
            name: 'Feyzi Yıldırım',
            playerPathName: 'feyzi-yildirim',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/338422-1614810087.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'Loret SadIku',
            playerPathName: 'loret-sadiku',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/116611-1614810639.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Danny DrInkwater',
            playerPathName: 'danny-drinkwater',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/73491-1614810875.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 16,
            name: 'KrIstIjan BIstrovIc',
            playerPathName: 'kristijan-bistrovic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/375857-1614810938.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 17,
            name: 'Aytaç Kara',
            playerPathName: 'aytac-kara',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/159908-1614810788.jpeg?lm=1',
            twitterName: 'aytayt35'
          },
          {
            playerId: 18,
            name: 'Tarkan Serbest',
            playerPathName: 'tarkan-serbest',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/158118-1614811764.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 19,
            name: 'Doğucan Haspolat',
            playerPathName: 'dogucan-haspolat',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/387143-1614810699.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 20,
            name: 'Hasan Emre Yeşilyurt',
            playerPathName: 'hasan-emre-yesilyurt',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/622830-1612611546.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'HarIs HajradInovIc',
            playerPathName: 'haris-hajradinovic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/215592-1614811001.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'KevIn Varga',
            playerPathName: 'kevin-varga',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/385906-1614811933.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 23,
            name: 'Yusuf Erdoğan',
            playerPathName: 'yusuf-erdogan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/191391-1614811840.jpeg?lm=1',
            twitterName: 'Ysf032'
          },
          {
            playerId: 24,
            name: 'Anıl Koç',
            playerPathName: 'anil-koc',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/168161-1614812069.jpeg?lm=1',
            twitterName: 'kocianil'
          },
          {
            playerId: 25,
            name: 'Yasin Dülger',
            playerPathName: 'yasin-dulger',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/296919-1614809738.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 26,
            name: 'GIlbert Koomson',
            playerPathName: 'gilbert-koomson',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/282473-1614811998.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 27,
            name: 'Isaac KIese ThelIn',
            playerPathName: 'isaac-kiese-thelin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/201311-1614812207.jpeg?lm=1',
            twitterName: 'IKieseThelin'
          },
          {
            playerId: 28,
            name: 'ArmIn HodzIc',
            playerPathName: 'armin-hodzic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/166753-1614812144.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 29,
            name: 'BengalI-Fodé KoIta',
            playerPathName: 'bengali-fode-koita',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/79110-1614812274.jpeg?lm=1',
            twitterName: 'bangalikoita'
          },
          {
            playerId: 30,
            name: 'Furkan Külekçi',
            playerPathName: 'furkan-kulekci',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/622831-1612611481.jpeg?lm=1',
            twitterName: ''
          }
        ]
      },
      {
        id: 18,
        title: 'Medipol Başakşehir FK',
        pathName: 'medipol-basaksehir-fk',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'ibfk2014',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000240_120x120.png'
          },
          {
            playerId: 1,
            name: 'Mert Günok',
            playerPathName: 'mert-gunok',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/51894-1553536933.jpeg?lm=1',
            twitterName: 'MertGunok'
          },
          {
            playerId: 2,
            name: 'Volkan Babacan',
            playerPathName: 'volkan-babacan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/52261-1583152431.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 3,
            name: 'Ahmet Kıvanç',
            playerPathName: 'ahmet-kivanc',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/340880-1539716503.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 4,
            name: 'RavIl TagIr',
            playerPathName: 'ravil-tagir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/655893-1572443563.jpg?lm=1',
            twitterName: 'raviltagir4'
          },
          {
            playerId: 5,
            name: 'Léo Duarte',
            playerPathName: 'leo-duarte',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/312678-1610387414.jpeg?lm=1',
            twitterName: 'leoduarte_43'
          },
          {
            playerId: 6,
            name: 'Carlos Ponck',
            playerPathName: 'carlos-ponck',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/341516-1548259625.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 7,
            name: 'Alexandru Epureanu',
            playerPathName: 'alexandru-epureanu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/45340-1490177787.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 8,
            name: 'BolI BolIngolI-Mbombo',
            playerPathName: 'boli-bolingoli-mbombo',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/168156-1535660174.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 9,
            name: 'Hasan Ali Kaldırım',
            playerPathName: 'hasan-ali-kaldirim',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/55605-1567076315.JPG?lm=1',
            twitterName: 'HAK3'
          },
          {
            playerId: 10,
            name: 'Cemali Sertel',
            playerPathName: 'cemali-sertel',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/573981-1542327638.png?lm=1',
            twitterName: 'CemaliSertel'
          },
          {
            playerId: 11,
            name: 'Rafael da SIlva',
            playerPathName: 'rafael-da-silva',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/61892-1563889964.jpg?lm=1',
            twitterName: 'orafa2'
          },
          {
            playerId: 12,
            name: 'JúnIor CaIçara',
            playerPathName: 'junior-caicara',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/112062-1613303649.png?lm=1',
            twitterName: 'jrcaicara'
          },
          {
            playerId: 13,
            name: 'Muhammed Sarıkaya',
            playerPathName: 'muhammed-sarikaya',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/572132-1607542299.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'Uğur Uçar',
            playerPathName: 'ugur-ucar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/21370-1583153038.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Youssouf NdayIshImIye',
            playerPathName: 'youssouf-ndayishimiye',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/674612-1582463286.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 16,
            name: 'Mahmut Tekdemir',
            playerPathName: 'mahmut-tekdemir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/54177-1583153546.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 17,
            name: 'Mehmet Topal',
            playerPathName: 'mehmet-topal',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/44402-1583153621.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 18,
            name: 'Berkay Özcan',
            playerPathName: 'berkay-ozcan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/249952-1532078152.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 19,
            name: 'Okechukwu AzubuIke',
            playerPathName: 'okechukwu-azubuike',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/386126-1583153941.jpg?lm=1',
            twitterName: 'aazzuu14'
          },
          {
            playerId: 20,
            name: 'Tolga Ciğerci',
            playerPathName: 'tolga-cigerci',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/94199-1567081436.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'Deniz Türüç',
            playerPathName: 'deniz-turuc',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/216662-1567081152.JPG?lm=1',
            twitterName: 'DenizTuruc10'
          },
          {
            playerId: 22,
            name: 'GIulIano De Paula',
            playerPathName: 'giuliano-de-paula',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/54375-1534761193.jpg?lm=1',
            twitterName: 'giulianovp'
          },
          {
            playerId: 23,
            name: 'DanIjel AleksIc',
            playerPathName: 'danijel-aleksic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/48119-1448893673.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 24,
            name: 'Emir Şenocak',
            playerPathName: 'emir-senocak',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/702424-1613484898.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 25,
            name: 'Nacer ChadlI',
            playerPathName: 'nacer-chadli',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/59631-1469628026.jpg?lm=1',
            twitterName: 'NChadli'
          },
          {
            playerId: 26,
            name: 'JunIor Fernandes',
            playerPathName: 'junior-fernandes',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/89708-1567777021.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 27,
            name: 'Mete Kaan Demir',
            playerPathName: 'mete-kaan-demir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/282615-1588252483.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 28,
            name: 'Edin VIsca',
            playerPathName: 'edin-visca',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/109217-1583154047.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 29,
            name: 'Ömer Ali Şahiner',
            playerPathName: 'omer-ali-sahiner',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/110695-1611592480.jpeg?lm=1',
            twitterName: 'Omralishnr'
          },
          {
            playerId: 30,
            name: 'FredrIk Gulbrandsen',
            playerPathName: 'fredrik-gulbrandsen',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/110708-1535447509.jpg?lm=1',
            twitterName: 'gulbrandsen92'
          },
          {
            playerId: 31,
            name: 'Enzo CrIvellI',
            playerPathName: 'enzo-crivelli',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/291110-1444910191.jpg?lm=1',
            twitterName: ''
          }
        ]
      },
      {
        id: 19,
        title: 'Mke Ankaragücü',
        pathName: 'mke-ankaragucu',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'Ankaragucu',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000153_120x120.png'
          },
          {
            playerId: 1,
            name: 'RIcardo FrIedrIch',
            playerPathName: 'ricardo-friedrich',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/372201-1600009329.jpeg?lm=1',
            twitterName: 'rfriedrich93'
          },
          {
            playerId: 2,
            name: 'Korcan Çelikay',
            playerPathName: 'korcan-celikay',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/50483-1600009285.jpeg?lm=1',
            twitterName: 'CelikayKorcan'
          },
          {
            playerId: 3,
            name: 'Mert Topuz',
            playerPathName: 'mert-topuz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/635993-1600009203.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 4,
            name: 'Furkan Bekleviç',
            playerPathName: 'furkan-beklevic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/460218-1600009026.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 5,
            name: 'ZvonImIr SarlIja',
            playerPathName: 'zvonimir-sarlija',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/375856-1600009397.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'Erdi Dikmen',
            playerPathName: 'erdi-dikmen',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/251078-1600010025.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 7,
            name: 'MIchal Pazdan',
            playerPathName: 'michal-pazdan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/54512-1600009821.jpeg?lm=1',
            twitterName: 'Pazdekk'
          },
          {
            playerId: 8,
            name: 'Alperen Babacan',
            playerPathName: 'alperen-babacan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/341102-1612612390.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 9,
            name: 'Ante KulusIc',
            playerPathName: 'ante-kulusic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/46056-1600010109.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'Abdullah Çelik',
            playerPathName: 'abdullah-celik',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/321551-1613865178.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'Yusuf Eren Göktaş',
            playerPathName: 'yusuf-eren-goktas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/796047-1612611832.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'Atila Turan',
            playerPathName: 'atila-turan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/111063-1600010285.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 13,
            name: 'TIago PInto',
            playerPathName: 'tiago-pinto',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/63293-1600010181.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'Anıl Dikmen',
            playerPathName: 'anil-dikmen',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/700266-1612612284.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'StelIos KItsIou',
            playerPathName: 'stelios-kitsiou',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/189151-1600010693.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 16,
            name: 'IdrIz Voca',
            playerPathName: 'idriz-voca',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/342098-1570969535.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 17,
            name: 'Atakan Çankaya',
            playerPathName: 'atakan-cankaya',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/315208-1600902151.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 18,
            name: 'Assane DIoussé',
            playerPathName: 'assane-diousse',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/287635-1600902023.png?lm=1',
            twitterName: 'AssaneDiousse'
          },
          {
            playerId: 19,
            name: 'DanIel LukasIk',
            playerPathName: 'daniel-lukasik',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/67655-1600010965.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 20,
            name: 'Ali Kaan Güneren',
            playerPathName: 'ali-kaan-guneren',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/483495-1612612013.jpeg?lm=1',
            twitterName: 'GunerenKaan'
          },
          {
            playerId: 21,
            name: 'İbrahim Akdağ',
            playerPathName: 'ibrahim-akdag',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/182079-1612612169.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'Şahverdi Çetin',
            playerPathName: 'sahverdi-cetin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/342100-1600902274.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 23,
            name: 'Ender Aygören',
            playerPathName: 'ender-aygoren',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/576990-1600008656.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 24,
            name: 'EndrI Çekiçi',
            playerPathName: 'endri-cekici',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/204049-1602888437.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 25,
            name: 'Alper Potuk',
            playerPathName: 'alper-potuk',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/99186-1600901868.png?lm=1',
            twitterName: 'AlperPOTUK'
          },
          {
            playerId: 26,
            name: 'Berke Gürbüz',
            playerPathName: 'berke-gurbuz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/655907-1582126554.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 27,
            name: 'Joseph PaIntsIl',
            playerPathName: 'joseph-paintsil',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/534435-1600011349.jpeg?lm=1',
            twitterName: 'josephpaintsil_'
          },
          {
            playerId: 28,
            name: 'Saba LobjanIdze',
            playerPathName: 'saba-lobjanidze',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/251029-1600011413.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 29,
            name: 'Geraldo Bartolomeu',
            playerPathName: 'geraldo-bartolomeu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/127169-1612611923.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 30,
            name: 'Orkan Çınar',
            playerPathName: 'orkan-cinar',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/233113-1600011541.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 31,
            name: 'TorgeIr Börven',
            playerPathName: 'torgeir-borven',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/129236-1602888293.jpeg?lm=1',
            twitterName: 'TBorven'
          },
          {
            playerId: 32,
            name: 'AlIou BadjI',
            playerPathName: 'aliou-badji',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/479589-1570884620.jpg?lm=1',
            twitterName: 'AliouBadji97'
          },
          {
            playerId: 33,
            name: 'Emre Güral',
            playerPathName: 'emre-gural',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/60004-1612612047.jpeg?lm=1',
            twitterName: 'emregueral'
          },
          {
            playerId: 34,
            name: 'Embiya Ayyıldız',
            playerPathName: 'embiya-ayyildiz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/543197-1612611700.jpeg?lm=1',
            twitterName: 'Embiya___'
          }
        ]
      },
      {
        id: 20,
        title: 'Trabzonspor A.Ş.',
        pathName: 'trabzonspor',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'Trabzonspor',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000154_120x120.png'
          },
          {
            playerId: 1,
            name: 'Uğurcan Çakır',
            playerPathName: 'ugurcan-cakir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/292199-1614175907.png?lm=1',
            twitterName: 'cakirugurcan96'
          },
          {
            playerId: 2,
            name: 'Erce Kardeşler',
            playerPathName: 'erce-kardesler',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/291548-1614453559.png?lm=1',
            twitterName: 'ercekardeslerr'
          },
          {
            playerId: 3,
            name: 'Arda Akbulut',
            playerPathName: 'arda-akbulut',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/347383-1614453489.png?lm=1',
            twitterName: 'ardaakbulut01'
          },
          {
            playerId: 4,
            name: 'VItor Hugo',
            playerPathName: 'Vitor Hugo',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/149752-1602167503.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 5,
            name: 'Edgar Ié',
            playerPathName: 'edgar-ie',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/191987-1614452432.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'Hüseyin Türkmen',
            playerPathName: 'huseyin-turkmen',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/395862-1614453431.png?lm=1',
            twitterName: 'turkmenhuseyin4'
          },
          {
            playerId: 7,
            name: 'MajId HosseInI',
            playerPathName: 'majid-hosseini',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/294767-1602167405.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 8,
            name: 'Atakan Gündüz',
            playerPathName: 'atakan-gunduz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/477927-1614453228.png?lm=1',
            twitterName: '_atakangunduz4'
          },
          {
            playerId: 9,
            name: 'Ahmetcan Kaplan',
            playerPathName: 'ahmetcan-kaplan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/662131-1599757359.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'Marlon XavIer',
            playerPathName: 'marlon-xavier',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/406675-1602167343.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'Faruk Can Genç',
            playerPathName: 'faruk-can-genc',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/588171-1613564172.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 12,
            name: 'Serkan Asan',
            playerPathName: 'serkan-asan',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/491966-1614452363.png?lm=1',
            twitterName: 'serkanasan99'
          },
          {
            playerId: 13,
            name: 'Kamil Ahmet Çörekçi',
            playerPathName: 'kamil-ahmet-corekci',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/110686-1614453171.png?lm=1',
            twitterName: 'k_a_c92'
          },
          {
            playerId: 14,
            name: 'Berat Özdemir',
            playerPathName: 'berat-ozdemir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/483063-1610723089.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Hakan Yeşil',
            playerPathName: 'hakan-yesil',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/433325-1613564226.png?lm=1',
            twitterName: 'hakny14'
          },
          {
            playerId: 16,
            name: 'Abdulkadir Parmak',
            playerPathName: 'abdulkadir-parmak',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/276337-1614452935.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 17,
            name: 'LewIs Baker',
            playerPathName: 'lewis-baker',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/198589-1602167259.png?lm=1',
            twitterName: 'lew_baker'
          },
          {
            playerId: 18,
            name: 'FlávIo Da SIlva',
            playerPathName: 'flavio-da-silva',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/373191-1614452627.png?lm=1',
            twitterName: 'medeiros0524'
          },
          {
            playerId: 19,
            name: 'Anders Trondsen',
            playerPathName: 'anders-trondsen',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/228042-1602166871.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 20,
            name: 'Abdülkadir Ömür',
            playerPathName: 'abdulkadir-omur',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/271495-1611852410.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'AnastasIos Bakasetas',
            playerPathName: 'anastasios-bakasetas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/162571-1612364132.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 22,
            name: 'Yunus Mallı',
            playerPathName: 'yunus-malli',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/85352-1612364183.png?lm=1',
            twitterName: 'yunusmalli10'
          },
          {
            playerId: 23,
            name: 'Süleyman Cebeci',
            playerPathName: 'süleyman-cebeci',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/662145-1613564313.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 24,
            name: 'Anthony Nwakaeme',
            playerPathName: 'anthony-nwakaeme',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/175988-1614176107.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 25,
            name: 'Safa Kınalı',
            playerPathName: 'safa-kinali',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/592360-1614453099.png?lm=1',
            twitterName: 'safakinali10'
          },
          {
            playerId: 26,
            name: 'Caleb Ekuban',
            playerPathName: 'caleb-ekuban',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/199953-1614452232.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 27,
            name: 'Yusuf Sarı',
            playerPathName: 'yusuf-sari',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/517376-1614452856.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 28,
            name: 'DjanIny Semedo',
            playerPathName: 'djaniny-semedo',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/197170-1602166992.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 29,
            name: 'BenIk Afobe',
            playerPathName: 'benik-afobe',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/110858-1614452566.png?lm=1',
            twitterName: ''
          }
        ]
      },
      {
        id: 21,
        title: 'Yukatel Denizlispor',
        pathName: 'yukatel-denizlispor',
        players: [
          {
            playerId: 0,
            name: 'Kulüp Paylaşımları',
            playerPathName: 'kulup-paylasimlari',
            isSocial: true,
            twitterName: 'Denizlispor',
            profilePhoto:
              'https://fys.tff.org/TFFUploadFolder/KulupLogolari/000080_120x120.png'
          },
          {
            playerId: 1,
            name: 'Cenk Gönen',
            playerPathName: 'cenk-gonen',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/45214-1579960871.png?lm=1',
            twitterName: 'GonenCenk'
          },
          {
            playerId: 2,
            name: 'Hüseyin Altıntaş',
            playerPathName: 'huseyin-altintas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/293956-1572964217.JPG?lm=1',
            twitterName: 'hhuusso'
          },
          {
            playerId: 3,
            name: 'Abdulkadir Sünger',
            playerPathName: 'abdulkadir-sunger',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/796259-1601313412.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 4,
            name: 'Fabiano Leismann',
            playerPathName: 'fabiano-leismann',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/271335-1605700461.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 5,
            name: 'Oğuz Yılmaz',
            playerPathName: 'oguz-yilmaz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/199958-1572964570.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 6,
            name: 'Mustafa Yumlu',
            playerPathName: 'mustafa-yumlu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/76176-1572964531.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 7,
            name: 'Muhammet Özkal',
            playerPathName: 'muhammet-ozkal',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/339432-1606576371.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 8,
            name: 'Görkem Can',
            playerPathName: 'gorkem-can',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/361514-1526502664.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 9,
            name: 'Ayman Ben Mohamed',
            playerPathName: 'ayman-ben-mohamed',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/249446-1615163202.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 10,
            name: 'Sakıb Aytaç',
            playerPathName: 'sakib-aytac',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/114491-1606578041.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 11,
            name: 'Özgür Çek',
            playerPathName: 'ozgur-cek',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/52262-1568130779.jpg?lm=1',
            twitterName: 'ozgurcek60'
          },
          {
            playerId: 12,
            name: 'Özer Özdemir',
            playerPathName: 'ozer-ozdemir',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/289898-1603905922.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 13,
            name: 'Kubilay Aktaş',
            playerPathName: 'kubilay-aktas',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/274466-1601146574.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 14,
            name: 'Radoslaw Murawski',
            playerPathName: 'radoslaw-murawski',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/220969-1572967021.JPG?lm=1',
            twitterName: ''
          },
          {
            playerId: 15,
            name: 'Mix Diskerud',
            playerPathName: 'mix-diskerud',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/103559-1611153583.jpeg?lm=1',
            twitterName: 'MixDiskerud'
          },
          {
            playerId: 16,
            name: 'Marvin Bakalorz',
            playerPathName: 'marvin-bakalorz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/53602-1532071787.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 17,
            name: 'Eren Kıryolcu',
            playerPathName: 'eren-kiryolcu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/811332-1603168399.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 18,
            name: 'Recep Niyaz',
            playerPathName: 'recep-niyaz',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/105653-1572967059.JPG?lm=1',
            twitterName: 'receppniyazz17'
          },
          {
            playerId: 19,
            name: 'Ángelo Sagal',
            playerPathName: 'angelo-sagal',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/190941-1601313067.png?lm=1',
            twitterName: ''
          },
          {
            playerId: 20,
            name: 'Hasan Ayaroğlu',
            playerPathName: 'hasan-ayaroglu',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/222608-1600339888.jpeg?lm=1',
            twitterName: ''
          },
          {
            playerId: 21,
            name: 'Hadi Sacko',
            playerPathName: 'hadi-sacko',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/198728-1616286994.jpeg?lm=1',
            twitterName: 'miimosaa'
          },
          {
            playerId: 22,
            name: 'Ahmed Yasin',
            playerPathName: 'ahmed-yasin',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/114791-1502880754.jpg?lm=1',
            twitterName: 'AY9Official'
          },
          {
            playerId: 23,
            name: 'Mathieu Dossevi',
            playerPathName: 'mathieu-dossevi',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/77828-1595966700.jpg?lm=1',
            twitterName: 'MDossevi'
          },
          {
            playerId: 24,
            name: 'Muris Mesanovic',
            playerPathName: 'muris-mesanovic',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/70176-1493906471.jpg?lm=1',
            twitterName: ''
          },
          {
            playerId: 25,
            name: 'Hugo Rodallega',
            playerPathName: 'hugo-rodallega',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/37934-1572967382.JPG?lm=1',
            twitterName: 'hugol1120'
          },
          {
            playerId: 26,
            name: 'Ali Yavuz Kol',
            playerPathName: 'ali-yavuz-kol',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/477938-1607185946.jpeg?lm=1',
            twitterName: 'aliyavuzKOL9'
          },
          {
            playerId: 27,
            name: 'Veton Tusha',
            playerPathName: 'veton-tusha',
            isSocial: true,
            profilePhoto:
              'https://img.a.transfermarkt.technology/portrait/header/636752-1616286935.jpeg?lm=1',
            twitterName: ''
          }
        ]
      }
    ],
    teamId: null,
    twitterName: null,
    instagramName: null
  },

  getters: {},

  mutations: {
    setId(state, id) {
      state.teamId = id
    },
    setTwitterName(state, name) {
      state.twitterName = name
    },
    setInstagramName(state, name) {
      state.instagramName = name
    }
  },

  actions: {
    updateId({ commit }, id) {
      commit('setId', id)
    },
    async updateTwitterName({ commit }, name) {
      await commit('setTwitterName', name)
    },
    async updateInstagramName({ commit }, name) {
      await commit('setInstagramName', name)
    }

    // async updateTwitterName({ state, commit }, name) {
    //   await axios.get('http://localhost:8081/twittername/' + state.twitterName)
    //   await commit('setTwitterName', name)
    // }
  },

  modules: {}
})
