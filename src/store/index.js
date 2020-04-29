/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
// import { setupCache } from 'axios-cache-adapter';
import configure from '../cache/index';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    pokemon: {},
    photos: [],
  },
  mutations: {
    SET_POKEMON(state, pokemon) {
      state.pokemon = pokemon;
    },
    SET_PHOTOS(state, data) {
      state.photos = data;
    },
  },
  actions: {
    getPokemon({ commit }, idOrName) {
      configure().then(async (api) => {
        const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}/`);
        console.log('response', response);
        commit('SET_POKEMON', response.data);
      });
    },
    getPhotos({ commit }) {
      configure().then(async (api) => {
        const response = await api.get('https://jsonplaceholder.typicode.com/photos');
        console.log('response', response);
        commit('SET_PHOTOS', response.data);
      });
    },
  },
});
