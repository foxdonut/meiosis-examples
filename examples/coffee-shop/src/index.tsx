import { meiosisSetup } from 'meiosis-setup';
import { MeiosisCell, MeiosisViewComponent } from 'meiosis-setup/types';
import { render } from 'preact';
import { State } from './types';
import { getElementById } from './util';
import { App } from './app';
import { openModal } from './common/modal';

const actions = {
  increment: (cell: MeiosisCell<State>, amount: number) =>
    cell.update({ value: (x) => x + amount })
};

const app: MeiosisViewComponent<State> = {
  initial: {
    value: 22,
    modal: {
      size: ''
    }
  },
  view: (cell) =>
    <div>
      <App cell={cell}></App>
      <div>Temperature: {cell.state.value}&deg;C</div>
      <div>
        <button
          class="btn btn-primary btn-sm"
          onClick={() => actions.increment(cell, 1)}>
          Increment
        </button>
        <button
          class="btn btn-primary btn-sm ms-1"
          onClick={() => actions.increment(cell, -1)}>
          Decrement
        </button>
      </div>

      <div class="mt-2">
        <button type="button" class="btn btn-primary"
          onClick={() => openModal(cell, 'modal-lg')}>
          Launch demo modal
        </button>
      </div>
    </div>
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
