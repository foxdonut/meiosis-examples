import m from 'mithril';

import { actions } from './actions';

export const view = (cell) =>
  m(
    'div',
    m('div', m('label', 'Temperature: ', cell.state.value, m.trust('&deg;'), cell.state.units)),
    m(
      'div',
      m('button.btn.btn-primary.me-1', { onclick: () => actions.increment(cell, 1) }, 'Increment'),
      m('button.btn.btn-primary.me-1', { onclick: () => actions.increment(cell, -1) }, 'Decrement'),
      m('button.btn.btn-secondary', { onclick: () => actions.changeUnits(cell) }, 'Change Units')
    )
  );
