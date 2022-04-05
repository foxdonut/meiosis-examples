import { h } from 'preact';
import { actions } from './actions';

export const Temperature = ({ cell }) => (
  <div>
    <div style={{ marginTop: '0.8rem' }}>
      Temperature: {cell.state.value}&deg; {cell.state.units}
    </div>
    <div>
      <button className="btn btn-primary me-1" onClick={() => actions.increment(cell, 1)}>
        Increment
      </button>
      <button className="btn btn-primary me-1" onClick={() => actions.increment(cell, -1)}>
        Decrement
      </button>
      <button className="btn btn-secondary mr-4" onClick={() => actions.changeUnits(cell)}>
        Change Units
      </button>
    </div>
  </div>
);
