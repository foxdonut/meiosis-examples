import { h } from 'preact';

import { actions } from './actions';

const conditionsOption = ({ cell, value, label }) => (
  <label>
    <input
      type="radio"
      id={value}
      name="conditions"
      value={value}
      checked={cell.state.sky === value}
      onChange={(evt) => actions.changeSky(cell, evt.target.value)}
    />
    <span style={{ marginLeft: '5px', marginRight: '10px' }}>{label}</span>
  </label>
);

export const view = (cell) => (
  <div style={{ marginTop: '10px' }}>
    <label>
      <input
        type="checkbox"
        checked={cell.state.precipitations}
        onChange={(evt) => actions.togglePrecipitations(cell, evt.target.checked)}
      />
      <span style={{ marginLeft: '5px' }}>Precipitations</span>
    </label>
    <div>
      {conditionsOption({ cell, value: 'SUNNY', label: 'Sunny' })}
      {conditionsOption({ cell, value: 'CLOUDY', label: 'Cloudy' })}
      {conditionsOption({ cell, value: 'MIX', label: 'Mix of sun and clouds' })}
    </div>
  </div>
);
