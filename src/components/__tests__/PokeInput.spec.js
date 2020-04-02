import { shallowMount } from '@vue/test-utils';
import PokeInput from '../PokeInput.vue';

describe('PokeInput component', () => {
  it('render', () => {
    const wrapper = shallowMount(PokeInput);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should send a emit to father element', () => {
    const localThis = {
      text: 'pikachu',
      $emit(method, text) {
        expect(method).toBe('triggerSearchPokemon');
        expect(typeof text).toBe('string');
      },
    };
    PokeInput.methods.onSearchPokemon.call(localThis);
  });
});
