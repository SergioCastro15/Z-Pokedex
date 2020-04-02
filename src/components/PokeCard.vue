<template>
  <div>
    <b-row>
      <b-card
        v-for="(sprite, index) in spritesPokemon"
        :key="index"
        title="Type of pokemon"
        :img-src="sprite"
        style="width: 17rem;"
        class="mx-1 my-2"
      >
        <b-card-text>
          {{ isShiny(index) }}
        </b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'PokeCard',
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  computed: {
    spritesPokemon() {
      const sprites = Object.keys(this.pokemon || {});

      return sprites.filter((sprite) => this.pokemon[sprite] !== null)
        .map((key) => this.pokemon[key]);
    },
  },
  methods: {
    isShiny(index) {
      return index % 2 === 0 ? 'Normal' : 'Shiny';
    },
  },
};
</script>
