import { h } from 'preact';
import { actions } from './actions';

export const view = (cell) => (
  <div>
    <div style={{ marginTop: '0.8rem' }}>Temperature: {cell.state.value}&deg;C</div>
    <div>
      <button className="btn btn-primary me-1" onClick={() => actions.increment(cell, 1)}>
        Increment
      </button>
      <button className="btn btn-primary me-1" onClick={() => actions.increment(cell, -1)}>
        Decrement
      </button>
    </div>
  </div>
);
