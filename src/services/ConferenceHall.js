import Cache from "./pwa/Cache";

export default class ConferenceHall {
  static async getData() {
    // const response = await fetch("./confs.json");
    // const json = await response.json();
    // const cache = await Cache.get();

    // cache.put(new Request("./confs.json"), new Response(json));

    // return json;

    return [
      {
        id: "1",
        title: "Managenement d'une équipe sportive",
        speaker: "Guy Fournier",
        room: "A"
      },
      {
        id: "2",
        title:
          "Symfony 4 - le framework PHP bâti pour grandir avec vos projets",
        speaker: "Nicolas Grekas",
        room: "A"
      }
    ];
  }
}
