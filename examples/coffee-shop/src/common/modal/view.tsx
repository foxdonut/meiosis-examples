import { MeiosisCell } from 'meiosis-setup/types';
import { ModalParams } from './types';

export const modalId = 'appModal';

export function modalView<S>({ cell, params }:
  { cell: MeiosisCell<S>, params: ModalParams<S> }): any {

  return (
    <div class="modal fade" id={modalId} tabIndex={-1}>
      <div class={'modal-dialog ' + params.size || ''}>
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="modalLabel">{params.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            {params.body({ cell })}
          </div>
          <div class="modal-footer">
            {params.footer({ cell })}
          </div>
        </div>
      </div>
    </div>
  );
}
