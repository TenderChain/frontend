import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    my_tenders: [],
    my_offers: [],
    recent: [],
  },
  mutations: {
    add_tender(state, tender) {
      state.my_tenders.push(tender);
      state.recent.push(tender);
    },
    add_offer(state, offer) {
      state.recent[state.recent.length-1].push(offer);
    },
  },
});
