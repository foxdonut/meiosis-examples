import { MeiosisCell, MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';
import { openModal } from '../common/modal';

const actions = {
  launchModalSm: (cell: MeiosisCell<State>) => openModal(cell, MyModal, 'modal-sm'),
  launchModalLg: (cell: MeiosisCell<State>) => openModal(cell, MyModal, 'modal-lg')
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

export const ModalButton: MeiosisView<State> = ({ cell }) => (
  <div>
    <button type="button" class="btn btn-primary" onClick={() => actions.launchModalSm(cell)}>
      Launch small modal
    </button>
    <button type="button" class="btn btn-primary ms-1" onClick={() => actions.launchModalLg(cell)}>
      Launch large modal
    </button>
  </div>
);
