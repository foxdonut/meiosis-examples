import { Route } from '../router';

export const service = {
  onchange: (state) => state.route.value,
  run: (cell) => {
    if (cell.state.route.value === Route.Login) {
      cell.update({ login: () => ({}) });
    }
  }
};
