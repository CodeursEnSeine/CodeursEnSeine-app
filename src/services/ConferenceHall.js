import Cache from "./pwa/Cache";

export default class ConferenceHall {
  static async getProgram() {
    const response = await fetch("./program.json");
    const json = await response.json();
    const cache = await Cache.get();

    cache.put(new Request("./program.json"), new Response(json));

    return json;
  }

  static async getData() {
    const response = await fetch(
      "https://blog.yoannfleury.dev/conference-hall-fetch/confs.json"
    );
    const json = await response.json();
    const cache = await Cache.get();

    cache.put(
      new Request(
        "https://blog.yoannfleury.dev/conference-hall-fetch/confs.json"
      ),
      new Response(json)
    );

    return json;
  }
}
