import m from 'mithril';
import b from 'bss';

import { conditions, Conditions } from '../conditions';
import { dateTime, DateTime } from '../dateTime';
import { temperature, Temperature } from '../temperature';

import 'polythene-css/dist/polythene.css';
import 'polythene-css/dist/polythene-typography.css';

export const app = {
  initial: {
    dateTime: dateTime.initial,
    conditions: conditions.initial,
    temperature: temperature.initial,
    partOfDay: '',
    feelsLike: ''
  },
  services: [
    {
      onchange: state => state.dateTime.hour,
      run: cell => {
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
      onchange: state => state.temperature.value,
      run: cell => {
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
  ]
};

export const App = {
  view: ({ attrs: { cell } }) =>
    m(
      'div',
      m(
        'div' + b.f('left').w('25%').pr(40),
        m(DateTime, { cell }),
        m('div', cell.state.partOfDay, ' ', cell.state.feelsLike)
      ),
      m('div' + b.f('left'), m(Conditions, { cell }), m(Temperature, { cell }))
    )
};
