export default class EventModel {
  /**
   * @param {string} id The identifier of the talk
   * @param {string} title The title of the talk
   * @param {string} state The state of the talk
   * @param {string} abstract The abstract of the talk
   * @param {string} room The room of the event
   * @param {string} hour The hour of the event
   */
  constructor(id, title, state, abstract, room, hour) {
    this.id = id;
    this.title = title;
    this.state = state;
    this.abstract = abstract;
    this.room = room;
    this.hour = hour;
  }
}
