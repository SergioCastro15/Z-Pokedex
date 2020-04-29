// eslint-disable-next-line import/no-unresolved
import localforage from 'localforage';
// eslint-disable-next-line import/no-unresolved
import memoryDriver from 'localforage-memoryStorageDriver';
import { setup } from 'axios-cache-adapter';
// `async` wrapper to configure `localforage` and instantiate `axios` with `axios-cache-adapter`
async function configure() {
  // Register the custom `memoryDriver` to `localforage`
  await localforage.defineDriver(memoryDriver);

  // Create `localforage` instance
  const forageStore = localforage.createInstance({
    // List of drivers used
    driver: [
      localforage.INDEXEDDB,
      localforage.LOCALSTORAGE,
      // eslint-disable-next-line no-underscore-dangle
      memoryDriver._driver,
    ],
    // Prefix all storage keys to prevent conflicts
    name: 'my-cache',
  });

  // Create `axios` instance with pre-configured `axios-cache-adapter` using a `localforage` store
  return setup({
    // `axios` options
    baseURL: 'http://some-rest.api',

    // `axios-cache-adapter` options
    cache: {
      maxAge: 15 * 60 * 1000,
      store: forageStore,
    },
  });
}

export default configure;
