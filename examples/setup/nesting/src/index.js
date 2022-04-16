import { render } from 'preact';
import flyd from 'flyd';

import { app } from './app';

const nestPatch = (patch, prop) => (state) =>
  Object.assign({}, state, { [prop]: patch(state[prop]) });

const nestUpdate = (parentUpdate, prop) => (patch) => parentUpdate(nestPatch(patch, prop));

const nestCell = (getState, parentUpdate) => (prop) => {
  const getNestedState = () => getState()[prop];
  const nestedUpdate = nestUpdate(parentUpdate, prop);

  const nested = {
    state: getNestedState(),
    update: nestedUpdate,
    nest: nestCell(getNestedState, nestedUpdate)
  };

  return nested;
};

const update = flyd.stream();
const states = flyd.scan((state, patch) => patch(state), app.initial, update);

const nest = nestCell(states, update);
const createCell = (state) => ({ state, update, nest });
const cells = states.map(createCell);

// vv Only for using Meiosis Tracer in development.
import meiosisTracer from 'meiosis-tracer';
meiosisTracer({ selector: '#tracer', rows: 25, streams: [states] });
// ^^ Only for using Meiosis Tracer in development.

const element = document.getElementById('app');
cells.map((cell) => render(app.view(cell), element));
