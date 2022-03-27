import m from 'mithril';
import b from 'bss';
import { Checkbox, RadioGroup } from 'polythene-mithril';

import { actions } from './actions';

export const Conditions = {
  view: ({ attrs: { cell } }) =>
    m(
      'div' + b.mt(8),
      m(
        'div',
        m(Checkbox, {
          label: 'Precipitations',
          checked: cell.state.conditions.precipitations,
          onChange: ({ checked }) => actions.togglePrecipitations(cell, checked)
        })
      ),
      m(
        'div' + b.mt(4),
        m(RadioGroup, {
          name: 'conditions',
          checkedValue: cell.state.conditions.sky,
          onChange: ({ value }) => actions.changeSky(cell, value),
          buttons: [
            { value: 'SUNNY', label: 'Sunny' },
            { value: 'CLOUDY', label: 'Cloudy' },
            { value: 'MIX', label: 'Mix of sun and clouds' }
          ]
        })
      )
    )
};
