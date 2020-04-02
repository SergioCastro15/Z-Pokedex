import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '../Home.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Home component', () => {
  let actions;
  let store;
  let state;

  beforeEach(() => {
    state = {
      pokemon: {},
    };

    actions = {
      getPokemon: jest.fn(),
    };

    store = new Vuex.Store({
      state,
      actions,
    });
  });

  it('render', () => {
    const wrapper = shallowMount(Home, {
      store: {
        ...store,
        state: {
          ...state,
          pokemon: {},
        },
      },
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should return current component', () => {
    const localThis = {
      $store: {
        state: {
          pokemon: 'pikachu',
        },
      },
    };
    const response = Home.computed.getCurrentPokemon.call(localThis);
    expect(response).toBe('pikachu');
  });

  it('should run searchPokemon method', () => {
    const localThis = {
      $store: {
        dispatch(method, payload) {
          expect(method).toBe('getPokemon');
          expect(typeof payload).toBe('string');
        },
      },
    };
    Home.methods.searchPokemon.call(localThis, 'pikachu');
  });

  it('should run getPokemon method', () => {
    const localThis = {
      getRandomPokemon() {
        return 3;
      },
      $store: {
        dispatch(method, payload = 3) {
          expect(method).toBe('getPokemon');
          expect(payload).toBe(localThis.getRandomPokemon());
        },
      },
    };
    Home.methods.getPokemon.call(localThis);
  });
});
