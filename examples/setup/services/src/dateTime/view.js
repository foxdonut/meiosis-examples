import m from 'mithril';

import { actions } from './actions';

export const view = (cell) => {
  const state = cell.state;

  return m(
    'div',
    m(
      'div',
      { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 150px)', gridGap: '10px' } },
      m('input', {
        type: 'date',
        value: state.date,
        oninput: (evt) => actions.editDate(cell, evt.target.value)
      }),
      m('input', {
        type: 'text',
        placeholder: 'Hour:',
        value: state.hour,
        oninput: (evt) => actions.editHour(cell, evt.target.value)
      }),
      m('input', {
        type: 'text',
        placeholder: 'Minute:',
        value: state.minute,
        oninput: (evt) => actions.editMinute(cell, evt.target.value)
      })
    )
  );
};
