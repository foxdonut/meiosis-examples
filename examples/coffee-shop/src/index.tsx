import { meiosisSetup } from 'meiosis-setup';
import { MeiosisViewComponent } from 'meiosis-setup/types';
import { render } from 'preact';
import { State } from './types';
import { getElementById } from './util';
import { App } from './app';

const app: MeiosisViewComponent<State> = {
  initial: {
    value: 42,
    modalExample: {
      title: '',
      value: 0
    }
  },
  view: (cell) => (
    <App cell={cell}></App>
  )
};

const cells = meiosisSetup<State>({ app });

// vv Only for using Meiosis Tracer in development.
import meiosisTracer from 'meiosis-tracer';

const states = cells().states;
meiosisTracer({ streams: [{ label: 'states', stream: states }], rows: 35 });
// ^^ Only for using Meiosis Tracer in development.

const element = getElementById('app');
cells.map((cell) => {
  render(app.view(cell), element);
});
