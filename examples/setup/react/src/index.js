import { render } from 'react-dom';
import flyd from 'flyd';

import { app } from './app';

const update = flyd.stream();
const states = flyd.scan((state, patch) => patch(state), app.initial, update);
const createCell = (state) => ({ state, update });
const cells = states.map(createCell);

// vv Only for using Meiosis Tracer in development.
import meiosisTracer from 'meiosis-tracer';
meiosisTracer({ selector: '#tracer', rows: 25, streams: [states] });
// ^^ Only for using Meiosis Tracer in development.

const element = document.getElementById('app');
cells.map((cell) => render(app.view(cell), element));
