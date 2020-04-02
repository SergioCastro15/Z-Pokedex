<template>
  <div>
    <b-form-input
      v-model="text"
      placeholder="Search Pokemon"
      class="mt-5"
      ></b-form-input>
    <b-button
      variant="success"
      class="mt-2"
      @click="onSearchPokemon"
    >Search
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'PokeInput',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    onSearchPokemon() {
      this.$emit('triggerSearchPokemon', this.text);
    },
  },
};
</script>
