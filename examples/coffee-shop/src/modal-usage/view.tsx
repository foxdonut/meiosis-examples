import { MeiosisCell, MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';
import { ModalExampleType, modalExample } from '../modal-example';
import { openModal } from '../common/modal';

const actions = {
  onSave: (cell: MeiosisCell<ModalExampleType>) => {
    console.log('save:', cell.state);
  },
  onCancel: (cell: MeiosisCell<ModalExampleType>) => {
    console.log('cancelled:', cell.state);
  }
};

export const ModalUsage: MeiosisView<State> = ({ cell }) => (
  <div>
    <button type="button" class="btn btn-primary" onClick={openModal}>
      Open modal
    </button>
    {modalExample({
      cell: cell.nest('modalExample'),
      onSave: actions.onSave,
      onCancel: actions.onCancel
    })}
  </div>
);
