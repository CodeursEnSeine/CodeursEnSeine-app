export default {
  program: {
    title: "Programme",
    pathname: "/",
    isTopLevel: true
  },
  favorites: {
    title: "Favoris",
    pathname: "/favorites",
    isTopLevel: true
  },
  info: {
    title: "Informations",
    pathname: "/info",
    isTopLevel: true
  },
  talk: {
    title: "",
    pathname: "/talk/:id",
    isTopLevel: false
  },
  plan: {
    title: "Plan des salles",
    pathname: "/plan",
    isTopLevel: true
  },
  sponsors: {
    title: "Sponsors",
    pathname: "/sponsors",
    isTopLevel: true
  },
  sponsorsDetails: {
    title: "",
    pathname: "/sponsors/:name",
    itTopLevel: false
  },
  notFound: {
    title: "404 Not Found",
    pathname: "*",
    isTopLevel: true
  }
};
