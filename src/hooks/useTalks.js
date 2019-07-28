import { useEffect, useState } from "react";
import { useLoader } from "./useLoader";
import ConferenceHall from "../services/ConferenceHall";
import TalkModel, { Speaker } from "../classes/TalkModel";

const LOCAL_STORAGE_TALKS_KEY = "ces-2019-talks";

function filterSelectedTalks(program, conferenceHall) {
  const selectedTalks = [];

  conferenceHall.talks.forEach(talk => {
    program.talks.forEach(t => {
      if (talk.id === t.id) {
        const talkSpeakers = conferenceHall.speakers
          .filter(speaker => talk.speakers.includes(speaker.uid))
          .map(speaker => new Speaker(speaker));

        const talkFormats = conferenceHall.formats
          .filter(format => format.id === talk.formats)
          .map(format => format.name);

        const formattedTalk = new TalkModel(
          talk.id,
          talk.title,
          talk.state,
          talk.level,
          talk.abstract,
          talk.categories,
          talkFormats,
          talkSpeakers,
          talk.comments,
          t.room,
          t.hour
        );
        selectedTalks.push(formattedTalk);
      }
    });
  });

  return selectedTalks;
}

export const useTalks = () => {
  const [talks, setTalks] = useState([]);
  const [loading, setLoading, Loader] = useLoader();

  useEffect(() => {
    async function fetchData() {
      const program = await ConferenceHall.getProgram();
      const data = await ConferenceHall.getData();
      const selectedTalks = filterSelectedTalks(program, data);
      localStorage.setItem(
        LOCAL_STORAGE_TALKS_KEY,
        JSON.stringify(selectedTalks)
      );
      setTalks(selectedTalks);
      setLoading(false);
    }

    const selectedTalks = localStorage.getItem(LOCAL_STORAGE_TALKS_KEY);

    if (selectedTalks === null || selectedTalks === "") {
      fetchData();
    } else {
      setTalks(JSON.parse(selectedTalks));
      setLoading(false);
    }
  }, [setTalks, setLoading]);

  return [talks, loading, Loader];
};
