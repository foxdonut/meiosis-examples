import m from 'mithril';

import { actions } from './actions';

export const view = (cell) =>
  m(
    'div',
    m(
      'div.mt-1',
      m(
        'label',
        'Temperature: ',
        cell.state.temperature.value,
        m.trust('&deg;'),
        cell.state.temperature.units
      )
    ),
    m(
      'div.mt-1',
      m('button.btn.btn-primary.me-1', { onclick: () => actions.increment(cell, 1) }, 'Increment'),
      m('button.btn.btn-primary.me-1', { onclick: () => actions.increment(cell, -1) }, 'Decrement'),
      m('button.btn.btn-secondary', { onclick: () => actions.changeUnits(cell) }, 'Change Units')
    )
  );
