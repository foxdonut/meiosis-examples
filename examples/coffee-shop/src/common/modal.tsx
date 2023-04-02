import { Modal } from 'bootstrap';
import { MeiosisCell, MeiosisView } from 'meiosis-setup/types';
import { getElementById } from '../util';

const modalId = 'appModal';
let modalParams: ModalParams<any>;

export type ModalSize = 'modal-sm' | 'modal-lg' | 'modal-xl' | null;

export type ModalParams<S> = {
  size: ModalSize;
  title: string;
  body: MeiosisView<S>;
  footer: MeiosisView<S>;
};

export type ModalOnClose<S> = (cell: MeiosisCell<S>) => any;

export type ModalCreator<S> = (onClose: ModalOnClose<S>) => ModalParams<S>;

export function ModalView<S>({ cell }: { cell: MeiosisCell<S> }): any {
  console.log('ModalView:', cell.state, modalParams);
  return modalParams ? (
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
