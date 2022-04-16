import { loginService, dataService } from './services';
import { view } from './view';

export const app = {
  initial: {
    page: 'Home'
  },

  services: [loginService, dataService],

  view
};
