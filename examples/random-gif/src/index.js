import m from 'mithril';
import stream from 'mithril/stream';
import { meiosisSetup } from 'meiosis-setup';

import { app } from './app';

const cells = meiosisSetup({ stream, app });

// vv Only for using Meiosis Tracer in development.
import meiosisTracer from 'meiosis-tracer';

const states = cells.map((cell) => cell.state);
meiosisTracer({ selector: '#tracer', streams: [{ label: 'states', stream: states }], rows: 35 });
// ^^ Only for using Meiosis Tracer in development.

const element = document.getElementById('app');
if (element) {
  m.mount(element, { view: () => app.view(cells()) });
  cells.map(() => m.redraw());
}
