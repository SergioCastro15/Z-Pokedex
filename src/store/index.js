import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemon: {},
  },
  mutations: {
    SET_POKEMON(state, pokemon) {
      state.pokemon = pokemon;
    },
  },
  actions: {
    async getPokemon({ commit }, idOrName) {
      const url = `https://pokeapi.co/api/v2/pokemon/${idOrName}/`;
      const response = await fetch(url);
      const pokemon = await response.json();
      commit('SET_POKEMON', pokemon);
    },
  },
});
