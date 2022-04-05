import m from 'mithril';

import { dateTime } from '../dateTime';
import { temperature } from '../temperature';

export const app = {
  initial: {
    dateTime: dateTime.initial,
    temperature: temperature.initial,
    partOfDay: '',
    feelsLike: ''
  },
  services: [
    {
      onchange: (state) => state.dateTime.hour,
      run: (cell) => {
        if (cell.state.dateTime.hour.length > 0) {
          cell.update({
            partOfDay: cell.state.dateTime.hour < 12 ? 'Morning' : 'Afternoon / Evening'
          });
        } else {
          cell.update({ partOfDay: '' });
        }
      }
    },
    {
      onchange: (state) => state.temperature.value,
      run: (cell) => {
        if (
          (cell.state.temperature.units === 'C' && cell.state.temperature.value > 24) ||
          (cell.state.temperature.units === 'F' && cell.state.temperature.value > 75)
        ) {
          cell.update({ feelsLike: 'Warm/Hot' });
        } else {
          cell.update({ feelsLike: 'Cold/Cool' });
        }
      }
    }
  ],
  view: (cell) =>
    m(
      'div',
      dateTime.view(cell),
      m('div', cell.state.partOfDay, ' ', cell.state.feelsLike),
      temperature.view(cell)
    )
};
