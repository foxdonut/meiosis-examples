import { meiosisSetup } from 'meiosis-setup';
import { createRender } from './util/view';
import { App, app, loadInitial } from './app';
import { router } from './router';

const cells = meiosisSetup({ app });
router.setup(cells);

// vv Only for using Meiosis Tracer in development.
import meiosisTracer from 'meiosis-tracer';
meiosisTracer({ streams: [{ stream: cells().states, label: 'state' }], rows: 50 });
// ^^ Only for using Meiosis Tracer in development.

const element = document.getElementById('app');
const render = createRender(element);

loadInitial().then(cells().update);
cells.map((cell) => render(App({ cell })));
