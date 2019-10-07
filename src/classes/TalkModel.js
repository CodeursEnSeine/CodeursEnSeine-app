export default class TalkModel {
  /**
   * @param {string} id The identifier of the talk
   * @param {string} title The title of the talk
   * @param {string} state The state of the talk
   * @param {string} level The level of the talk
   * @param {string} abstract The abstract of the talk
   * @param {string} categories The categories of the talk
   * @param {string} formats The format of the talk
   * @param {Array<Speaker>} speakers The speakers of the talk
   * @param {string} comments The comments of the talk
   * @param {string} room The room of the talk
   * @param {string} hour The hour of the talk
   */
  constructor(
    id,
    title,
    state,
    level,
    abstract,
    categories,
    formats,
    speakers,
    room,
    hour
  ) {
    this.id = id;
    this.title = title;
    this.state = state;
    this.level = level;
    this.abstract = abstract;
    this.categories = categories;
    this.formats = formats;
    this.speakers = speakers;
    this.room = room;
    this.hour = hour;
  }
}

export class Speaker {
  /**
   * @param {object} speaker The complete speaker object comming from Conference Hall
   * @param {string} speaker.uid
   * @param {string} speaker.displayName
   * @param {string} speaker.bio
   * @param {string} speaker.company
   * @param {string} speaker.photoURL
   * @param {string} speaker.twitter
   * @param {string} speaker.github
   */
  constructor(speaker) {
    this.id = speaker.uid;
    this.displayName = speaker.displayName;
    this.bio = speaker.bio;
    this.company = speaker.company;
    this.photoURL = speaker.photoURL;
    this.twitter = speaker.twitter;
    this.github = speaker.github;
  }
}
