import { assoc, defaultTo } from '../util/fp';
import { Route, routeTo } from '../router';

const fields = ['email', 'username', 'image', 'bio'];

export const service = {
  onchange: (state) => state.route.value,
  run: (cell) => {
    if (cell.state.route.value === Route.Settings) {
      if (!cell.state.user) {
        cell.update(routeTo(Route.Home));
      } else {
        const settings = fields.reduce(
          (result, field) => assoc(field, defaultTo('', cell.state.user[field]), result),
          {}
        );
        cell.update({ settings });
      }
    }
  }
};
