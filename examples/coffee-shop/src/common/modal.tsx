import { Modal } from 'bootstrap';
import { MeiosisCell, MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';
import { getElementById } from '../util';

const modalId = 'appModal';

export const ModalView: MeiosisView<State> = ({ cell }) => (
  <div class="modal fade" id={modalId} tabIndex={-1} aria-labelledby="modalLabel"
    aria-hidden="true">
    <div class={'modal-dialog ' + cell.state.modal.size}>
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Modal Body goes here
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const openModal = (cell: MeiosisCell<State>, size?: string) => {
  if (size) {
    cell.update({ modal: { size } });
  }
  const element = getElementById(modalId);
  const modal = Modal.getInstance(element) || new Modal(element);
  modal?.show();
};
