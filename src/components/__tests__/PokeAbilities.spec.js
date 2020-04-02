import { shallowMount } from '@vue/test-utils';
import PokeAbilities from '../PokeAbilities.vue';

describe('PokeAbilities component', () => {
  it('render', () => {
    const wrapper = shallowMount(PokeAbilities, {
      propsData: {
        abilities: [
          {
            ability: {
              name: 'Pikachu',
            },
          },
          {
            ability: {
              name: 'Charmander',
            },
          },
        ],
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('Should show the powers of current pokemon', () => {
    const localThis = {
      showAbility: false,
    };
    PokeAbilities.methods.showPowers.call(localThis);
    expect(localThis.showAbility).toBe(true);
  });
});
