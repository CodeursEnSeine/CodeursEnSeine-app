import React from "react";
import Layout from "../components/templates/Layout";
import { Heading, Box, Text } from "@chakra-ui/core";

export function Informations() {
  return (
    <Layout>
      <Heading as="h4" size="sm" mb="4">
        Comment venir ?
      </Heading>

      <Box mb="4">
        <Text fontSize="1.4rem" mb="1">
          Lieu de l'événement
        </Text>
        <Text>
          Kindarena - Palais des sports de Rouen
          <br />
          40 rue de Lillebonne
          <br />
          76000 ROUEN, FRANCE
        </Text>
      </Box>

      <Box mb="4" textAlign="right">
        <iframe
          title="Carte montrant l'emplacement du Kindarena, le palais des sports de Rouen"
          width="100%"
          height="350"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=1.0586571693420412%2C49.44463553274022%2C1.067626476287842%2C49.45076679110293&amp;layer=mapnik&amp;marker=49.44769777013715%2C1.0631418228149414"
          style={{ border: "1px solid black" }}
        />

        <small>
          <a
            href="https://www.openstreetmap.org/?mlat=49.44770&amp;mlon=1.06314#map=17/49.44770/1.06314"
            title="Lien vers le site d'OpenStreetMap pour afficher la carte en plus grande"
          >
            Afficher une carte plus grande
          </a>
        </small>
      </Box>

      <Box mb="4">
        <Text fontSize="1.4rem" mb="2">
          Venir en transport public{" "}
          <span role="img" aria-label="Emoji de train">
            🚆
          </span>
        </Text>
        <Text fontWeight="bold">TEOR T1, T2 ou T3</Text>
        <Text>Arrêt Mont-Riboudet/Kindarena</Text>
      </Box>

      <Box mb="4">
        <Text fontSize="1.4rem" mb="2">
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
    </Layout>
  );
}
