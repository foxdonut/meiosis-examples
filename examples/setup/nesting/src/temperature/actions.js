import _ from 'lodash/fp';

export const actions = {
  increment: (cell, amount) => cell.update(state => _.update('value', x => x + amount, state)),

  changeUnits: cell =>
    cell.update(state =>
      state.units === 'C'
        ? _.set(
            'units',
            'F',
            _.update('value', value => Math.round((value * 9) / 5 + 32), state)
          )
        : _.set(
            'units',
            'C',
            _.update('value', value => Math.round(((value - 32) / 9) * 5), state)
          )
    )
};
