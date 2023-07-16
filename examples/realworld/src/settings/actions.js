import { profileApi, clearToken } from '../services';
import { Route, routeTo } from '../router';
import { omit } from 'lodash';

export const actions = {
  updateSettingsForm: (cell, field, value) => cell.update({ settings: { [field]: value } }),

  updateSettings: (cell, settings) =>
    profileApi
      .update({ user: omit(settings, 'errors') })
      .then(() =>
        cell.update([routeTo(Route.Profile, { username: settings.username }), { user: settings }])
      )
      .catch((err) => cell.update({ settings: { errors: err.errors } })),

  logout: (cell) => {
    clearToken();
    cell.update([routeTo(Route.Home), { user: null, logout: true }]);
  }
};
