import _ from 'lodash/fp';

export const actions = {
  togglePrecipitations: (cell, value) => cell.update(_.set('precipitations', value)),

  changeSky: (cell, value) => cell.update(_.set('sky', value))
};
