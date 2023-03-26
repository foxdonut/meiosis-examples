import { Modal } from 'bootstrap';
import { MeiosisCell, MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';
import { getElementById } from '../util';

const modalId = 'appModal';
let modalParams: ModalParams;

export type ModalSize = 'modal-sm' | 'modal-lg' | 'modal-xl' | null;

export type ModalParams = {
  size: ModalSize;
  title: string;
  body: MeiosisView<State>;
  footer: MeiosisView<State>;
};

export const ModalView: MeiosisView<State> = ({ cell }) =>
  modalParams ? (
    <div class="modal fade" id={modalId} tabIndex={-1} aria-labelledby="modalLabel"
      aria-hidden="true">
      <div class={'modal-dialog ' + modalParams.size || ''}>
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="modalLabel">{modalParams.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {modalParams.body({ cell })}
          </div>
          <div class="modal-footer">
            {modalParams.footer({ cell })}
          </div>
        </div>
      </div>
    </div>
  ) : null;

export const openModal = (cell: MeiosisCell<State>, params: ModalParams): Modal => {
  modalParams = params;
  cell.update({});
  const element = getElementById(modalId);
  const modal = Modal.getOrCreateInstance(element);
  modal.show();
  return modal;
};
