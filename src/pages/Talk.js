import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { AspectRatioBox, Heading, Box, Stack, Badge } from "@chakra-ui/core";
import Layout from "../components/templates/Layout";
import TalkDisplay from "../components/TalkDisplay";
import FAV from "../components/FAV";
import { useTalks } from "../hooks/useTalks";
import SpeakerDisplay from "../components/SpeakerDisplay";
import { SponsorsDisplay } from "../components/SponsorsDisplay";
import { Skeleton } from "../components/Skeleton";

export const Talk = () => {
  const [talk, setTalk] = useState({});
  const [loading, setLoading] = useState(true);
  const [talks] = useTalks();
  const { id } = useParams();

  const typeAndHour = () => {
    if (talk.formats) {
      return `${talk.formats} - ${talk.hour}`;
    }

    return talk.hour;
  };

  useEffect(() => {
    async function fetchData() {
      if (talks.length !== 0) {
        const filteredTalk = talks.filter(talk => talk.id === id);
        setTalk(filteredTalk[0]);
        setLoading(false);
      }
    }

    fetchData();
  }, [id, talks]);

  const topbarTitlePortal = document.getElementById("topbar-title");

  return (
    <Layout>
      {loading && (
        <>
          <Skeleton
            height="1.2rem"
            width="15rem"
            backgroundColor="brand.900"
            mb="2"
          />
          {[...Array(10).keys()].map(key => (
            <Skeleton key={key} height="1.1rem" width="100%" />
          ))}
          <Box my="8">
            <Stack isInline spacing="4" mb="4">
              <AspectRatioBox
                ratio={1}
                width={100}
                backgroundColor="gray.100"
                rounded="md"
                shadow="paper"
                overflow="hidden"
              >
                <Skeleton height="100%" width="100%" />
              </AspectRatioBox>
              )}
              <Box>
                <Box mb="2">
                  <Skeleton height="1rem" width="3rem" />
                  <Skeleton height="1rem" width="2rem" />
                </Box>
                <Stack isInline>
                  <Skeleton height="1rem" width="2rem" />
                  <Skeleton height="1rem" width="2rem" />
                </Stack>
              </Box>
            </Stack>
            {[...Array(10).keys()].map(key => (
              <Skeleton key={key} height="1.1rem" width="100%" />
            ))}
          </Box>
        </>
      )}
      {!loading &&
        topbarTitlePortal &&
        ReactDOM.createPortal(
          <Box>
            <Heading as="h4" fontSize="md" mb="1">
              {typeAndHour()}
            </Heading>
            <Stack isInline>
              {!!talk.room && (
                <Badge variantColor="brand">Salle {talk.room}</Badge>
              )}
              {talk.state === "sponsors" && (
                <Badge variantColor="cyan">Sponsorisé</Badge>
              )}
            </Stack>
          </Box>,
          topbarTitlePortal
        )}
      <Heading size="lg" mb="2">
        {talk.title}
      </Heading>
      {!!talk.level && <Badge mb="2">{talk.level}</Badge>}
      <TalkDisplay talk={talk} />
      {talk.speakers &&
        talk.speakers.map(speaker => (
          <SpeakerDisplay key={speaker.id} speaker={speaker} />
        ))}
      <SponsorsDisplay />
      <FAV
        talk={talk}
        position="fixed"
        bottom="8"
        right="8"
        size="lg"
        shadow="paper"
      />
    </Layout>
  );
};
