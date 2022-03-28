import { credentialsApi, clearToken } from '../services';
import { home } from '../home';
import { register } from '../register';
import { login } from '../login';
import { article } from '../article';
import { settings } from '../settings';
import { profile } from '../profile';
import { router } from '../router';

export const loadInitial = () =>
  credentialsApi
    .getUser()
    .then((user) => ({ user }))
    .catch(() => {
      clearToken();
    });

export const app = {
  initial: {
    articles: [],
    login: {},
    register: {},
    settings: {},
    route: router.initialRoute
  },

  services: [
    home.service,
    register.service,
    login.service,
    article.service,
    settings.service,
    profile.service
  ]
};

export { App } from './view';
