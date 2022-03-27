import m from 'mithril';
import merge from 'mergerino';
import stream from 'mithril/stream';

import { app, App } from './app';

const update = stream();
const states = stream.scan(merge, app.initial, update);
const cells = states.map(state => ({ state, update }));

// vv Only for using Meiosis Tracer in development.
// Only for using Meiosis Tracer in development.
import meiosisTracer from 'meiosis-tracer';
meiosisTracer({ selector: '#tracer', rows: 25, streams: [states] });
// ^^ Only for using Meiosis Tracer in development.

m.mount(document.getElementById('app'), {
  view: () => m(App, { cell: cells() })
});

states.map(() => m.redraw());
