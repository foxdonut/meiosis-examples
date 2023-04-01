import { MeiosisCell, MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';
import { ModalExampleType, createMyModal } from '../modal-example';
import { openModal } from '../common/modal';

const actions = {
  openModal: (cell: MeiosisCell<State>) => {
    openModal(cell.nest('modalExample'), createMyModal(actions.onSave));
  },
  onSave: (cell: MeiosisCell<ModalExampleType>) => {
    console.log('save:', cell.state);
  }
};

export const ModalUsage: MeiosisView<State> = ({ cell }) => (
  <div>
    <button type="button" class="btn btn-primary" onClick={() => actions.openModal(cell)}>
      Launch example modal
    </button>
  </div>
);
