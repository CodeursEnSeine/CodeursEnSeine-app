import Cache from "./pwa/Cache";

export default class ConferenceHall {
  static async getProgram() {
    const response = await fetch("/program.json");
    const json = await response.json();
    const cache = await Cache.get();

    cache.put(new Request("/program.json"), new Response(json));

    return json;
  }

  static async getData() {
    const response = await fetch("/confs.json");
    const json = await response.json();
    const cache = await Cache.get();

    cache.put(new Request("/confs.json"), new Response(json));

    return json;
  }
}
