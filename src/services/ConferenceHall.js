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
        room: "A",
        type: "Keynote",
        hour: "9h00"
      },
      {
        id: "2",
        title:
          "Symfony 4 - le framework PHP bâti pour grandir avec vos projets",
        speaker: "Nicolas Grekas",
        room: "A",
        type: "Conférence",
        hour: "10h00",
        level: "Tout public",
        category: "🌍 Web",
        description:
          "Symfony est un des projets open-source les plus actifs sur GitHub. À n'en pas douter, cet intérêt constamment renouvelé pour la technologie est la clef qui lui permet d'être à la fois à la pointe de l'état de l'art, et d'une stabilité éprouvée sur le long terme. Lors de cette conférence, venez découvrir comment la communauté a réussi à produire un framework PHP à la fois performant, facile à prendre en main, permettant les architectures logicielles les plus évoluées et conçu pour le cloud."
      }
    ];
  }
}
