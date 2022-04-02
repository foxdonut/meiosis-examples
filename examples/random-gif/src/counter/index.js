// @ts-check
import m from 'mithril';

export const counter = {
  initial: {
    label: 'Counter:',
    value: 0
  },
  view: (cell) => m('div', cell.state.label + ' ' + cell.state.value)
};
