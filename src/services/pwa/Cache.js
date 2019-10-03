export default class Cache {
  /**
   * Open the cache if it is available
   * https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api#creating_and_opening_a_cache
   */
  static async get() {
    try {
      return await caches.open("ces-2019");
    } catch (error) {
      console.error(
        "Your connection is not secure and the cache cannot be open"
      );
    }
  }
}
