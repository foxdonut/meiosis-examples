import { h } from 'preact';

import { actions } from './actions';

const get = (object, path) =>
  path.reduce((obj, key) => (obj == undefined ? undefined : obj[key]), object);

export const DateTime = ({ cell, validate, errors, message }) => (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 150px)', gridGap: '10px' }}>
      <input
        type="date"
        value={cell.state.date}
        required
        onInput={evt => actions.editDate(cell, evt.target.value)}
      />
      <input
        type="text"
        placeholder="Hour:"
        value={cell.state.hour}
        required
        onInput={evt => actions.editHour(cell, evt.target.value)}
      />
      <input
        type="text"
        placeholder="Minute:"
        value={cell.state.minute}
        required
        onInput={evt => actions.editMinute(cell, evt.target.value)}
      />
      <span className="text-danger">{get(errors, ['dateTime', 'date'])}</span>
      <span className="text-danger">{get(errors, ['dateTime', 'hour'])}</span>
      <span className="text-danger">{get(errors, ['dateTime', 'minute'])}</span>
    </div>
    <div style={{ marginTop: '5px' }}>
      <button className="btn btn-primary" onClick={validate}>
        Validate
      </button>
      <span style={{ marginLeft: '0.4rem' }}>{message}</span>
    </div>
  </div>
);
