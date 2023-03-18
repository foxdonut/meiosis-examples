import { meiosisSetup } from 'meiosis-setup';
import { MeiosisCell, MeiosisViewComponent } from 'meiosis-setup/types';
import { render } from 'preact';
import { Modal } from 'bootstrap';
import { State } from './types';
import { getElementById } from './util';
import { App } from './app';

const actions = {
  increment: (cell: MeiosisCell<State>, amount: number) =>
    cell.update({ value: (x) => x + amount }),

  saveChanges: () => {
    console.log('save changes');
    const modal = Modal.getInstance(getElementById('exampleModal'));
    modal?.hide();
  }
};

const app: MeiosisViewComponent<State> = {
  initial: {
    value: 22
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

      <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div class="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Modal Body goes here
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={() => actions.saveChanges()}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
};

const cells = meiosisSetup<State>({ app });

const element = getElementById('app');
cells.map((cell) => {
  render(app.view(cell), element);
});
