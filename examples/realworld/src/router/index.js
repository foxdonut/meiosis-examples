import { createRouter } from 'meiosis-router';

export const Route = {
  Home: 'Home',
  Login: 'Login',
  Register: 'Register',
  ArticleDetail: 'ArticleDetail',
  ArticleCreate: 'ArticleCreate',
  ArticleEdit: 'ArticleEdit',
  Settings: 'Settings',
  Profile: 'Profile',
  ProfileFavorites: 'ProfileFavorites'
};

const routeConfig = {
  '/': Route.Home,
  '/login': Route.Login,
  '/register': Route.Register,
  '/article/:slug': Route.ArticleDetail,
  '/editor': Route.ArticleCreate,
  '/editor/:slug': Route.ArticleEdit,
  '/settings': Route.Settings,
  '/profile/:username': Route.Profile,
  '/profile/:username/favorites': Route.ProfileFavorites
};

export const router = createRouter({ routeConfig });

export const toRoutePatch = (route) => ({ route: () => route });
export const routeTo = (page, params) => toRoutePatch(router.toRoute(page, params));
