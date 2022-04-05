import { h } from 'preact';

import { actions } from './actions';

export const Temperature = ({ cell }) => (
  <div className="mt-2">
    <div>
      <label>
        Temperature: {cell.state.value}&deg; {cell.state.units}
      </label>
    </div>
    <div>
      <button className="btn btn-primary me-1" onClick={() => actions.increment(cell, 1)}>
        Increment
      </button>
      <button className="btn btn-primary me-1" onClick={() => actions.increment(cell, -1)}>
        Decrement
      </button>
      <button className="btn btn-secondary" onClick={() => actions.changeUnits(cell)}>
        Change Units
      </button>
    </div>
  </div>
);
