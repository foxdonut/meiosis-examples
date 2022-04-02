// @ts-check
import m from 'mithril';
import { buttonStyle } from '../util/ui';

const actions = {
  buttonToggle: (cell) => cell.update({ active: (x) => !x })
};

export const button = {
  initial: {
    active: false
  },
  view: (cell) => {
    const bc = cell.state.active ? 'green' : 'red';
    const label = cell.state.active ? 'Active' : 'Inactive';
    return m('button.bg-' + bc + buttonStyle, { onclick: () => actions.buttonToggle(cell) }, label);
  }
};
