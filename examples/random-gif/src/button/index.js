// @ts-check
import m from 'mithril';

const actions = {
  buttonToggle: (cell) => cell.update({ active: (x) => !x })
};

export const button = {
  initial: {
    active: false
  },
  view: (cell) => {
    const buttonState = cell.state.active ? 'btn-primary' : 'btn-secondary';
    const label = cell.state.active ? 'Active' : 'Inactive';
    return m(`button.btn.${buttonState}.mt-1`,
      { style: { width: '100px' }, onclick: () => actions.buttonToggle(cell) },
      label
    );
  }
};
