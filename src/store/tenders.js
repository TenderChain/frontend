/* eslint-disable max-len*/
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    'user': 'Aubrey James',
    'my_tenders': [{
      'name': 'Trams for Cracow',
      'offerents': 0,
      'date':
        'Date Thu May 31 2018 00:00:00 GMT+0200 (Środkowoeuropejski czas letni)',
      'fileNames': ['link-symbol-of-two-chains-links-linked_318-50708.jpg'],
      'requirements': [{
        'name': '5 USB ports',
        'desc': '',
      }, {
        'name': 'Maximal speed 250MPH',
        'desc': '',
      }],
      'timestamp': 1526803166303,
    }, {
      'name': 'English training for beginners',
      'offerents': 0,
      'date': 'Date Mon May 21 2018 00:00:00 GMT+0200 (Środkowoeuropejski czas letni)',
      'fileNames': [],
      'requirements': [{
        'name': '90 h per semester',
        'desc': 'One lesson hour: 1h 30m',
      }, {
        'name': 'Native speaker',
        'desc': '',
      }],
      'timestamp': 1526803485552,
    }, {
      'name': 'Hall of fame',
      'offerents': 0,
      'date': 'Date Wed Jul 04 2018 00:00:00 GMT+0200 (Środkowoeuropejski czas letni)',
      'fileNames': ['chain-312011_1280.png'],
      'requirements': [{
        'name': 'Red carpet',
        'desc': '',
      }, {
        'name': '',
        'desc': '',
      }, {
        'name': 'Golden bridge',
        'desc': '',
      }, {
        'name': 'Sound system',
        'desc': '4D sound system',
      }],
      'timestamp': 1526804004255,
    }, {
      'name': 'English training for beginners',
      'offerents': 0,
      'date': 'Date Wed May 30 2018 00:00:00 GMT+0200 (Środkowoeuropejski czas letni)',
      'fileNames': [],
      'requirements': [{
        'name': 'Native speaker ',
        'desc': '',
      }, {
        'name': '90h per semester',
        'desc': '',
      }, {
        'name': '1h 30m per one lesson',
        'desc': '',
      }],
      'timestamp': 1526804196605,
    }],
    'my_offers': [{
      'name': 'English training for intermediate',
      'offerents': 0,
      'date':
        'Date Wed May 30 2018 00:00:00 GMT+0200 (Środkowoeuropejski czas letni)',
      'fileNames': [],
      'requirements': [{
        'name': 'Native speaker ',
        'desc': '',
      }, {
        'name': '90h per semester',
        'desc': '',
      }, {
        'name': '1h 30m per one lesson',
        'desc': '',
      }],
      'timestamp': 1526804196605,
    }],
    'recent': [{
      'name': 'Trams for Cracow',
      'offerents': 0,
      'date':
        'Date Thu May 31 2018 00:00:00 GMT+0200 (Środkowoeuropejski czas letni)',
      'fileNames': ['link-symbol-of-two-chains-links-linked_318-50708.jpg'],
      'requirements': [{
        'name': '5 USB ports',
        'desc': '',
      }, {
        'name': 'Maximal speed 250MPH',
        'desc': '',
      }],
      'timestamp': 1526803166303,
    }, {
      'name': 'English training for beginners',
      'offerents': 0,
      'date':
        'Date Mon May 21 2018 00:00:00 GMT+0200 (Środkowoeuropejski czas letni)',
      'fileNames': [],
      'requirements': [{
        'name': '90 h per semester',
        'desc': 'One lesson hour: 1h 30m',
      }, {
        'name': 'Native speaker',
        'desc': '',
      }],
      'timestamp': 1526803485552,
    }],
  },
  mutations: {
    add_tender(state, tender) {
      state.my_tenders.push(tender);
      state.recent.splice(0, 0, tender);
    },
    add_offer(state, offer) {
      state.recent[state.recent.length-1].push(offer);
    },
    inc_offerents(state, timestamp){
      let o = this.getters.getTenderByTimestamp(timestamp);
      console.log( "ts: ", timestamp, " ", o);
      if(o) {
        o.offerents += 1;
      }
    }
  },
  getters: {
    getTenderByTimestamp: (state) => (timestamp) => {
      let tmp = state.recent.find((tender)=>(
        tender.timestamp == timestamp));
      return tmp;
    },
  },
});
