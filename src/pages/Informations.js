import React, { useEffect } from "react";
import { Heading, Box, Text, Stack, Icon } from "@chakra-ui/core";
import { Layout } from "../components/templates/Layout";
import { initScrollView } from "../helpers/backToTop";

export function Informations() {
  useEffect(() => {
    initScrollView();
  }, []);

  return (
    <Layout>
      <Box
        borderWidth={1}
        rounded="lg"
        color="brand.800"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={2}
        as="a"
        href="https://www.codeursenseine.com"
        target="_blank"
        rel="noopener noreferrer"
        my={4}
      >
        Toutes les informations sont disponible sur le site de Codeurs En Seine
        <Icon ml={2} name="external-link" />
      </Box>

      <Heading as="h4" size="sm" mb={4} mt={2}>
        Comment venir ?
      </Heading>

      <Stack spacing={4}>
        <Box>
          <Text fontSize="1.4rem" mb={1}>
            Lieu de l'événement{" "}
            <span role="img" aria-label="Emoji de point sur carte">
              📍
            </span>
          </Text>
          <Text>
            Kindarena - Palais des sports de Rouen
            <br />
            40 rue de Lillebonne
            <br />
            76000 ROUEN, FRANCE
          </Text>
        </Box>

        <Box textAlign="center">
          <iframe
            title="Carte montrant l'emplacement du Kindarena, le palais des sports de Rouen"
            width="90%"
            height="350"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=1.0586571693420412%2C49.44463553274022%2C1.067626476287842%2C49.45076679110293&amp;layer=mapnik&amp;marker=49.44769777013715%2C1.0631418228149414"
            style={{ border: "1px solid black", margin: "auto" }}
          />

          <small>
            <a
              href="https://www.openstreetmap.org/?mlat=49.44770&amp;mlon=1.06314#map=17/49.44770/1.06314"
              title="Lien vers le site d'OpenStreetMap pour afficher la carte en plus grande"
              target="_blank"
              rel="noopener noreferrer"
            >
              Afficher une carte plus grande
            </a>
          </small>
        </Box>

        <Box>
          <Text fontSize="1.4rem" mb={2}>
            Venir en vélo{" "}
            <span role="img" aria-label="Emoji de vélo">
              🚲
            </span>
          </Text>
          <Text fontWeight="bold">
            Il existe plusieurs parking à vélo autour du Kindarena
          </Text>
          <a
            href="https://www.cyclosm.org/#map=17/49.44759/1.06432/cyclosm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Il est possible de les consulter sur CyclOSM
            <Icon ml={2} name="external-link" />
          </a>
        </Box>

        <Box>
          <Text fontSize="1.4rem" mb={2}>
            Venir en transport public{" "}
            <span role="img" aria-label="Emoji de train">
              🚆
            </span>
          </Text>
          <Text fontWeight="bold">TEOR T1, T2 ou T3</Text>
          <Text>Arrêt Mont-Riboudet/Kindarena</Text>
        </Box>

        <Box>
          <Text fontSize="1.4rem" mb={2}>
            Venir en voiture{" "}
            <span role="img" aria-label="Emoji de voiture">
              🚗
            </span>
          </Text>
          <Text fontWeight="bold">Parking du Mont Riboudet (payant)</Text>
          <Text mb="1">Rue Micheline Ostermeyer, 76000 Rouen</Text>

          <Text fontWeight="bold">Parking des Docks76 (gratuit 3h00) </Text>
          <Text mb="1">8-12 Rue Netien, 76000 Rouen</Text>

          <Text fontWeight="bold">Parking des quais de Seine </Text>
          <Text mb="1">Hangar 10, Quai Ferdinand de Lesseps, 76000 Rouen</Text>
        </Box>
      </Stack>
    </Layout>
  );
}
