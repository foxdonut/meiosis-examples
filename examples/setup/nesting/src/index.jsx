import { h, render } from 'preact';
import flyd from 'flyd';

import { app, App } from './app';

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
const cells = states.map((state) => ({ state, update, nest }));

// vv Only for using Meiosis Tracer in development.
import meiosisTracer from 'meiosis-tracer';
meiosisTracer({ selector: '#tracer', rows: 25, streams: [states] });
// ^^ Only for using Meiosis Tracer in development.

const element = document.getElementById('app');
cells.map((cell) => render(<App cell={cell} />, element));
