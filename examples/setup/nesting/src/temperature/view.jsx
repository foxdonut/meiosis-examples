import { actions } from './actions';

export const view = (cell) => (
  <div className="mt-2">
    <div>
      <label>Temperature: {cell.state.value}&deg;C</label>
    </div>
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
