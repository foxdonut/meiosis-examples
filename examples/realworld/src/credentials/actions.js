import { credentialsApi, setToken } from '../services';
import { Route, routeTo } from '../router';
import { pick } from 'lodash';

export const actions = {
  updateCredForm: (cell, method, field, text) => cell.update({ [method]: { [field]: text } }),

  sendCredentials: (cell, method) => {
    const fields = ['email', 'password'].concat(method === 'register' ? ['username'] : []);
    credentialsApi[method]({ user: pick(cell.state[method], fields) })
      .then(({ user }) => {
        setToken(user.token);
        cell.update([routeTo(Route.Home), { user }]);
      })
      .catch((err) => cell.update({ [method]: err }));
  }
};
