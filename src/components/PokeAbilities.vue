<template>
  <div>
    <!-- Single button triggers two "<b-collapse>" components -->
    <b-button class="mb-3" @click="showPowers">Show powers</b-button>

    <b-list-group v-if="showAbility">
      <b-list-group-item
        v-for="(abilitie, index) in abilities"
        :key="index"
      >
        {{abilitie.ability.name}}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'PokeAbilities',
  data() {
    return {
      showAbility: false,
    };
  },
  props: {
    abilities: {
      type: Array,
      required: false,
    },
  },
  methods: {
    showPowers() {
      this.showAbility = !this.showAbility;
    },
  },
};
</script>
