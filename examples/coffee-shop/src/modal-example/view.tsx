import { MeiosisCell, MeiosisView } from 'meiosis-setup/types';
import { ModalExampleType } from './types';
import { ModalParams, ModalSize, openModal } from '../common/modal';

const actions = {
  launchModalSm: (cell: MeiosisCell<ModalExampleType>) => openModal(cell, MyModal('modal-sm')),
  launchModalLg: (cell: MeiosisCell<ModalExampleType>) => openModal(cell, MyModal('modal-lg'))
};

const MyModal = (size: ModalSize): ModalParams<ModalExampleType> => ({
  size,
  title: 'My Modal Title',
  body: ({ cell }) => (
    <div>
      Modal content: {cell.state.value}
    </div>
  ),
  footer: () => (
    <div>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary ms-2">
        Save changes
      </button>
    </div>
  )
});

export const ModalButton: MeiosisView<ModalExampleType> = ({ cell }) => (
  <div>
    <button type="button" class="btn btn-primary" onClick={() => actions.launchModalSm(cell)}>
      Launch small modal
    </button>
    <button type="button" class="btn btn-primary ms-1" onClick={() => actions.launchModalLg(cell)}>
      Launch large modal
    </button>
  </div>
);
