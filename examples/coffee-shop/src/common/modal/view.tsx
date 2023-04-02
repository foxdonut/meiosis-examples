import { Modal } from 'bootstrap';
import { MeiosisCell } from 'meiosis-setup/types';
import { getElementById } from '../../util';
import { ModalParams } from './types';

const modalId = 'appModal';
let modalParams: ModalParams<any>;

export function ModalView<S>({ cell }: { cell: MeiosisCell<S> }): any {
  console.log('ModalView:', cell.state, modalParams);
  return modalParams ? (
    <div class="modal fade" id={modalId} tabIndex={-1}>
      <div class={'modal-dialog ' + modalParams.size || ''}>
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="modalLabel">{modalParams.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
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
}

export function openModal<S>(cell: MeiosisCell<S>, params: ModalParams<S>): Modal {
  console.log('openModal:', cell.state);
  modalParams = params;
  cell.update({} as S);
  const element = getElementById(modalId);
  const modal = Modal.getOrCreateInstance(element);
  modal.show();
  return modal;
}
