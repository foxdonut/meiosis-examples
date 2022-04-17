import m from 'mithril';
import merge from 'mergerino';
import stream from 'mithril/stream';

import { app } from './app';

const dropRepeats = (states, onchange = (state) => state) => {
  let prev = undefined;
  const result = stream();

  states.map((state) => {
    const next = onchange(state);
    if (next !== prev) {
      prev = next;
      result(state);
    }
  });
  return result;
};

const update = stream();
const states = stream.scan(merge, app.initial, update);
const createCell = (state) => ({ state, update });

app.services.forEach((service) => {
  dropRepeats(states, service.onchange).map((state) => service.run(createCell(state)));
});

const cells = dropRepeats(states).map(createCell);

// vv Only for using Meiosis Tracer in development.
// Only for using Meiosis Tracer in development.
import meiosisTracer from 'meiosis-tracer';
meiosisTracer({ selector: '#tracer', rows: 25, streams: [states] });
// ^^ Only for using Meiosis Tracer in development.

m.mount(document.getElementById('app'), {
  view: () => app.view(cells())
});

cells.map(() => m.redraw());
