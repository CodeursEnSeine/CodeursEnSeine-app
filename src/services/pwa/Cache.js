export default class Cache {
  /**
   * Open the cache if it is available
   * https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api#creating_and_opening_a_cache
   */
  static async get() {
    return await caches.open("ces-2019");
  }
}
