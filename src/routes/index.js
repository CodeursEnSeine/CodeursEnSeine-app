export default {
  program: {
    title: 'Programme',
    pathname: '/',
    isTopLevel: true,
  },
  favorites: {
    title: 'Favoris',
    pathname: '/favorites',
    isTopLevel: true,
  },
  info: {
    title: 'Informations',
    pathname: '/info',
    isTopLevel: true,
  },
  talk: {
    title: '',
    pathname: '/talk/:id',
    isTopLevel: false,
  },
};
