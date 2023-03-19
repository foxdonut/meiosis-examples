import { meiosisSetup } from 'meiosis-setup';
import { compose } from './util/fp';
import { createRender } from './util/view';
import { App, app, loadInitial } from './app';
import { router } from './router';

const cells = meiosisSetup({ app });

router.start(compose(cells().update, (route) => ({ route: () => route })));
cells.map(compose(router.syncLocationBar, (cell) => cell.state.route));

// vv Only for using Meiosis Tracer in development.
import meiosisTracer from 'meiosis-tracer';
const states = cells().states;
meiosisTracer({ streams: [{ stream: states, label: 'state' }], rows: 50 });
// ^^ Only for using Meiosis Tracer in development.

const element = document.getElementById('app');
const render = createRender(element);

cells.map((cell) => {
  render(App({ cell }));
});

loadInitial().then(cells().update);
