import _ from 'lodash/fp';

export const actions = {
  increment: (cell, amount) => cell.update(_.update('value', (x) => x + amount))
};
