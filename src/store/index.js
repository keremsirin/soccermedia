import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teams: [
      {
        id: 1,
        title: 'Atakaş Hatayspor',
        pathName: 'atakas-hatayspor',
        players: [
          {
            playerId: 1,
            name: 'MUNIR MOHAMEDI',
            playerPathName: 'munir-mohamedi',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Akın Alkan',
            playerPathName: 'akin-alkan',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Ekrem Kılıçarslan',
            playerPathName: 'ekrem-kilicarslan',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Yavuz Buğra Boyar',
            playerPathName: 'yavuz-bugra-boyar',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Pablo Santos',
            playerPathName: 'pablo-santos',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Jean-Claude BIllong',
            playerPathName: 'jean-claude-billong',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Yusuf Abdioğlu',
            playerPathName: 'yusuf-abdioglu',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Soner Örnek',
            playerPathName: 'soner-örnek',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Youssouf Koné',
            playerPathName: 'youssouf-kone',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Alexandros KatranIs',
            playerPathName: 'alexandros-katranis',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Mesut Çaytemel',
            playerPathName: 'mesut-caytemel',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'StrahIl Popov',
            playerPathName: 'strahil-popov',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Burak Çamoğlu',
            playerPathName: 'burak-camoglu',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Isaac Sackey',
            playerPathName: 'isaac-sackey',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Abdurrahman Canlı',
            playerPathName: 'abdurrahman-canli',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Adama Traoré',
            playerPathName: 'adama-traore',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Rayane AabId',
            playerPathName: 'rayane-aabid',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Muhammed Mert',
            playerPathName: 'muhammed-mert',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Rúben RIbeIro',
            playerPathName: 'ruben-ribeiro',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Joseph AkomadI',
            playerPathName: 'joseph-akomadi',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Selim Ilgaz',
            playerPathName: 'selim-ilgaz',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'David AkIntola',
            playerPathName: 'david-akintola',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Aaron Boupendza',
            playerPathName: 'aaron-boupendza',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Mame DIouf',
            playerPathName: 'mame-diouf',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Mohammed Kamara',
            playerPathName: 'mohammed-kamara',
            isSocial: true
          }
        ]
      },
      {
        id: 2,
        title: 'Aytemiz Alanyaspor',
        pathName: 'aytemiz-alanyaspor',
        players: [
          {
            playerId: 1,
            name: 'Marafona',
            playerPathName: 'marafona',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Serkan Kırıntılı',
            playerPathName: 'serkan-kirintili',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Çağrı Güney',
            playerPathName: 'cagri-guney',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Steven Caulker',
            playerPathName: 'steven-caulker',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Fatih Aksoy',
            playerPathName: 'fatih-aksoy',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'GeorgIos Tzavellas',
            playerPathName: 'georgios-tzavellas',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Alpay Çelebi',
            playerPathName: 'alpay-celebi',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'FrançoIs Moubandje',
            playerPathName: 'francois-moubandje',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Ahmet Gülay',
            playerPathName: 'ahmet-gulay',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Juanfran',
            playerPathName: 'juanfran',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Tayfur Bingöl',
            playerPathName: 'tayfur-bingol',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'ManolIs SIopIs',
            playerPathName: 'manolis-siopis',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Ceyhun Gülselam',
            playerPathName: 'ceyhun-gulselam',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Salih Uçan',
            playerPathName: 'salih-ucan',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Berkan Kutlu',
            playerPathName: 'berkan-kutlu',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Hasan Hüseyin Acar',
            playerPathName: 'hasan-huseyin-acar',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Umut Güneş',
            playerPathName: 'umut-gunes',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Efkan Bekiroğlu',
            playerPathName: 'efkan-bekiroglu',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'DavIdson PereIra',
            playerPathName: 'davidson-pereira',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'El MamI Tetah',
            playerPathName: 'el-mami-tetah',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Efecan Karaca',
            playerPathName: 'efecan-karaca',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'DamIan KadzIor',
            playerPathName: 'damian-kadzior',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Khouma Babacar',
            playerPathName: 'khouma-babacar',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Adam BareIro',
            playerPathName: 'adam-bareiro',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Mustafa Pektemek',
            playerPathName: 'mustafa-pektemek',
            isSocial: true
          }
        ]
      },
      {
        id: 3,
        title: 'Beşiktaş A.Ş.',
        pathName: 'besiktas',
        players: [
          {
            playerId: 1,
            name: 'Ersin Destanoğlu',
            playerPathName: 'ersin-destanoglu',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Utku Yuvakuran',
            playerPathName: 'utku-yuvakuran',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Emre Bilgin',
            playerPathName: 'emre-bilgin',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'FrancIsco Montero',
            playerPathName: 'francisco-montero',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Domagoj VIda',
            playerPathName: 'domagoj-vida',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'WelInton Souza',
            playerPathName: 'welinton-souza',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Serdar Saatçi',
            playerPathName: 'serdar-saatci',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Rıdvan Yılmaz',
            playerPathName: 'ridvan-yilmaz',
            isSocial: true
          },
          {
            playerId: 9,
            name: "FabrIce N'Sakala",
            playerPathName: 'fabrice-nsakala',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Valentin RosIer',
            playerPathName: 'valentin-rosier',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Bilal Ceylan',
            playerPathName: 'bilal-ceylan',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Josef De Souza',
            playerPathName: 'josef-de-souza',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Necip Uysal',
            playerPathName: 'necip-uysal',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Dorukhan Toköz',
            playerPathName: 'dorukhan-tokoz',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Oğuzhan Özyakup',
            playerPathName: 'oguzhan-ozyakup',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'AtIba HutchInson',
            playerPathName: 'atiba-hutchinson',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Adem LjajIc',
            playerPathName: 'adem-ljajic',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Bernard Mensah',
            playerPathName: 'bernard-mensah',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Cyle LarIn',
            playerPathName: 'cyle-larin',
            isSocial: true
          },
          {
            playerId: 20,
            name: "Georges-KevIn N'Koudou",
            playerPathName: 'georges-kevin-nkoudou',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'RachId Ghezzal',
            playerPathName: 'rachid-ghezzal',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'AjdIn HasIc',
            playerPathName: 'ajdin-hasic',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Gökhan Töre',
            playerPathName: 'gokhan-tore',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'VIncent Aboubakar',
            playerPathName: 'vincent-aboubakar',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Cenk Tosun',
            playerPathName: 'cenk-tosun',
            isSocial: true
          }
        ]
      },
      {
        id: 4,
        title: 'Büyükşehir Belediye Erzurumspor',
        pathName: 'buyuksehir-belediye-erzurumspor',
        players: [
          {
            playerId: 1,
            name: 'Jakub SzumskI',
            playerPathName: 'jakub-szumski',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Göktuğ Bakırbaş',
            playerPathName: 'goktug-bakirbas',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Kayacan Erdoğan',
            playerPathName: 'kayacan-erdogan',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Batuhan Ünsal',
            playerPathName: 'batuhan-unsal',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Adolphe TeIkeu',
            playerPathName: 'adolphe-teikeu',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Hasan Hatipoğlu',
            playerPathName: 'hasan-hatipoglu',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Gökhan Kardeş',
            playerPathName: 'gokhan-kardes',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Léo Schwechlen',
            playerPathName: 'leo-schwechlen',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Zakarya BergdIch',
            playerPathName: 'zakarya-bergdich',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Bogdan Butko',
            playerPathName: 'bogdan-butko',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Murat Uçar',
            playerPathName: 'murat-ucar',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Petrus Boumal',
            playerPathName: 'petrus-boumal',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Johanna Omolo',
            playerPathName: 'johanna-omolo',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Buğra Çağıran',
            playerPathName: 'bugra-cagiran',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Osman Çelik',
            playerPathName: 'osman-celik',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Cenk Ahmet Alkılıç',
            playerPathName: 'cenk-ahmet-alkilic',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'GabrIel Obertan',
            playerPathName: 'Gabriel Obertan',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Özgür Sert',
            playerPathName: 'ozgur-sert',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Arvydas NovIkovas',
            playerPathName: 'arvydas-novikovas',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Elba RashanI',
            playerPathName: 'elba-rashani',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'BrahIm DarrI',
            playerPathName: 'brahim-darri',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Emrah Başsan',
            playerPathName: 'emrah-bassan',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'RIcardo Gomes',
            playerPathName: 'ricardo-gomes',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Oltan Karakullukçu',
            playerPathName: 'oltan-karakullukcu',
            isSocial: true
          }
        ]
      },
      {
        id: 5,
        title: 'Çaykur Rizespor A.Ş.',
        pathName: 'caykur-rizespor',
        players: [
          {
            playerId: 1,
            name: 'Gökhan Akkan',
            playerPathName: 'gokhan-akkan',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Tarık Çetin',
            playerPathName: 'tarik-cetin',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Zafer Görgen',
            playerPathName: 'zafer-gorgen',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'YassIne MerIah',
            playerPathName: 'yassine-meriah',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Emir Dilaver',
            playerPathName: 'emir-dilaver',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Montassar TalbI',
            playerPathName: 'montassar-talbi',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Selim Ay',
            playerPathName: 'selim-ay',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'DarIo Melnjak',
            playerPathName: 'dario-melnjak',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'İsmail Köybaşı',
            playerPathName: 'ismail-koybasi',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Alberk Koç',
            playerPathName: 'alberk-koc',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Mykola Morozyuk',
            playerPathName: 'mykola-morozyuk',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Murat Sağlam',
            playerPathName: 'murat-saglam',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'FabrícIo BaIano',
            playerPathName: 'fabrício-baiano',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Yasin Pehlivan',
            playerPathName: 'yasin-pehlivan',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Godfred Donsah',
            playerPathName: 'godfred-donsah',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'ErIk Sabo',
            playerPathName: 'erik-sabo',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Damjan DjokovIc',
            playerPathName: 'damjan-djokovic',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Mithat Pala',
            playerPathName: 'mithat-pala',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Abdullah Durak',
            playerPathName: 'abdullah-durak',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Onur Bulut',
            playerPathName: 'onur-bulut',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Fernando BoldrIn',
            playerPathName: 'fernando-boldrin',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'BraIan SamudIo',
            playerPathName: 'braian-samudio',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Fernando Andrade',
            playerPathName: 'fernando-andrade',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'AmInu Umar',
            playerPathName: 'aminu-umar',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Konrad MIchalak',
            playerPathName: 'konrad-michalak',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'Tunay Torun',
            playerPathName: 'tunay-torun',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Emir Dede',
            playerPathName: 'emir-dede',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'Loïc Rémy',
            playerPathName: 'loic-remy',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'Alexander Söderlund',
            playerPathName: 'alexander-soderlund',
            isSocial: true
          },
          {
            playerId: 30,
            name: 'MIlan Skoda',
            playerPathName: 'milan-skoda',
            isSocial: true
          }
        ]
      },
      {
        id: 6,
        title: 'Demir Grup Sivasspor',
        pathName: 'demir-grup-sivasspor',
        players: [
          {
            playerId: 1,
            name: 'Mamadou Samassa',
            playerPathName: 'mamadou-samassa',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Ali Şaşal Vural',
            playerPathName: 'ali-sasal-vural',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Muammer Yıldırım',
            playerPathName: 'muammer-yildirim',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Aaron AppIndangoyé',
            playerPathName: 'aaron-appindangoye',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Samba Camara',
            playerPathName: 'samba-camara',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Caner Osmanpaşa',
            playerPathName: 'caner-osmanpasa',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Uğur Çiftçi',
            playerPathName: 'ugur-ciftci',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Ziya Erdal',
            playerPathName: 'ziya-erdal',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Ahmet Oğuz',
            playerPathName: 'ahmet-oguz',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Alaaddin Okumuş',
            playerPathName: 'alaaddin-okumus',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'RobIn Yalçın',
            playerPathName: 'robin-yalcin',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'ClaudemIr De Souza',
            playerPathName: 'claudemir-de-souza',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Isaac CofIe',
            playerPathName: 'isaac-cofie',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'SergIy Rybalka',
            playerPathName: 'sergiy-rybalka',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Fayçal Fajr',
            playerPathName: 'faycal-fajr',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Hakan Arslan',
            playerPathName: 'hakan-arslan',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Kerem Atakan Kesgin',
            playerPathName: 'kerem-atakan-kesgin',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Max Gradel',
            playerPathName: 'max-gradel',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'CasImIr NInga',
            playerPathName: 'casimir-ninga',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Erdoğan Yeşilyurt',
            playerPathName: 'erdogan-yesilyurt',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Tyler Boyd',
            playerPathName: 'tyler-boyd',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Olarenwaju Kayode',
            playerPathName: 'olarenwaju-kayode',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Jorge FélIx',
            playerPathName: 'jorge-felix',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Mustapha Yatabaré',
            playerPathName: 'mustapha-yatabare',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Arouna Koné',
            playerPathName: 'arouna-kone',
            isSocial: true
          }
        ]
      },
      {
        id: 7,
        title: 'Fatih Karagümrük A.Ş.',
        pathName: 'fatih-karagumruk',
        players: [
          {
            playerId: 1,
            name: 'Aykut Özer',
            playerPathName: 'aykut-ozer',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'EmIlIano VIvIano',
            playerPathName: 'emiliano-viviano',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Yavuz Aygün',
            playerPathName: 'yavuz-aygun',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Yavuz Ulaş Genç',
            playerPathName: 'yavuz-ulas-genc',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Muzaffer Kablan',
            playerPathName: 'muzaffer-kablan',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Enzo Roco',
            playerPathName: 'enzo-roco',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Gastón CampI',
            playerPathName: 'gaston-campi',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Fatih Kurucuk',
            playerPathName: 'fatih-kurucuk',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'ErvIn ZukanovIc',
            playerPathName: 'ervin-zukanovic',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Jure Balkovec',
            playerPathName: 'jure-balkovec',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Alparslan Erdem',
            playerPathName: 'alparslan-erdem',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Koray Altınay',
            playerPathName: 'koray-altinay',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Vegar Eggen Hedenstad',
            playerPathName: 'vegar-eggen-hedenstad',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Lucas BIglIa',
            playerPathName: 'lucas-biglia',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Murat Sarıgül',
            playerPathName: 'murat-sarigul',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Bora Adam',
            playerPathName: 'bora-adam',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Andrea BertolaccI',
            playerPathName: 'andrea-bertolacci',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Efe Tatlı',
            playerPathName: 'efe-tatli',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Lucas Castro',
            playerPathName: 'lucas-castro',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Aksel Aktaş',
            playerPathName: 'aksel-aktas',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'FabIo BorInI',
            playerPathName: 'fabio-borini',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'JImmy Durmaz',
            playerPathName: 'jimmy-durmaz',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Serhat Ahmetoğlu',
            playerPathName: 'serhat-ahmetoglu',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Alassane Ndao',
            playerPathName: 'alassane-ndao',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'YannIs SalIbur',
            playerPathName: 'yannis-salibur',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'JeremaIn Lens',
            playerPathName: 'jeremain-lens',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Vato Arveladze',
            playerPathName: 'vato-arveladze',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'Kemal AdemI',
            playerPathName: 'kemal-ademi',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'Artur SobIech',
            playerPathName: 'artur-sobiech',
            isSocial: true
          },
          {
            playerId: 30,
            name: 'Mevlüt Erdinç',
            playerPathName: 'mevlut-erdinc',
            isSocial: true
          },
          {
            playerId: 31,
            name: 'Egemen Pehlivan',
            playerPathName: 'egemen-pehlivan',
            isSocial: true
          }
        ]
      },
      {
        id: 8,
        title: 'Fenerbahçe A.Ş.',
        pathName: 'fenerbahce',
        players: [
          {
            playerId: 1,
            name: 'Altay Bayındır',
            playerPathName: 'altay-bayindir',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Harun Tekin',
            playerPathName: 'harun-tekin',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Oytun Özdoğan',
            playerPathName: 'oytun-ozdogan',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Marcel TIsserand',
            playerPathName: 'marcel-tisserand',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'AttIla SzalaI',
            playerPathName: 'attila-szalai',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Serdar Aziz',
            playerPathName: 'serdar-aziz',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'MaurIcIo Lemos',
            playerPathName: 'mauricio-lemos',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Sadık Çiftpınar',
            playerPathName: 'sadik-ciftpinar',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'FIlIp Novak',
            playerPathName: 'filip-novak',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Caner Erkin',
            playerPathName: 'caner-erkin',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Nazım Sangaré',
            playerPathName: 'nazim-sangare',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Gökhan Gönül',
            playerPathName: 'gokhan-gonul',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'LuIz Gustavo',
            playerPathName: 'luiz-gustavo',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'İrfan Can Kahveci',
            playerPathName: 'irfan-can-kahveci',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Ozan Tufan',
            playerPathName: 'ozan-tufan',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'José Sosa',
            playerPathName: 'jose-sosa',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'DImItrIos Pelkas',
            playerPathName: 'dimitrios-pelkas',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Mesut Özil',
            playerPathName: 'mesut-ozil',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Mert Hakan Yandaş',
            playerPathName: 'mert-hakan-yandas',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Ömer Beyaz',
            playerPathName: 'omer-beyaz',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Mame ThIam',
            playerPathName: 'mame-thiam',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'DIego PerottI',
            playerPathName: 'diego-perotti',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Ferdi Kadıoğlu',
            playerPathName: 'ferdi-kadioglu',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'BrIght OsayI-Samuel',
            playerPathName: 'bright-osayi-samuel',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Sinan Gümüş',
            playerPathName: '',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'Mbwana Samatta',
            playerPathName: 'mbwana-zamatta',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Enner ValencIa',
            playerPathName: 'enner-valencia',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'PapIss Demba CIssé',
            playerPathName: 'papiss-demba-cisse',
            isSocial: true
          }
        ]
      },
      {
        id: 9,
        title: 'Fraport-Tav Antalyaspor',
        pathName: 'fraport-tav-antalyaspor',
        players: [
          {
            playerId: 1,
            name: 'Ruud BoffIn',
            playerPathName: 'ruud-boffin',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Ferhat Kaplan',
            playerPathName: 'ferhat-kaplan',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Doğukan Özkan',
            playerPathName: 'dogukan-ozkan',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Enes Sancar Şahin',
            playerPathName: 'enes-sancar-sahin',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Naldo PereIra',
            playerPathName: 'naldo-pereira',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Veysel Sarı',
            playerPathName: 'veysel-sari',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Ersan Gülüm',
            playerPathName: 'ersan-gulum',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Bahadır Öztürk',
            playerPathName: 'bahadir-ozturk',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Fedor Kudryashov',
            playerPathName: 'fedor-kudryashov',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Eren Albayrak',
            playerPathName: 'eren-albayrak',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Ali Eren İyican',
            playerPathName: 'ali-eren-iyican',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Bünyamin Balcı',
            playerPathName: 'bunyamin-balci',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Mert Yılmaz',
            playerPathName: 'mert-yilmaz',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Ufuk Akyol',
            playerPathName: 'ufuk-akyol',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Nuri Şahin',
            playerPathName: 'nuri-sahin',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Mevlüt Han Ekelik',
            playerPathName: 'mevlut-han-ekelik',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Hakan Özmert',
            playerPathName: 'hakan-ozmert',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Doğukan Sinik',
            playerPathName: 'dogukan-sinik',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Fredy Alfredo',
            playerPathName: 'fredy-alfredo',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'AmIlton Da SIlva',
            playerPathName: 'amilton-da-silva',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Jean-Armel Drolé',
            playerPathName: 'jean-armel-drole',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Serdar Poyraz',
            playerPathName: 'serdar-poyraz',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Gökdeniz Bayrakdar',
            playerPathName: 'gokdeniz-bayrakdar',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Serdar Gürler',
            playerPathName: 'serdar-gurler',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'SIdney Sam',
            playerPathName: 'sidney-sam',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'Omar ImerI Sam',
            playerPathName: 'Omar Imeri',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Lukas PodolskI',
            playerPathName: 'lukas-podolski',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'Dever OrgIll',
            playerPathName: 'dever-orgill',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'Fehmi Koç',
            playerPathName: 'fehmi-koc',
            isSocial: true
          }
        ]
      },
      {
        id: 10,
        title: 'Galatasaray A.Ş.',
        pathName: 'galatasaray',
        players: [
          {
            playerId: 1,
            name: 'Fernando Muslera',
            playerPathName: 'fernando-muslera',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Okan Kocuk',
            playerPathName: 'okan-kocuk',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Fatih Öztürk',
            playerPathName: 'fatih-ozturk',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Marcão TeIxeIra',
            playerPathName: 'marcao-teixeira',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'ChrIstIan LuyIndama',
            playerPathName: 'christian-luyindama',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Ryan Donk',
            playerPathName: 'ryan-donk',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'ValentIne Ozornwafor',
            playerPathName: 'valentine-ozornwafor',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Marcelo SaracchI',
            playerPathName: 'marcelo-saracchi',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Ömer Bayram',
            playerPathName: 'omer-bayram',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Emre Taşdemir',
            playerPathName: 'emre-tasdemir',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'DeAndre YedlIn',
            playerPathName: 'deandre-yedlin',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'MartIn LInnes',
            playerPathName: 'martin-linnes',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Şener Özbayraklı',
            playerPathName: 'sener-ozbayrakli',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Taylan Antalyalı',
            playerPathName: 'taylan-antalyali',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Gedson Fernandes',
            playerPathName: 'gedson-fernandes',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Oghenekaro Etebo',
            playerPathName: 'oghenekaro-etebo',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Emre Akbaba',
            playerPathName: 'emre-akbaba',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Henry Onyekuru',
            playerPathName: 'henry-onyekuru',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Ryan Babel',
            playerPathName: 'ryan-babel',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Kerem Aktürkoğlu',
            playerPathName: 'kerem-akturkoglu',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Arda Turan',
            playerPathName: 'arda-turan',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Emre Kılınç',
            playerPathName: 'emre-kilinc',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'SofIane FeghoulI',
            playerPathName: 'sofiane-feghouli',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Oğulcan Çaglayan',
            playerPathName: 'ogulcan-caglayan',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Mostafa Mohamed',
            playerPathName: 'mostafa-mohamed',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'Radamel Falcao',
            playerPathName: 'radamel-falcao',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Halil Dervişoğlu',
            playerPathName: 'halil-dervisoglu',
            isSocial: true
          }
        ]
      },
      {
        id: 11,
        title: 'Gaziantep Futbol Kulübü A.Ş.',
        pathName: 'gaziantep-futbol-kulubu',
        players: [
          {
            playerId: 1,
            name: 'Günay Güvenç',
            playerPathName: 'gunay-guvenc',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Çağlar Akbaba',
            playerPathName: 'caglar-akbaba',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Mustafa Burak Bozan',
            playerPathName: 'mustafa-burak-bozan',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Papy DjIlobodjI',
            playerPathName: 'papy-djilobodji',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'AlIn Tosca',
            playerPathName: 'alin-tosca',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'RoderIck MIranda',
            playerPathName: 'roderick-miranda',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Ertuğrul Ersoy',
            playerPathName: 'ertugrul-ersoy',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Jean-Armel Kana-Bıyık',
            playerPathName: 'jean-armel-kana-biyik',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Ulaş Zengin',
            playerPathName: 'ulas-zengin',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Güray Vural',
            playerPathName: 'guray-vural',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'JúnIor MoraIs',
            playerPathName: 'junior-morais',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Oğuz Ceylan',
            playerPathName: 'oguz-ceylan',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Pawel OlkowskI',
            playerPathName: 'pawel-olkowski',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Abdul-AzIz Tetteh',
            playerPathName: 'abdul-aziz-tetteh',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Jefferson NogueIra JúnIor',
            playerPathName: 'jefferson-nogueira-junior',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Osama RashId',
            playerPathName: 'osama-rashid',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Amedej VetrIh',
            playerPathName: 'amedej-vetrih',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'ZvonImIr Kozulj',
            playerPathName: 'zvonimir-kozulj',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'André Sousa',
            playerPathName: 'andre-sousa',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Alexandru MaxIm',
            playerPathName: 'alexandru-maxim',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Furkan Soyalp',
            playerPathName: 'furkan-soyalp',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Blal Başacıkoğlu',
            playerPathName: 'bilal-basacikoglu',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Mirza Cihan',
            playerPathName: 'mirza-cihan',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'KevIn MIrallas',
            playerPathName: 'kevin-mirallas',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Cenk Şahin',
            playerPathName: 'cenk-sahin',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'Muhammet Demir',
            playerPathName: 'muhammet-demir',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'André De Souza',
            playerPathName: 'andre-de-souza',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'Nouha DIcko',
            playerPathName: 'nouha-dicko',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'Kenan Özer',
            playerPathName: 'kenan-ozer',
            isSocial: true
          }
        ]
      },
      {
        id: 12,
        title: 'Gençlerbirliği',
        pathName: 'genclerbirligi',
        players: [
          {
            playerId: 1,
            name: 'KrIstoffer Nordfeldt',
            playerPathName: 'kristoffer-nordfeldt',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Übeyd Adıyaman',
            playerPathName: 'ubeyd-adiyaman',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Yasin Davuş',
            playerPathName: 'yasin-davus',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Atalay Gökçe',
            playerPathName: 'atalay-gökce',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Arda Kızıldağ',
            playerPathName: 'arda-kizildag',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Zargo Touré',
            playerPathName: 'zargo-toure',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'DIego Ângelo',
            playerPathName: 'diego-angelo',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Metehan Mert',
            playerPathName: 'metehan-mert',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Abdullah Şahindere',
            playerPathName: 'abdullah-sahindere',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Mustafa Akbaş',
            playerPathName: 'mustafa-akbas',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'PIerre-Yves Polomat',
            playerPathName: 'pierre-yves-polomat',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'İbrahim Pehlivan',
            playerPathName: 'ibrahim-pehlivan',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'MattIas Johansson',
            playerPathName: 'mattias-johansson',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Ömürcan Artan',
            playerPathName: 'omurcan-artan',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'PIrIs da Motta',
            playerPathName: 'piris-da-motta',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Soner Dikmen',
            playerPathName: 'soner-dikmen',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Mustafa Seyhan',
            playerPathName: 'mustafa-seyhan',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'DomInIk Furman',
            playerPathName: 'dominik-furman',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Murat Yıldırım',
            playerPathName: 'murat-yildirim',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Rahmetullah Berişbek',
            playerPathName: 'rahmetullah-berisbek',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Lucas MugnI',
            playerPathName: 'lucas-mugni',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Srdjan SpIrIdonovIc',
            playerPathName: 'srdjan-spiridonovic',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Floyd AyIté',
            playerPathName: 'floyd-ayite',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'DanIel CandeIas',
            playerPathName: 'daniel-candeias',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Sefa Yılmaz',
            playerPathName: 'sefa-yilmaz',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'GIovannI SIo',
            playerPathName: 'giovanni-sio',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Gökhan Altıparmak',
            playerPathName: 'gokhan-altiparmak',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'Bogdan Stancu',
            playerPathName: 'bogdan-stancu',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'Sandro LIma',
            playerPathName: 'sandro-lima',
            isSocial: true
          },
          {
            playerId: 30,
            name: 'İlker Karakaş',
            playerPathName: 'ilker-karakas',
            isSocial: true
          }
        ]
      },
      {
        id: 13,
        title: 'Göztepe A.Ş.',
        pathName: 'goztepe',
        players: [
          {
            playerId: 1,
            name: 'İrfan Can Eğribayat',
            playerPathName: 'irfan-can-egribayat',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Balázs MegyerI',
            playerPathName: 'balázs-megyeri',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Arda Özçimen',
            playerPathName: 'arda-ozcimen',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Alpaslan Öztürk',
            playerPathName: 'alpaslan-ozturk',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Marko MIhojevIc',
            playerPathName: 'marko-mihojevic',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Atınç Nukan',
            playerPathName: 'atinc-nukan',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Dzenan BurekovIc',
            playerPathName: 'dzenan-burekovic',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Berkan Emir',
            playerPathName: 'berkan-emir',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Murat Paluli',
            playerPathName: 'murat-paluli',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Kerim Alıcı',
            playerPathName: 'kerim-alici',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'LamIne Gassama',
            playerPathName: 'lamine-gassama',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Anderson EsItI',
            playerPathName: 'anderson-esiti',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Kubilay Sönmez',
            playerPathName: 'kubilay-sonmez',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Tolga Topaloğlu',
            playerPathName: 'tolga-topaloglu',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Peter Zulj',
            playerPathName: 'peter-zulj',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Soner Aydoğdu',
            playerPathName: 'soner-aydogdu',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'ObInna Nwobodo',
            playerPathName: 'obinna-nwobodo',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Yalçın Kayan',
            playerPathName: 'yalcin-kayan',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Efe Binici',
            playerPathName: 'efe-binici',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Metin Yıldırım',
            playerPathName: 'metin-yildirim',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Zlatko TrIpIc',
            playerPathName: 'zlatko-tripic',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Beykan Şimşek',
            playerPathName: 'beykan-simsek',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Batuhan Kırdaroğlu',
            playerPathName: 'batuhan-kirdaroglu',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Halil Akbunar',
            playerPathName: 'halil-akbunar',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'FoussenI DIabaté',
            playerPathName: 'fousseni-diabate',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'Tibet Öniz',
            playerPathName: 'tibet-oniz',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Yılmaz Basravi',
            playerPathName: 'yilmaz-basravi',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'Stefano NapoleonI',
            playerPathName: 'stefano-napoleoni',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'CherIf NdIaye',
            playerPathName: 'cherif-ndiaye',
            isSocial: true
          },
          {
            playerId: 30,
            name: 'AdIs JahovIc',
            playerPathName: 'adis-jahovic',
            isSocial: true
          },
          {
            playerId: 31,
            name: 'Brown Ideye',
            playerPathName: 'brown-ideye',
            isSocial: true
          }
        ]
      },
      {
        id: 14,
        title: 'Helenex Yeni Malatyaspor',
        pathName: 'helenex-yeni-malatyaspor',
        players: [
          {
            playerId: 1,
            name: 'Abdulsamed Damlu',
            playerPathName: 'abdulsamed-damlu',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Ertaç Özbir',
            playerPathName: 'ertac-ozbir',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Murat Akşit',
            playerPathName: 'murat-aksit',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Eray İşcan',
            playerPathName: 'eray-iscan',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Wallace Dos Santos',
            playerPathName: 'wallace-dos-santos',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Semih Kaya',
            playerPathName: 'semih-kaya',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Teenage Hadebe',
            playerPathName: 'teenage-hadebe',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'PhIlIp GamelI Awuku',
            playerPathName: 'philip-gameli-awuku',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'ErIc NdIzeye',
            playerPathName: 'eric-ndizeye',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'KarIm Hafez',
            playerPathName: 'karim-hafez',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Bülent Cevahir',
            playerPathName: 'bulent-cevahir',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Erkan Kaş',
            playerPathName: 'erkan-kas',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Issam Chebake',
            playerPathName: 'issam-chebake',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Zeki Yavru',
            playerPathName: 'zeki-yavru',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'JospIn NshImIrImana',
            playerPathName: 'jospin-nshimirimana',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'AfrIyIe Acquah',
            playerPathName: 'afriyie-acquah',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Ahmed Ildız',
            playerPathName: 'ahmed-ildiz',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Fernando ZuquI',
            playerPathName: 'fernando-zuqui',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'StevIe Mallan',
            playerPathName: 'stevie-mallan',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Adem Büyük',
            playerPathName: 'adem-buyuk',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Moryké Fofana',
            playerPathName: 'moryke-fofana',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Mustafa Eskihellaç',
            playerPathName: 'mustafa-eskihellac',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'HaqI Osman',
            playerPathName: 'haqi-osman',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Jody LukokI',
            playerPathName: 'jody-lukoki',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Aly Malle',
            playerPathName: 'aly-malle',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'Doğukan Emeksiz',
            playerPathName: 'dogukan-emeksiz',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Olcay Şahan',
            playerPathName: 'olcay-sahan',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'BenjamIn Tetteh',
            playerPathName: 'benjamin-tetteh',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'Kubilay Kanatsızkuş',
            playerPathName: 'kubilay-kanatsizkus',
            isSocial: true
          },
          {
            playerId: 30,
            name: 'JetmIr TopallI',
            playerPathName: 'jetmir-topalli',
            isSocial: true
          },
          {
            playerId: 31,
            name: 'Umut Bulut',
            playerPathName: 'umut-bulut',
            isSocial: true
          }
        ]
      },
      {
        id: 15,
        title: 'Hes Kablo Kayserispor',
        pathName: 'hes-kablo-kayserispor',
        players: [
          {
            playerId: 1,
            name: 'Doğan Alemdar',
            playerPathName: 'dogan-alemdar',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'SIlvIu Lung Jr.',
            playerPathName: 'silviu-lung-jr.',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'İsmail Çipe',
            playerPathName: 'ismail-cipe',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Abdulkadir Taşdan',
            playerPathName: 'abdulkadir-tasdan',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Nehuén Paz',
            playerPathName: 'nehuen-paz',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'DImItrIos KolovetsIos',
            playerPathName: 'dimitrios-kolovetsios',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Uğur Demirok',
            playerPathName: 'ugur-demirok',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'CrIstIan Sapunaru',
            playerPathName: 'cristian-sapunaru',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'AzIz BehIch',
            playerPathName: 'aziz-behich',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Yasir Subaşı',
            playerPathName: 'yasir-subasi',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Ramazan Civelek',
            playerPathName: 'ramazan-civelek',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Zoran KvrzIc',
            playerPathName: 'zoran-kvrzic',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'MIguel Lopes',
            playerPathName: 'miguel-lopes',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Gustavo Campanharo',
            playerPathName: 'gustavo-campanharo',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Joseph Attamah',
            playerPathName: 'joseph-attamah',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Karlo Muhar',
            playerPathName: 'karlo-muhar',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Besard SabovIc',
            playerPathName: 'besard-sabovic',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Emre Demir',
            playerPathName: 'emre-demir',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'DanIel AvramovskI',
            playerPathName: 'daniel-avramovski',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Pedro HenrIque',
            playerPathName: 'pedro-henrique',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Nurettin Korkmaz',
            playerPathName: 'nurettin-korkmaz',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Aaron Lennon',
            playerPathName: 'aaron-lennon',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Melih Okutan',
            playerPathName: 'melih-okutan',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'DenIs AlIbec',
            playerPathName: 'denis-alibec',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'KevIn Luckassen',
            playerPathName: 'kevin-luckassen',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'Anton MaglIca',
            playerPathName: 'anton-maglica',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'İlhan Parlak',
            playerPathName: 'ilhan-parlak',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'Muğdat Çelik',
            playerPathName: 'mugdat-celik',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'Ömer Uzun',
            playerPathName: 'omer-uzun',
            isSocial: true
          }
        ]
      },
      {
        id: 16,
        title: 'İttifak Holding Konyaspor',
        pathName: 'ittifak-holding-konyaspor',
        players: [
          {
            playerId: 1,
            name: 'IbrahIm ŠehIć',
            playerPathName: 'ibrahim-sehic',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Ozan Can Oruç',
            playerPathName: 'ozan-can-oruc',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Eray Birniçan',
            playerPathName: 'eray-birnican',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Erten Ersu',
            playerPathName: 'erten-ersu',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Abdülkerim Bardakçı',
            playerPathName: 'abdulkerim-bardakci',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Adil Demirbağ',
            playerPathName: 'adil-demirbag',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Ahmet Çalık',
            playerPathName: 'ahmet-calik',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'GuIlherme SItya',
            playerPathName: 'guilherme-sitya',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Alper Uludağ',
            playerPathName: 'alper-uludag',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Nejc SkubIc',
            playerPathName: 'nejc-skubic',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Barış Yardımcı',
            playerPathName: 'baris-yardimci',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'AmIr HadzIahmetovIc',
            playerPathName: 'amir-hadziahmetovic',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Marko JevtovIc',
            playerPathName: 'marko-jevtovic',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Oğuz Kağan Güçtekim',
            playerPathName: 'oguz-kagan-guctekin',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Ismaël DIomandé',
            playerPathName: 'ismael-diomande',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Volkan Fındıklı',
            playerPathName: 'volkan-findikli',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'İzzet Karaboğa',
            playerPathName: 'izzet-karaboga',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Musa Çağıran',
            playerPathName: 'musa-cagiran',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'İsmail Güven',
            playerPathName: 'ismail-guven',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Farouk MIya',
            playerPathName: 'farouk-miya',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'DenI MIlosevIc',
            playerPathName: 'deni-milosevic',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Amar RahmanovIc',
            playerPathName: 'amar-rahmanovic',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Emre Pehlivan',
            playerPathName: 'emre-pehlivan',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Zymer BytyqI',
            playerPathName: 'zymer-bytyqi',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Levan ShengelIa',
            playerPathName: 'levan-shengelia',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'Samuel Eduok',
            playerPathName: 'samuel-eduok',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Jesse SekIdIka',
            playerPathName: 'jesse-sekidika',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'Ahmet Karademir',
            playerPathName: 'ahmet-karademir',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'Erdon DacI',
            playerPathName: 'erdon-daci',
            isSocial: true
          },
          {
            playerId: 30,
            name: 'Sokol CIkalleshI',
            playerPathName: 'sokol-cikalleshi',
            isSocial: true
          },
          {
            playerId: 31,
            name: 'Artem Kravets',
            playerPathName: 'artem-kravets',
            isSocial: true
          }
        ]
      },
      {
        id: 17,
        title: 'Kasımpaşa A.Ş.',
        pathName: 'kasimpasa',
        players: [
          {
            playerId: 1,
            name: 'Ramazan Köse',
            playerPathName: 'ramazan-kose',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Ertuğrul Taşkıran',
            playerPathName: 'ertugrul-taskiran',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Erdem Canpolat',
            playerPathName: 'erdem-canpolat',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'DerrIck Luckassen',
            playerPathName: 'derrick-luckassen',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'JulIan JeanvIer',
            playerPathName: 'julian-jeanvier',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Tomas Brecka',
            playerPathName: 'tomas-brecka',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Dusko TosIc',
            playerPathName: 'dusko-tosic',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Oussama HaddadI',
            playerPathName: 'oussama-haddadi',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Eren Elmalı',
            playerPathName: 'eren-elmali',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Çağtay Kurukalıp',
            playerPathName: 'cagtay-kurukalip',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Berk Çetin',
            playerPathName: 'berk-cetin',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Florent Hadergjonaj',
            playerPathName: 'florent-hadergjonaj',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Feyzi Yıldırım',
            playerPathName: 'feyzi-yildirim',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Loret SadIku',
            playerPathName: 'loret-sadiku',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Danny DrInkwater',
            playerPathName: 'danny-drinkwater',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'KrIstIjan BIstrovIc',
            playerPathName: 'kristijan-bistrovic',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Aytaç Kara',
            playerPathName: 'aytac-kara',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Tarkan Serbest',
            playerPathName: 'tarkan-serbest',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Doğucan Haspolat',
            playerPathName: 'dogucan-haspolat',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Hasan Emre Yeşilyurt',
            playerPathName: 'hasan-emre-yesilyurt',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'HarIs HajradInovIc',
            playerPathName: 'haris-hajradinovic',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'KevIn Varga',
            playerPathName: 'kevin-varga',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Yusuf Erdoğan',
            playerPathName: 'yusuf-erdogan',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Anıl Koç',
            playerPathName: 'anil-koc',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Yasin Dülger',
            playerPathName: 'yasin-dulger',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'GIlbert Koomson',
            playerPathName: 'gilbert-koomson',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Isaac KIese ThelIn',
            playerPathName: 'isaac-kiese-thelin',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'ArmIn HodzIc',
            playerPathName: 'armin-hodzic',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'BengalI-Fodé KoIta',
            playerPathName: 'bengali-fode-koita',
            isSocial: true
          },
          {
            playerId: 30,
            name: 'Furkan Külekçi',
            playerPathName: 'furkan-kulekci',
            isSocial: true
          }
        ]
      },
      {
        id: 18,
        title: 'Medipol Başakşehir FK',
        pathName: 'medipol-basaksehir-fk',
        players: [
          {
            playerId: 1,
            name: 'Mert Günok',
            playerPathName: 'mert-gunok',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Volkan Babacan',
            playerPathName: 'volkan-babacan',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Ahmet Kıvanç',
            playerPathName: 'ahmet-kivanc',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'RavIl TagIr',
            playerPathName: 'ravil-tagir',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Léo Duarte',
            playerPathName: 'leo-duarte',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Carlos Ponck',
            playerPathName: 'carlos-ponck',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Alexandru Epureanu',
            playerPathName: 'alexandru-epureanu',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'BolI BolIngolI',
            playerPathName: 'boli-bolingoli',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Hasan Ali Kaldırım',
            playerPathName: 'hasan-ali-kaldirim',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Cemali Sertel',
            playerPathName: 'cemali-sertel',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Rafael PereIra',
            playerPathName: 'rafael-pereira',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'JúnIor CaIçara',
            playerPathName: 'junior-caicara',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Muhammed Sarıkaya',
            playerPathName: 'muhammed-sarikaya',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Uğur Uçar',
            playerPathName: 'ugur-ucar',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Youssouf NdayIshImIye',
            playerPathName: 'youssouf-ndayishimiye',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Mahmut Tekdemir',
            playerPathName: 'mahmut-tekdemir',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Mehmet Topal',
            playerPathName: 'mehmet-topal',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Berkay Özcan',
            playerPathName: 'berkay-ozcan',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Okechukwu AzubuIke',
            playerPathName: 'okechukwu-azubuike',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Tolga Ciğerci',
            playerPathName: 'tolga-cigerci',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Deniz Türüç',
            playerPathName: 'deniz-turuc',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'GIulIano De Paula',
            playerPathName: 'giuliano-de-paula',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'DanIjel AleksIc',
            playerPathName: 'danijel-aleksic',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Emir Şenocak',
            playerPathName: 'emir-senocak',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Nacer ChadlI',
            playerPathName: 'nacer-chadli',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'JunIor Fernandes',
            playerPathName: 'junior-fernandes',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Mete Kaan Demir',
            playerPathName: 'mete-kaan-demir',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'Edin VIsca',
            playerPathName: 'edin-visca',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'Ömer Ali Şahiner',
            playerPathName: 'omer-ali-sahiner',
            isSocial: true
          },
          {
            playerId: 30,
            name: 'FredrIk Gulbrandsen',
            playerPathName: 'fredrik-gulbrandsen',
            isSocial: true
          },
          {
            playerId: 31,
            name: 'Enzo CrIvellI',
            playerPathName: 'enzo-crivelli',
            isSocial: true
          }
        ]
      },
      {
        id: 19,
        title: 'Mke Ankaragücü',
        pathName: 'mke-ankaragucu',
        players: [
          {
            playerId: 1,
            name: 'RIcardo FrIedrIch',
            playerPathName: 'ricardo-friedrich',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Korcan Çelikay',
            playerPathName: 'korcan-celikay',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Mert Topuz',
            playerPathName: 'mert-topuz',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Furkan Bekleviç',
            playerPathName: 'furkan-beklevic',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'ZvonImIr SarlIja',
            playerPathName: 'zvonimir-sarlija',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Erdi Dikmen',
            playerPathName: 'erdi-dikmen',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'MIchal Pazdan',
            playerPathName: 'michal-pazdan',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Alperen Babacan',
            playerPathName: 'alperen-babacan',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Ante KulusIc',
            playerPathName: 'ante-kulusic',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Abdullah Çelik',
            playerPathName: 'abdullah-celik',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Yusuf Eren Göktaş',
            playerPathName: 'yusuf-eren-goktas',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Atila Turan',
            playerPathName: 'atila-turan',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Anıl Dikmen',
            playerPathName: 'anil-dikmen',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'StelIos KItsIou',
            playerPathName: 'stelios-kitsiou',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'IdrIz Voca',
            playerPathName: 'idriz-voca',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Atakan Çankaya',
            playerPathName: 'atakan-cankaya',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Assane DIoussé',
            playerPathName: 'assane-diousse',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'DanIel LukasIk',
            playerPathName: 'daniel-lukasik',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Ali Kaan Güneren',
            playerPathName: 'ali-kaan-guneren',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'İbrahim Akdağ',
            playerPathName: 'ibrahim-akdag',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Şahverdi Çetin',
            playerPathName: 'sahverdi-cetin',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Ender Aygören',
            playerPathName: 'ender-aygoren',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'EndrI ÇekIçI',
            playerPathName: 'endri-cekici',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Alper Potuk',
            playerPathName: 'alper-potuk',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Berke Gürbüz',
            playerPathName: 'berke-gurbuz',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'Joseph PaIntsIl',
            playerPathName: 'joseph-paintsil',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Saba LobjanIdze',
            playerPathName: 'saba-lobjanidze',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'Geraldo Bartolomeu',
            playerPathName: 'geraldo-bartolomeu',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'Orkan Çınar',
            playerPathName: 'orkan-cinar',
            isSocial: true
          },
          {
            playerId: 30,
            name: 'TorgeIr Börven',
            playerPathName: 'torgeir-borven',
            isSocial: true
          },
          {
            playerId: 31,
            name: 'AlIou BadjI',
            playerPathName: 'aliou-badji',
            isSocial: true
          },
          {
            playerId: 32,
            name: 'Emre Güral',
            playerPathName: 'emre-gural',
            isSocial: true
          },
          {
            playerId: 33,
            name: 'Embiya Ayyıldız',
            playerPathName: 'embiya-ayyildiz',
            isSocial: true
          }
        ]
      },
      {
        id: 20,
        title: 'Trabzonspor A.Ş.',
        pathName: 'trabzonspor',
        players: [
          {
            playerId: 1,
            name: 'Uğurcan Çakır',
            playerPathName: 'ugurcan-cakir',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Erce Kardeşler',
            playerPathName: 'erce-kardesler',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Arda Akbulut',
            playerPathName: 'arda-akbulut',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'VItor Hugo',
            playerPathName: 'Vitor Hugo',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Edgar Ié',
            playerPathName: 'edgar-ie',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Hüseyin Türkmen',
            playerPathName: 'huseyin-turkmen',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'MajId HosseInI',
            playerPathName: 'majid-hosseini',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Atakan Gündüz',
            playerPathName: 'atakan-gunduz',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Ahmetcan Kaplan',
            playerPathName: 'ahmetcan-kaplan',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Marlon XavIer',
            playerPathName: 'marlon-xavier',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Faruk Can Genç',
            playerPathName: 'faruk-can-genc',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Serkan Asan',
            playerPathName: 'serkan-asan',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Kamil Ahmet Çörekçi',
            playerPathName: 'kamil-ahmet-corekci',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Berat Özdemir',
            playerPathName: 'berat-ozdemir',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Hakan Yeşil',
            playerPathName: 'hakan-yesil',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Abdulkadir Parmak',
            playerPathName: 'abdulkadir-parmak',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'LewIs Baker',
            playerPathName: 'lewis-baker',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'FlávIo Da SIlva',
            playerPathName: 'flavio-da-silva',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Anders Trondsen',
            playerPathName: 'anders-trondsen',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Abdülkadir Ömür',
            playerPathName: 'abdulkadir-omur',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'AnastasIos Bakasetas',
            playerPathName: 'anastasios-bakasetas',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Yunus Mallı',
            playerPathName: 'yunus-malli',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Süleyman Cebeci',
            playerPathName: 'süleyman-cebeci',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Anthony Nwakaeme',
            playerPathName: 'anthony-nwakaeme',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Safa Kınalı',
            playerPathName: 'safa-kinali',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'Caleb Ekuban',
            playerPathName: 'caleb-ekuban',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Yusuf Sarı',
            playerPathName: 'yusuf-sari',
            isSocial: true
          },
          {
            playerId: 28,
            name: 'DjanIny Semedo',
            playerPathName: 'djaniny-semedo',
            isSocial: true
          },
          {
            playerId: 29,
            name: 'BenIk Afobe',
            playerPathName: 'benik-afobe',
            isSocial: true
          }
        ]
      },
      {
        id: 21,
        title: 'Yukatel Denizlispor',
        pathName: 'yukatel-denizlispor',
        players: [
          {
            playerId: 1,
            name: 'Cenk Gönen',
            playerPathName: 'cenk-gonen',
            isSocial: true
          },
          {
            playerId: 2,
            name: 'Hüseyin Altıntaş',
            playerPathName: 'huseyin-altintas',
            isSocial: true
          },
          {
            playerId: 3,
            name: 'Abdulkadir Sünger',
            playerPathName: 'abdulkadir-sunger',
            isSocial: true
          },
          {
            playerId: 4,
            name: 'Fabiano Leismann',
            playerPathName: 'fabiano-leismann',
            isSocial: true
          },
          {
            playerId: 5,
            name: 'Oğuz Yılmaz',
            playerPathName: 'oguz-yilmaz',
            isSocial: true
          },
          {
            playerId: 6,
            name: 'Mustafa Yumlu',
            playerPathName: 'mustafa-yumlu',
            isSocial: true
          },
          {
            playerId: 7,
            name: 'Muhammet Özkal',
            playerPathName: 'muhammet-ozkal',
            isSocial: true
          },
          {
            playerId: 8,
            name: 'Görkem Can',
            playerPathName: 'gorkem-can',
            isSocial: true
          },
          {
            playerId: 9,
            name: 'Ayman Ben Mohamed',
            playerPathName: 'ayman-ben-mohamed',
            isSocial: true
          },
          {
            playerId: 10,
            name: 'Sakıb Aytaç',
            playerPathName: 'sakib-aytac',
            isSocial: true
          },
          {
            playerId: 11,
            name: 'Özgür Çek',
            playerPathName: 'ozgur-cek',
            isSocial: true
          },
          {
            playerId: 12,
            name: 'Özer Özdemir',
            playerPathName: 'ozer-ozdemir',
            isSocial: true
          },
          {
            playerId: 13,
            name: 'Kubilay Aktaş',
            playerPathName: 'kubilay-aktas',
            isSocial: true
          },
          {
            playerId: 14,
            name: 'Radoslaw Murawski',
            playerPathName: 'radoslaw-murawski',
            isSocial: true
          },
          {
            playerId: 15,
            name: 'Mix Diskerud',
            playerPathName: 'mix-diskerud',
            isSocial: true
          },
          {
            playerId: 16,
            name: 'Marvin Bakalorz',
            playerPathName: 'marvin-bakalorz',
            isSocial: true
          },
          {
            playerId: 17,
            name: 'Eren Kıryolcu',
            playerPathName: 'eren-kiryolcu',
            isSocial: true
          },
          {
            playerId: 18,
            name: 'Recep Niyaz',
            playerPathName: 'recep-niyaz',
            isSocial: true
          },
          {
            playerId: 19,
            name: 'Ángelo Sagal',
            playerPathName: 'angelo-sagal',
            isSocial: true
          },
          {
            playerId: 20,
            name: 'Hasan Ayaroğlu',
            playerPathName: 'hasan-ayaroglu',
            isSocial: true
          },
          {
            playerId: 21,
            name: 'Hadi Sacko',
            playerPathName: 'hadi-sacko',
            isSocial: true
          },
          {
            playerId: 22,
            name: 'Ahmed Yasin',
            playerPathName: 'ahmed-yasin',
            isSocial: true
          },
          {
            playerId: 23,
            name: 'Mathieu Dossevi',
            playerPathName: 'mathieu-dossevi',
            isSocial: true
          },
          {
            playerId: 24,
            name: 'Muris Mesanovic',
            playerPathName: 'muris-mesanovic',
            isSocial: true
          },
          {
            playerId: 25,
            name: 'Hugo Rodallega',
            playerPathName: 'hugo-rodallega',
            isSocial: true
          },
          {
            playerId: 26,
            name: 'Ali Yavuz Kol',
            playerPathName: 'ali-yavuz-kol',
            isSocial: true
          },
          {
            playerId: 27,
            name: 'Veton Tusha',
            playerPathName: 'veton-tusha',
            isSocial: true
          }
        ]
      }
    ],
    teamId: null
  },

  getters: {},

  mutations: {
    setId(state, id) {
      state.teamId = id
    }
  },

  actions: {
    updateId({ commit }, id) {
      commit('setId', id)
    }
  },

  modules: {}
})
