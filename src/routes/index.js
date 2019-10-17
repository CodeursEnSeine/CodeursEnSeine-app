export default {
  program: {
    pathname: '/',
    withNavigation: true,
  },
  favorites: {
    pathname: '/favorites',
    withNavigation: true,
  },
  info: {
    pathname: '/info',
    withNavigation: true,
  },
  talk: {
    pathname: '/talk/:id',
    withNavigation: false,
  },
};
