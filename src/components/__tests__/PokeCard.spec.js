import { shallowMount } from '@vue/test-utils';
import PokeCard from '../PokeCard.vue';

describe('PokeCard component', () => {
  it('render', () => {
    const wrapper = shallowMount(PokeCard);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should return an array with the elements diferent to null', () => {
    const localThis = {
      pokemon: {
        front_pokemon: 'foo',
        back_pokemon: null,
        front_pokemon_shiny: 'foo2',
        back_pokemon_shiny: 'foo3',
      },
    };
    const response = PokeCard.computed.spritesPokemon.call(localThis);
    expect(response.length).toBe(3);
  });

  it('should return the type of pokemon', () => {
    const responseShiny = PokeCard.methods.isShiny(3);
    expect(responseShiny).toBe('Shiny');

    const response = PokeCard.methods.isShiny(4);
    expect(response).toBe('Normal');
  });
});
