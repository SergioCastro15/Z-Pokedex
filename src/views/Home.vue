<template>
  <div class="container">
    <poke-input
      @triggerSearchPokemon="getPhotos"
    />
      <h1 class="mt-5">{{getCurrentPokemon.name}}</h1>
      <b-button
        class="my-4"
        @click="getPokemon"
        block
        variant="success"
      >
        Get a random Pokemon
      </b-button>
    <poke-card
      class="mt-5"
      :pokemon="getCurrentPokemon.sprites"
    />
    <poke-abilities class="my-5" :abilities="getCurrentPokemon.abilities" />
  </div>
</template>

<script>
import PokeCard from '../components/PokeCard.vue';
import PokeInput from '../components/PokeInput.vue';
import PokeAbilities from '../components/PokeAbilities.vue';

export default {
  name: 'Home',
  components: {
    PokeCard,
    PokeInput,
    PokeAbilities,
  },
  beforeMount() {
    this.getPokemon();
  },
  computed: {
    getCurrentPokemon() {
      return this.$store.state.pokemon;
    },
  },
  methods: {
    getRandomPokemon() {
      return Math.round(Math.random() * 150);
    },
    searchPokemon(text) {
      this.$store.dispatch('getPokemon', text);
    },
    getPokemon() {
      this.$store.dispatch('getPokemon', this.getRandomPokemon());
    },
    getPhotos() {
      this.$store.dispatch('getPhotos');
    },
  },
};
</script>
