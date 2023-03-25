import { meiosisSetup } from 'meiosis-setup';
import { MeiosisCell, MeiosisView, MeiosisViewComponent } from 'meiosis-setup/types';
import { render } from 'preact';
import { State } from './types';
import { getElementById } from './util';
import { App } from './app';
import { openModal } from './common/modal';

const actions = {
  increment: (cell: MeiosisCell<State>, amount: number) =>
    cell.update({ value: (x) => x + amount })
};

const MyModal: MeiosisView<State> = ({ cell }) => (
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="modalLabel">Modal title</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>
    <div class="modal-body">
      Modal content: {cell.state.value}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">
        Save changes
      </button>
    </div>
  </div>
);

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
          onClick={() => openModal(cell, MyModal, 'modal-lg')}>
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
