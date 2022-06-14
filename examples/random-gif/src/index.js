// @ts-check
import m from 'mithril';
import stream from 'mithril/stream';
import { setup } from 'meiosis-setup/mergerino';

import { app } from './app';

// vv Only for using Meiosis Tracer in development.
import meiosisTracer from 'meiosis-tracer';

const cells = setup({ stream, app });
const states = cells.map((cell) => cell.state);
meiosisTracer({ selector: '#tracer', streams: [{ label: 'states', stream: states }], rows: 35 });
// ^^ Only for using Meiosis Tracer in development.

m.mount(document.getElementById('app'), { view: () => app.view(cells()) });

cells.map(() => m.redraw());
