export default class Cache {
  static async get() {
    return await caches.open("ces-2019");
  }
}
