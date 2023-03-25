import { Modal } from 'bootstrap';
import { MeiosisCell, MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';
import { getElementById } from '../util';

const modalId = 'appModal';
let modalContent: MeiosisView<State>;

export const ModalView: MeiosisView<State> = ({ cell }) => (
  <div class="modal fade" id={modalId} tabIndex={-1} aria-labelledby="modalLabel"
    aria-hidden="true">
    <div class={'modal-dialog ' + cell.state.modal.size}>
      {modalContent && modalContent({ cell })}
    </div>
  </div>
);

export const openModal = (cell: MeiosisCell<State>, content: MeiosisView<State>, size?: string) => {
  modalContent = content;
  if (size) {
    cell.update({ modal: { size } });
  }
  const element = getElementById(modalId);
  const modal = Modal.getOrCreateInstance(element);
  modal.show();
};
