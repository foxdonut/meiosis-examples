import { actions } from './actions';

export const loginService = {
  onchange: (state) => state.page,
  run: (cell) => {
    if (cell.state.page === 'Login') {
      cell.update({
        login: { username: '', password: '' }
      });
    } else {
      cell.update({ login: undefined });
    }
  }
};

export const dataService = {
  onchange: (state) => state.page,
  run: (cell) => {
    if (cell.state.page === 'Data') {
      cell.update({ data: 'loading' });
      actions.loadData(cell);
    } else {
      cell.update({ data: undefined });
    }
  }
};
